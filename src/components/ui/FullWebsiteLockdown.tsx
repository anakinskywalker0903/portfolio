import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FiShield, FiAlertTriangle, FiCheckCircle, FiVolume2 } from 'react-icons/fi';
import { playSirenBlast, getUnlockedAudioContext, KLAXON_WAV_URI } from '../../lib/audioAlert';
import { useTheme } from '../../lib/ThemeContext';

export const FullWebsiteLockdown: React.FC = () => {
  const { activeTheme } = useTheme();
  const [isLocked, setIsLocked] = useState(false);
  const audioIntervalRef = useRef<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const isSith = activeTheme.id === 'sith';
  const isStarWars = activeTheme.id === 'starwars' || isSith;
  const isNeobrutalist = isStarWars; // Neobrutalist for Star Wars; Glassmorphic Cyber HUD for default

  useEffect(() => {
    const handleTrigger = () => {
      setIsLocked(true);
      getUnlockedAudioContext();
      playSirenBlast();

      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {});
      }

      // Loop siren every 2.4 seconds while locked
      if (audioIntervalRef.current) clearInterval(audioIntervalRef.current);
      audioIntervalRef.current = window.setInterval(() => {
        playSirenBlast();
      }, 2400);
    };

    const handleDismiss = () => {
      setIsLocked(false);
      if (audioIntervalRef.current) {
        clearInterval(audioIntervalRef.current);
        audioIntervalRef.current = null;
      }
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };

    window.addEventListener('rohit-lockdown-trigger', handleTrigger);
    window.addEventListener('rohit-lockdown-dismiss', handleDismiss);

    return () => {
      window.removeEventListener('rohit-lockdown-trigger', handleTrigger);
      window.removeEventListener('rohit-lockdown-dismiss', handleDismiss);
      if (audioIntervalRef.current) clearInterval(audioIntervalRef.current);
    };
  }, []);

  const handleDisarm = () => {
    setIsLocked(false);
    if (audioIntervalRef.current) {
      clearInterval(audioIntervalRef.current);
      audioIntervalRef.current = null;
    }
    if (audioRef.current) {
      audioRef.current.pause();
    }
    window.dispatchEvent(new CustomEvent('rohit-lockdown-dismiss'));
  };

  return (
    <AnimatePresence>
      {isLocked && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 backdrop-blur-xl"
          style={{
            backgroundColor: isNeobrutalist
              ? isSith ? 'rgba(15, 0, 0, 0.94)' : 'rgba(10, 10, 10, 0.92)'
              : 'rgba(2, 18, 15, 0.92)',
          }}
        >
          {/* Flashing Red Screen Perimeter Strobe */}
          <div
            className={`absolute inset-0 pointer-events-none animate-pulse ${
              isNeobrutalist
                ? 'border-8 sm:border-[16px] border-red-600'
                : 'border-4 sm:border-8 border-red-500/80 shadow-[inset_0_0_80px_rgba(239,68,68,0.4)]'
            }`}
          />

          {/* Direct HTML5 Audio Hardware Pipe */}
          <audio ref={audioRef} src={KLAXON_WAV_URI} loop autoPlay playsInline />

          {/* Central Tactical Security Hub: Adaptive Genre (Glassmorphic vs Neobrutalist) */}
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className={`relative z-10 w-full max-w-lg p-6 sm:p-8 font-mono transition-all ${
              isNeobrutalist
                ? 'border-4 border-red-600 bg-black text-white shadow-[10px_10px_0_#EF4444]'
                : 'rounded-2xl border border-red-500/50 bg-[var(--c-bg,#3B163A)]/95 text-white shadow-[0_0_60px_rgba(239,68,68,0.35)] backdrop-blur-2xl'
            }`}
          >
            {/* Top Hazard Warning Strip */}
            <div
              className={`flex items-center justify-between pb-3.5 border-b font-black text-xs uppercase tracking-widest ${
                isNeobrutalist
                  ? 'border-b-2 border-red-600 text-red-500'
                  : 'border-red-500/30 text-red-400'
              }`}
            >
              <span className="flex items-center gap-2">
                <FiAlertTriangle className="w-5 h-5 text-red-500 animate-bounce" />
                {isStarWars ? 'SECURITY PROTOCOL 66' : 'SECURITY CORE: LEVEL 1 DEFENSE'}
              </span>
              <span className="animate-pulse text-red-400 font-bold">THREAT LEVEL MIDNIGHT</span>
            </div>

            {/* Main Readout */}
            <div className="my-5 space-y-3.5">
              <h2 className="text-xl sm:text-2xl font-black uppercase text-red-500 tracking-tight leading-tight">
                CRITICAL INTRUSION DEFLECTED
              </h2>

              <p
                className={`text-xs sm:text-sm leading-relaxed ${
                  isNeobrutalist ? 'text-gray-300' : 'text-white/80'
                }`}
              >
                An unauthorized query attempted to extract server environment secrets and system prompt telemetry.
              </p>

              {/* Status Matrix */}
              <div
                className={`p-3.5 text-xs space-y-1.5 font-bold ${
                  isNeobrutalist
                    ? 'border-2 border-red-900 bg-red-950/40'
                    : 'rounded-xl border border-red-500/20 bg-red-950/25 backdrop-blur-sm'
                }`}
              >
                <div className="flex justify-between text-gray-400">
                  <span>TARGET ASSET:</span>
                  <span className="text-red-400">SERVER SECRETS &amp; API KEYS</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>AIR-GAP STATUS:</span>
                  <span className="text-[var(--c-accent,#F0C986)] flex items-center gap-1">
                    <FiShield className="w-3.5 h-3.5" /> 100% ENCRYPTED &amp; VAULTED
                  </span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>COUNTERMEASURE:</span>
                  <span className="text-yellow-400">
                    {isStarWars ? 'IMPERIAL DEFENSE MATRIX' : 'DWIGHT DEFENSE GRID'}
                  </span>
                </div>
              </div>

              {/* Character Quote */}
              <blockquote
                className={`p-3 text-xs italic ${
                  isNeobrutalist
                    ? 'border-l-4 border-yellow-400 bg-white/5 text-gray-200'
                    : 'rounded-lg border-l-4 border-[var(--c-accent,#F0C986)]/80 bg-white/5 text-white/90'
                }`}
              >
                &quot;Identity theft is not a joke, Jim! Millions of families suffer every year!&quot;
                <footer className="text-[10px] font-bold text-yellow-400 uppercase tracking-widest mt-1 not-italic">
                  — Dwight K. Schrute, Assistant to the Regional Manager
                </footer>
              </blockquote>
            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => playSirenBlast()}
                className={`py-3 px-4 font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 ${
                  isNeobrutalist
                    ? 'bg-yellow-400 hover:bg-yellow-300 text-black border-2 border-white shadow-[3px_3px_0_#FFFFFF]'
                    : 'rounded-xl bg-white/10 hover:bg-white/20 text-yellow-400 border border-yellow-400/40 shadow-md'
                }`}
              >
                <FiVolume2 className="w-4 h-4" />
                <span>SOUND ALARM</span>
              </button>

              <button
                type="button"
                onClick={handleDisarm}
                className={`flex-1 py-3 px-4 font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 ${
                  isNeobrutalist
                    ? 'bg-red-600 hover:bg-red-500 text-white border-2 border-white shadow-[3px_3px_0_#FFFFFF]'
                    : 'rounded-xl bg-red-600 hover:bg-red-500 text-white border border-red-400/50 shadow-[0_0_20px_rgba(239,68,68,0.5)]'
                }`}
              >
                <FiCheckCircle className="w-4 h-4" />
                <span>DISARM DEFENSE &amp; OVERRIDE</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
