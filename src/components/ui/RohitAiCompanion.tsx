import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  FiMessageSquare,
  FiX,
  FiSend,
  FiRotateCcw,
  FiExternalLink,
  FiChevronRight,
  FiChevronLeft,
  FiMaximize2,
  FiMinimize2,
  FiAward,
  FiCode,
  FiCompass,
  FiBriefcase,
  FiSliders,
} from 'react-icons/fi';
import { FaFilePdf } from 'react-icons/fa';
import { useTheme } from '../../lib/ThemeContext';
import { playSirenBlast, getUnlockedAudioContext } from '../../lib/audioAlert';
import {
  trackChittiOpen,
  trackChittiMessageSent,
  trackChittiChipClick,
  trackChittiActionClick,
  trackChittiSecurityAlert,
} from '../../lib/analytics';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const STARTER_PROMPTS = [
  { label: '💼 Why hire Rohit?', prompt: 'Why should a company hire you as an AI or Full-Stack Engineer?' },
  { label: '🚀 Hardest project bug?', prompt: 'What was your hardest bug, and how did you solve it?' },
  { label: '🥦 Honest take on DSA?', prompt: 'What is your honest take on DSA versus building projects?' },
  { label: '🏎️ Diecast, bikes & The Office?', prompt: 'Tell me about your diecast collection, bikes, and favorite The Office joke!' },
];

/**
 * Custom High-Tech Cyber Avatar for Chitti (Rohit's AI Twin).
 * Theme-adaptive: Sleek glowing cyan/emerald in default Cyber Green;
 * Bold high-contrast Neobrutalist with Sith red or Star Wars accents.
 */
const ChittiAvatar: React.FC<{ isNeobrutalist?: boolean; isSith?: boolean; size?: number }> = ({
  isNeobrutalist = false,
  isSith = false,
  size = 36,
}) => {
  const accentColor = isSith ? '#FF2020' : isNeobrutalist ? '#FFE81F' : 'var(--c-accent, #00F5A0)';
  const visorGlow = isSith ? 'rgba(255, 32, 32, 0.7)' : isNeobrutalist ? 'rgba(255, 232, 31, 0.7)' : 'rgba(0, 245, 160, 0.7)';

  return (
    <div
      className={`relative flex items-center justify-center shrink-0 ${
        isNeobrutalist
          ? 'border-2 border-black bg-white shadow-[2px_2px_0_#000]'
          : 'rounded-xl border border-white/20 shadow-md backdrop-blur-md'
      }`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: isNeobrutalist
          ? isSith ? '#1A0808' : '#FFFFFF'
          : 'linear-gradient(135deg, rgba(3, 23, 20, 0.95) 0%, rgba(4, 48, 40, 0.95) 100%)',
      }}
    >
      <svg
        width={Math.round(size * 0.72)}
        height={Math.round(size * 0.72)}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300"
      >
        {/* Antenna / Neural Transmitter */}
        <path d="M16 2.5v4" stroke={accentColor} strokeWidth="2" strokeLinecap="round" />
        <circle cx="16" cy="2.5" r="1.5" fill={accentColor} />

        {/* Cyber Ear Sensors */}
        <rect
          x="2"
          y="11"
          width="3"
          height="9"
          rx="1.5"
          fill={accentColor}
          stroke={isNeobrutalist ? '#000000' : 'none'}
          strokeWidth="1"
        />
        <rect
          x="27"
          y="11"
          width="3"
          height="9"
          rx="1.5"
          fill={accentColor}
          stroke={isNeobrutalist ? '#000000' : 'none'}
          strokeWidth="1"
        />

        {/* Head Chassis */}
        <rect
          x="5"
          y="6.5"
          width="22"
          height="19"
          rx="4.5"
          fill={isNeobrutalist ? (isSith ? '#2A0B0B' : '#FFFFFF') : '#042420'}
          stroke={isNeobrutalist ? '#000000' : accentColor}
          strokeWidth={isNeobrutalist ? '2' : '1.5'}
        />

        {/* Visor Screen */}
        <rect
          x="7.5"
          y="10.5"
          width="17"
          height="8.5"
          rx="2.5"
          fill={isNeobrutalist && !isSith ? '#121212' : '#01120F'}
          stroke={isNeobrutalist ? '#000000' : 'rgba(255,255,255,0.15)'}
          strokeWidth="1"
        />

        {/* Visor Optics (Dual Glowing Cyber Eyes) */}
        <rect x="9.5" y="13" width="4" height="3" rx="1" fill={accentColor} />
        <rect x="18.5" y="13" width="4" height="3" rx="1" fill={accentColor} />

        {/* Voice Synth / Smile Waveform */}
        <line
          x1="11.5"
          y1="21.5"
          x2="20.5"
          y2="21.5"
          stroke={accentColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.85"
        />
      </svg>

      {/* Online Neural Pulse Badge */}
      <span
        className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-black"
        style={{
          backgroundColor: accentColor,
          boxShadow: `0 0 6px ${visorGlow}`,
        }}
      />
    </div>
  );
};

