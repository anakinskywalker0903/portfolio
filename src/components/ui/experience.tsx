import { motion } from 'motion/react';

const experiences = [
  {
    role: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    period: '2023 — Present',
    type: 'Full-time',
    desc: 'Leading frontend architecture for a SaaS platform serving 50k+ users. Built reusable component library, improved Lighthouse score from 62 to 98, and mentored a team of 4 junior developers.',
    tags: ['React', 'TypeScript', 'Next.js', 'GraphQL'],
    color: '#CCFF00',
  },
  {
    role: 'Full Stack Developer',
    company: 'Startup Studio',
    period: '2022 — 2023',
    type: 'Full-time',
    desc: 'Built and shipped 3 client products from scratch. Architected REST APIs with Node.js and PostgreSQL. Designed responsive UIs using Figma and Tailwind CSS for global clients.',
    tags: ['Node.js', 'React', 'PostgreSQL', 'Tailwind'],
    color: '#0038FF',
  },
  {
    role: 'Frontend Developer',
    company: 'Digital Agency XYZ',
    period: '2021 — 2022',
    type: 'Full-time',
    desc: 'Delivered pixel-perfect marketing sites and e-commerce experiences for 15+ clients. Introduced modern tooling (Vite, TypeScript) that reduced build times by 60%.',
    tags: ['React', 'Sass', 'Figma', 'Vite'],
    color: '#0038FF',
  },
  {
    role: 'Junior Developer',
    company: 'Freelance',
    period: '2020 — 2021',
    type: 'Freelance',
    desc: 'Built websites and web apps for local businesses. Grew client base from 0 to 12 recurring clients through referrals. First exposure to full-stack development.',
    tags: ['JavaScript', 'HTML/CSS', 'WordPress', 'PHP'],
    color: '#CCFF00',
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-[#0038FF] w-full py-24 px-6 md:px-10 relative overflow-hidden">

      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="inline-block bg-white/20 text-white font-black text-xs px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase border border-white/30">
              EXPERIENCE
            </span>
            <h2
              className="text-[clamp(3rem,8vw,96px)] font-black leading-none tracking-tighter text-white uppercase"
              style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}
            >
              WORK<br />
              <span className="text-[#CCFF00]">HISTORY</span>
            </h2>
          </div>
          <p className="text-white/60 text-sm max-w-xs font-medium leading-relaxed">
            3+ years of building products that people love. Here's where I've worked and what I've accomplished.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/20 -translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Card */}
                <div className="flex-1 md:w-[45%]">
                  <div className="bg-white rounded-[2rem] p-8 shadow-2xl">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-black/40">{exp.period}</span>
                        <h3 className="text-xl font-black text-black mt-1 leading-tight">{exp.role}</h3>
                        <p className="text-[#0038FF] font-bold text-sm mt-0.5">{exp.company}</p>
                      </div>
                      <span
                        className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border-2 border-black"
                        style={{ backgroundColor: exp.color }}
                      >
                        {exp.type}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-black/60 text-xs leading-relaxed mb-5 font-medium">{exp.desc}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-black bg-[#F8F9FA] text-black px-3 py-1 rounded-full border border-black/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex flex-col items-center justify-start pt-8 flex-none w-[10%]">
                  <div className="w-5 h-5 rounded-full border-4 border-[#CCFF00] bg-[#0038FF] shadow-lg shadow-[#CCFF00]/30"></div>
                </div>

                {/* Spacer for opposite side */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
