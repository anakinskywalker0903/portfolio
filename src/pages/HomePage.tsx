import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { HeroSection } from '@/components/ui/hero';
import { ContactSection } from '@/components/ui/contact';
import { AnimatedCircularProgressBar } from '@/components/ui/animated-circular-progress-bar';
import { SiReact, SiTypescript, SiNextdotjs } from 'react-icons/si';
import { FaArrowRight, FaRocket, FaCode, FaGraduationCap } from 'react-icons/fa';

export function HomePage() {
  return (
    <div className="w-full relative bg-white">
      {/* 1. Hero with dangle physics Lanyard */}
      <HeroSection />

      {/* 2. About preview section (Origin -> Who I am -> Why CS -> Goals) */}
      <section id="about" className="py-24 px-6 md:px-10 bg-white border-t-4 border-black relative z-30">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Header left */}
          <div>
            <span className="inline-block bg-[#CCFF00] text-black font-black text-[10px] px-3.5 py-1 rounded-full mb-3 tracking-widest uppercase border-2 border-black">
              ORIGIN STORY
            </span>
            <h3 className="text-4xl font-black uppercase tracking-tight text-black leading-none" style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}>
              WHO IS<br />
              <span className="text-[#0038FF]">ROHIT DUBEY?</span>
            </h3>
          </div>

          {/* Context middle/right */}
          <div className="lg:col-span-2 flex flex-col gap-6 text-black/75 text-sm font-medium leading-relaxed">
            <p>
              I am an engineer focused on building robust, high-performance web systems and AI integrations. My interest lies in bridging creative animations with structured, modular backend systems to treat web interfaces as polished digital products.
            </p>
            <p>
              <strong>Why Computer Science?</strong> I believe engineering is about scalability, optimization, and solving real-world hurdles. Whether it is tuning WebGL rendering loops or organizing relational database query indexes, I enjoy optimizing performance bottlenecks.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div className="p-5 rounded-2xl bg-[#F8F9FA] border border-black/5 flex gap-3 items-start">
                <FaGraduationCap className="text-[#0038FF] w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-black text-black uppercase text-xs">How I Learn</h5>
                  <p className="text-black/60 text-[11px] mt-1">Through direct research, code refactoring, and constructing production-grade tools from specification grids.</p>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-[#F8F9FA] border border-black/5 flex gap-3 items-start">
                <FaRocket className="text-[#0038FF] w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-black text-black uppercase text-xs">Current Goals</h5>
                  <p className="text-black/60 text-[11px] mt-1">Refining LLM fine-tuning schemas and constructing zero-latency interactive layouts.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Current Mission banner */}
      <section className="bg-black text-white py-12 px-6 border-y-4 border-black relative z-30 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="w-3 h-3 rounded-full bg-[#CCFF00] animate-ping" />
            <h4 className="font-black text-lg uppercase tracking-tight">
              CURRENT MISSION: BUILDING NEXT-GEN WEB PRODUCTS
            </h4>
          </div>
          <Link
            to="/skills"
            className="px-6 py-2.5 bg-[#CCFF00] hover:bg-white text-black font-black text-xs uppercase tracking-widest rounded-full border-2 border-black flex items-center gap-2 transition-colors shadow-[4px_4px_0_#000]"
          >
            <span>Explore Toolkit</span>
            <FaArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </section>

      {/* 4. Toolkit Preview (Major Skills with circular gauges) */}
      <section className="py-24 px-6 md:px-10 bg-[#F8F9FA] relative z-30">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="inline-block bg-[#0038FF]/10 text-[#0038FF] font-black text-[9px] px-3.5 py-1 rounded-full mb-3 tracking-widest uppercase border border-[#0038FF]/20">
                CAPABILITY PREVIEW
              </span>
              <h3 className="text-3xl font-black uppercase tracking-tight text-black leading-none" style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}>
                ENGINEERING TOOLKIT
              </h3>
            </div>
            <Link
              to="/skills"
              className="text-xs font-black uppercase tracking-wider text-[#0038FF] hover:text-black flex items-center gap-1.5 group transition-colors"
            >
              Explore Full Stack Stack <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: 'React', level: 95, Icon: SiReact, color: '#61DAFB' },
              { name: 'TypeScript', level: 90, Icon: SiTypescript, color: '#3178C6' },
              { name: 'Next.js', level: 88, Icon: SiNextdotjs, color: '#000000' },
            ].map((skill) => (
              <div key={skill.name} className="bg-white rounded-3xl p-6 border-2 border-black/5 flex flex-col items-center gap-4 text-center">
                <div className="relative flex items-center justify-center">
                  <AnimatedCircularProgressBar
                    value={skill.level}
                    gaugePrimaryColor="#0038FF"
                    gaugeSecondaryColor="#E8EEFF"
                    className="!size-20 !text-sm !font-black"
                  />
                  <div className="absolute inset-0 flex items-center justify-center mt-3">
                    <skill.Icon style={{ color: skill.color }} className="w-5 h-5" />
                  </div>
                </div>
                <span className="font-black text-xs uppercase text-black">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Featured Project preview */}
      <section className="py-24 px-6 md:px-10 bg-white border-t-2 border-black/5 relative z-30">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="inline-block bg-[#0038FF]/10 text-[#0038FF] font-black text-[9px] px-3.5 py-1 rounded-full mb-3 tracking-widest uppercase border border-[#0038FF]/20">
                LATEST CASE STUDY
              </span>
              <h3 className="text-3xl font-black uppercase tracking-tight text-black leading-none" style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}>
                FEATURED BUILD
              </h3>
            </div>
            <Link
              to="/projects"
              className="text-xs font-black uppercase tracking-wider text-[#0038FF] hover:text-black flex items-center gap-1.5 group transition-colors"
            >
              Explore Case Studies <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="border-[3px] border-black rounded-[2.5rem] p-8 bg-[#0038FF]/5 flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="flex-1 flex flex-col gap-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#0038FF]">
                WEBGL / PHYSICS / MOTION STACKS
              </span>
              <h4 className="text-2xl font-black uppercase leading-tight text-black">
                Personal Portfolio 2026
              </h4>
              <p className="text-black/75 text-xs font-medium leading-relaxed max-w-lg">
                Reconstructed structural grids into a scalable multi-page application featuring interactive Three.js physics constraints, dynamic data texture compilers, and custom page routers.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {['React', 'Three.js', 'Rapier Physics', 'Vite'].map(t => (
                  <span key={t} className="text-[9px] font-black uppercase border border-black/10 bg-white px-2.5 py-1 rounded-full text-black/70">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <Link
              to="/projects"
              className="px-6 py-3 bg-[#CCFF00] hover:bg-black text-black hover:text-white font-black text-xs uppercase tracking-widest border-2 border-black rounded-full flex items-center gap-2 self-stretch md:self-center justify-center transition-colors shadow-[4px_4px_0_#000]"
            >
              <span>Explore Project Case</span>
              <FaArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Client Work preview */}
      <section className="py-24 px-6 md:px-10 bg-[#F8F9FA] border-t-2 border-black/5 relative z-30">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="inline-block bg-[#0038FF]/10 text-[#0038FF] font-black text-[9px] px-3.5 py-1 rounded-full mb-3 tracking-widest uppercase border border-[#0038FF]/20">
                PRODUCTION OUTCOMES
              </span>
              <h3 className="text-3xl font-black uppercase tracking-tight text-black leading-none" style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}>
                CLIENT WORK PREVIEW
              </h3>
            </div>
            <Link
              to="/client-work"
              className="text-xs font-black uppercase tracking-wider text-[#0038FF] hover:text-black flex items-center gap-1.5 group transition-colors"
            >
              Explore Client Work <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="border-[3px] border-black rounded-[2.5rem] p-8 bg-white flex flex-col md:flex-row justify-between items-start gap-8 shadow-sm">
            <div className="flex-1 flex flex-col gap-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-black/50">
                FASHIONBRAND CO. • 2024
              </span>
              <h4 className="text-2xl font-black uppercase leading-tight text-black">
                Custom Headless E-Commerce Front
              </h4>
              <p className="text-black/75 text-xs font-medium leading-relaxed max-w-lg">
                Replaced standalone catalog configurations with static builds and ISR updates. Lowered latency speeds under 1.2 seconds to minimize flash-sales dropout rates.
              </p>
            </div>
            <Link
              to="/client-work"
              className="px-6 py-3 bg-[#CCFF00] hover:bg-black text-black hover:text-white font-black text-xs uppercase tracking-widest border-2 border-black rounded-full flex items-center gap-2 self-stretch md:self-center justify-center transition-colors shadow-[4px_4px_0_#000]"
            >
              <span>Explore Case</span>
              <FaArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Learning Archive preview */}
      <section className="py-24 px-6 md:px-10 bg-white border-t-2 border-black/5 relative z-30">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="inline-block bg-[#0038FF]/10 text-[#0038FF] font-black text-[9px] px-3.5 py-1 rounded-full mb-3 tracking-widest uppercase border border-[#0038FF]/20">
                EDUCATION ARCHIVE
              </span>
              <h3 className="text-3xl font-black uppercase tracking-tight text-black leading-none" style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}>
                LEARNING PATHWAYS
              </h3>
            </div>
            <Link
              to="/certifications"
              className="text-xs font-black uppercase tracking-wider text-[#0038FF] hover:text-black flex items-center gap-1.5 group transition-colors"
            >
              Explore Credentials <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl bg-[#F8F9FA] border border-black/5 flex items-start gap-4">
              <span className="text-3xl">☁️</span>
              <div>
                <h4 className="font-black text-black text-sm uppercase leading-tight">AWS Certified Developer</h4>
                <p className="text-black/50 text-[10px] font-bold uppercase tracking-wider mt-1">Amazon Web Services • 2024</p>
              </div>
            </div>
            <div className="p-6 rounded-3xl bg-[#F8F9FA] border border-black/5 flex items-start gap-4">
              <span className="text-3xl">⚛️</span>
              <div>
                <h4 className="font-black text-black text-sm uppercase leading-tight">Meta React Developer</h4>
                <p className="text-black/50 text-[10px] font-bold uppercase tracking-wider mt-1">Meta • 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Contact Form */}
      <ContactSection />
    </div>
  );
}
