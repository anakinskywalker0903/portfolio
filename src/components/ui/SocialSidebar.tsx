import { motion } from 'motion/react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const socialLinks = [
  {
    icon: FaLinkedin,
    href: 'https://linkedin.com/in/rohit-dubey',
    label: 'LinkedIn',
    color: '#0077B5',
  },
  {
    icon: FaGithub,
    href: 'https://github.com/anakinskywalker0903',
    label: 'GitHub',
    color: '#181717',
  },
  {
    icon: MdEmail,
    href: 'mailto:rohit@rohitdubey.dev',
    label: 'Email',
    color: '#EA4335',
  },
  {
    icon: FaWhatsapp,
    href: 'https://wa.me/919999999999', // Placeholder number, easy to swap
    label: 'WhatsApp',
    color: '#25D366',
  },
];

export function SocialSidebar() {
  return (
    <div className="fixed left-6 bottom-1/2 translate-y-1/2 z-40 hidden md:flex flex-col gap-4">
      <div 
        className="flex flex-col gap-4 px-3 py-6 rounded-full border border-white/20 bg-black/40 backdrop-blur-md shadow-2xl relative"
        style={{
          boxShadow: '0 8px 32px 0 rgba(0, 56, 255, 0.15)',
        }}
      >
        {/* Glow indicator at the top */}
        <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] mx-auto animate-pulse" />

        {socialLinks.map((social, idx) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.15, y: -2 }}
              className="w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-black hover:bg-[#CCFF00] border border-white/10 hover:border-transparent transition-colors duration-300 relative group"
            >
              <Icon className="w-5 h-5" />
              
              {/* Tooltip */}
              <span className="absolute left-14 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 px-3 py-1.5 rounded-lg bg-black text-[#CCFF00] text-[10px] font-black uppercase tracking-widest pointer-events-none transition-all duration-300 shadow-xl border border-[#CCFF00]/20 whitespace-nowrap">
                {social.label}
              </span>
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}
