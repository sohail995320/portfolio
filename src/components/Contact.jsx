import React, { useState } from 'react';

export default function Contact() {
  const [btnText, setBtnText] = useState('Send Message');
  const [isSending, setIsSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setBtnText('Sending…');

    setTimeout(() => {
      setBtnText('✓ Sent!');
      setShowSuccess(true);
      e.target.reset();

      setTimeout(() => {
        setIsSending(false);
        setBtnText('Send Message');
        setShowSuccess(false);
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-[130px] relative overflow-hidden bg-[#04080f]">
      <div className="absolute top-[1px] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1c3050] to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-['Fraunces'] text-[clamp(80px,14vw,200px)] font-black color-[rgba(255,255,255,0.015)] pointer-events-none select-none tracking-tighter text-[#ffffff]/[0.015]">
        CONTACT
      </div>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="mb-16">
          <div className="font-['Fira_Code'] text-xs text-[#c8f547] tracking-widest mb-4">// Let's Work Together</div>
          <h2 className="font-['Fraunces'] text-[clamp(38px,5.5vw,64px)] font-black tracking-[-2.5px] line-height-1 mb-4">Get In Touch</h2>
          <p className="text-[#6b8aaa] text-[17px] max-w-[540px] line-height-1.75">Have a project, internship opportunity, or just want to say hello? My inbox is always open.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <form className="flex flex-col gap-5" onSubmit={handleFormSubmit} autoComplete="off">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-['Fira_Code'] text-[11px] text-[#c8f547] tracking-widest uppercase">Your Name</label>
                <input type="text" id="name" placeholder="Ahmed Khan" required className="bg-[#0b1726] border border-[#1c3050] rounded-xl p-3.5 text-[#ddeeff] text-[15px] font-['Satoshi'] outline-none w-full transition-all duration-200 focus:border-[#c8f547] focus:shadow-[0_0_0_3px_rgba(200,245,71,0.12)]" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-['Fira_Code'] text-[11px] text-[#c8f547] tracking-widest uppercase">Email Address</label>
                <input type="email" id="email" placeholder="ahmed@example.com" required className="bg-[#0b1726] border border-[#1c3050] rounded-xl p-3.5 text-[#ddeeff] text-[15px] font-['Satoshi'] outline-none w-full transition-all duration-200 focus:border-[#c8f547] focus:shadow-[0_0_0_3px_rgba(200,245,71,0.12)]" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="font-['Fira_Code'] text-[11px] text-[#c8f547] tracking-widest uppercase">Subject</label>
              <input type="text" id="subject" placeholder="Project Inquiry / Internship / Freelance" className="bg-[#0b1726] border border-[#1c3050] rounded-xl p-3.5 text-[#ddeeff] text-[15px] font-['Satoshi'] outline-none w-full transition-all duration-200 focus:border-[#c8f547] focus:shadow-[0_0_0_3px_rgba(200,245,71,0.12)]" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-['Fira_Code'] text-[11px] text-[#c8f547] tracking-widest uppercase">Message</label>
              <textarea id="message" rows="6" placeholder="Tell me about your project or opportunity..." required className="bg-[#0b1726] border border-[#1c3050] rounded-xl p-3.5 text-[#ddeeff] text-[15px] font-['Satoshi'] outline-none w-full transition-all duration-200 focus:border-[#c8f547] focus:shadow-[0_0_0_3px_rgba(200,245,71,0.12)] resize-y min-h-[150px]" />
            </div>
            <button type="submit" disabled={isSending} className="inline-flex items-center gap-2.5 bg-[#c8f547] text-[#04080f] border-none rounded-xl px-9 py-[15px] text-[15px] font-bold font-['Satoshi'] cursor-pointer self-start transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(200,245,71,0.22)] disabled:opacity-50">
              {btnText}
              {!isSending && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>}
            </button>
            <div className={`bg-[rgba(200,245,71,0.07)] border border-[rgba(200,245,71,0.25)] rounded-xl p-3.5 text-[#c8f547] text-sm font-['Fira_Code'] ${showSuccess ? 'block' : 'hidden'}`}>
              ✓ Message received! I'll reply within 24 hours.
            </div>
          </form>
          <div className="contact-aside">
            <div className="font-['Fraunces'] text-[36px] font-bold tracking-tight line-height-1.1 mb-4">
              Let's build something <em className="text-[#c8f547] not-italic">great</em> together.
            </div>
            <p className="text-[#6b8aaa] text-base line-height-1.75 mb-8">I'm always excited to take on new challenges — whether it's a frontend project, a Java application, or a full-stack build from scratch.</p>
            <div className="flex flex-col gap-[1px] bg-[#132030] rounded-2xl overflow-hidden border border-[#132030]">
              <a href="mailto:sohailkhan@example.com" className="flex items-center gap-3.5 p-4 bg-[#0b1726] hover:bg-[#0e1e30] transition-colors duration-200 group">
                <div className="w-[38px] h-[38px] rounded-xl shrink-0 flex items-center justify-center bg-[#c8f547]/10 text-[#c8f547]"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg></div>
                <div className="flex-1">
                  <span className="block font-['Fira_Code'] text-[10px] text-[#364d63] tracking-wide uppercase mb-0.5">Email</span>
                  <span className="text-sm font-medium text-[#ddeeff]">sohailkhan@example.com</span>
                </div>
                <svg className="text-[#364d63] transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#c8f547]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <a href="https://github.com/sohailkhan" target="_blank" rel="noreferrer" className="flex items-center gap-3.5 p-4 bg-[#0b1726] hover:bg-[#0e1e30] transition-colors duration-200 group">
                <div className="w-[38px] h-[38px] rounded-xl shrink-0 flex items-center justify-center bg-[#38bdf8]/10 text-[#38bdf8]"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg></div>
                <div className="flex-1">
                  <span className="block font-['Fira_Code'] text-[10px] text-[#364d63] tracking-wide uppercase mb-0.5">GitHub</span>
                  <span className="text-sm font-medium text-[#ddeeff]">github.com/sohailkhan</span>
                </div>
                <svg className="text-[#364d63] transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#c8f547]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <a href="https://linkedin.com/in/sohailkhan" target="_blank" rel="noreferrer" className="flex items-center gap-3.5 p-4 bg-[#0b1726] hover:bg-[#0e1e30] transition-colors duration-200 group">
                <div className="w-[38px] h-[38px] rounded-xl shrink-0 flex items-center justify-center bg-[#fb923c]/10 text-[#fb923c]"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg></div>
                <div className="flex-1">
                  <span className="block font-['Fira_Code'] text-[10px] text-[#364d63] tracking-wide uppercase mb-0.5">LinkedIn</span>
                  <span className="text-sm font-medium text-[#ddeeff]">linkedin.com/in/sohailkhan</span>
                </div>
                <svg className="text-[#364d63] transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#c8f547]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <div className="flex items-center gap-3.5 p-4 bg-[#0b1726] cursor-default">
                <div className="w-[38px] h-[38px] rounded-xl shrink-0 flex items-center justify-center bg-[#a78bfa]/10 text-[#a78bfa]"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg></div>
                <div className="flex-1">
                  <span className="block font-['Fira_Code'] text-[10px] text-[#364d63] tracking-wide uppercase mb-0.5">Location</span>
                  <span className="text-sm font-medium text-[#ddeeff]">Abbottabad, Khyber Pakhtunkhwa, Pakistan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}