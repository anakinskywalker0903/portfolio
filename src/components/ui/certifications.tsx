import { motion } from 'motion/react';

const certs = [
  {
    name: 'AWS Certified Developer',
    issuer: 'Amazon Web Services',
    year: '2024',
    id: 'AWS-DEV-2024',
    color: '#CCFF00',
    icon: '☁️',
    desc: 'Associate-level certification covering AWS services, deployment, security, and cloud-native development patterns.',
  },
  {
    name: 'Meta React Developer',
    issuer: 'Meta / Coursera',
    year: '2023',
    id: 'META-REACT-23',
    color: '#CCFF00',
    icon: '⚛️',
    desc: 'Comprehensive certification in React development including advanced hooks, state management, and testing practices.',
  },
  {
    name: 'Google UX Design',
    issuer: 'Google / Coursera',
    year: '2023',
    id: 'GOOG-UX-23',
    color: '#CCFF00',
    icon: '🎨',
    desc: 'Full UX design process from user research, wireframing, prototyping to usability testing and handoff.',
  },
  {
    name: 'MongoDB Developer',
    issuer: 'MongoDB University',
    year: '2022',
    id: 'MDB-DEV-22',
    color: '#CCFF00',
    icon: '🍃',
    desc: 'Professional certification in MongoDB schema design, aggregation pipelines, indexing, and performance optimization.',
  },
  {
    name: 'TypeScript Professional',
    issuer: 'Microsoft / LinkedIn Learning',
    year: '2022',
    id: 'MS-TS-22',
    color: '#CCFF00',
    icon: '🔷',
    desc: 'Advanced TypeScript including generics, decorators, module systems, and type-safe API design patterns.',
  },
  {
    name: 'Figma Advanced',
    issuer: 'Figma / Coursera',
    year: '2022',
    id: 'FIG-ADV-22',
    color: '#CCFF00',
    icon: '🖌️',
    desc: 'Advanced Figma skills including auto-layout, design systems, variants, prototyping, and developer handoff.',
  },
];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="bg-[#0038FF] w-full py-24 px-6 md:px-10 relative overflow-hidden">

      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="inline-block bg-white/20 text-white font-black text-xs px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase border border-white/30">
              CERTIFICATIONS
            </span>
            <h2
              className="text-[clamp(3rem,8vw,96px)] font-black leading-none tracking-tighter text-white uppercase"
              style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}
            >
              LICENSES<br />
              <span className="text-[#CCFF00]">& CERTS</span>
            </h2>
          </div>
          <p className="text-white/60 text-sm max-w-xs font-medium leading-relaxed">
            Verified credentials from leading tech companies and universities — continuously learning and upskilling.
          </p>
        </div>

        {/* Certs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="group bg-white rounded-[2rem] p-7 hover:-translate-y-2 transition-all duration-300 shadow-xl shadow-black/20"
            >
              {/* Icon + Year */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-14 h-14 bg-[#F8F9FA] rounded-2xl flex items-center justify-center text-2xl border-2 border-black/5 group-hover:bg-[#CCFF00] transition-colors">
                  {cert.icon}
                </div>
                <span className="text-[10px] font-black text-black/30 uppercase tracking-widest">{cert.year}</span>
              </div>

              {/* Name & Issuer */}
              <h3 className="font-black text-black text-lg leading-tight mb-1">{cert.name}</h3>
              <p className="text-[#0038FF] font-bold text-xs mb-4">{cert.issuer}</p>

              {/* Description */}
              <p className="text-black/50 text-xs leading-relaxed mb-5">{cert.desc}</p>

              {/* ID Badge */}
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-black text-black/25 uppercase tracking-widest font-mono">{cert.id}</span>
                <div className="w-6 h-6 bg-[#0038FF] rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="mt-16 bg-white/10 rounded-[2rem] p-8 border border-white/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-black text-xl">Always learning.</p>
            <p className="text-white/60 text-sm font-medium mt-1">Currently studying: Rust, WebAssembly & System Design</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            {['6 Certs', '3+ Years', '20+ Projects'].map(s => (
              <span key={s} className="px-5 py-2.5 bg-[#CCFF00] text-black font-black text-xs rounded-full">
                {s}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
