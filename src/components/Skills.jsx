import React, { useEffect } from 'react';

export default function Skills() {
  useEffect(() => {
    // 3D Card mouse tracker tilt translation logic
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

    const cards = document.querySelectorAll('.tilt-card');
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

  const skillCards = [
    { icon: '⚡', title: 'Frontend', type: 'fe', items: ['HTML5 & CSS3', 'JavaScript ES6+', 'React.js', 'Tailwind CSS', 'Responsive Design'] },
    { icon: '☕', title: 'Java', type: 'java', items: ['Core Java', 'OOP Principles', 'Spring Boot', 'Maven', 'JDBC'] },
    { icon: '🔧', title: 'Backend', type: 'be', items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'MVC Pattern'] },
    { icon: '🗄️', title: 'Tools & DB', type: 'db', items: ['Git & GitHub', 'MongoDB', 'MySQL', 'Docker', 'Postman'] },
  ];

  const skillTags = [
    { name: 'HTML5', cat: 'fe' }, { name: 'CSS3', cat: 'fe' }, { name: 'JavaScript', cat: 'fe' }, { name: 'React.js', cat: 'fe' }, { name: 'Tailwind CSS', cat: 'fe' },
    { name: 'Java', cat: 'java' }, { name: 'Spring Boot', cat: 'java' }, { name: 'OOP', cat: 'java' }, { name: 'JDBC', cat: 'java' },
    { name: 'Node.js', cat: 'be' }, { name: 'Express.js', cat: 'be' }, { name: 'REST APIs', cat: 'be' },
    { name: 'MongoDB', cat: 'db' }, { name: 'MySQL', cat: 'db' },
    { name: 'Git', cat: 'tools' }, { name: 'GitHub', cat: 'tools' }, { name: 'Docker', cat: 'tools' }, { name: 'Postman', cat: 'tools' }, { name: 'VS Code', cat: 'tools' }
  ];

  const tagColors = {
    fe: 'bg-[rgba(200,245,71,0.07)] border-[rgba(200,245,71,0.2)] text-[#c8f547]',
    java: 'bg-[rgba(251,146,60,0.07)] border-[rgba(251,146,60,0.2)] text-[#fb923c]',
    be: 'bg-[rgba(56,189,248,0.07)] border-[rgba(56,189,248,0.2)] text-[#38bdf8]',
    db: 'bg-[rgba(167,139,250,0.07)] border-[rgba(167,139,250,0.2)] text-[#a78bfa]',
    tools: 'bg-[rgba(110,231,183,0.07)] border-[rgba(110,231,183,0.2)] text-[#6ee7b7]'
  };

  const lineColors = {
    fe: 'from-[#c8f547] to-[#a8e023]',
    java: 'from-[#fb923c] to-[#f59e0b]',
    be: 'from-[#38bdf8] to-[#818cf8]',
    db: 'from-[#a78bfa] to-[#38bdf8]'
  };

  return (
    <section id="skills" className="py-[130px] relative overflow-hidden bg-[#04080f]">
      <div className="absolute top-[1px] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1c3050] to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-['Fraunces'] text-[clamp(80px,14vw,200px)] font-black color-[rgba(255,255,255,0.015)] pointer-events-none select-none tracking-tighter text-[#ffffff]/[0.015]">
        SKILLS
      </div>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="mb-16">
          <div className="font-['Fira_Code'] text-xs text-[#c8f547] tracking-widest mb-4">// What I Know</div>
          <h2 className="font-['Fraunces'] text-[clamp(38px,5.5vw,64px)] font-black tracking-[-2.5px] line-height-1 mb-4">My Toolkit</h2>
          <p className="text-[#6b8aaa] text-[17px] max-w-[540px] line-height-1.75">Full-stack toolkit for building real, production-ready applications — from pixel-perfect UIs to scalable backends.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#132030] rounded-2xl overflow-hidden border border-[#132030] mb-12">
          {skillCards.map((card, idx) => (
            <div key={idx} className="tilt-card bg-[#0b1726] p-8 transition-all duration-250 relative overflow-hidden group cursor-default">
              <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${lineColors[card.type]} scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100`} />
              <div className="text-[28px] mb-4 block">{card.icon}</div>
              <h3 className="text-base font-bold mb-4">{card.title}</h3>
              <ul className="list-none">
                {card.items.map((item, i) => (
                  <li key={i} className="text-[#6b8aaa] text-[13px] py-1.25 border-b border-[#132030] last:border-b-0 flex items-center gap-2">
                    <span className="text-[#c8f547] text-base">›</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2.5">
          {skillTags.map((tag, idx) => (
            <span
              key={idx}
              className={`px-4 py-2 rounded-full text-xs font-['Fira_Code'] border transition-all duration-200 hover:-translate-y-0.75 cursor-default ${tagColors[tag.cat]}`}
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}