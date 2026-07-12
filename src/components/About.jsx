import React, { useEffect, useState } from 'react';

// Reusable animated count manager for metrics tracking
function AnimatedCounter({ target }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const step = target / (duration / 16);
    
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const timer = setInterval(() => {
          start += step;
          if (start >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.round(start));
          }
        }, 16);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.5 });

    const el = document.getElementById(`counter-${target}`);
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, [target]);

  return <span id={`counter-${target}`}>{count}</span>;
}

export default function About() {
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('opacity-100', 'translate-y-0');
          e.target.classList.remove('opacity-0', 'translate-y-7');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-[130px] relative overflow-hidden bg-[#060c16]">
      <div className="absolute top-[1px] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1c3050] to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-['Fraunces'] text-[clamp(80px,14vw,200px)] font-black color-[rgba(255,255,255,0.015)] pointer-events-none select-none tracking-tighter text-[#ffffff]/[0.015]">
        ABOUT
      </div>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="mb-16">
          <div className="font-['Fira_Code'] text-xs text-[#c8f547] tracking-widest mb-4">// Who I Am</div>
          <h2 className="font-['Fraunces'] text-[clamp(38px,5.5vw,64px)] font-black tracking-[-2.5px] line-height-1 reveal-on-scroll opacity-0 translate-y-7 transition-all duration-750 ease-[cubic-bezier(0.16,1,0.3,1)]">
            About Me
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="about-text">
            <p className="text-[#6b8aaa] text-base line-height-1.85 mb-5 reveal-on-scroll opacity-0 translate-y-7 transition-all duration-750 delay-100">
              I'm a <strong className="text-[#ddeeff] font-semibold">Software Engineering student at COMSATS University, Abbottabad</strong> — passionate about building things that live on the internet.
            </p>
            <p className="text-[#6b8aaa] text-base line-height-1.85 mb-5 reveal-on-scroll opacity-0 translate-y-7 transition-all duration-750 delay-200">
              I specialize in <strong className="text-[#ddeeff] font-semibold">frontend development</strong> with React and modern CSS, combined with solid <strong className="text-[#ddeeff] font-semibold">Java backend skills</strong> to deliver complete, end-to-end solutions. My approach: performance, maintainability, and real-world usability come first.
            </p>
            <p className="text-[#6b8aaa] text-base line-height-1.85 mb-5 reveal-on-scroll opacity-0 translate-y-7 transition-all duration-750 delay-300">
              I enjoy turning complex requirements into clean, efficient code that works reliably in production environments. Currently seeking <strong className="text-[#ddeeff] font-semibold">internships and freelance projects</strong> where I can contribute and grow.
            </p>
            <div className="grid grid-cols-3 gap-[1px] bg-[#132030] rounded-xl overflow-hidden mt-10 border border-[#132030] reveal-on-scroll opacity-0 translate-y-7 transition-all duration-750 delay-400">
              {[
                { label: 'Projects', num: 6, suffix: '+' },
                { label: 'Years Coding', num: 2, suffix: '+' },
                { label: 'Technologies', num: 8, suffix: '+' },
              ].map((stat, idx) => (
                <div key={idx} className="bg-[#0b1726] p-6 text-center hover:bg-[#0e1e30] transition-colors duration-200">
                  <span className="font-['Fraunces'] text-[46px] font-black text-[#c8f547] block line-height-1">
                    <AnimatedCounter target={stat.num} />
                    <span className="text-[28px] text-[#c8f547]">{stat.suffix}</span>
                  </span>
                  <span className="block text-[#6b8aaa] text-[12px] font-['Fira_Code'] mt-2 tracking-wide uppercase">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about-timeline reveal-on-scroll opacity-0 translate-y-7 transition-all duration-750 delay-200">
            <h3 className="font-['Fraunces'] text-24px font-bold tracking-tight mb-8 text-xl">My Journey</h3>
            <div className="relative border-l border-[#1c3050] pl-6 space-y-8">
              {[
                { year: '2022 — Present', title: 'B.S. Software Engineering', sub: 'COMSATS University, Abbottabad' },
                { year: '2023', title: 'Mastered Frontend Development', sub: 'HTML, CSS, JavaScript, React — building responsive, modern UIs' },
                { year: '2024', title: 'Expanded to Java & Backend', sub: 'OOP, Spring Boot, REST APIs, JDBC, database integration' },
                { year: '2025', title: 'Building & Growing', sub: '6+ projects completed — seeking internship & freelance' },
              ].map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[30px] top-1.5 w-[11px] h-[11px] bg-[#c8f547] rounded-full shadow-[0_0_14px_rgba(200,245,71,0.5)] z-10" />
                  <div>
                    <div className="font-['Fira_Code'] text-[11px] text-[#c8f547] tracking-wider mb-1">{item.year}</div>
                    <div className="font-bold text-[15px] mb-1">{item.title}</div>
                    <div className="text-[#6b8aaa] text-[13px] line-height-1.6">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}