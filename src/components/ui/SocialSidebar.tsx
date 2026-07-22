import { motion } from 'motion/react';
import { FaLinkedin, FaGithub, FaWhatsapp, FaFilePdf } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import {
  trackLinkedInClick,
  trackGithubClick,
  trackEmailClick,
  trackWhatsappClick,
  trackEvent
} from '@/lib/analytics';

const socialLinks = [
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/rohit--dubey03/',
    label: 'LinkedIn',
    track: () => trackLinkedInClick('Right Action Dock'),
  },
  {
    icon: FaGithub,
    href: 'https://github.com/anakinskywalker0903',
    label: 'GitHub',
    track: () => trackGithubClick('Right Action Dock'),
  },
  {
    icon: MdEmail,
    href: 'mailto:rohitdubey39005@gmail.com',
    label: 'Email',
    track: () => trackEmailClick('Right Action Dock'),
  },
  {
    icon: FaWhatsapp,
    href: 'https://wa.me/918777453162',
    label: 'WhatsApp',
    track: () => trackWhatsappClick('Right Action Dock'),
  },
];

export function RightActionDock({ onResumeOpen }: { onResumeOpen: () => void }) {
  const handleResumeClick = () => {
    trackEvent('Resume Hub Click', 'Resume', 'Right Action Dock');
    onResumeOpen();
  };

  return (
    <div className="fixed right-2.5 sm:right-5 bottom-1/2 translate-y-1/2 z-40 flex flex-col gap-3">
      <div 
        className="flex flex-col items-center gap-2 sm:gap-3 px-1.5 py-3 sm:px-3 sm:py-5 rounded-full border border-white/25 bg-black/25 hover:bg-black/50 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-300 relative"
        style={{
          boxShadow: '0 8px 32px 0 rgba(0, 56, 255, 0.15)',
        }}
      >
        {/* Glow indicator at the top */}
        <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] mx-auto animate-pulse mb-0.5" />

        {/* Resume button */}
        <motion.button
          onClick={handleResumeClick}
          whileHover={{ scale: 1.15, x: -2 }}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-[#CCFF00] hover:text-black bg-black/30 hover:bg-[#CCFF00] border border-white/20 hover:border-transparent transition-all duration-300 relative group cursor-pointer"
          aria-label="Open Resume Hub"
        >
          <FaFilePdf className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#CCFF00] group-hover:text-black transition-colors" />
          <span className="absolute right-12 sm:right-14 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 px-3 py-1.5 rounded-lg bg-black text-[#CCFF00] text-[10px] font-black uppercase tracking-widest pointer-events-none transition-all duration-200 shadow-xl border border-[#CCFF00]/20 whitespace-nowrap">
            RESUME
          </span>
        </motion.button>

        {/* Separator line */}
        <span className="w-4 h-[1px] bg-white/20 my-0.5" />

        {/* Social Links */}
        {socialLinks.map((social, idx) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              onClick={social.track}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.3 }}
              whileHover={{ scale: 1.15, x: -2 }}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white/80 hover:text-black bg-black/30 hover:bg-[#CCFF00] border border-white/20 hover:border-transparent transition-all duration-300 relative group"
            >
              <Icon className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
              <span className="absolute right-12 sm:right-14 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 px-3 py-1.5 rounded-lg bg-black text-[#CCFF00] text-[10px] font-black uppercase tracking-widest pointer-events-none transition-all duration-200 shadow-xl border border-[#CCFF00]/20 whitespace-nowrap">
                {social.label}
              </span>
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}

// Backward-compatible alias
export const SocialSidebar = RightActionDock;
