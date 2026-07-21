import React, { useState } from 'react';
import { motion } from 'motion/react';
import ProfileCard from '@/components/ui/ProfileCard';
import { InteractiveGridPattern } from '@/components/ui/InteractiveGridPattern';

export const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setIsSuccess(false);

    try {
      const response = await fetch('https://formspree.io/f/mqerqbyz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSubmitting(false);
        setIsSuccess(true);
        setForm({ name: '', email: '', subject: '', message: '' });
        // Let the button stay in "ready" state for 2 seconds to play the morph-back animation, then show checkmark screen
        setTimeout(() => {
          setSent(true);
          setIsSuccess(false);
        }, 2000);
        setTimeout(() => setSent(false), 7000);
      } else {
        setSubmitting(false);
        const data = await response.json();
        if (data.errors) {
          setError(data.errors.map((err: any) => err.message).join(', '));
        } else {
          setError('Failed to submit form. Please try again.');
        }
      }
    } catch (err) {
      setSubmitting(false);
      setError('Connection error. Please try again.');
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#F8F9FA] w-full py-16 md:py-0 px-6 md:px-10 relative overflow-hidden z-30 lg:h-[calc(100vh-32px)] lg:flex lg:items-center"
    >
      {/* Interactive Grid Background */}
      <InteractiveGridPattern
        className="opacity-45"
        width={64}
        height={64}
        squares={[25, 18]}
      />
      <div className="max-w-6xl w-full mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="inline-block bg-[#CCFF00] text-black font-black text-[10px] px-3.5 py-1.5 rounded-full mb-3 tracking-widest uppercase border border-black">
              CONTACT
            </span>
            <h2
              className="text-[clamp(2.5rem,6vw,72px)] font-black leading-none tracking-tighter text-black uppercase"
              style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}
            >
              LET'S<br />
              <span className="text-[#0038FF]">TALK</span>
            </h2>
          </div>
          <p className="text-black/50 text-xs max-w-xs font-medium leading-relaxed mb-1">
            Have a project in mind? Want to collaborate? Or just want to say hi? My inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">

          {/* Left Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 border-[3px] border-black rounded-[2.5rem] p-5 bg-white shadow-[8px_8px_0_#000] flex flex-col justify-between gap-5"
          >
            <div className="flex flex-col gap-2">
              {[
                { label: 'Email', value: 'rohitdubey39005@gmail.com', icon: '✉️', href: 'mailto:rohitdubey39005@gmail.com' },
                { label: 'Location', value: 'India · Remote Worldwide', icon: '📍', href: '#' },
                { label: 'Availability', value: 'Open to freelance & full-time', icon: '🟢', href: '#' },
                { label: 'Response Time', value: 'Within 24 hours', icon: '⚡', href: '#' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 bg-[#F8F9FA] rounded-[1rem] p-3 border border-transparent hover:border-[#0038FF] transition-all group"
                >
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-md shadow-sm border border-black/5 group-hover:bg-[#CCFF00] transition-colors flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[8px] font-black uppercase tracking-widest text-black/30 mb-0.5">{item.label}</p>
                    <p className="font-bold text-xs text-black leading-none">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-2 flex-wrap border-t border-black/10 pt-3 mt-1 justify-center">
              {[
                { label: 'GitHub', href: 'https://github.com/anakinskywalker0903' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rohit--dubey03/' },
                { label: 'WhatsApp', href: 'https://wa.me/918777453162' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-1.5 rounded-full border-2 border-black text-[9px] font-black hover:bg-[#CCFF00] hover:text-black transition-all bg-white text-black"
                >
                  {s.label}
                </a>
              ))}
            </div>

          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 bg-white border-[3px] border-black rounded-[2.5rem] p-6 shadow-[8px_8px_0_#000]"
          >
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center gap-3 py-10">
                <div className="w-16 h-16 bg-[#CCFF00] rounded-full flex items-center justify-center text-2xl border-2 border-black">
                  ✓
                </div>
                <p className="font-black text-xl text-black text-center">Message Sent!</p>
                <p className="text-black/50 text-xs text-center font-medium">I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[9px] font-black uppercase tracking-widest text-black/40 block mb-1">Your Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Rohit Sharma"
                      className="w-full bg-[#F8F9FA] focus:bg-white rounded-[1rem] px-4 py-2.5 text-xs font-medium text-black border-2 border-black/5 focus:border-[#0038FF] outline-none transition-all placeholder:text-black/25"
                    />
                  </div>
                  <div>
                    <label className="text-[9px] font-black uppercase tracking-widest text-black/40 block mb-1">Email Address</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="hello@example.com"
                      className="w-full bg-[#F8F9FA] focus:bg-white rounded-[1rem] px-4 py-2.5 text-xs font-medium text-black border-2 border-black/5 focus:border-[#0038FF] outline-none transition-all placeholder:text-black/25"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[9px] font-black uppercase tracking-widest text-black/40 block mb-1">Subject</label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#F8F9FA] focus:bg-white rounded-[1rem] px-4 py-2.5 text-xs font-medium text-black border-2 border-black/5 focus:border-[#0038FF] outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select a topic...</option>
                    <option value="freelance">Freelance Project</option>
                    <option value="fulltime">Full-time Opportunity</option>
                    <option value="collab">Collaboration</option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Just saying hi</option>
                  </select>
                </div>

                <div>
                  <label className="text-[9px] font-black uppercase tracking-widest text-black/40 block mb-1">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={3}
                    placeholder="Tell me about your project, timeline, and budget..."
                    className="w-full bg-[#F8F9FA] focus:bg-white rounded-[1rem] px-4 py-2.5 text-xs font-medium text-black border-2 border-black/5 focus:border-[#0038FF] outline-none transition-all resize-none placeholder:text-black/25"
                  />
                </div>

                {error && (
                  <p className="text-red-500 font-bold text-xs uppercase tracking-widest text-center">
                    ⚠️ {error}
                  </p>
                )}

                <div className="flex justify-center mt-3">
                  <button
                    type="submit"
                    className={`submit-anim-btn ${submitting ? 'loading' : ''} ${isSuccess ? 'ready' : ''}`}
                  >
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
