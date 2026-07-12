import React, { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef(null);
  const glowContainerRef = useRef(null);

  useEffect(() => {
    // Glow parallax movement logic
    const handleGlowParallax = (e) => {
      if (!glowContainerRef.current) return;
      const glows = glowContainerRef.current.querySelectorAll('.hero-glow');
      const cx = e.clientX / window.innerWidth - 0.5;
      const cy = e.clientY / window.innerHeight - 0.5;
      glows.forEach((g, i) => {
        const strength = (i + 1) * 18;
        g.style.transform = `translate(${cx * strength}px, ${cy * strength}px)`;
      });
    };
    document.addEventListener('mousemove', handleGlowParallax);

    // Canvas particle tracking logic
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H, particles;

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    resize();

    const initParticles = () => {
      const count = Math.floor((W * H) / 18000);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.2 + 0.3,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        o: Math.random() * 0.4 + 0.1,
      }));
    };
    initParticles();
    window.addEventListener('resize', () => { resize(); initParticles(); });

    let animId;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,245,71,${p.o})`;
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(200,245,71,${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    // Typing system dynamic text sequence implementation
    const roleEl = document.querySelector('.typing-target');
    let typeAnimId;
    if (roleEl) {
      const texts = [
        'Frontend & Java Developer',
        'React & CSS Specialist',
        'Full-Stack Engineer',
        'Clean Code Enthusiast',
      ];
      let ti = 0, ci = 0, deleting = false, paused = false;

      const type = () => {
        if (paused) return;
        const current = texts[ti];
        if (!deleting) {
          if (ci < current.length) {
            roleEl.textContent = current.slice(0, ++ci);
            typeAnimId = setTimeout(type, 55);
          } else {
            paused = true;
            typeAnimId = setTimeout(() => { paused = false; deleting = true; type(); }, 2200);
          }
        } else {
          if (ci > 0) {
            roleEl.textContent = current.slice(0, --ci);
            typeAnimId = setTimeout(type, 32);
          } else {
            deleting = false;
            ti = (ti + 1) % texts.length;
            typeAnimId = setTimeout(type, 400);
          }
        }
      };
      roleEl.textContent = '';
      type();
    }

    return () => {
      document.removeEventListener('mousemove', handleGlowParallax);
      cancelAnimationFrame(animId);
      clearTimeout(typeAnimId);
    };
  }, []);

  return (
    <section id="home" className="min-height-[100vh] flex items-center pt-[70px] relative overflow-hidden w-full">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none w-full h-full" />
      <div ref={glowContainerRef} className="absolute inset-0 pointer-events-none">
        <div className="hero-glow g1 absolute rounded-full blur-[120px] w-[700px] h-[700px] bg-[rgba(200,245,71,0.045)] -top-[200px] -right-[100px] animate-[glow-drift_14s_ease-in-out_infinite_alternate]" />
        <div className="hero-glow g2 absolute rounded-full blur-[120px] w-[500px] h-[500px] bg-[rgba(56,189,248,0.04)] -bottom-[100px] -left-[150px] animate-[glow-drift_14s_ease-in-out_infinite_alternate] [animation-delay:-5s]" />
        <div className="hero-glow g3 absolute rounded-full blur-[120px] w-[350px] h-[350px] bg-[rgba(251,146,60,0.03)] top-[40%] left-[35%] animate-[glow-drift_14s_ease-in-out_infinite_alternate] [animation-delay:-9s]" />
      </div>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 w-full grid grid-columns-1 lg:grid-cols-[1fr_380px] gap-20 items-center relative z-10">
        <div className="hero-left">
          <div className="inline-flex items-center gap-2.5 bg-[rgba(200,245,71,0.12)] border border-[rgba(200,245,71,0.25)] rounded-full px-[18px] py-2 font-['Fira_Code'] text-xs text-[#c8f547] mb-8 tracking-wider">
            <span className="w-[7px] h-[7px] bg-[#c8f547] rounded-full animate-pulse" />
            Open to Internships &amp; Freelance
          </div>
          <h1 className="font-['Fraunces'] text-[clamp(56px,8vw,104px)] font-black tracking-[-5px] line-height-0.9 mb-6">
            <span className="block text-[#ddeeff]">Sohail</span>
            <span className="block text-[#c8f547] italic">Khan<span className="text-[#ddeeff] not-italic">.</span></span>
          </h1>
          <div className="flex items-center gap-3 font-['Fira_Code'] text-sm text-[#38bdf8] tracking-wider mb-6">
            <span className="w-8 h-[1px] bg-[#38bdf8] shrink-0" />
            <span className="typing-target">Frontend &amp; Java Developer</span>
          </div>
          <p className="text-[17px] color-[#6b8aaa] line-height-1.8 max-w-[500px] mb-8 text-[#6b8aaa]">
            I craft <strong className="text-[#ddeeff] font-semibold">pixel-perfect interfaces</strong> and build{' '}
            <strong className="text-[#ddeeff] font-semibold">robust Java backends</strong> — turning complex ideas into clean, fast, production-ready apps that users love.
          </p>
          <div className="flex flex-wrap gap-2 mb-10">
            {['React', 'JavaScript', 'Java', 'Spring Boot', 'Node.js', 'MongoDB'].map((tech) => (
              <span key={tech} className="bg-[#0b1726] border border-[#1c3050] text-[#6b8aaa] px-3.5 py-1.5 rounded-full text-xs font-['Fira_Code'] transition-all duration-200 hover:border-[#c8f547] hover:text-[#c8f547] hover:-translate-y-0.5 cursor-default">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3.5">
            <a onClick={(e) => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center gap-2 bg-[#c8f547] text-[#04080f] px-8 py-3.5 rounded-xl text-[15px] font-bold tracking-wide transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(200,245,71,0.22)] cursor-pointer">
              View My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <a onClick={(e) => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center bg-transparent border border-[#1c3050] text-[#6b8aaa] px-8 py-3.5 rounded-xl text-[15px] font-semibold transition-all duration-200 hover:border-[#c8f547] hover:text-[#c8f547] hover:-translate-y-0.5 cursor-pointer">
              Get In Touch
            </a>
          </div>
        </div>
        <div className="hero-right hidden lg:block">
          <div className="bg-[#0b1726] border border-[#1c3050] rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute -top-[80px] -left-[80px] w-[250px] h-[250px] bg-[radial-gradient(circle,rgba(200,245,71,0.06),transparent_70%)] pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#c8f547] via-[#38bdf8] to-[#fb923c]" />
            <div className="w-[110px] h-[110px] mx-auto mb-6 relative">
              <div className="absolute inset-[-5px] rounded-full border-2 border-transparent border-t-[#c8f547] border-r-[#38bdf8] animate-spin" />
              <div className="w-[110px] h-[110px] rounded-full bg-gradient-to-br from-[#0f2540] to-[#1a3a60] border-2 border-[#1c3050] flex items-center justify-center font-['Fraunces'] text-[38px] font-black text-[#c8f547] tracking-[-2px]">
                SK
              </div>
            </div>
            <div className="font-['Fraunces'] text-[22px] font-bold text-center mb-1">Sohail Khan</div>
            <div className="font-['Fira_Code'] text-[11px] text-[#c8f547] text-center tracking-wider mb-6">Frontend &amp; Java Developer</div>
            <div className="h-[1px] bg-[#04080f] mb-6" />
            <ul className="list-none flex flex-col gap-3 mb-5">
              <li className="flex items-center gap-3 text-size-[13px] text-[#6b8aaa]">
                <span className="w-7 h-7 shrink-0 bg-[rgba(200,245,71,0.12)] rounded-lg flex items-center justify-center text-[#c8f547]">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                </span>
                Abbottabad, Pakistan
              </li>
              <li className="flex items-center gap-3 text-size-[13px] text-[#6b8aaa]">
                <span className="w-7 h-7 shrink-0 bg-[rgba(200,245,71,0.12)] rounded-lg flex items-center justify-center text-[#c8f547]">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
                </span>
                B.S. Software Engineering — COMSATS
              </li>
              <li className="flex items-center gap-3 text-size-[13px] text-[#6b8aaa]">
                <span className="w-7 h-7 shrink-0 bg-[rgba(200,245,71,0.12)] rounded-lg flex items-center justify-center text-[#c8f547]">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                </span>
                6+ Projects Completed
              </li>
            </ul>
            <div className="flex items-center gap-2.5 bg-[rgba(200,245,71,0.06)] border border-[rgba(200,245,71,0.2)] rounded-xl p-2.5 font-['Fira_Code'] text-[11px] text-[#c8f547] tracking-wider">
              <span className="w-[7px] h-[7px] bg-[#c8f547] rounded-full animate-pulse" />
              Available for new opportunities
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#364d63] font-['Fira_Code'] text-[11px] tracking-widest animate-bounce">
        <div className="w-[22px] h-[34px] border border-[#364d63] rounded-xl flex justify-center pt-1.5">
          <div className="w-[3px] h-[6px] bg-[#364d63] rounded-sm animate-ping" />
        </div>
        <span>Scroll</span>
      </div>
    </section>
  );
}