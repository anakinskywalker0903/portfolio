import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { HeroSection } from '@/components/ui/hero';
import { ContactSection } from '@/components/ui/contact';
import { AnimatedCircularProgressBar } from '@/components/ui/animated-circular-progress-bar';
import { SiReact, SiTypescript, SiNextdotjs, SiTailwindcss, SiJavascript } from 'react-icons/si';
import { FaArrowRight, FaRocket, FaCode, FaGraduationCap, FaAward, FaHourglassHalf, FaCompass, FaExternalLinkAlt, FaBookOpen } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { ScrollVelocity } from '@/components/ui/ScrollVelocity';
import { Grainient } from '@/components/ui/Grainient';
import { InteractiveGridPattern } from '@/components/ui/InteractiveGridPattern';

// Custom animated skill gauge component
function AnimatedSkillGauge({ value, gaugePrimaryColor, gaugeSecondaryColor }: { value: number; gaugePrimaryColor: string; gaugeSecondaryColor: string }) {
  const [displayVal, setDisplayVal] = useState(0);

  useEffect(() => {
    // 1.5 second animation transition from 0 to actual value on load
    const duration = 1500;
    const steps = 50;
    const stepTime = duration / steps;
    let step = 0;
    const interval = setInterval(() => {
      step++;
      const current = Math.min(Math.floor((step / steps) * value), value);
      setDisplayVal(current);
      if (current >= value) {
        clearInterval(interval);
      }
    }, stepTime);
    return () => clearInterval(interval);
  }, [value]);

  return (
    <AnimatedCircularProgressBar
      value={displayVal}
      min={0}
      max={100}
      gaugePrimaryColor={gaugePrimaryColor}
      gaugeSecondaryColor={gaugeSecondaryColor}
      className="!size-20 !text-sm !font-black"
    />
  );
}

