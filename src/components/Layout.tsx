import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { FaFilePdf, FaArrowUp, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { SocialSidebar } from '@/components/ui/SocialSidebar';
import { ResumeModal } from '@/components/ui/ResumeModal';
import BubbleMenu from '@/components/ui/BubbleMenu';
import { ScrollVelocity } from '@/components/ui/ScrollVelocity';

const Logo = () => (
  <Link
    to="/"
    className="inline-flex items-center bg-[#CCFF00] text-black font-black text-[14px] px-4 py-1.5 rounded-full tracking-tight hover:scale-105 transition-transform"
  >
    ROHIT
  </Link>
);

const menuItems = [
  { label: 'home',           href: '/',               ariaLabel: 'Home',           rotation: -8,  hoverStyles: { bgColor: '#CCFF00', textColor: '#000000' } },
  { label: 'origin',         href: '#about',          ariaLabel: 'Origin',         rotation:  6,  hoverStyles: { bgColor: '#CCFF00', textColor: '#000000' } },
  { label: 'skills',         href: '/skills',         ariaLabel: 'Skills',         rotation: -6,  hoverStyles: { bgColor: '#CCFF00', textColor: '#000000' } },
  { label: 'projects',       href: '/projects',       ariaLabel: 'Projects',       rotation:  6,  hoverStyles: { bgColor: '#CCFF00', textColor: '#000000' } },
  { label: 'client work',    href: '/client-work',    ariaLabel: 'Client Work',    rotation: -8,  hoverStyles: { bgColor: '#CCFF00', textColor: '#000000' } },
  { label: 'experience',     href: '/experience',     ariaLabel: 'Experience',     rotation:  6,  hoverStyles: { bgColor: '#CCFF00', textColor: '#000000' } },
  { label: 'learning',       href: '/certifications', ariaLabel: 'Learning Archive', rotation: -6, hoverStyles: { bgColor: '#CCFF00', textColor: '#000000' } },
  { label: 'contact',        href: '#contact',        ariaLabel: 'Contact',        rotation:  8,  hoverStyles: { bgColor: '#CCFF00', textColor: '#000000' } },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [resumeOpen, setResumeOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMenuClick = (item: typeof menuItems[0]) => {
    // If contact clicked, smooth scroll to contact section (which is in the footer/contact area on all pages)
    if (item.href.startsWith('#')) {
      const el = document.querySelector(item.href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full relative min-h-screen flex flex-col bg-white">
      {/* Top scroll velocity ticker */}
      <div className="w-full bg-black text-[#CCFF00] py-2 border-b-2 border-black z-30 overflow-hidden relative h-8 flex items-center">
        <ScrollVelocity
          texts={[
            "BUILD • LEARN • ITERATE • SHIP • BUILD • LEARN • ITERATE • SHIP"
          ]}
          velocity={20}
          className="text-[10px] font-black tracking-widest uppercase"
          parallaxClassName="py-0.5"
          numCopies={8}
        />
      </div>
      {/* Dynamic BubbleMenu linked to routes */}
      <BubbleMenu
        logo={<Logo />}
        items={menuItems}
        menuAriaLabel="Toggle navigation"
        menuBg="#ffffff"
        menuContentColor="#0038FF"
        useFixedPosition={true}
        animationEase="back.out(1.7)"
        animationDuration={0.48}
        staggerDelay={0.1}
      />

      {/* Persistent Left Sidebar: Social columns */}
      <SocialSidebar />

      {/* Persistent Floating Back-to-Top Button (Bottom Right) */}
      <div className="fixed right-6 bottom-6 z-40">
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          className="w-12 h-12 rounded-full border-2 border-black bg-white flex items-center justify-center text-black hover:bg-[#CCFF00] shadow-lg transition-colors duration-300"
          title="Back to Top"
        >
          <FaArrowUp className="w-4 h-4" />
        </motion.button>
      </div>

      {/* Persistent Right Sidebar: Resume Column */}
      <div className="fixed right-6 bottom-1/2 translate-y-1/2 z-40 hidden md:flex flex-col gap-4">
        <div 
          className="flex flex-col items-center gap-4 px-3 py-6 rounded-full border border-white/20 bg-black/40 backdrop-blur-md shadow-2xl relative animate-in fade-in slide-in-from-right-8 duration-500"
          style={{
            boxShadow: '0 8px 32px 0 rgba(0, 56, 255, 0.15)',
          }}
        >
          {/* Glow indicator at the top */}
          <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] mx-auto animate-pulse" />

          {/* Resume hub button */}
          <motion.button
            onClick={() => setResumeOpen(true)}
            whileHover={{ scale: 1.15, y: -2 }}
            className="w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-black hover:bg-[#CCFF00] border border-white/10 hover:border-transparent transition-colors duration-300 relative group cursor-pointer"
            aria-label="Open Resume Hub"
          >
            <FaFilePdf className="w-5 h-5 text-[#CCFF00] group-hover:text-black transition-colors" />

            {/* Tooltip */}
            <span className="absolute right-14 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 px-3 py-1.5 rounded-lg bg-black text-[#CCFF00] text-[10px] font-black uppercase tracking-widest pointer-events-none transition-all duration-300 shadow-xl border border-[#CCFF00]/20 whitespace-nowrap">
              RESUME
            </span>
          </motion.button>
        </div>
      </div>

      {/* Main Page Content Wrapper with smooth entry transition */}
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="flex-1 w-full"
      >
        {children}
      </motion.main>

      {/* Persistent Action Hub Footer */}
      <footer className="bg-black text-white py-16 px-6 md:px-10 border-t-4 border-black relative z-10 w-full mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Branding Column */}
            <div className="md:col-span-2 flex flex-col gap-4">
              <span className="inline-block bg-[#CCFF00] text-black font-black text-xs px-4 py-1.5 rounded-full w-fit tracking-wider uppercase">
                ROHIT DUBEY
              </span>
              <p className="text-white/50 text-sm max-w-sm font-medium leading-relaxed">
                A personal product and portfolio hub built to demonstrate engineering case studies, client outcomes, and core competencies.
              </p>
              <div className="flex gap-2.5 mt-2">
                {[
                  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/rohit--dubey03/' },
                  { icon: FaGithub, href: 'https://github.com/anakinskywalker0903' },
                  { icon: MdEmail, href: 'mailto:rohit@rohitdubey.dev' },
                  { icon: FaWhatsapp, href: 'https://wa.me/918777453162' },
                ].map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#CCFF00] hover:text-black transition-all duration-300"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="flex flex-col gap-3">
              <h4 className="text-[#CCFF00] font-black text-xs tracking-widest uppercase mb-1">
                NAVIGATE
              </h4>
              <Link to="/" className="text-white/60 hover:text-white text-sm font-bold w-fit transition-colors">Home / About</Link>
              <Link to="/skills" className="text-white/60 hover:text-white text-sm font-bold w-fit transition-colors">Toolkit</Link>
              <Link to="/experience" className="text-white/60 hover:text-white text-sm font-bold w-fit transition-colors">Timeline</Link>
              <Link to="/client-work" className="text-white/60 hover:text-white text-sm font-bold w-fit transition-colors">Client Work</Link>
              <Link to="/certifications" className="text-white/60 hover:text-white text-sm font-bold w-fit transition-colors">Learning Archive</Link>
            </div>

            {/* Resumes Column */}
            <div className="flex flex-col gap-3">
              <h4 className="text-[#CCFF00] font-black text-xs tracking-widest uppercase mb-1">
                DOCUMENTS
              </h4>
              <button
                onClick={() => setResumeOpen(true)}
                className="text-left text-white/60 hover:text-white text-sm font-bold w-fit transition-colors"
              >
                AI Engineer Resume
              </button>
              <button
                onClick={() => setResumeOpen(true)}
                className="text-left text-white/60 hover:text-white text-sm font-bold w-fit transition-colors"
              >
                Full Stack / SDE Resume
              </button>
              <button
                onClick={() => setResumeOpen(true)}
                className="text-left text-white/60 hover:text-white text-sm font-bold w-fit transition-colors"
              >
                Frontend Developer Resume
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/10 gap-4 text-white/40 text-xs">
            <p className="font-bold uppercase tracking-wider">
              © {new Date().getFullYear()} ROHIT DUBEY. ALL RIGHTS RESERVED.
            </p>
            <p className="font-black uppercase tracking-widest text-[#CCFF00]/60">
              v2.0 • BUILT WITH REACT, THREE.JS, &amp; GSAP
            </p>
          </div>
        </div>
      </footer>

      {/* Global Resume Picker Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
