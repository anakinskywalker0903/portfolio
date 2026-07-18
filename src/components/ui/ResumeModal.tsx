import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { IoClose } from 'react-icons/io5';
import { FaFilePdf, FaDownload, FaEye } from 'react-icons/fa';

import aiResume from '@/assets/resumes/Rohit_s_Resume_AI.pdf';
import frontendResume from '@/assets/resumes/Rohit_s_Resume_Frontend.pdf';
import sdeResume from '@/assets/resumes/Rohit_s_Resume_SDE.pdf';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const resumeVersions = [
  {
    id: 'ai-engineer',
    role: 'AI Engineer',
    description: 'Focused on LLMs, RAG pipelines, fine-tuning, and machine learning architectures.',
    fileUrl: aiResume,
  },
  {
    id: 'full-stack-sde',
    role: 'Full Stack / SDE',
    description: 'End-to-end web applications, system design, robust APIs, and database engineering.',
    fileUrl: sdeResume,
  },
  {
    id: 'frontend',
    role: 'Frontend Developer',
    description: 'Creative animations, pixel-perfect layouts, responsive design, and rich UI/UX products.',
    fileUrl: frontendResume,
  },
];

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [activePreview, setActivePreview] = useState<typeof resumeVersions[0] | null>(null);

  const handleClose = () => {
    setActivePreview(null);
    onClose();
  };

  const handleAction = (type: 'preview' | 'download', version: typeof resumeVersions[0]) => {
    if (type === 'preview') {
      setActivePreview(version);
    } else {
      const link = document.createElement('a');
      link.href = version.fileUrl;
      link.download = `${version.role.replace(/\s+/g, '_')}_Resume_Rohit_Dubey.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/75 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 16 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className={`relative w-full ${activePreview ? 'max-w-5xl h-[85vh]' : 'max-w-2xl'} bg-white border-[3px] border-black rounded-[2.5rem] shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh] transition-all duration-300`}
          >
            {activePreview ? (
              <div className="flex-1 flex flex-col h-full overflow-hidden bg-[#121212]">
                {/* PDF Header controls */}
                <div className="flex items-center justify-between px-6 py-4 bg-black border-b-2 border-black/10 z-10 flex-shrink-0">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setActivePreview(null)}
                      className="px-4 py-1.5 rounded-full border-2 border-white/20 text-xs font-black uppercase text-white hover:bg-[#CCFF00] hover:text-black hover:border-black transition-all cursor-pointer"
                    >
                      ← Back
                    </button>
                    <span className="font-bold text-sm text-white uppercase tracking-wider">{activePreview.role} Resume Preview</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleAction('download', activePreview)}
                      className="flex items-center gap-1.5 px-4 py-1.5 bg-[#CCFF00] text-black font-black text-xs rounded-full border-2 border-black hover:scale-105 active:scale-95 transition-all cursor-pointer"
                    >
                      <FaDownload className="w-3.5 h-3.5" /> Download PDF
                    </button>
                    <button
                      onClick={handleClose}
                      className="w-8 h-8 rounded-full border-2 border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all cursor-pointer"
                    >
                      <IoClose className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* PDF Frame wrapper */}
                <div className="flex-1 w-full bg-[#1e1e1e] relative overflow-y-auto">
                  <iframe
                    src={`${activePreview.fileUrl}#toolbar=0&navpanes=0&view=FitH`}
                    title={`${activePreview.role} Resume Preview`}
                    className="w-full border-none bg-[#1e1e1e] block"
                    style={{ height: '1400px' }}
                    scrolling="no"
                  />
                </div>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="flex items-center justify-between px-8 py-6 border-b-2 border-black bg-[#0038FF]/5">
                  <div>
                    <span className="inline-block bg-[#CCFF00] text-black text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-1 border border-black">
                      RECRUITER HUB
                    </span>
                    <h3 className="text-2xl font-black text-black tracking-tight uppercase" style={{ fontFamily: '"Arial Black", sans-serif' }}>
                      CHOOSE RESUME
                    </h3>
                  </div>
                  
                  <button
                    onClick={handleClose}
                    className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    <IoClose className="w-5 h-5" />
                  </button>
                </div>

                {/* Content List */}
                <div className="p-8 flex-1 overflow-y-auto flex flex-col gap-4">
                  {resumeVersions.map((version) => (
                    <div
                      key={version.id}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl border-2 border-transparent hover:border-black bg-[#F8F9FA] hover:bg-white transition-all duration-300 group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-[#0038FF]/10 text-[#0038FF] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0038FF] group-hover:text-white transition-colors duration-300">
                          <FaFilePdf className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-black text-black text-lg leading-tight uppercase">
                            {version.role}
                          </h4>
                          <p className="text-black/60 text-xs mt-1 max-w-md font-medium leading-relaxed">
                            {version.description}
                          </p>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-2 sm:self-center">
                        <button
                          onClick={() => handleAction('preview', version)}
                          className="px-4 py-2 text-xs font-black uppercase tracking-wider border-2 border-black rounded-full hover:bg-black hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <FaEye className="w-3.5 h-3.5" />
                          Preview
                        </button>
                        <button
                          onClick={() => handleAction('download', version)}
                          className="px-4 py-2 text-xs font-black uppercase tracking-wider bg-[#CCFF00] hover:bg-black border-2 border-black text-black hover:text-white rounded-full flex items-center gap-1.5 transition-colors shadow-sm cursor-pointer"
                        >
                          <FaDownload className="w-3.5 h-3.5" />
                          Download
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="p-6 bg-[#F8F9FA] border-t-2 border-black text-center text-black/50 text-[10px] font-black uppercase tracking-wider">
                  Rohit Dubey • Engineering Portfolio 2026
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
