import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { HeroSection } from '@/components/ui/hero';
import { ContactSection } from '@/components/ui/contact';
import { AnimatedCircularProgressBar } from '@/components/ui/animated-circular-progress-bar';
import { SiReact, SiTypescript, SiNextdotjs } from 'react-icons/si';
import { FaArrowRight, FaRocket, FaCode, FaGraduationCap } from 'react-icons/fa';
import { ScrollVelocity } from '@/components/ui/ScrollVelocity';

export function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Card 1: Origin
  const y1 = useTransform(scrollYProgress, [0, 0.14, 0.18], [0, 0, -700]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.14, 0.18], [1, 1, 0]);
  const scale1 = useTransform(scrollYProgress, [0, 0.14, 0.18], [1, 1, 0.9]);

  // Card 2: Why I Build
  const y2 = useTransform(scrollYProgress, [0.10, 0.14, 0.18, 0.34, 0.38], [700, 700, 0, 0, -700]);
  const opacity2 = useTransform(scrollYProgress, [0.10, 0.14, 0.18, 0.34, 0.38], [0, 0, 1, 1, 0]);
  const scale2 = useTransform(scrollYProgress, [0.10, 0.14, 0.18, 0.34, 0.38], [0.9, 0.9, 1, 1, 0.9]);

  // Card 3: Learning Philosophy
  const y3 = useTransform(scrollYProgress, [0.30, 0.34, 0.38, 0.54, 0.58], [700, 700, 0, 0, -700]);
  const opacity3 = useTransform(scrollYProgress, [0.30, 0.34, 0.38, 0.54, 0.58], [0, 0, 1, 1, 0]);
  const scale3 = useTransform(scrollYProgress, [0.30, 0.34, 0.38, 0.54, 0.58], [0.9, 0.9, 1, 1, 0.9]);

  // Card 4: Current Mission
  const y4 = useTransform(scrollYProgress, [0.50, 0.54, 0.58, 0.74, 0.78], [700, 700, 0, 0, -700]);
  const opacity4 = useTransform(scrollYProgress, [0.50, 0.54, 0.58, 0.74, 0.78], [0, 0, 1, 1, 0]);
  const scale4 = useTransform(scrollYProgress, [0.50, 0.54, 0.58, 0.74, 0.78], [0.9, 0.9, 1, 1, 0.9]);

  // Card 5: Looking Ahead
  const y5 = useTransform(scrollYProgress, [0.70, 0.74, 0.78, 1.0], [700, 700, 0, 0]);
  const opacity5 = useTransform(scrollYProgress, [0.70, 0.74, 0.78, 1.0], [0, 0, 1, 1]);
  const scale5 = useTransform(scrollYProgress, [0.70, 0.74, 0.78, 1.0], [0.9, 0.9, 1, 1]);

  return (
    <div className="w-full relative bg-white">
      {/* 1. Hero with dangle physics Lanyard */}
      <HeroSection />

      {/* 2. Origin (About preview section containing the five sections with sticky deck transitions) */}
      <section 
        id="about" 
        ref={containerRef} 
        className="relative h-[600vh] w-full bg-white border-t-4 border-black z-30"
      >
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-6 md:px-10 pointer-events-none">
          
          {/* Card 1: Origin */}
          <motion.div 
            style={{ y: y1, opacity: opacity1, scale: scale1 }}
            className="absolute max-w-3xl w-full bg-white border-[3px] border-black rounded-[2.5rem] p-8 md:p-10 shadow-[8px_8px_0_#000] flex flex-col justify-between h-[65vh] max-h-[500px] overflow-y-auto no-scrollbar pointer-events-auto"
          >
            <div>
              <span className="inline-block bg-[#CCFF00] text-black font-black text-[9px] px-3 py-1 rounded-full mb-3 tracking-widest uppercase border border-black">
                SECTION 01
              </span>
              <h3 className="text-3xl font-black uppercase tracking-tight text-black leading-none mb-1" style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}>
                ORIGIN
              </h3>
              <p className="text-black/50 text-xs font-bold uppercase tracking-wider mb-6 italic">
                Every engineer starts somewhere. This is where my journey began.
              </p>
              <div className="flex flex-col gap-4 text-black/75 text-sm font-medium leading-relaxed">
                <p className="font-bold text-black text-base">
                  I am Rohit Dubey, a Computer Science student specializing in Artificial Intelligence and Machine Learning at VIT Bhopal University.
                </p>
                <p>
                  My journey into software development didn't begin with frameworks or complex technologies—it began with curiosity. I wanted to understand how websites were built, how applications worked behind the scenes, and how software could solve real-world problems.
                </p>
                <p>
                  Today, I'm building that foundation step by step. From learning core web technologies and data structures to exploring backend development and artificial intelligence, every project I create helps me understand not just <strong>how</strong> something works, but <strong>why</strong> it works.
                </p>
              </div>
            </div>
            <p className="font-bold text-[#0038FF] text-sm mt-4">
              I believe strong fundamentals create better engineers, and that's the philosophy guiding my learning journey.
            </p>
          </motion.div>

          {/* Card 2: Why I Build */}
          <motion.div 
            style={{ y: y2, opacity: opacity2, scale: scale2 }}
            className="absolute max-w-3xl w-full bg-white border-[3px] border-black rounded-[2.5rem] p-8 md:p-10 shadow-[8px_8px_0_#000] flex flex-col justify-between h-[65vh] max-h-[500px] overflow-y-auto no-scrollbar pointer-events-auto"
          >
            <div>
              <span className="inline-block bg-[#CCFF00] text-black font-black text-[9px] px-3 py-1 rounded-full mb-3 tracking-widest uppercase border border-black">
                SECTION 02
              </span>
              <h3 className="text-3xl font-black uppercase tracking-tight text-black leading-none mb-6" style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}>
                WHY I BUILD
              </h3>
              <div className="flex flex-col gap-4 text-black/75 text-sm font-medium leading-relaxed">
                <p>
                  For me, software engineering is more than writing code—it's about solving problems with thoughtful, well-designed solutions.
                </p>
                <p>
                  I enjoy taking an idea, breaking it into smaller challenges, and gradually turning it into something people can use. Whether it's a productivity tool, an AI-powered application, or a client website, I find satisfaction in building software that is practical, reliable, and continuously improving.
                </p>
              </div>
            </div>
            <p className="font-bold text-[#0038FF] text-sm mt-4">
              Every project teaches me something new, and every challenge becomes another opportunity to grow as an engineer.
            </p>
          </motion.div>

          {/* Card 3: Learning Philosophy */}
          <motion.div 
            style={{ y: y3, opacity: opacity3, scale: scale3 }}
            className="absolute max-w-3xl w-full bg-white border-[3px] border-black rounded-[2.5rem] p-8 md:p-10 shadow-[8px_8px_0_#000] flex flex-col justify-between h-[65vh] max-h-[500px] overflow-y-auto no-scrollbar pointer-events-auto"
          >
            <div>
              <span className="inline-block bg-[#CCFF00] text-black font-black text-[9px] px-3 py-1 rounded-full mb-3 tracking-widest uppercase border border-black">
                SECTION 03
              </span>
              <h3 className="text-3xl font-black uppercase tracking-tight text-black leading-none mb-6" style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}>
                LEARNING PHILOSOPHY
              </h3>
              <div className="flex flex-col gap-4 text-black/75 text-sm font-medium leading-relaxed">
                <p className="font-bold text-black">
                  I prefer learning from the ground up.
                </p>
                <p>
                  Rather than jumping directly into frameworks, I focus on understanding the technologies that power them. I study the fundamentals, build practical projects, experiment with different approaches, and continuously refine my work based on what I learn.
                </p>
              </div>
            </div>
            <p className="font-bold text-[#0038FF] text-sm mt-4">
              My goal isn't to collect as many technologies as possible—it's to build the knowledge and problem-solving skills needed to adapt to new ones throughout my career.
            </p>
          </motion.div>

          {/* Card 4: Current Mission */}
          <motion.div 
            style={{ y: y4, opacity: opacity4, scale: scale4 }}
            className="absolute max-w-3xl w-full bg-white border-[3px] border-black rounded-[2.5rem] p-8 md:p-10 shadow-[8px_8px_0_#000] flex flex-col justify-between h-[65vh] max-h-[500px] overflow-y-auto no-scrollbar pointer-events-auto"
          >
            <div>
              <span className="inline-block bg-[#CCFF00] text-black font-black text-[9px] px-3 py-1 rounded-full mb-3 tracking-widest uppercase border border-black">
                SECTION 04
              </span>
              <h3 className="text-3xl font-black uppercase tracking-tight text-black leading-none mb-6" style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}>
                CURRENT MISSION
              </h3>
              <div className="flex flex-col gap-6">
                {/* Mission Card */}
                <div className="bg-[#0038FF]/5 border-2 border-black rounded-[2rem] p-6 shadow-[6px_6px_0_#000] relative overflow-hidden">
                  <p className="font-black text-black text-sm uppercase leading-snug tracking-tight">
                    Building a strong foundation in <span className="text-[#0038FF]">Full-Stack Development</span> and <span className="text-[#0038FF]">Artificial Intelligence</span> through consistent learning, real-world projects, and continuous improvement.
                  </p>
                </div>
              </div>
            </div>

            {/* Current Focus Points */}
            <div className="flex flex-col gap-2 mt-4">
              <h5 className="font-black text-xs uppercase tracking-wider text-black">
                Current Focus:
              </h5>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-black/80 font-bold">
                {[
                  'Master modern frontend development',
                  'Strengthen Java & DSA',
                  'Build scalable full-stack applications',
                  'Explore AI engineering & intelligent systems',
                ].map((focus, i) => (
                  <li key={i} className="flex items-center gap-2 bg-[#F8F9FA] border border-black/5 p-2 rounded-xl">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] border border-black/40 flex-shrink-0" />
                    <span className="truncate">{focus}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Card 5: Looking Ahead */}
          <motion.div 
            style={{ y: y5, opacity: opacity5, scale: scale5 }}
            className="absolute max-w-3xl w-full bg-white border-[3px] border-black rounded-[2.5rem] p-8 md:p-10 shadow-[8px_8px_0_#000] flex flex-col justify-between h-[65vh] max-h-[500px] overflow-y-auto no-scrollbar pointer-events-auto"
          >
            <div>
              <span className="inline-block bg-[#CCFF00] text-black font-black text-[9px] px-3 py-1 rounded-full mb-3 tracking-widest uppercase border border-black">
                SECTION 05
              </span>
              <h3 className="text-3xl font-black uppercase tracking-tight text-black leading-none mb-6" style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}>
                LOOKING AHEAD
              </h3>
              <div className="flex flex-col gap-4 text-black/75 text-sm font-medium leading-relaxed">
                <p>
                  Technology evolves constantly, and I believe learning should never stop.
                </p>
                <p>
                  My long-term goal is to build software that combines intelligent systems with great user experiences while continuing to grow as a full-stack engineer.
                </p>
              </div>
            </div>
            <p className="font-bold text-[#0038FF] text-sm mt-4">
              Whether I'm contributing to a team, building products, or working with clients, I want every project to reflect thoughtful engineering, continuous learning, and a commitment to creating meaningful solutions.
            </p>
          </motion.div>

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
            <FaArrowRight className="w-3.5 h-3.5" />
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
