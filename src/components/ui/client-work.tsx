import { motion } from 'motion/react';

const projects = [
  {
    id: '01',
    name: 'E-Commerce Platform',
    client: 'FashionBrand Co.',
    year: '2024',
    category: 'Full Stack',
    desc: 'Built a full-stack e-commerce platform with real-time inventory, Stripe payments, and a custom CMS. Handles 10k+ daily users with 99.9% uptime.',
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    link: '#',
    accent: '#CCFF00',
  },
  {
    id: '02',
    name: 'SaaS Dashboard',
    client: 'AnalyticsPro',
    year: '2024',
    category: 'Frontend',
    desc: 'Redesigned and rebuilt a complex analytics dashboard from legacy jQuery to React. Improved load time by 4x and user retention by 30%.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    tags: ['React', 'D3.js', 'TypeScript'],
    link: '#',
    accent: '#CCFF00',
  },
  {
    id: '03',
    name: 'Mobile Banking App',
    client: 'FinTech Startup',
    year: '2023',
    category: 'Full Stack',
    desc: 'Designed and built a fintech app with KYC flows, real-time transaction feeds, and bank-grade security. Raised $2M seed after demo.',
    img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
    tags: ['React Native', 'Node.js', 'AWS'],
    link: '#',
    accent: '#CCFF00',
  },
  {
    id: '04',
    name: 'Brand Identity + Site',
    client: 'Studio Minimal',
    year: '2023',
    category: 'Design + Dev',
    desc: 'Created full brand identity and built a portfolio site with custom WebGL animations. Awarded "Site of the Day" on Awwwards.',
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    tags: ['Figma', 'Three.js', 'GSAP'],
    link: '#',
    accent: '#CCFF00',
  },
];

export const ClientWorkSection = () => {
  return (
    <section id="client-work" className="bg-white w-full py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="inline-block bg-[#CCFF00] text-black font-black text-xs px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase">
              CLIENT WORK
            </span>
            <h2
              className="text-[clamp(3rem,8vw,96px)] font-black leading-none tracking-tighter text-black uppercase"
              style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}
            >
              SELECTED<br />
              <span className="text-[#0038FF]">PROJECTS</span>
            </h2>
          </div>
          <p className="text-black/50 text-sm max-w-xs font-medium leading-relaxed">
            A selection of client work spanning product design, frontend engineering, and full-stack development.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.id}
              href={project.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group block"
            >
              <div className="flex flex-col lg:flex-row gap-6 bg-[#F8F9FA] rounded-[2rem] p-6 border-2 border-transparent hover:border-[#0038FF] transition-all overflow-hidden">

                {/* Image */}
                <div className="w-full lg:w-64 h-44 lg:h-48 rounded-[1.5rem] overflow-hidden flex-shrink-0">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 flex flex-col justify-between py-2">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[10px] font-black text-black/30 uppercase tracking-widest">{project.id}</span>
                      <span className="text-[10px] font-black bg-[#CCFF00] text-black px-3 py-1 rounded-full uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="text-[10px] font-bold text-black/40 ml-auto">{project.year}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-black mb-1 leading-tight">{project.name}</h3>
                    <p className="text-[#0038FF] font-bold text-sm mb-3">{project.client}</p>
                    <p className="text-black/50 text-sm leading-relaxed max-w-lg">{project.desc}</p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mt-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-black bg-white text-black px-3 py-1 rounded-full border border-black/10">
                        {tag}
                      </span>
                    ))}
                    <span className="ml-auto text-xs font-black text-[#0038FF] group-hover:translate-x-1 transition-transform">
                      View Project ↗
                    </span>
                  </div>
                </div>

              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};
