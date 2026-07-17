/* eslint-disable react/no-unknown-property */
'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, useTexture, Environment, Lightformer } from '@react-three/drei';
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
} from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';

import cardGLB from '../../assets/lanyard/card.glb';
import lanyardPNG from '../../assets/lanyard/lanyard.png';

import * as THREE from 'three';
import './Lanyard.css';

extend({ MeshLineGeometry, MeshLineMaterial });

// ── UV regions on the GLB atlas ──────────────────────────────────────────────
// Front face occupies the left half, back the right half
const FRONT_UV_RECT = { x: 0,   y: 0, w: 0.5,  h: 0.755 };
const BACK_UV_RECT  = { x: 0.5, y: 0, w: 0.5,  h: 0.757 };

// ── Keeps Three.js rendering even when nothing moves ────────────────────────
function KeepAlive() {
  const { invalidate } = useThree();
  useEffect(() => {
    const id = setInterval(() => invalidate(), 1000 / 30);
    return () => clearInterval(id);
  }, [invalidate]);
  return null;
}

// ── Public component ─────────────────────────────────────────────────────────
export default function Lanyard({
  position     = [0, 0, 30],
  gravity      = [0, -40, 0],
  fov          = 20,
  transparent  = true,
  /** Pre-rendered data-URL for the front face (use useIdCardTexture hook) */
  frontImage   = null,
  /** Pre-rendered data-URL for the back face */
  backImage    = null,
  /** 'cover' | 'contain' — how the image fills the UV rect */
  imageFit     = 'contain',
  lanyardImage = null,
  lanyardWidth = 1,
}) {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.innerWidth < 768
  );
  const wrapperRef = useRef(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Unmount the canvas when hero scrolls fully off-screen → remount on return
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const topY = useMemo(() => {
    const z = position[2] ?? 30;
    const f = fov ?? 20;
    return z * Math.tan((f * Math.PI) / 360) + 1.0;
  }, [position, fov]);

  return (
    <div ref={wrapperRef} className="lanyard-wrapper">
      {visible && (
        <Canvas
          camera={{ position, fov }}
          dpr={[1, isMobile ? 1.5 : 2]}
          gl={{
            alpha: transparent,
            antialias: true,
            powerPreference: 'high-performance',
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 1,
          }}
          frameloop="always"
          onCreated={({ gl }) =>
            gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)
          }
          style={{ width: '100%', height: '100%', display: 'block' }}
        >
          <KeepAlive />
          <ambientLight intensity={1.5} />
          <directionalLight intensity={1.5} position={[6, 12, 10]} />
          <Physics gravity={gravity} timeStep={isMobile ? 1 / 30 : 1 / 60}>
            <Band
              isMobile={isMobile}
              frontImage={frontImage}
              backImage={backImage}
              imageFit={imageFit}
              lanyardImage={lanyardImage}
              lanyardWidth={lanyardWidth}
              topY={topY}
            />
          </Physics>
          <Environment blur={0.75}>
            <Lightformer intensity={2}  color="white" position={[0, -1, 5]}   rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
            <Lightformer intensity={3}  color="white" position={[-1, -1, 1]}  rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
            <Lightformer intensity={3}  color="white" position={[1, 1, 1]}    rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
            <Lightformer intensity={4} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
          </Environment>
        </Canvas>
      )}
    </div>
  );
}

