import React, { useEffect } from 'react';

export default function Projects() {
  useEffect(() => {
    // 3D Tilt translation effect for Project Tiles
    const handleTilt = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
      card.style.transform = `translateY(-6px) rotateX(${y}deg) rotateY(${x}deg)`;
      card.style.transition = 'transform 0.05s';
    };

    const resetTilt = (e) => {
      const card = e.currentTarget;
      card.style.transform = '';
      card.style.transition = 'transform 0.4s cubic-bezier(0.16,1,0.3,1)';
    };

    const cards = document.querySelectorAll('.proj-tilt-card');
    cards.forEach((card) => {
      card.addEventListener('mousemove', handleTilt);
      card.addEventListener('mouseleave', resetTilt);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener('mousemove', handleTilt);
        card.removeEventListener('mouseleave', resetTilt);
      });
    };
  }, []);

  return (
    <section id="projects" className="py-[130px] relative overflow-hidden bg-[#060c16]">
      <div className="absolute top-[1px] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1c3050] to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-['Fraunces'] text-[clamp(80px,14vw,200px)] font-black color-[rgba(255,255,255,0.015)] pointer-events-none select-none tracking-tighter text-[#ffffff]/[0.015]">
        PROJECTS
      </div>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="mb-16">
          <div className="font-['Fira_Code'] text-xs text-[#c8f547] tracking-widest mb-4">// What I've Built</div>
          <h2 className="font-['Fraunces'] text-[clamp(38px,5.5vw,64px)] font-black tracking-[-2.5px] line-height-1 mb-4">Projects</h2>
          <p className="text-[#6b8aaa] text-[17px] max-w-[540px] line-height-1.75">Real-world projects demonstrating frontend design, Java logic, and full-stack thinking. Update the links with your GitHub repos and live demos.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* PROJECT 1 — FEATURED */}
          <article className="proj-tilt-card bg-[#0b1726] border border-[#1c3050] rounded-2xl overflow-hidden transition-all duration-300 lg:col-span-2 group hover:border-[rgba(200,245,71,0.2)] hover:shadow-2xl">
            <div className="h-[200px] lg:h-[260px] bg-[#08111e] relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[#c8f547] to-[#38bdf8] opacity-[0.09] group-hover:opacity-16 transition-opacity duration-300" />
              <div className="bg-[#0a1420] rounded-lg w-[85%] overflow-hidden border border-[#1c3050] relative z-10">
                <div className="bg-[#060d18] p-2 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#ff5f57]" /><span className="w-2 h-2 rounded-full bg-[#febc2e]" /><span className="w-2 h-2 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex h-24 lg:h-32">
                  <div className="w-[28%] bg-[#060e1c] p-[10px] flex flex-col gap-1.5 border-r border-[#132030]">
                    <div className="h-2 bg-[#1c3050] rounded-sm bg-[#c8f547]/60" />
                    <div className="h-2 bg-[#1c3050] rounded-sm" /><div className="h-2 bg-[#1c3050] rounded-sm" /><div className="h-2 bg-[#1c3050] rounded-sm" />
                  </div>
                  <div className="flex-1 p-[10px] flex flex-col gap-2">
                    <div className="h-2 bg-[#1c3050] rounded-sm w-[80%]" /><div className="h-2 bg-[#1c3050] rounded-sm w-[55%]" />
                    <div className="flex gap-1.5 flex-1">
                      <div className="flex-1 bg-[#132030] rounded-sm" /><div className="flex-1 bg-[#132030] rounded-sm" /><div className="flex-1 bg-[#132030] rounded-sm" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 font-['Fira_Code'] text-[11px] text-[#c8f547] bg-[rgba(200,245,71,0.12)] border border-[rgba(200,245,71,0.18)] px-2.5 py-1 rounded-full tracking-widest">01</div>
            </div>
            <div className="p-7">
              <div className="flex flex-wrap gap-1.5 mb-4">
                {['React', 'Node.js', 'Express', 'MongoDB'].map((t) => (
                  <span key={t} className="font-['Fira_Code'] text-[11px] px-2.5 py-0.5 rounded-full border bg-[rgba(200,245,71,0.07)] border-[rgba(200,245,71,0.2)] text-[#c8f547]">{t}</span>
                ))}
              </div>
              <h3 className="font-['Fraunces'] text-22px font-bold tracking-tight mb-2 text-xl">Task Management Dashboard</h3>
              <p className="text-[#6b8aaa] text-sm line-height-1.7 mb-6">A full-stack productivity app with drag-and-drop task boards, JWT authentication, real-time updates, priority filtering, and deadline tracking. React frontend + Node/Express REST API.</p>
              <div className="flex gap-5 items-center">
                <a href="YOUR_LIVE_LINK" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-[13px] font-semibold font-['Fira_Code'] text-[#c8f547] hover:text-[#e4ff7a] transition-colors duration-200">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z" /></svg> Live Demo
                </a>
                <a href="YOUR_GITHUB_LINK" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-[13px] font-semibold font-['Fira_Code'] text-[#6b8aaa] hover:text-[#ddeeff] transition-colors duration-200">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg> GitHub
                </a>
              </div>
            </div>
          </article>

          {/* PROJECT 2 */}
          <article className="proj-tilt-card bg-[#0b1726] border border-[#1c3050] rounded-2xl overflow-hidden transition-all duration-300 group hover:border-[rgba(200,245,71,0.2)] hover:shadow-2xl">
            <div className="h-[200px] bg-[#08111e] relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[#fb923c] to-[#f59e0b] opacity-[0.09] group-hover:opacity-16 transition-opacity duration-300" />
              <div className="bg-[#050d18] rounded-lg p-4 font-['Fira_Code'] text-xs line-height-1.8 border border-[#1c3050] relative z-10 w-[80%]">
                <div><span className="text-[#c084fc]">public class</span> <span className="text-[#38bdf8]">StudentManager</span> {'{'}</div>
                <div className="pl-5"><span className="text-[#c084fc]">private</span> List&lt;<span className="text-[#38bdf8]">Student</span>&gt; students;</div>
                <div className="pl-5"><span className="text-[#c8f547]">addStudent</span>(<span className="text-[#38bdf8]">Student</span> s) {'{'}</div>
                <div className="pl-10">students.<span class="text-[#c8f547]">add</span>(s);</div>
                <div className="pl-5">{'}'}</div>
                <div>{'}'}</div>
              </div>
              <div className="absolute top-4 right-4 font-['Fira_Code'] text-[11px] text-[#c8f547] bg-[rgba(200,245,71,0.12)] border border-[rgba(200,245,71,0.18)] px-2.5 py-1 rounded-full tracking-widest">02</div>
            </div>
            <div className="p-7">
              <div className="flex flex-wrap gap-1.5 mb-4">
                {['Java', 'Spring Boot', 'REST API', 'MySQL'].map((t) => (
                  <span key={t} className="font-['Fira_Code'] text-[11px] px-2.5 py-0.5 rounded-full border bg-[rgba(251,146,60,0.07)] border-[rgba(251,146,60,0.2)] text-[#fb923c]">{t}</span>
                ))}
              </div>
              <h3 className="font-['Fraunces'] text-22px font-bold tracking-tight mb-2 text-xl">Student Management System</h3>
              <p className="text-[#6b8aaa] text-sm line-height-1.7 mb-6">A Java OOP project with full CRUD operations, Spring Boot REST API, JDBC database connectivity, student records, grade tracking, and course management.</p>
              <div className="flex gap-5 items-center">
                <a href="YOUR_LIVE_LINK" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-[13px] font-semibold font-['Fira_Code'] text-[#c8f547] hover:text-[#e4ff7a] transition-colors duration-200"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /></svg> Live Demo</a>
                <a href="YOUR_GITHUB_LINK" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-[13px] font-semibold font-['Fira_Code'] text-[#6b8aaa] hover:text-[#ddeeff] transition-colors duration-200"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg> GitHub</a>
              </div>
            </div>
          </article>

          {/* PROJECT 3 */}
          <article className="proj-tilt-card bg-[#0b1726] border border-[#1c3050] rounded-2xl overflow-hidden transition-all duration-300 group hover:border-[rgba(200,245,71,0.2)] hover:shadow-2xl">
            <div className="h-[200px] bg-[#08111e] relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[#a78bfa] to-[#38bdf8] opacity-[0.09] group-hover:opacity-16 transition-opacity duration-300" />
              <div className="bg-[#0a1420] rounded-lg w-[70%] overflow-hidden border border-[#1c3050] relative z-10">
                <div className="bg-[#060d18] p-2 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#ff5f57]" /><span className="w-2 h-2 rounded-full bg-[#febc2e]" /><span className="w-2 h-2 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex flex-wrap gap-1.5 p-2.5">
                  <div className="w-[calc(50%-3px)] h-10 bg-[#1c3050] rounded-sm" /><div className="w-[calc(50%-3px)] h-10 bg-[#1c3050] rounded-sm" />
                  <div className="w-[calc(50%-3px)] h-10 bg-[#1c3050] rounded-sm" /><div className="w-[calc(50%-3px)] h-10 bg-[#1c3050] rounded-sm" />
                </div>
              </div>
              <div className="absolute top-4 right-4 font-['Fira_Code'] text-[11px] text-[#c8f547] bg-[rgba(200,245,71,0.12)] border border-[rgba(200,245,71,0.18)] px-2.5 py-1 rounded-full tracking-widest">03</div>
            </div>
            <div className="p-7">
              <div className="flex flex-wrap gap-1.5 mb-4">
                {['React', 'CSS3', 'Node.js'].map((t) => (
                  <span key={t} className="font-['Fira_Code'] text-[11px] px-2.5 py-0.5 rounded-full border bg-[rgba(56,189,248,0.07)] border-[rgba(56,189,248,0.2)] text-[#38bdf8]">{t}</span>
                ))}
              </div>
              <h3 className="font-['Fraunces'] text-22px font-bold tracking-tight mb-2 text-xl">E-Commerce Frontend</h3>
              <p className="text-[#6b8aaa] text-sm line-height-1.7 mb-6">Fully responsive e-commerce UI with product listings, cart functionality, search &amp; filter, and smooth animations. Pixel-perfect across all devices.</p>
              <div className="flex gap-5 items-center">
                <a href="YOUR_LIVE_LINK" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-[13px] font-semibold font-['Fira_Code'] text-[#c8f547] hover:text-[#e4ff7a] transition-colors duration-200">Live Demo</a>
                <a href="YOUR_GITHUB_LINK" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-[13px] font-semibold font-['Fira_Code'] text-[#6b8aaa] hover:text-[#ddeeff] transition-colors duration-200">GitHub</a>
              </div>
            </div>
          </article>

          {/* PROJECT 4 */}
          <article className="proj-tilt-card bg-[#0b1726] border border-[#1c3050] rounded-2xl overflow-hidden transition-all duration-300 group hover:border-[rgba(200,245,71,0.2)] hover:shadow-2xl">
            <div className="h-[200px] bg-[#08111e] relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[#38bdf8] to-[#6ee7b7] opacity-[0.09] group-hover:opacity-16 transition-opacity duration-300" />
              <div className="bg-[#050d18] rounded-lg p-4 font-['Fira_Code'] text-xs line-height-1.8 border border-[#1c3050] relative z-10 w-[80%]">
                <div className="text-[#364d63]">// Blog API Routes</div>
                <div><span className="text-[#c8f547]">app</span>.<span className="text-[#c8f547]">get</span>(<span className="text-[#fb923c]">'/api/posts'</span>,</div>
                <div className="pl-5">async (req, res) =&gt; {'{'}</div>
                <div className="pl-10"><span className="text-[#c084fc]">const</span> posts = <span className="text-[#c084fc]">await</span></div>
                <div className="pl-10">Post.<span className="text-[#c8f547]">find</span>();</div>
                <div className="pl-5">res.<span className="text-[#c8f547]">json</span>(posts);</div>
                <div>{'});'}</div>
              </div>
              <div className="absolute top-4 right-4 font-['Fira_Code'] text-[11px] text-[#c8f547] bg-[rgba(200,245,71,0.12)] border border-[rgba(200,245,71,0.18)] px-2.5 py-1 rounded-full tracking-widest">04</div>
            </div>
            <div className="p-7">
              <div className="flex flex-wrap gap-1.5 mb-4">
                {['JavaScript', 'Express', 'MongoDB'].map((t) => (
                  <span key={t} className="font-['Fira_Code'] text-[11px] px-2.5 py-0.5 rounded-full border bg-[rgba(167,139,250,0.07)] border-[rgba(167,139,250,0.2)] text-[#a78bfa]">{t}</span>
                ))}
              </div>
              <h3 className="font-['Fraunces'] text-22px font-bold tracking-tight mb-2 text-xl">Blog Platform</h3>
              <p className="text-[#6b8aaa] text-sm line-height-1.7 mb-6">A minimal blog with Markdown support, image uploads, and user management. Vanilla JS frontend with an Express + MongoDB backend and clean reading UX.</p>
              <div className="flex gap-5 items-center">
                <a href="YOUR_LIVE_LINK" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-[13px] font-semibold font-['Fira_Code'] text-[#c8f547] hover:text-[#e4ff7a] transition-colors duration-200">Live Demo</a>
                <a href="YOUR_GITHUB_LINK" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-[13px] font-semibold font-['Fira_Code'] text-[#6b8aaa] hover:text-[#ddeeff] transition-colors duration-200">GitHub</a>
              </div>
            </div>
          </article>

          {/* ADD PROJECT CARD */}
          <article className="border-2 border-dashed border-[#1c3050] bg-transparent rounded-2xl overflow-hidden transition-all duration-300 group hover:border-[rgba(200,245,71,0.3)]">
            <div className="flex flex-col items-center justify-center gap-4 p-12 text-center min-h-[320px]">
              <div className="w-12 h-12 border border-[#1c3050] rounded-xl flex items-center justify-center text-2xl text-[#6b8aaa] transition-colors duration-200 group-hover:border-[#c8f547] group-hover:text-[#c8f547]">+</div>
              <strong className="text-base font-semibold">Add Your Project</strong>
              <p className="text-[#6b8aaa] text-xs line-height-1.6 max-w-[240px]">Duplicate any project card in the HTML and update the title, description, tags, GitHub &amp; demo links.</p>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}