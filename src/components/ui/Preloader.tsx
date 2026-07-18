import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fast tick progress counter from 0 to 100
    const duration = 2000; // 2 seconds
    const intervalTime = 20; // tick every 20ms
    const totalSteps = duration / intervalTime;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const current = Math.min(Math.floor((step / totalSteps) * 100), 100);
      setProgress(current);

      if (current >= 100) {
        clearInterval(timer);
        // Add a small delay for the glow animation before completing
        setTimeout(() => {
          onComplete();
        }, 600);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Initial letter animation variants
  const letterVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number], // Cubic-bezier easeOutQuad/Cubic
      },
    }),
  };

  const shadow3D = '1px 1px 0 #001A99, 2px 2px 0 #001A99, 3px 3px 0 #001A99, 4px 4px 0 #001A99, 5px 5px 0 #001A99, 6px 6px 0 #001A99';

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ 
        y: '-100vh',
        transition: { 
          duration: 0.95, 
          ease: [0.85, 0, 0.15, 1] as [number, number, number, number] // Custom easing for premium slide-up feel
        }
      }}
      className="fixed inset-0 z-[999] bg-[#00083A] flex flex-col items-center justify-center select-none"
    >
      {/* Subtle grid pattern matching website theme */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      {/* Main initials R.D. */}
      <div className="relative flex items-center justify-center gap-1 mb-8 z-10">
        {['R', '.', 'D', '.'].map((char, index) => (
          <motion.span
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={letterVariants}
            className="text-7xl md:text-9xl font-black uppercase tracking-tight text-white"
            style={{
              fontFamily: '"Arial Black", Impact, sans-serif',
              textShadow: char !== '.' ? shadow3D : undefined,
              color: char === '.' ? '#CCFF00' : 'white'
            }}
          >
            {char}
          </motion.span>
        ))}
      </div>

      {/* Progress indicators */}
      <div className="relative z-10 flex flex-col items-center gap-3">
        {/* Loading bar */}
        <div className="w-40 h-[3px] bg-white/10 rounded-full overflow-hidden border border-white/5">
          <motion.div 
            className="h-full bg-[#CCFF00]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: 'easeOut', duration: 0.1 }}
          />
        </div>

        {/* Monospace progress percent */}
        <span 
          className="text-xs font-bold tracking-widest text-[#CCFF00] font-mono"
          style={{ textShadow: '0 0 10px rgba(204,255,0,0.3)' }}
        >
          {String(progress).padStart(3, '0')}%
        </span>
      </div>
    </motion.div>
  );
}
export default Preloader;