// ── Internal physics band + card ─────────────────────────────────────────────
function Band({
  maxSpeed     = 50,
  minSpeed     = 0,
  isMobile     = false,
  frontImage   = null,
  backImage    = null,
  imageFit     = 'cover',
  lanyardImage = null,
  lanyardWidth = 1,
  topY         = 4,
}) {
  const band  = useRef(), fixed = useRef(),
        j1    = useRef(), j2    = useRef(),
        j3    = useRef(), card  = useRef();

  const vec = new THREE.Vector3(), ang = new THREE.Vector3(),
        rot = new THREE.Vector3(), dir = new THREE.Vector3();

  const segmentProps = {
    type: 'dynamic', canSleep: true, colliders: false,
    angularDamping: 4, linearDamping: 4,
  };

  const { nodes, materials } = useGLTF(cardGLB);
  const texture = useTexture(lanyardImage || lanyardPNG);

  const [frontLoaded, setFrontLoaded] = useState(null);
  const [backLoaded, setBackLoaded] = useState(null);

  useEffect(() => {
    if (!frontImage) { setFrontLoaded(null); return; }
    let cancelled = false;
    const img = new Image();
    img.onload  = () => { if (!cancelled) setFrontLoaded(img); };
    img.onerror = () => { if (!cancelled) setFrontLoaded(null); };
    img.src = frontImage;
    return () => { cancelled = true; };
  }, [frontImage]);

  useEffect(() => {
    if (!backImage) { setBackLoaded(null); return; }
    let cancelled = false;
    const img = new Image();
    img.onload  = () => { if (!cancelled) setBackLoaded(img); };
    img.onerror = () => { if (!cancelled) setBackLoaded(null); };
    img.src = backImage;
    return () => { cancelled = true; };
  }, [backImage]);

  const cardMap = useMemo(() => {
    const baseMap = materials.base.map;
    if (!frontLoaded && !backLoaded) return baseMap;

    const baseImg = baseMap.image;
    const W = baseImg.width, H = baseImg.height;
    const canvas = document.createElement('canvas');
    canvas.width = W; canvas.height = H;
    const ctx = canvas.getContext('2d');
    if (!ctx) return baseMap;

    ctx.drawImage(baseImg, 0, 0, W, H);

    const drawFitted = (img, rect) => {
      const rx = rect.x * W, ry = rect.y * H;
      const rw = rect.w * W, rh = rect.h * H;
      const pick  = imageFit === 'contain' ? Math.min : Math.max;
      const scale = pick(rw / img.width, rh / img.height);
      const dw = img.width * scale, dh = img.height * scale;
      const dx = rx + (rw - dw) / 2, dy = ry + (rh - dh) / 2;
      ctx.save();
      ctx.beginPath(); ctx.rect(rx, ry, rw, rh); ctx.clip();
      ctx.drawImage(img, dx, dy, dw, dh);
      ctx.restore();
    };

    if (frontLoaded) drawFitted(frontLoaded, FRONT_UV_RECT);
    if (backLoaded)  drawFitted(backLoaded,  BACK_UV_RECT);

    const composite = new THREE.CanvasTexture(canvas);
    composite.colorSpace  = THREE.SRGBColorSpace;
    composite.flipY       = baseMap.flipY;
    composite.anisotropy  = 16;
    composite.needsUpdate = true;
    return composite;
  }, [frontLoaded, backLoaded, imageFit, materials.base.map]);

  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(), new THREE.Vector3(),
        new THREE.Vector3(), new THREE.Vector3(),
      ])
  );

  const [dragged, drag]   = useState(false);
  const [hovered, hover]  = useState(false);

  const segmentLength = useMemo(() => {
    return Math.max(0.5, (topY - 1.8) / 3);
  }, [topY]);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], segmentLength]);
  useRopeJoint(j1,    j2, [[0, 0, 0], [0, 0, 0], segmentLength]);
  useRopeJoint(j2,    j3, [[0, 0, 0], [0, 0, 0], segmentLength]);
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.45, 0]]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab';
      return () => void (document.body.style.cursor = 'auto');
    }
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach(ref => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      });
    }
    if (fixed.current) {
      [j1, j2].forEach(ref => {
        if (!ref.current.lerped)
          ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
        const clampedDistance = Math.max(
          0.1,
          Math.min(1, ref.current.lerped.distanceTo(ref.current.translation()))
        );
        ref.current.lerped.lerp(
          ref.current.translation(),
          delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
        );
      });
      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.lerped);
      curve.points[2].copy(j1.current.lerped);
      curve.points[3].copy(fixed.current.translation());
      band.current.geometry.setPoints(curve.getPoints(isMobile ? 16 : 32));
      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
    }
  });

  curve.curveType  = 'chordal';
  texture.wrapS    = texture.wrapT = THREE.RepeatWrapping;

  return (
    <>
      <group position={[0, topY, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[segmentLength, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[2 * segmentLength, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[3 * segmentLength, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[3 * segmentLength, -1.45, 0]}
          ref={card}
          {...segmentProps}
          type={dragged ? 'kinematicPosition' : 'dynamic'}
        >
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={2.25}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={e => (
              e.target.releasePointerCapture(e.pointerId), drag(false)
            )}
            onPointerDown={e => (
              e.target.setPointerCapture(e.pointerId),
              drag(
                new THREE.Vector3()
                  .copy(e.point)
                  .sub(vec.copy(card.current.translation()))
              )
            )}
          >
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial
                map={cardMap}
                map-anisotropy={16}
                clearcoat={0}
                clearcoatRoughness={1.0}
                roughness={0.55}
                metalness={0.0}
                envMapIntensity={0.0}
              />
            </mesh>
            <mesh
              geometry={nodes.clip.geometry}
              material={materials.metal}
              material-roughness={0.3}
            />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>

      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="white"
          depthTest={false}
          resolution={isMobile ? [1000, 2000] : [1000, 1000]}
          useMap
          map={texture}
          repeat={[-4, 1]}
          lineWidth={lanyardWidth}
        />
      </mesh>
    </>
  );
}
