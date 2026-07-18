import React, { useState } from 'react';
import { motion } from 'motion/react';
import ProfileCard from '@/components/ui/ProfileCard';

export const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="bg-white w-full py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="inline-block bg-[#CCFF00] text-black font-black text-xs px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase">
              CONTACT
            </span>
            <h2
              className="text-[clamp(3rem,8vw,96px)] font-black leading-none tracking-tighter text-black uppercase"
              style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}
            >
              LET'S<br />
              <span className="text-[#0038FF]">TALK</span>
            </h2>
          </div>
          <p className="text-black/50 text-sm max-w-xs font-medium leading-relaxed">
            Have a project in mind? Want to collaborate? Or just want to say hi? My inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Left Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Info Cards */}
            {[
              { label: 'Email', value: 'rohit@rohitdubey.dev', icon: '✉️', href: 'mailto:rohit@rohitdubey.dev' },
              { label: 'Location', value: 'India · Remote Worldwide', icon: '📍', href: '#' },
              { label: 'Availability', value: 'Open to freelance & full-time', icon: '🟢', href: '#' },
              { label: 'Response Time', value: 'Within 24 hours', icon: '⚡', href: '#' },
            ].map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex items-center gap-4 bg-[#F8F9FA] rounded-[1.5rem] p-5 border-2 border-transparent hover:border-[#0038FF] transition-all group"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-xl shadow-sm border border-black/5 group-hover:bg-[#CCFF00] transition-colors flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-0.5">{item.label}</p>
                  <p className="font-bold text-sm text-black">{item.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <div className="flex gap-3 flex-wrap mt-2">
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
                  className="px-4 py-2 rounded-full border-2 border-black text-xs font-black hover:bg-[#0038FF] hover:border-[#0038FF] hover:text-white transition-all"
                >
                  {s.label}
                </a>
              ))}
            </div>

          </div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 bg-[#F8F9FA] rounded-[2rem] p-8 border border-black/5"
          >
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center gap-4 py-16">
                <div className="w-20 h-20 bg-[#CCFF00] rounded-full flex items-center justify-center text-3xl">
                  ✓
                </div>
                <p className="font-black text-2xl text-black text-center">Message Sent!</p>
                <p className="text-black/50 text-sm text-center font-medium">I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-black/40 block mb-2">Your Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Rohit Sharma"
                      className="w-full bg-white rounded-[1rem] px-5 py-3.5 text-sm font-medium text-black border-2 border-transparent focus:border-[#0038FF] outline-none transition-all placeholder:text-black/25"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-black/40 block mb-2">Email Address</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="hello@example.com"
                      className="w-full bg-white rounded-[1rem] px-5 py-3.5 text-sm font-medium text-black border-2 border-transparent focus:border-[#0038FF] outline-none transition-all placeholder:text-black/25"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-black/40 block mb-2">Subject</label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-white rounded-[1rem] px-5 py-3.5 text-sm font-medium text-black border-2 border-transparent focus:border-[#0038FF] outline-none transition-all appearance-none"
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
                  <label className="text-[10px] font-black uppercase tracking-widest text-black/40 block mb-2">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project, timeline, and budget..."
                    className="w-full bg-white rounded-[1rem] px-5 py-4 text-sm font-medium text-black border-2 border-transparent focus:border-[#0038FF] outline-none transition-all resize-none placeholder:text-black/25"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0038FF] text-white font-black text-sm py-4 rounded-[1rem] hover:bg-[#001A99] transition-colors flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <span className="group-hover:translate-x-1 transition-transform">↗</span>
                </button>
              </form>
            )}
          </motion.div>

        </div>

        {/* Footer strip */}
        <div className="mt-20 pt-10 border-t-2 border-black/5 flex flex-col md:flex-row items-center justify-between gap-10">

          {/* Left: copyright + status */}
          <div className="flex flex-col gap-3">
            <p className="text-black/30 text-xs font-bold">© 2026 Rohit Dubey. Built with React + Tailwind.</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse" />
              <span className="text-xs font-bold text-black/40">Learning · Building · Iterating</span>
            </div>
          </div>

          {/* Right: ProfileCard */}
          <div className="flex-shrink-0">
            <ProfileCard
              name="Rohit Dubey"
              title="AI & Full-Stack Developer"
              handle="rohitdubey"
              status="Building something"
              contactText="Hire Me"
              avatarUrl="/rohit.jpg"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              behindGlowEnabled={true}
              behindGlowColor="rgba(0, 56, 255, 0.5)"
              innerGradient="linear-gradient(145deg,#001A9966 0%,#CCFF0022 100%)"
              onContactClick={() => {
                const el = document.getElementById('contact');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          </div>

        </div>

      </div>
    </section>
  );
};
