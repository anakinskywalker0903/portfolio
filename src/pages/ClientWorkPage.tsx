import { motion } from 'motion/react';
import { FaBriefcase, FaHandshake, FaQuoteLeft } from 'react-icons/fa';

const clientEngagements = [
  {
    id: '01',
    name: 'E-Commerce Platform',
    client: 'FashionBrand Co.',
    year: '2024',
    category: 'Full Stack Development',
    desc: 'Built a full-stack e-commerce platform with real-time inventory synchronization, Stripe payment processing flows, and a custom content management dashboard.',
    requirements: 'Migrate legacy standalone Shopify system to a high-speed custom headless setup to lower page load times under 1.2s and support flash sales with high concurrent load.',
    development: 'Set up Next.js static page generation using Incremental Static Regeneration (ISR). Integrated Stripe webhooks to handle automatic inventory subtraction on checkout success.',
    outcome: '99.9% uptime achieved during Black Friday flash sale. Page load speeds decreased by 60%, resulting in a 24% increase in sales conversion rates.',
    testimonial: 'Rohit delivered a custom storefront that completely transformed our retail speed. Concurrency load was handled perfectly.',
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
    tags: ['Next.js', 'Stripe API', 'PostgreSQL', 'Tailwind'],
  },
  {
    id: '02',
    name: 'SaaS Dashboard Redesign',
    client: 'AnalyticsPro',
    year: '2024',
    category: 'Frontend Engineering',
    desc: 'Redesigned and rebuilt a complex web analytics dashboard from legacy jQuery to React. Integrated high-performance SVG drawing modules.',
    requirements: 'Standard dashboards lagged heavily during real-time timeline visualization. Needed smooth filtering interfaces and sub-100ms redraw speeds.',
    development: 'Replaced synchronous calculations with lightweight state reducers. Programmed optimized SVG graph modules with intersection observers for layout scaling.',
    outcome: 'Redraw latency decreased from 450ms to 28ms. User retention rates increased by 30% after releasing the updated layouts.',
    testimonial: 'Our dashboard feels incredibly smooth now. Performance scaling issues were resolved in record time.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    tags: ['React', 'D3.js', 'TypeScript', 'Tailwind CSS'],
  },
];

export function ClientWorkPage() {
  return (
    <div className="w-full min-h-screen bg-white pt-32 pb-24 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <span className="inline-block bg-[#CCFF00] text-black font-black text-xs px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase">
            CLIENT PROJECTS
          </span>
          <h2
            className="text-[clamp(3rem,8vw,80px)] font-black leading-none tracking-tighter text-black uppercase"
            style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}
          >
            PROFESSIONAL<br />
            <span className="text-[#0038FF]">ENGAGEMENTS</span>
          </h2>
          <p className="text-black/50 text-sm max-w-md font-medium leading-relaxed mt-4">
            Production systems built for businesses, addressing direct requirements, technical implementations, and business outcomes.
          </p>
        </div>

        {/* Clients Stack */}
        <div className="flex flex-col gap-16">
          {clientEngagements.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col lg:flex-row border-4 border-black rounded-[2.5rem] overflow-hidden shadow-2xl bg-white"
            >
              {/* Left Side: Thumbnail & Summary */}
              <div className="w-full lg:w-[380px] flex-shrink-0 relative h-64 lg:h-auto min-h-[300px]">
                <img
                  src={item.img}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-8 flex flex-col justify-end text-white">
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#CCFF00] mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-black text-2xl uppercase leading-none mb-2">
                    {item.name}
                  </h3>
                  <div className="flex items-center justify-between text-xs font-bold text-white/70">
                    <span>{item.client}</span>
                    <span>{item.year}</span>
                  </div>
                </div>
              </div>

              {/* Right Side: Case Study */}
              <div className="flex-1 p-8 flex flex-col gap-6 justify-between border-t-4 lg:border-t-0 lg:border-l-4 border-black">
                
                {/* Info block */}
                <div className="flex flex-col gap-4">
                  {/* Summary */}
                  <p className="text-black/70 text-xs font-medium leading-relaxed">
                    {item.desc}
                  </p>

                  <hr className="border-black/5" />

                  {/* Requirements & Dev */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-black text-black text-xs uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                        <FaBriefcase className="text-[#0038FF]" /> Requirements
                      </h4>
                      <p className="text-black/60 text-[11px] font-medium leading-relaxed">
                        {item.requirements}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-black text-black text-xs uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                        <FaHandshake className="text-[#0038FF]" /> Tech Implementation
                      </h4>
                      <p className="text-black/60 text-[11px] font-medium leading-relaxed">
                        {item.development}
                      </p>
                    </div>
                  </div>

                  <hr className="border-black/5" />

                  {/* Testimonial block */}
                  <div className="bg-[#F8F9FA] rounded-2xl p-4 border border-black/5 flex gap-3 items-start">
                    <FaQuoteLeft className="w-4 h-4 text-[#CCFF00] flex-shrink-0 mt-1" />
                    <p className="text-black/75 text-[11px] font-medium italic leading-relaxed">
                      "{item.testimonial}"
                    </p>
                  </div>
                </div>

                {/* Footer of the card */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-black/5">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map(t => (
                      <span key={t} className="text-[9px] font-black uppercase border border-black/10 bg-[#F8F9FA] px-2.5 py-1 rounded-full text-black/70">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider bg-[#CCFF00] border-2 border-black px-4 py-1.5 rounded-full text-black">
                    Result: {item.outcome.split('.')[0]}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