export function HomePage() {
  const [activeCert, setActiveCert] = useState<any | null>(null);

  const oracleCert = {
    id: 'ORACLE-JAVA-2026',
    name: 'Oracle Certified Associate, Java SE 8 Programmer / Foundations',
    issuer: 'Oracle University',
    year: '2026',
    icon: '☕',
    hours: '40 hours',
    desc: 'Demonstrates foundational knowledge of Java technology and programming, covering core concepts, data structures, and OOP methodologies.',
    learnt: 'Java syntax, object-oriented concepts (inheritance, encapsulation, polymorphism), control flow structures, exception handling, data structures, and APIs.',
    skills: ['Java', 'OOP', 'Data Structures', 'Exception Handling'],
    verifyUrl: 'https://education.oracle.com',
  };

  const mlCert = {
    id: 'UMICH-AML-2026',
    name: 'Applied Machine Learning in Python',
    issuer: 'University of Michigan / Coursera',
    year: '2026',
    icon: '🐍',
    hours: '40 hours',
    desc: 'Advanced machine learning course covering data analysis, predictive modeling, clustering, and deep evaluation strategies.',
    learnt: 'Supervised & unsupervised learning algorithms, scikit-learn interfaces, SVM regression, decision trees, cross-validation metrics.',
    skills: ['Python', 'Scikit-Learn', 'Feature Engineering', 'Model Evaluation'],
    verifyUrl: 'https://coursera.org/verify',
  };

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
      <div className="relative">
        <HeroSection />
        {/* Gradient fade OUT of hero → into Origin, no hard cut */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#0038FF] pointer-events-none z-20" />
      </div>

      {/* 2. Origin — viewport-locked sticky deck, cards cycle as you scroll */}
      <section
        id="about"
        ref={containerRef}
        className="relative h-[600vh] w-full z-30"
      >
        {/* STICKY VIEWPORT — everything inside stays fixed while you scroll */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">

          {/* WebGL Grainient — toned down settings to reduce GPU lag */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Grainient
              color1="#3b82f6"
              color2="#fcfcfc"
              color3="#54f63b"
              timeSpeed={1.2}
              colorBalance={0.06}
              warpStrength={1.2}
              warpFrequency={3.0}
              warpSpeed={0.8}
              warpAmplitude={40.0}
              blendAngle={0.0}
              blendSoftness={0.05}
              rotationAmount={300.0}
              noiseScale={1.5}
              grainAmount={0.07}
              grainScale={2.0}
              grainAnimated={false}
              contrast={1.3}
              gamma={1.0}
              saturation={1.0}
              centerX={0.0}
              centerY={0.0}
              zoom={1.05}
            />
          </div>

          {/* Seamless blend: fade FROM hero blue into Grainient at the very top */}
          <div
            className="absolute top-0 left-0 right-0 z-10 pointer-events-none"
            style={{
              height: '180px',
              background: 'linear-gradient(to bottom, #0038FF 0%, rgba(0, 56, 255, 0.6) 40%, transparent 100%)'
            }}
          />
          {/* Subtle dark vignette at bottom to lead into next section */}
          <div
            className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
            style={{
              height: '100px',
              background: 'linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 100%)'
            }}
          />

          {/* Cards — all absolutely positioned, animated by scroll */}
          <div className="absolute inset-0 flex items-center justify-center px-6 md:px-10 pointer-events-none">

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
                  <div className="bg-[#0038FF]/5 border-2 border-black rounded-[2rem] p-6 shadow-[6px_6px_0_#000] relative overflow-hidden">
                    <p className="font-black text-black text-sm uppercase leading-snug tracking-tight">
                      Building a strong foundation in <span className="text-[#0038FF]">Full-Stack Development</span> and <span className="text-[#0038FF]">Artificial Intelligence</span> through consistent learning, real-world projects, and continuous improvement.
                    </p>
                  </div>
                </div>
              </div>
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

          {/* Progress dots — bottom center */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10 pointer-events-none">
            {[
              useTransform(scrollYProgress, [0, 0.18], [1, 0]),
              useTransform(scrollYProgress, [0.10, 0.18, 0.38], [0, 1, 0]),
              useTransform(scrollYProgress, [0.30, 0.38, 0.58], [0, 1, 0]),
              useTransform(scrollYProgress, [0.50, 0.58, 0.78], [0, 1, 0]),
              useTransform(scrollYProgress, [0.70, 0.78, 1.0], [0, 1, 1]),
            ].map((op, i) => (
              <motion.span
                key={i}
                style={{ opacity: op }}
                className="block w-2 h-2 rounded-full bg-white border border-white/30"
              />
            ))}
          </div>

          {/* Scroll hint — top right */}
          <div className="absolute top-6 right-8 z-10 pointer-events-none flex items-center gap-2">
            <span className="text-white/40 text-[10px] font-black uppercase tracking-widest">Scroll</span>
            <svg className="w-3 h-3 text-white/40 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

        </div>
      </section>

      {/* 3. Engineering Toolkit Preview (Merged Section) */}
      <section className="py-24 px-6 md:px-10 bg-[#F8F9FA] border-t-2 border-black/5 relative z-30 overflow-hidden">
        {/* Interactive Grid Background */}
        <InteractiveGridPattern
          className="opacity-40"
          width={45}
          height={45}
          squares={[32, 25]}
        />
        <div className="max-w-5xl mx-auto relative z-10">
          {/* Combined Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
            <div>
              <div
                className="inline-flex items-center px-4 py-1.5 rounded-full text-[#0038FF] font-black text-[10px] tracking-widest uppercase border border-[#0038FF]/30 relative overflow-hidden mb-3"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 56, 255, 0.1) 0%, rgba(0, 56, 255, 0.03) 50%, rgba(0, 0, 0, 0.05) 100%)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.6), 0 2px 8px rgba(0, 56, 255, 0.08)',
                }}
              >
                CURRENT MISSION: LEARNING • BUILDING • IMPROVING
              </div>
              <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-black leading-none mb-4" style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}>
                ENGINEERING TOOLKIT
              </h3>
              <p className="text-black/60 text-sm max-w-2xl font-bold leading-relaxed">
                A snapshot of the technologies, tools, and frameworks I'm learning and using to build modern software. Explore the complete toolkit to see my experience, projects, and learning journey with each one.
              </p>
            </div>
            <Link
              to="/skills"
              className="px-6 py-3 bg-[#CCFF00] hover:bg-black text-black hover:text-white font-black text-xs uppercase tracking-widest border-2 border-black rounded-full flex items-center gap-2 transition-all duration-300 shadow-[4px_4px_0_#000] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] self-start md:self-auto flex-shrink-0"
            >
              <span>Explore My Toolkit</span>
              <FaArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {[
              { name: 'Tailwind CSS', level: 100, Icon: SiTailwindcss, color: '#06B6D4', desc: 'Utility-First Styling' },
              { name: 'JavaScript', level: 80, Icon: SiJavascript, color: '#F7DF1E', desc: 'Dynamic Interactivity' },
              { name: 'React', level: 70, Icon: SiReact, color: '#61DAFB', desc: 'Component-Based UI' },
            ].map((skill) => (
              <div key={skill.name} className="bg-white rounded-3xl p-8 border-2 border-black/5 flex flex-col items-center gap-6 text-center shadow-sm hover:scale-[1.02] transition-transform duration-300">
                <div className="relative flex items-center justify-center">
                  <AnimatedSkillGauge
                    value={skill.level}
                    gaugePrimaryColor="#0038FF"
                    gaugeSecondaryColor="#E8EEFF"
                  />
                </div>
                
                {/* Icon + Title + Descriptor below, eliminating overlap */}
                <div className="flex flex-col items-center gap-1.5 mt-2">
                  <div className="flex items-center gap-2">
                    <skill.Icon style={{ color: skill.color }} className="w-5 h-5 flex-shrink-0" />
                    <span className="font-black text-sm uppercase text-black">{skill.name}</span>
                  </div>
                  <span className="text-xs text-black/50 font-bold uppercase tracking-wider">{skill.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Featured Project preview */}
      <section className="py-24 px-6 md:px-10 bg-white border-t-2 border-black/5 relative z-30 overflow-hidden">
        {/* WebGL Grainient Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Grainient
            color1="#3b82f6"
            color2="#fcfcfc"
            color3="#54f63b"
            timeSpeed={1.0}
            colorBalance={0.06}
            warpStrength={1.2}
            warpFrequency={3.0}
            warpSpeed={0.8}
            warpAmplitude={40.0}
            blendAngle={0.0}
            blendSoftness={0.05}
            rotationAmount={300.0}
            noiseScale={1.5}
            grainAmount={0.07}
            grainScale={2.0}
            grainAnimated={false}
            contrast={1.3}
            gamma={1.0}
            saturation={1.0}
            centerX={0.0}
            centerY={0.0}
            zoom={1.05}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
            <div className="inline-flex items-center px-6 py-3 bg-[#CCFF00] text-black font-black text-xs uppercase tracking-widest border-2 border-black rounded-full shadow-[4px_4px_0_#000] self-start">
              FEATURED BUILD
            </div>
            <Link
              to="/projects"
              className="px-6 py-3 bg-[#CCFF00] hover:bg-black text-black hover:text-white font-black text-xs uppercase tracking-widest border-2 border-black rounded-full flex items-center gap-2 transition-all duration-300 shadow-[4px_4px_0_#000] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] self-start md:self-auto flex-shrink-0"
            >
              <span>Explore Projects</span>
              <FaArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div
            className="border-[3px] border-black rounded-[2.5rem] p-8 flex flex-col md:flex-row justify-between items-start gap-8 shadow-[8px_8px_0_#000]"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.8) 100%)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
            }}
          >
            <div className="flex-1 flex flex-col gap-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#0038FF]">
                AI ENGINEERING / INTEGRATION
              </span>
              <h4 className="text-2xl font-black uppercase leading-tight text-black">
                Brainstormzz – AI Brainstorming Platform
              </h4>
              <p className="text-black/75 text-xs font-medium leading-relaxed max-w-lg">
                An AI-powered brainstorming platform designed to help users organize ideas, generate creative directions, and visualize thought processes through an interactive interface. Built as a full-stack application to explore modern AI integration and intuitive user experiences.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {['React', 'Node.js', 'OpenAI API', 'Vercel', 'JavaScript'].map(t => (
                  <span key={t} className="text-[9px] font-black uppercase border border-black/10 bg-[#F8F9FA] px-2.5 py-1 rounded-full text-black/70">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <Link
              to="/projects"
              className="px-6 py-3 bg-[#CCFF00] hover:bg-black text-black hover:text-white font-black text-xs uppercase tracking-widest border-2 border-black rounded-full flex items-center gap-2 self-stretch md:self-center justify-center transition-all duration-300 shadow-[4px_4px_0_#000] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] flex-shrink-0"
            >
              <span>Read Case Study</span>
              <FaArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Client Work preview */}
      <section className="py-24 px-6 md:px-10 bg-[#F8F9FA] border-t-2 border-black/5 relative z-30 overflow-hidden">
        {/* Interactive Grid Background */}
        <InteractiveGridPattern
          className="opacity-40"
          width={45}
          height={45}
          squares={[32, 20]}
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
            <div className="inline-flex items-center px-6 py-3 bg-[#CCFF00] text-black font-black text-xs uppercase tracking-widest border-2 border-black rounded-full shadow-[4px_4px_0_#000] self-start">
              CLIENT WORK PREVIEW
            </div>
            <Link
              to="/client-work"
              className="px-6 py-3 bg-[#CCFF00] hover:bg-black text-black hover:text-white font-black text-xs uppercase tracking-widest border-2 border-black rounded-full flex items-center gap-2 transition-all duration-300 shadow-[4px_4px_0_#000] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] self-start md:self-auto flex-shrink-0"
            >
              <span>Explore Client Work</span>
              <FaArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div
            className="border-[3px] border-black rounded-[2.5rem] p-8 flex flex-col md:flex-row justify-between items-start gap-8 shadow-[8px_8px_0_#000]"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.8) 100%)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
            }}
          >
            <div className="flex-1 flex flex-col gap-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#0038FF]">
                INTERACTIVE CLIENT DEVELOPMENT
              </span>
              <h4 className="text-2xl font-black uppercase leading-tight text-black">
                DevInterio – Architectural Visualization Website
              </h4>
              <p className="text-black/75 text-xs font-medium leading-relaxed max-w-lg">
                Designed and developed a modern multi-page website for a 3D architectural visualization studio. The project focused on creating a premium digital presence, showcasing services and portfolios, and providing a seamless experience for potential clients through responsive design and interactive user interfaces.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Responsive Design'].map(t => (
                  <span key={t} className="text-[9px] font-black uppercase border border-black/10 bg-[#F8F9FA] px-2.5 py-1 rounded-full text-black/70">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <Link
              to="/client-work"
              className="px-6 py-3 bg-[#CCFF00] hover:bg-black text-black hover:text-white font-black text-xs uppercase tracking-widest border-2 border-black rounded-full flex items-center gap-2 self-stretch md:self-center justify-center transition-all duration-300 shadow-[4px_4px_0_#000] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] flex-shrink-0"
            >
              <span>Read Case Study</span>
              <FaArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Learning Archive preview */}
      <section className="py-24 px-6 md:px-10 bg-white border-t-2 border-black/5 relative z-30 overflow-hidden">
        {/* WebGL Grainient Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Grainient
            color1="#3b82f6"
            color2="#fcfcfc"
            color3="#54f63b"
            timeSpeed={1.0}
            colorBalance={0.06}
            warpStrength={1.2}
            warpFrequency={3.0}
            warpSpeed={0.8}
            warpAmplitude={40.0}
            blendAngle={0.0}
            blendSoftness={0.05}
            rotationAmount={300.0}
            noiseScale={1.5}
            grainAmount={0.07}
            grainScale={2.0}
            grainAnimated={false}
            contrast={1.3}
            gamma={1.0}
            saturation={1.0}
            centerX={0.0}
            centerY={0.0}
            zoom={1.05}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
            <div className="inline-flex items-center px-6 py-3 bg-[#CCFF00] text-black font-black text-xs uppercase tracking-widest border-2 border-black rounded-full shadow-[4px_4px_0_#000] self-start">
              CONTINUOUS LEARNING
            </div>
            <Link
              to="/certifications"
              className="px-6 py-3 bg-[#CCFF00] hover:bg-black text-black hover:text-white font-black text-xs uppercase tracking-widest border-2 border-black rounded-full flex items-center gap-2 transition-all duration-300 shadow-[4px_4px_0_#000] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] self-start md:self-auto flex-shrink-0"
            >
              <span>Explore Learning Archive</span>
              <FaArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <button
              onClick={() => setActiveCert(oracleCert)}
              className="text-left p-6 rounded-[2rem] border-[3px] border-black flex items-start gap-4 shadow-[6px_6px_0_#000] hover:scale-[1.02] active:scale-[0.98] transition-transform cursor-pointer block w-full"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.8) 100%)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
              }}
            >
              <span className="text-3xl flex-shrink-0">☕</span>
              <div>
                <h4 className="font-black text-black text-sm uppercase leading-tight">Oracle Java Foundations Associate</h4>
                <p className="text-black/50 text-[10px] font-bold uppercase tracking-wider mt-1">Oracle University • 2026</p>
              </div>
            </button>
            <button
              onClick={() => setActiveCert(mlCert)}
              className="text-left p-6 rounded-[2rem] border-[3px] border-black flex items-start gap-4 shadow-[6px_6px_0_#000] hover:scale-[1.02] active:scale-[0.98] transition-transform cursor-pointer block w-full"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.8) 100%)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
              }}
            >
              <span className="text-3xl flex-shrink-0">🐍</span>
              <div>
                <h4 className="font-black text-black text-sm uppercase leading-tight">Applied Machine Learning in Python</h4>
                <p className="text-black/50 text-[10px] font-bold uppercase tracking-wider mt-1">University of Michigan • Coursera • 2026</p>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* 8. Contact Form */}
      <ContactSection />

      {/* Overlay Modal for Certificate details */}
      <AnimatePresence>
        {activeCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCert(null)}
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 16 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative w-full max-w-lg bg-white border-[3px] border-black rounded-[2.5rem] shadow-2xl overflow-hidden z-10 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-8 py-6 border-b-2 border-black bg-[#CCFF00]/10">
                <div className="flex items-center gap-3">
                  <span className="text-3xl leading-none">{activeCert.icon}</span>
                  <div>
                    <h3 className="font-black text-sm text-black uppercase leading-tight max-w-[280px]">
                      {activeCert.name}
                    </h3>
                    <span className="text-[10px] font-black uppercase text-black/50 tracking-wider">
                      {activeCert.issuer} • {activeCert.year}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setActiveCert(null)}
                  className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-all flex-shrink-0 cursor-pointer"
                >
                  <IoClose className="w-4 h-4" />
                </button>
              </div>

              {/* Details */}
              <div className="p-8 flex flex-col gap-5">
                {/* Overview */}
                <div>
                  <h4 className="text-[#0038FF] text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                    <FaAward /> Overview
                  </h4>
                  <p className="text-black/70 text-xs font-medium leading-relaxed">
                    {activeCert.desc}
                  </p>
                </div>

                {/* What I Learnt */}
                <div>
                  <h4 className="text-[#0038FF] text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                    <FaBookOpen /> What I Learnt
                  </h4>
                  <p className="text-black/70 text-xs font-medium leading-relaxed">
                    {activeCert.learnt}
                  </p>
                </div>

                {/* Skills Gained */}
                <div>
                  <h4 className="text-[#0038FF] text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 mb-2">
                    <FaCompass /> Skills Gained
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeCert.skills.map((s: string, i: number) => (
                      <span key={i} className="text-[9px] font-black uppercase border border-black/10 bg-[#F8F9FA] px-2.5 py-1 rounded-full text-black/70">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hours completed */}
                <div>
                  <h4 className="text-[#0038FF] text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                    <FaHourglassHalf /> Course Time
                  </h4>
                  <p className="text-black/70 text-xs font-bold">
                    {activeCert.hours} completed
                  </p>
                </div>
              </div>

              {/* Footer / ID Action */}
              <div className="px-8 py-5 bg-[#F8F9FA] border-t-2 border-black flex items-center justify-between text-xs font-bold text-black/50">
                <span>ID: {activeCert.id}</span>
                <button
                  onClick={() => window.open(activeCert.verifyUrl || '#', '_blank')}
                  className="flex items-center gap-1.5 text-black hover:text-[#0038FF] transition-colors cursor-pointer"
                >
                  Preview Certificate <FaExternalLinkAlt className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
