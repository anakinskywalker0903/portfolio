import { lazy, Suspense, Component, type ReactNode } from 'react';
import { useIdCardTexture } from '@/components/ui/useIdCardTexture';

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
    <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-pulse flex-shrink-0" />
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
      style={{ minHeight: '100svh' }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

      {/* ── Text layer ── */}
      <div className="relative z-10 pointer-events-none w-full max-w-[1440px] mx-auto px-4 md:px-10 pt-24 md:pt-28 pb-10 flex flex-col justify-center min-h-[100svh]">

        {/* Glassmorphic availability pill */}
        <div className="mb-6">
          <AvailabilityPill />
        </div>

        {/* Stacked headline — FULL-STACK / DEVELOPER / IN PROGRESS */}
        <div className="flex flex-col gap-0.5 md:gap-1">

          <div className="flex justify-start pl-[5%] md:pl-[10%]">
            <h1
              className="text-[clamp(3rem,9vw,130px)] font-black leading-[0.88] tracking-tighter text-[#CCFF00] m-0 p-0 uppercase"
              style={headFont}
            >
              FULL-STACK
            </h1>
          </div>

          <div className="flex justify-center">
            <h1
              className="text-[clamp(3.8rem,13vw,195px)] font-black leading-[0.88] tracking-tighter text-white m-0 p-0 uppercase"
              style={headFont}
            >
              DEVELOPER
            </h1>
          </div>

          {/* "IN PROGRESS" row — smaller, muted, with a blinking cursor feel */}
          <div className="flex justify-end pr-[4%] md:pr-[8%] items-baseline gap-3">
            <span
              className="text-[clamp(1rem,2.5vw,32px)] font-black uppercase tracking-[0.25em] text-white/35"
              style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}
            >
              AI ENGINEER
            </span>
            <span className="text-[#CCFF00]/60 text-[clamp(0.9rem,2vw,24px)] font-black">+</span>
            <h1
              className="text-[clamp(2.8rem,8.5vw,120px)] font-black leading-[0.88] tracking-tighter text-white/40 m-0 p-0 uppercase"
              style={headFont}
            >
              IN PROGRESS
            </h1>
          </div>

        </div>

        {/* Bottom: badge + bio */}
        <div className="flex items-end gap-6 mt-8 pointer-events-auto">
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
            <Lanyard
              position={[0, 0, 33]}
              gravity={[0, -40, 0]}
              fov={20}
              transparent={true}
              frontImage={idCardFront}
              backImage={idCardFront}
              imageFit="contain"
            />
          </Suspense>
        </CanvasErrorBoundary>
      </div>

      {/* ── Stats strip ── */}
      <div className="relative z-30 bg-white text-black rounded-t-[2.5rem] md:rounded-t-[3.5rem] px-6 py-12 md:px-10 md:py-16 shadow-[0_-20px_50px_rgba(0,0,0,0.2)] w-full">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

          <div className="bg-[#F8F9FA] rounded-[2rem] p-8 flex flex-col items-center text-center relative h-64 border border-gray-100">
            <h3 className="text-xl md:text-2xl uppercase leading-tight mb-2 font-black">3+ YEARS<br />EXPERIENCE</h3>
            <p className="text-[10px] md:text-xs text-black/60 font-bold mb-auto">Building production-grade products</p>
            <div className="flex flex-col items-center bg-[#0038FF] rounded-[1.5rem] px-6 py-4 text-white shadow-lg mt-6 w-full max-w-[200px]">
              <p className="text-[9px] font-bold uppercase tracking-wider mb-1">Projects Shipped</p>
              <p className="text-2xl font-black">20+</p>
            </div>
            <div className="hidden md:block absolute -right-12 bottom-8 w-16 h-16 z-30"><ArrowBlack /></div>
          </div>

          <div className="bg-[#F8F9FA] rounded-[2rem] p-8 flex flex-col items-center text-center relative h-64 border border-gray-100">
            <h3 className="text-xl md:text-2xl uppercase leading-tight mb-2 font-black">FULL STACK<br />BUILDER</h3>
            <p className="text-[10px] md:text-xs text-black/60 font-bold mb-auto">React, Node.js, TypeScript, Tailwind</p>
            <div className="relative w-full flex justify-center mt-6">
              <div className="flex items-center bg-[#0038FF] rounded-full p-1.5 text-white shadow-lg">
                <div className="bg-white/20 text-white font-bold text-sm px-4 py-2 rounded-full mr-2">Frontend</div>
                <div className="font-bold text-xs px-4">+ Backend</div>
              </div>
              <div className="absolute -bottom-6 right-1/3 bg-[#CCFF00] rounded-full p-2.5 shadow-lg transform rotate-12 z-20">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-black stroke-current" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </div>
            <div className="hidden md:block absolute -right-12 bottom-8 w-16 h-16 z-30"><ArrowBlack /></div>
          </div>

          <div className="bg-[#F8F9FA] rounded-[2rem] p-8 flex flex-col items-center text-center relative h-64 border border-gray-100">
            <h3 className="text-xl md:text-2xl uppercase leading-tight mb-2 font-black">DESIGN<br />OBSESSED</h3>
            <p className="text-[10px] md:text-xs text-black/60 font-bold mb-auto">Clean UI, great UX, pixel-perfect builds</p>
            <div className="flex flex-col items-center bg-[#CCFF00] rounded-[2rem] px-6 py-4 text-black shadow-lg mt-6 relative w-full max-w-[200px]">
              <p className="text-[9px] font-bold uppercase tracking-wider mb-1">Client Satisfaction</p>
              <p className="text-xl font-black">100%</p>
              <div className="absolute -bottom-2 left-8 w-5 h-5 bg-[#CCFF00] transform rotate-45" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
