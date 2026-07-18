import { lazy, Suspense, Component, type ReactNode } from 'react';
import { useIdCardTexture } from '@/components/ui/useIdCardTexture';
import { TextType } from './TextType';

const Lanyard = lazy(() => import('@/components/ui/Lanyard'));

// Error boundary — if WebGL fails, page keeps working
class CanvasErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error: Error) { return { error }; }
  render() {
    if (this.state.error) return null;
    return this.props.children;
  }
}

// ── Glassmorphic status pill ─────────────────────────────────────────────────
const AvailabilityPill = () => (
  <div
    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full pointer-events-auto"
    style={{
      background:          'rgba(255,255,255,0.10)',
      backdropFilter:      'blur(12px)',
      WebkitBackdropFilter:'blur(12px)',
      border:    '1px solid rgba(255,255,255,0.18)',
      boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
    }}
  >
    <span className="text-white/80 text-xs font-bold uppercase tracking-widest whitespace-nowrap">
      Learning
    </span>
    <span className="text-white/30 text-xs font-bold">•</span>
    <span className="text-white/80 text-xs font-bold uppercase tracking-widest whitespace-nowrap">
      Building
    </span>
    <span className="text-white/30 text-xs font-bold">•</span>
    <span className="text-[#CCFF00] text-xs font-bold uppercase tracking-widest whitespace-nowrap">
      Iterating
    </span>
  </div>
);

// ── Circular spinning badge ──────────────────────────────────────────────────
const CircularBadge = () => (
  <div className="relative w-28 h-28 md:w-32 md:h-32 bg-[#CCFF00] rounded-full flex items-center justify-center shadow-xl rotate-12 hover:scale-105 transition-transform cursor-pointer border-[3px] border-black/5 flex-shrink-0">
    <div className="absolute inset-1 animate-[spin_10s_linear_infinite]">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path id="heroBadgePath" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" fill="none" />
        <text style={{ fontSize: '11px', fontWeight: 900, letterSpacing: '0.18em' }} fill="black">
          <textPath href="#heroBadgePath" startOffset="0%">
            PORTFOLIO 2026 • AVAILABLE FOR WORK •{' '}
          </textPath>
        </text>
      </svg>
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="w-10 h-10 text-black stroke-current overflow-visible" fill="none" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20,80 Q 40,50 30,30 T 80,20" />
        <path d="M60,10 L80,20 L70,40" />
      </svg>
    </div>
  </div>
);

const ArrowBlack = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-black stroke-current overflow-visible" fill="none" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20,80 Q 40,20 80,40" />
    <path d="M60,20 L80,40 L50,60" />
  </svg>
);

const shadow = '1px 1px 0 #001A99,2px 2px 0 #001A99,3px 3px 0 #001A99,4px 4px 0 #001A99,5px 5px 0 #001A99,6px 6px 0 #001A99,7px 7px 0 #001A99,8px 8px 0 #001A99,9px 9px 0 #001A99,10px 10px 0 #001A99,11px 11px 0 #001A99,12px 12px 0 #001A99';
const headFont: React.CSSProperties = { fontFamily: '"Arial Black", Impact, sans-serif', textShadow: shadow };

export const HeroSection = () => {
  const idCardFront = useIdCardTexture({
    photoSrc:    '/rohit.jpg',
    name:        'Rohit Dubey',
    title:       'AI & Full-Stack Developer',
    company:     'ENGINEERING PASS',
    website:     'rohitdubey.dev',
    accentColor: '#CCFF00',
    bgTop:       '#0020A8',
    bgBottom:    '#00083A',
  });

  return (
    <section
      id="home"
      className="bg-[#0038FF] font-sans selection:bg-[#CCFF00] selection:text-black relative overflow-hidden w-full"
      style={{ height: 'calc(100svh - 32px)', overflow: 'hidden' }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

      {/* ── Text layer ── */}
      <div className="relative z-10 pointer-events-none w-full max-w-[1440px] mx-auto px-4 md:px-10 pt-16 md:pt-20 pb-4 flex flex-col justify-center h-full">

        {/* Glassmorphic availability pill */}
        <div className="mb-2">
          <AvailabilityPill />
        </div>

        {/* Stacked headline — FULL-STACK / DEVELOPER / IN PROGRESS */}
        <div className="flex flex-col gap-0">

          <div className="flex justify-start pl-[5%] md:pl-[10%]">
            <TextType
              text="FULL-STACK"
              as="h1"
              typingSpeed={100}
              loop={false}
              showCursor={true}
              cursorCharacter="|"
              className="text-[clamp(3rem,9vw,130px)] font-black leading-[0.88] tracking-tighter text-[#CCFF00] m-0 p-0 uppercase"
              style={headFont}
            />
          </div>

          <div className="flex justify-center">
            <TextType
              text="DEVELOPER"
              as="h1"
              typingSpeed={100}
              initialDelay={1200}
              loop={false}
              showCursor={true}
              cursorCharacter="|"
              className="text-[clamp(3.8rem,13vw,195px)] font-black leading-[0.88] tracking-tighter text-white m-0 p-0 uppercase"
              style={headFont}
            />
          </div>

          {/* "IN PROGRESS" row — smaller, muted, with a blinking cursor feel */}
          <div className="flex justify-end pr-[4%] md:pr-[8%] items-baseline gap-3">
            <TextType
              text="AI ENGINEER"
              as="span"
              typingSpeed={100}
              initialDelay={2400}
              loop={false}
              showCursor={false}
              className="text-[clamp(1rem,2.5vw,32px)] font-black uppercase tracking-[0.25em] text-white/35"
              style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}
            />
            <span className="text-[#CCFF00]/60 text-[clamp(0.9rem,2vw,24px)] font-black">+</span>
            <TextType
              text="IN PROGRESS"
              as="h1"
              typingSpeed={100}
              initialDelay={3800}
              loop={false}
              showCursor={true}
              cursorCharacter="|"
              className="text-[clamp(2.8rem,8.5vw,120px)] font-black leading-[0.88] tracking-tighter text-white/40 m-0 p-0 uppercase"
              style={headFont}
            />
          </div>

        </div>

        {/* Bottom: badge + bio */}
        <div className="flex items-end gap-6 mt-4 pointer-events-auto">
          <CircularBadge />
          <p className="text-white/45 text-sm font-medium leading-relaxed max-w-[240px] mb-2">
            Building polished, fast &amp; accessible digital products.<br />
            Based in India — working worldwide.
          </p>
        </div>
      </div>

      {/* ── Lanyard overlay ── */}
      <div className="absolute inset-0 z-20" style={{ pointerEvents: 'auto' }}>
        <CanvasErrorBoundary>
          <Suspense fallback={null}>
            {idCardFront && (
              <Lanyard
                position={[0, 0, 22]}
                gravity={[0, -40, 0]}
                fov={20}
                transparent={true}
                frontImage={idCardFront}
                backImage={idCardFront}
                imageFit="contain"
              />
            )}
          </Suspense>
        </CanvasErrorBoundary>
      </div>
    </section>
  );
};