export const RohitAiCompanion: React.FC = () => {
  const { activeTheme, setTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLockdown, setIsLockdown] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        "Hi! I'm **Chitti** (Rohit's AI Twin) — Speed 1 terahertz, memory 1 zettabyte!\n\nI know everything about my projects (NoteLift's 420+ installs, StylistAI, DevInterio), my AI internship at Ashtayah Labs, my Star Wars handle origin, or why DSA is basically 'karela' to me. Ask me anything in English or Hinglish!",
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const chipsScrollRef = useRef<HTMLDivElement>(null);
  const executedActionsRef = useRef<Set<string>>(new Set());

  // Universal browser action executor
  const executeAction = (type: string, param: string) => {
    const normType = type.toUpperCase().trim();
    const cleanParam = (param || '').trim();

    switch (normType) {
      case 'NAVIGATE': {
        if (cleanParam) {
          navigate(cleanParam);
        }
        break;
      }
      case 'SCROLL': {
        if (cleanParam) {
          const id = cleanParam.replace('/#', '').replace('#', '');
          if (location.pathname !== '/') {
            navigate('/#' + id);
          }
          setTimeout(() => {
            const el = document.getElementById(id);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }, 180);
        }
        break;
      }
      case 'OPEN_RESUME': {
        window.dispatchEvent(
          new CustomEvent('rohit-open-resume', {
            detail: { role: cleanParam || null },
          })
        );
        break;
      }
      case 'SET_THEME': {
        if (cleanParam && setTheme) {
          setTheme(cleanParam);
        }
        break;
      }
      default:
        break;
    }
  };

  // Smooth Natural Pacing Typewriter Queue
  const typeQueueRef = useRef<{
    target: string;
    displayed: string;
    timer: number | null;
  }>({ target: '', displayed: '', timer: null });
  const isStreamingRef = useRef(false);

  // Clear timer helper
  const stopTypewriter = () => {
    if (typeQueueRef.current.timer) {
      clearInterval(typeQueueRef.current.timer);
      typeQueueRef.current.timer = null;
    }
    isStreamingRef.current = false;
  };

  useEffect(() => {
    return () => stopTypewriter();
  }, []);

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    const onDismiss = () => setIsLockdown(false);
    window.addEventListener('rohit-lockdown-dismiss', onDismiss);
    return () => {
      window.removeEventListener('rohit-lockdown-dismiss', onDismiss);
      // Ensure Lenis smooth scroll resumes if component unmounts
      (window as any).lenis?.start();
    };
  }, []);

  const handleDismissLockdown = () => {
    setIsLockdown(false);
    window.dispatchEvent(new CustomEvent('rohit-lockdown-dismiss'));
  };

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text || isLoading) return;

    // Disarm any lingering alert when moving forward with conversation
    if (isLockdown) {
      handleDismissLockdown();
    }

    // Prime Web Audio context immediately during the user click/keypress gesture
    getUnlockedAudioContext();

    trackChittiMessageSent(text);

    const newMessages: Message[] = [...messages, { role: 'user', content: text }];
    setMessages(newMessages);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content.replace(/\[SECURITY_BREACH_ALERT\]/g, '').trim(),
          })),
        }),
      });

      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }

      if (!response.body) {
        throw new Error('No readable stream available');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantReply = '';
      let breachTriggeredForStream = false;

      setMessages((prev) => [...prev, { role: 'assistant', content: '' }]);

      stopTypewriter();
      isStreamingRef.current = true;
      typeQueueRef.current = { target: '', displayed: '', timer: null };

      // Typewriter pacing ticker at comfortable human reading speed (~120 chars/sec)
      const startPacingTicker = () => {
        if (typeQueueRef.current.timer) return;

        typeQueueRef.current.timer = window.setInterval(() => {
          const { target, displayed } = typeQueueRef.current;

          if (displayed.length < target.length) {
            const diff = target.length - displayed.length;
            // Snappy, responsive pacing: fast and natural, never sluggish
            const step = !isStreamingRef.current
              ? (diff > 50 ? 16 : diff > 20 ? 8 : 4)
              : (diff > 120 ? 12 : diff > 50 ? 6 : diff > 15 ? 4 : 3);
            const nextLen = Math.min(displayed.length + step, target.length);
            const nextText = target.slice(0, nextLen);
            typeQueueRef.current.displayed = nextText;

            setMessages((prev) => {
              if (!prev.length) return prev;
              const updated = [...prev];
              updated[updated.length - 1] = {
                role: 'assistant',
                content: nextText,
              };
              return updated;
            });
          } else if (!isStreamingRef.current) {
            // Network stream finished and typewriter buffer fully displayed
            stopTypewriter();
            setIsLoading(false);
          }
        }, 18);
      };

      let streamBuffer = '';

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        streamBuffer += decoder.decode(value, { stream: true });
        const lines = streamBuffer.split('\n');
        // Keep the last segment (which may be an incomplete line) in the buffer
        streamBuffer = lines.pop() || '';

        for (const rawLine of lines) {
          const line = rawLine.trim();
          if (!line.startsWith('data: ')) continue;
          const dataStr = line.slice(6).trim();
          if (dataStr === '[DONE]') continue;

          try {
            const parsed = JSON.parse(dataStr);
            const delta =
              parsed.choices?.[0]?.delta?.content ||
              parsed.candidates?.[0]?.content?.parts?.[0]?.text ||
              '';
            assistantReply += delta;

            if (assistantReply.includes('[SECURITY_BREACH_ALERT]') && !breachTriggeredForStream) {
              breachTriggeredForStream = true;
              trackChittiSecurityAlert();
              setIsLockdown(true);
              playSirenBlast();
              window.dispatchEvent(new CustomEvent('rohit-lockdown-trigger'));
            }

            // Dynamic real-time execution of assistant action commands (supports both [ACTION:...] and [A:...])
            const actionMatches = assistantReply.matchAll(/\[(?:ACTION|A):([A-Z_]+):?([^\]]*)\]/gi);
            for (const match of actionMatches) {
              const actKey = `${match[1].toUpperCase()}:${match[2]}`;
              if (!executedActionsRef.current.has(actKey)) {
                executedActionsRef.current.add(actKey);
                executeAction(match[1], match[2]);
              }
            }

            const cleanDisplay = assistantReply
              .replace(/\[SECURITY_BREACH_ALERT\]/g, '')
              .replace(/\[(?:ACTION|A):[^\]]+\]/gi, '')
              .replace(/\[(NAVIGATE|SCROLL|OPEN_RESUME|SET_THEME):[^\]]+\]/gi, '')
              .trim();
            typeQueueRef.current.target = cleanDisplay;
            startPacingTicker();
          } catch {
            // Non-JSON stream chunk
          }
        }
      }

      isStreamingRef.current = false;
      // If buffer was empty or already caught up, release loading state
      if (typeQueueRef.current.displayed.length >= typeQueueRef.current.target.length) {
        stopTypewriter();
        setIsLoading(false);
      }
    } catch {
      stopTypewriter();
      setIsLoading(false);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            "Arre! Looks like the connection hit a small hiccup or the serverless endpoint is offline during local preview. You can also connect with me directly on [LinkedIn](https://www.linkedin.com/in/rohit--dubey03/) or [WhatsApp](https://wa.me/918777453162)!",
        },
      ]);
    }
  };

  const handleReset = () => {
    stopTypewriter();
    setIsLoading(false);
    handleDismissLockdown();
    executedActionsRef.current.clear();
    setMessages([
      {
        role: 'assistant',
        content: "Cleared! Fresh start. Ask me anything about what I build, how I think, or why I code.",
      },
    ]);
  };

  // Determine active visual genre
  const isSith = activeTheme.id === 'sith';
  const isStarWars = activeTheme.id === 'starwars' || isSith;
  const isNeobrutalist = isStarWars; // Star Wars is Neobrutalist; OG / default is Glassmorphic!

  const renderInlineFormatted = (text: string) => {
    // Regex splits on markdown links, bold, italics (asterisk or underscore), and code blocks
    const parts = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|\*[^*\s][^*]*[^*\s]\*|\*[^*]+\*|`[^`]+`)/g);

    return parts.map((part, index) => {
      if (!part) return null;

      // Markdown Link: [Title](url)
      const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (linkMatch) {
        const [, linkText, rawUrl] = linkMatch;
        const url = rawUrl.trim();
        const lowerUrl = url.toLowerCase();
        const lowerText = linkText.toLowerCase();

        // 1. In-App Resume Modal Trigger (Never open raw PDF in a new tab!)
        const isResume =
          lowerUrl.includes('resume') ||
          lowerUrl.endsWith('.pdf') ||
          lowerText.includes('resume');

        if (isResume) {
          return (
            <button
              type="button"
              key={index}
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(
                  new CustomEvent('rohit-open-resume', {
                    detail: { role: linkText, url },
                  })
                );
              }}
              title="Open in Portfolio Resume Viewer"
              className={`inline-flex items-center gap-1.5 font-bold underline underline-offset-3 hover:opacity-85 transition-all cursor-pointer ${
                isNeobrutalist
                  ? 'text-black bg-[var(--c-accent)] px-1.5 py-0.5 rounded-[2px] shadow-[1.5px_1.5px_0_#000] active:translate-x-[1px] active:translate-y-[1px]'
                  : 'bg-emerald-400/15 px-2 py-0.5 rounded-md text-emerald-300 border border-emerald-400/30 hover:bg-emerald-400/25'
              }`}
            >
              <FaFilePdf className="w-3 h-3 inline text-red-500 shrink-0" />
              <span>{linkText}</span>
            </button>
          );
        }

        // 2. Hash Anchors (#about, #contact, etc.)
        if (url.startsWith('#') || url.startsWith('/#')) {
          return (
            <button
              type="button"
              key={index}
              onClick={(e) => {
                e.preventDefault();
                const id = url.replace('/#', '').replace('#', '');
                const el = document.getElementById(id);
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  navigate(url);
                }
              }}
              className={`inline-flex items-center gap-1 font-bold underline underline-offset-3 hover:opacity-80 transition-opacity cursor-pointer ${
                isNeobrutalist ? 'text-black bg-[var(--c-accent)] px-1 rounded-[2px]' : ''
              }`}
              style={!isNeobrutalist ? { color: 'var(--c-accent, #00F5A0)' } : {}}
            >
              {linkText}
            </button>
          );
        }

        // 3. Internal SPA Routes (/projects, /skills, /experience, /client-work, /certifications)
        if (url.startsWith('/') && !url.includes('.')) {
          return (
            <Link
              key={index}
              to={url}
              className={`inline-flex items-center gap-1 font-bold underline underline-offset-3 hover:opacity-80 transition-opacity ${
                isNeobrutalist ? 'text-black bg-[var(--c-accent)] px-1 rounded-[2px]' : ''
              }`}
              style={!isNeobrutalist ? { color: 'var(--c-accent, #00F5A0)' } : {}}
            >
              {linkText}
            </Link>
          );
        }

        // 4. External Links (LinkedIn, WhatsApp, GitHub, etc.)
        return (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1 font-bold underline underline-offset-3 hover:opacity-80 transition-opacity ${
              isNeobrutalist ? 'text-black bg-[var(--c-accent)] px-1 rounded-[2px]' : ''
            }`}
            style={!isNeobrutalist ? { color: 'var(--c-accent, #00F5A0)' } : {}}
          >
            {linkText} <FiExternalLink className="w-3 h-3 inline" />
          </a>
        );
      }

      // Bold: **Text**
      const boldMatch = part.match(/^\*\*([^*]+)\*\*$/);
      if (boldMatch) {
        return (
          <strong key={index} className="font-bold" style={!isNeobrutalist ? { color: '#FFFFFF' } : {}}>
            {boldMatch[1]}
          </strong>
        );
      }

      // Italic: *Text*
      const italicMatch = part.match(/^\*([^*]+)\*$/);
      if (italicMatch) {
        return (
          <em key={index} className="italic font-medium" style={!isNeobrutalist ? { color: 'rgba(255,255,255,0.95)' } : {}}>
            {italicMatch[1]}
          </em>
        );
      }

      // Inline code: `code`
      const codeMatch = part.match(/^`([^`]+)`$/);
      if (codeMatch) {
        return (
          <code
            key={index}
            className={`font-mono text-[11px] px-1 py-0.5 rounded ${
              isNeobrutalist ? 'bg-black text-white' : 'bg-white/10 text-emerald-300'
            }`}
          >
            {codeMatch[1]}
          </code>
        );
      }

      // Fallback plain text: strip any accidental remaining raw asterisks around words
      const cleanedPart = part.replace(/\*([a-zA-Z0-9_\s]+)\*/g, '$1');
      return <React.Fragment key={index}>{cleanedPart}</React.Fragment>;
    });
  };

  const renderFormattedText = (content: string) => {
    let normalized = content.replace(/\r\n/g, '\n');

    // Strip ALL action and navigation machine tags from paragraph text
    normalized = normalized.replace(/\[(?:ACTION|A):[^\]]+\]/gi, '');
    normalized = normalized.replace(/\[(NAVIGATE|SCROLL|OPEN_RESUME|SET_THEME):[^\]]+\]/gi, '');

    // Auto-heal malformed markdown links generated by LLMs like [Title/url) or [Title(/url) or [Title](url)
    normalized = normalized.replace(/\[([^\]\n]+?)(?:\]\s*\(|[/(])\s*(\/?[a-zA-Z0-9_\-\./:#%?&=]+?)\)/g, (_match, title, path) => {
      let cleanPath = path.trim();
      if (!cleanPath.startsWith('http') && !cleanPath.startsWith('/') && !cleanPath.startsWith('#')) {
        cleanPath = '/' + cleanPath;
      }
      return `[${title.trim()}](${cleanPath})`;
    });

    // 1. Separate run-on numbered items that got merged on one line (e.g. "...work. 2. I'm Current...")
    normalized = normalized.replace(/([.!?]|[\w)])\s+(\d+\.\s+[A-Z])/g, '$1\n\n$2');

    // 2. Separate project titles like "NoteLift:" or "Bottom Line:" if placed mid-paragraph
    normalized = normalized.replace(/([.!?])\s+((?:NoteLift|DevInterio|StylistAI|Portfolio|Bottom Line|Want to see):)/gi, '$1\n\n$2');

    const lines = normalized.split('\n');

    return (
      <div className="space-y-1.5 text-left">
        {lines.map((line, idx) => {
          const trimmed = line.trim();
          if (!trimmed) {
            return <div key={idx} className="h-1.5" />;
          }

          // Numbered list item: "1. ..."
          const numMatch = trimmed.match(/^(\d+)\.\s+(.*)$/);
          if (numMatch) {
            return (
              <div key={idx} className="flex items-start gap-2 pl-1 my-1">
                <span
                  className={`shrink-0 text-[10px] font-mono font-black px-1.5 py-0.5 rounded-[3px] mt-0.5 ${
                    isNeobrutalist ? 'bg-black text-white' : 'bg-emerald-400/20 text-emerald-400'
                  }`}
                >
                  {numMatch[1]}
                </span>
                <span className="flex-1 leading-relaxed">
                  {renderInlineFormatted(numMatch[2])}
                </span>
              </div>
            );
          }

          // Bullet list item: "- ..." or "• ..."
          const bulletMatch = trimmed.match(/^[-•*]\s+(.*)$/);
          if (bulletMatch) {
            return (
              <div key={idx} className="flex items-start gap-2 pl-1.5 my-0.5">
                <span className="text-[var(--c-accent)] text-sm leading-none mt-1">•</span>
                <span className="flex-1 leading-relaxed">
                  {renderInlineFormatted(bulletMatch[1])}
                </span>
              </div>
            );
          }

          // Header: "### ..." or "## ..."
          const headerMatch = trimmed.match(/^#{1,3}\s+(.*)$/);
          if (headerMatch) {
            return (
              <div key={idx} className="font-bold text-sm mt-2 mb-1" style={!isNeobrutalist ? { color: '#FFFFFF' } : {}}>
                {renderInlineFormatted(headerMatch[1])}
              </div>
            );
          }

          // Standard paragraph line
          return (
            <div key={idx} className="leading-relaxed">
              {renderInlineFormatted(line)}
            </div>
          );
        })}
      </div>
    );
  };

  // Render high-tech interactive action buttons inside assistant message bubbles
  const renderActionButtons = (rawContent: string) => {
    const buttons: { label: string; icon: React.ReactNode; onClick: () => void }[] = [];

    const addBtn = (label: string, icon: React.ReactNode, onClick: () => void) => {
      if (!buttons.some((b) => b.label === label)) {
        buttons.push({ label, icon, onClick });
      }
    };

    // 1. Explicit action tags: [ACTION:NAVIGATE:/certifications], [A:SCROLL:#contact], etc.
    const matches = rawContent.matchAll(/\[(?:ACTION|A):([A-Z_]+):?([^\]]*)\]/gi);
    for (const m of matches) {
      const type = m[1];
      const param = (m[2] || '').trim();
      if (type === 'NAVIGATE') {
        if (param === '/certifications') {
          addBtn('Open Certifications Archive', <FiAward className="w-3.5 h-3.5" />, () => executeAction('NAVIGATE', '/certifications'));
        } else if (param === '/projects') {
          addBtn('Explore Projects Lab', <FiCode className="w-3.5 h-3.5" />, () => executeAction('NAVIGATE', '/projects'));
        } else if (param === '/skills') {
          addBtn('Inspect Tech Stack & Skills', <FiCompass className="w-3.5 h-3.5" />, () => executeAction('NAVIGATE', '/skills'));
        } else if (param === '/client-work') {
          addBtn('View Client Work', <FiBriefcase className="w-3.5 h-3.5" />, () => executeAction('NAVIGATE', '/client-work'));
        } else if (param === '/experience') {
          addBtn('View Experience', <FiBriefcase className="w-3.5 h-3.5" />, () => executeAction('NAVIGATE', '/experience'));
        } else if (param === '/') {
          addBtn('Go to Home Page', <FiCompass className="w-3.5 h-3.5" />, () => executeAction('NAVIGATE', '/'));
        }
      } else if (type === 'OPEN_RESUME') {
        addBtn('Open Interactive Resume', <FaFilePdf className="w-3.5 h-3.5" />, () => executeAction('OPEN_RESUME', param));
      } else if (type === 'SCROLL') {
        addBtn('Jump to ' + (param.replace('#', '') || 'Section'), <FiSend className="w-3.5 h-3.5" />, () => executeAction('SCROLL', param));
      } else if (type === 'SET_THEME') {
        addBtn(`Switch Theme (${param})`, <FiSliders className="w-3.5 h-3.5" />, () => executeAction('SET_THEME', param));
      }
    }

    // 2. Fallback heuristic: if message mentions key routes without explicit [ACTION:...]
    if (buttons.length === 0) {
      if (rawContent.includes('/certifications')) {
        addBtn('Open Certifications Archive', <FiAward className="w-3.5 h-3.5" />, () => executeAction('NAVIGATE', '/certifications'));
      }
      if (rawContent.includes('/projects')) {
        addBtn('Explore Projects Lab', <FiCode className="w-3.5 h-3.5" />, () => executeAction('NAVIGATE', '/projects'));
      }
      if (rawContent.includes('/skills')) {
        addBtn('Inspect Tech Stack & Skills', <FiCompass className="w-3.5 h-3.5" />, () => executeAction('NAVIGATE', '/skills'));
      }
      if (rawContent.includes('/client-work')) {
        addBtn('View Client Work', <FiBriefcase className="w-3.5 h-3.5" />, () => executeAction('NAVIGATE', '/client-work'));
      }
      if (rawContent.includes('/experience')) {
        addBtn('View Experience', <FiBriefcase className="w-3.5 h-3.5" />, () => executeAction('NAVIGATE', '/experience'));
      }
      if (rawContent.includes('#contact') || rawContent.includes('/#contact')) {
        addBtn('Jump to Contact Form', <FiSend className="w-3.5 h-3.5" />, () => executeAction('SCROLL', '#contact'));
      }
      if (rawContent.includes('Rohit_s_Resume') || rawContent.includes('Resume_')) {
        addBtn('Open Interactive Resume', <FaFilePdf className="w-3.5 h-3.5" />, () => executeAction('OPEN_RESUME', ''));
      }
    }

    if (buttons.length === 0) return null;

    return (
      <div
        className={`mt-2.5 pt-2 border-t flex flex-wrap gap-1.5 ${
          isNeobrutalist ? 'border-black/20' : 'border-white/10'
        }`}
      >
        {buttons.map((btn, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => {
              trackChittiActionClick(btn.label);
              btn.onClick();
            }}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-bold rounded-lg transition-all duration-150 cursor-pointer active:scale-95 ${
              isNeobrutalist
                ? 'border-2 border-black bg-[var(--c-accent)] text-black shadow-[2px_2px_0_#000] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0_#000]'
                : 'border border-[var(--c-accent)]/40 bg-[var(--c-accent)]/15 text-white hover:bg-[var(--c-accent)]/25 hover:border-[var(--c-accent)] hover:shadow-[0_0_12px_rgba(0,245,160,0.3)]'
            }`}
            style={!isNeobrutalist ? { color: 'var(--c-accent, #00F5A0)' } : {}}
          >
            {btn.icon}
            <span>{btn.label}</span>
            <FiChevronRight className="w-3 h-3 opacity-70" />
          </button>
        ))}
      </div>
    );
  };

  // Horizontal scroll wheel helper for chip tray
  const handleChipWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (chipsScrollRef.current && e.deltaY) {
      chipsScrollRef.current.scrollLeft += e.deltaY;
    }
  };

  const scrollChips = (direction: 'left' | 'right') => {
    if (chipsScrollRef.current) {
      const offset = direction === 'left' ? -180 : 180;
      chipsScrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* ── Floating Launcher Button: Mobile Left / Desktop Right Above Up-Button ── */}
      {!isOpen && (
        <div className="fixed left-3 md:left-auto md:right-6 bottom-4 md:bottom-20 z-40 flex items-center">
          <button
            onClick={() => {
              setIsOpen(true);
              trackChittiOpen();
            }}
            aria-label="Open Rohit AI Companion"
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95 ${
              isNeobrutalist
                ? 'border-2 border-black font-black shadow-[3px_3px_0_#000]'
                : 'border border-[var(--c-accent)]/50 backdrop-blur-md shadow-lg hover:shadow-[0_0_20px_rgba(0,245,160,0.3)] hover:scale-105'
            }`}
            style={{
              backgroundColor: isNeobrutalist
                ? 'var(--c-accent, #FFE81F)'
                : 'var(--c-bg, #031714)',
              color: isNeobrutalist
                ? 'var(--c-accent-text, #000000)'
                : 'var(--c-accent, #00F5A0)',
            }}
          >
            <div className="relative flex items-center justify-center">
              <FiMessageSquare className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
              <span
                className="w-2 h-2 rounded-full absolute -top-1 -right-1 animate-ping"
                style={{
                  backgroundColor: isNeobrutalist ? '#000000' : 'var(--c-accent, #00F5A0)',
                }}
              />
            </div>
          </button>
        </div>
      )}

      {/* ── Chat Window: Cleanly Centered on Mobile / Anchored on Desktop ── */}
      {isOpen && (
        <div
          data-lenis-prevent="true"
          onMouseEnter={() => (window as any).lenis?.stop()}
          onMouseLeave={() => (window as any).lenis?.start()}
          className={`fixed bottom-4 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-6 md:bottom-6 z-[100] flex flex-col overflow-hidden transition-all duration-300 ease-in-out animate-in fade-in slide-in-from-bottom-4 ${
            isExpanded
              ? 'w-[96vw] max-w-[96vw] md:w-[820px] lg:w-[900px] h-[84vh] max-h-[88vh]'
              : 'w-[94vw] sm:w-[420px] h-[600px] max-h-[85vh]'
          } ${
            isNeobrutalist
              ? 'border-2 border-black rounded-none shadow-[6px_6px_0_#000]'
              : 'rounded-2xl border backdrop-blur-xl shadow-2xl'
          }`}
          style={
            isNeobrutalist
              ? {
                  backgroundColor: isSith ? '#140505' : '#F0EFE6',
                  borderColor: isLockdown ? '#EF4444' : isSith ? '#FF2020' : '#000000',
                  boxShadow: isLockdown
                    ? '6px 6px 0 #EF4444'
                    : isSith
                    ? '6px 6px 0 #FF2020'
                    : '6px 6px 0 #000000',
                }
              : {
                  backgroundColor: 'rgba(3, 23, 20, 0.94)',
                  borderColor: isLockdown ? '#EF4444' : 'var(--c-border, rgba(0,245,160,0.3))',
                  boxShadow: isLockdown
                    ? '0 0 50px rgba(239, 68, 68, 0.7)'
                    : '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0,245,160,0.18)',
                }
          }
        >
          {/* Emergency Alert Banner */}
          {isLockdown && (
            <div className="bg-red-600 text-white px-3 py-1.5 text-[11px] font-mono font-bold flex items-center justify-between tracking-wide animate-pulse">
              <span>🚨 THREAT LEVEL MIDNIGHT: UNAUTHORIZED PROBE</span>
              <button
                onClick={handleDismissLockdown}
                className="underline uppercase text-[10px] text-white hover:text-white/80 cursor-pointer ml-2"
              >
                Reset
              </button>
            </div>
          )}

          {/* Header */}
          <div
            className={`flex items-center justify-between px-4 py-3 border-b ${
              isNeobrutalist
                ? 'border-2 border-black'
                : 'border-white/10'
            }`}
            style={
              isNeobrutalist
                ? {
                    backgroundColor: 'var(--c-accent, #FFE81F)',
                    color: 'var(--c-accent-text, #000000)',
                    borderColor: isSith ? '#FF2020' : '#000000',
                  }
                : {
                    backgroundColor: 'rgba(4, 36, 32, 0.75)',
                    borderColor: 'var(--c-border, rgba(0,245,160,0.2))',
                  }
            }
          >
            <div className="flex items-center gap-2.5">
              <ChittiAvatar isNeobrutalist={isNeobrutalist} isSith={isSith} size={36} />
              <div>
                <div className="flex items-center gap-1.5">
                  <h3
                    className={`text-sm leading-tight ${
                      isNeobrutalist ? 'font-black uppercase text-black' : 'font-semibold text-white'
                    }`}
                  >
                    Chitti
                  </h3>
                  <span
                    className={`text-[9px] px-1.5 py-0.5 font-mono uppercase tracking-wider ${
                      isNeobrutalist
                        ? 'bg-black text-white font-black'
                        : 'rounded-full bg-emerald-400/20 text-emerald-400'
                    }`}
                  >
                    AI Twin
                  </span>
                </div>
                <p
                  className={`text-[10px] sm:text-[11px] ${
                    isNeobrutalist ? 'text-black/70 font-medium' : 'text-white/50'
                  }`}
                >
                  Speed 1 THz • Rohit's Voice &amp; Quirks
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={handleReset}
                title="Reset Conversation"
                className={`p-1.5 transition-colors cursor-pointer ${
                  isNeobrutalist
                    ? 'border-2 border-black bg-white text-black shadow-[2px_2px_0_#000] active:translate-x-[1px] active:translate-y-[1px]'
                    : 'rounded-lg text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                <FiRotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsExpanded((prev) => !prev)}
                title={isExpanded ? 'Collapse Chat Window' : 'Expand Chat Window'}
                aria-label={isExpanded ? 'Collapse Chat Window' : 'Expand Chat Window'}
                className={`p-1.5 transition-colors cursor-pointer ${
                  isNeobrutalist
                    ? 'border-2 border-black bg-white text-black shadow-[2px_2px_0_#000] active:translate-x-[1px] active:translate-y-[1px]'
                    : 'rounded-lg text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                {isExpanded ? (
                  <FiMinimize2 className="w-3.5 h-3.5" />
                ) : (
                  <FiMaximize2 className="w-3.5 h-3.5" />
                )}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close"
                className={`p-1.5 transition-colors cursor-pointer ${
                  isNeobrutalist
                    ? 'border-2 border-black bg-white text-black shadow-[2px_2px_0_#000] active:translate-x-[1px] active:translate-y-[1px]'
                    : 'rounded-lg text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                <FiX className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div
            data-lenis-prevent="true"
            onWheel={(e) => e.stopPropagation()}
            className={`flex-1 overflow-y-auto overscroll-contain p-4 space-y-3.5 text-sm ${
              !isNeobrutalist ? 'text-white/90' : 'text-black'
            }`}
            style={{
              backgroundColor: isNeobrutalist
                ? isSith ? '#140505' : '#F0EFE6'
                : 'transparent',
            }}
          >
            {messages.map((m, index) => {
              const isAssistant = m.role === 'assistant';
              return (
                <div
                  key={index}
                  className={`flex ${isAssistant ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`${
                      isExpanded ? 'max-w-[85%] sm:max-w-[78%]' : 'max-w-[88%]'
                    } p-3 text-xs sm:text-[13px] leading-relaxed ${
                      isNeobrutalist
                        ? isAssistant
                          ? 'border-2 border-black bg-white text-black shadow-[3px_3px_0_#000]'
                          : 'border-2 border-black font-bold shadow-[3px_3px_0_#000]'
                        : isAssistant
                        ? 'rounded-2xl rounded-tl-xs bg-white/5 border border-white/10 text-white/90 shadow-md backdrop-blur-md'
                        : 'rounded-2xl rounded-tr-xs font-semibold shadow-md'
                    }`}
                    style={
                      !isAssistant
                        ? {
                            backgroundColor: 'var(--c-accent, #00F5A0)',
                            color: 'var(--c-accent-text, #000000)',
                            borderColor: isNeobrutalist ? '#000000' : 'transparent',
                          }
                        : {}
                    }
                  >
                    {isAssistant && isNeobrutalist && (
                      <div className="text-[10px] font-mono font-black uppercase tracking-wider mb-1 opacity-60">
                        CHITTI // ROHIT'S AI TWIN
                      </div>
                    )}
                    {renderFormattedText(m.content)}
                    {isAssistant && renderActionButtons(m.content)}
                  </div>
                </div>
              );
            })}

            {isLoading && (
              <div className="flex justify-start">
                <div
                  className={`p-2.5 flex items-center gap-2 text-xs font-mono font-medium ${
                    isNeobrutalist
                      ? 'border-2 border-black bg-white text-black shadow-[3px_3px_0_#000]'
                      : 'rounded-xl bg-white/5 border border-white/10 text-white/60'
                  }`}
                >
                  <span
                    className="w-2 h-2 rounded-full animate-ping"
                    style={{ backgroundColor: 'var(--c-accent, #00F5A0)' }}
                  />
                  <span>Chitti is thinking...</span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* ── Quick Starter Chips: Positioned Ergonomically Right Above the Input Bar ── */}
          <div
            className={`border-t px-2 py-1.5 flex items-center gap-1.5 relative ${
              isNeobrutalist
                ? 'border-t-2 border-black bg-[#FAF8F2]'
                : 'border-white/10 bg-black/40 backdrop-blur-md'
            }`}
          >
            {/* Scroll Left Button */}
            <button
              onClick={() => scrollChips('left')}
              title="Scroll suggestions left"
              className={`p-1 shrink-0 rounded transition-opacity cursor-pointer ${
                isNeobrutalist
                  ? 'border border-black bg-white text-black hover:bg-black hover:text-white'
                  : 'text-white/60 hover:text-white hover:bg-white/10'
              }`}
            >
              <FiChevronLeft className="w-3.5 h-3.5" />
            </button>

            {/* Scrollable Container with Mouse Wheel Support */}
            <div
              ref={chipsScrollRef}
              data-lenis-prevent="true"
              onWheel={(e) => {
                e.stopPropagation();
                handleChipWheel(e);
              }}
              className="flex-1 flex gap-1.5 overflow-x-auto py-1 scroll-smooth select-none overscroll-contain"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {STARTER_PROMPTS.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    trackChittiChipClick(item.label);
                    handleSend(item.prompt);
                  }}
                  disabled={isLoading}
                  title={item.prompt}
                  className={`shrink-0 px-2.5 py-1 text-[11px] font-mono whitespace-nowrap transition-all duration-150 cursor-pointer disabled:opacity-50 flex items-center gap-1.5 ${
                    isNeobrutalist
                      ? 'border-2 border-black bg-white text-black font-black shadow-[2px_2px_0_#000] hover:bg-[var(--c-accent)] active:translate-x-[1px] active:translate-y-[1px]'
                      : 'rounded-lg bg-white/5 text-white/90 border border-white/10 hover:border-emerald-400/50 hover:bg-white/10 active:scale-95'
                  }`}
                >
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* Scroll Right Button */}
            <button
              onClick={() => scrollChips('right')}
              title="Scroll suggestions right"
              className={`p-1 shrink-0 rounded transition-opacity cursor-pointer ${
                isNeobrutalist
                  ? 'border border-black bg-white text-black hover:bg-black hover:text-white'
                  : 'text-white/60 hover:text-white hover:bg-white/10'
              }`}
            >
              <FiChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Subtle Free-Tier Quota Counter When Chat Gets Long */}
          {messages.filter((m) => m.role === 'user').length >= 6 && (
            <div
              className={`px-3 py-1 text-[10px] font-mono flex items-center justify-between border-t ${
                isNeobrutalist
                  ? 'bg-[#FFFDF0] text-black border-black font-bold'
                  : 'bg-emerald-500/10 text-emerald-400 border-white/5'
              }`}
            >
              <span>
                ⚡ Free-tier: {Math.max(0, 10 - messages.filter((m) => m.role === 'user').length)} turn{10 - messages.filter((m) => m.role === 'user').length === 1 ? '' : 's'} left in session
              </span>
              <button
                type="button"
                onClick={handleReset}
                title="Reset conversation tokens"
                className="underline uppercase font-bold hover:opacity-80 cursor-pointer text-[9px]"
              >
                Reset (↺)
              </button>
            </div>
          )}

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className={`p-3 border-t flex items-center gap-2 ${
              isNeobrutalist
                ? 'border-t-2 border-black bg-[#FAF8F2]'
                : 'border-white/10 bg-black/50'
            }`}
          >
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask anything in English or Hinglish..."
              disabled={isLoading}
              className={`flex-1 px-3 py-2 text-xs sm:text-sm transition-colors ${
                isNeobrutalist
                  ? 'bg-white border-2 border-black text-black font-medium placeholder-black/40 shadow-[2px_2px_0_#000] focus:outline-none focus:bg-[#FFFDF0]'
                  : 'bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-emerald-400'
              }`}
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              className={`font-bold transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer ${
                isNeobrutalist
                  ? 'px-3 py-2 border-2 border-black text-xs font-black uppercase shadow-[2px_2px_0_#000] active:translate-x-[1px] active:translate-y-[1px]'
                  : 'p-2.5 rounded-xl hover:scale-105 active:scale-95'
              }`}
              style={{
                backgroundColor: 'var(--c-accent, #00F5A0)',
                color: 'var(--c-accent-text, #000000)',
              }}
            >
              <FiSend className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
