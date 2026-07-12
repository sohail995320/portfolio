import React, { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScroll = useRef(0);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 20);

      if (navRef.current) {
        if (y > lastScroll.current + 10 && y > 200) {
          navRef.current.style.transform = 'translateY(-100%)';
        } else if (y < lastScroll.current - 5) {
          navRef.current.style.transform = 'translateY(0)';
        }
      }
      lastScroll.current = y;

      const sections = document.querySelectorAll('section[id]');
      let current = 'home';
      sections.forEach((s) => {
        if (y >= s.offsetTop - 100) {
          current = s.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScroll = (e, id) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (navRef.current) navRef.current.style.transform = 'translateY(0)';
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 h-[70px] border-b border-[#132030] z-[600] transition-all duration-300 backdrop-blur-md ${
          isScrolled ? 'bg-[#04080f]/95' : 'bg-[#04080f]/80'
        }`}
        style={{ transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), background 0.3s' }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 h-full flex items-center justify-between">
          <a onClick={(e) => smoothScroll(e, 'home')} className="font-['Fraunces'] text-[28px] font-black text-[#ddeeff] tracking-[-1.5px] cursor-pointer">
            SK<span className="text-[#c8f547]">.</span>
          </a>
          <ul className="hidden lg:flex items-center gap-0 list-none">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <li key={item}>
                <a
                  onClick={(e) => smoothScroll(e, item)}
                  className={`block text-[13px] font-medium tracking-wider uppercase px-4 py-2 rounded-full transition-all duration-200 cursor-pointer ${
                    activeSection === item ? 'text-[#c8f547] bg-[rgba(200,245,71,0.12)]' : 'text-[#6b8aaa] hover:text-[#c8f547] hover:bg-[rgba(200,245,71,0.12)]'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
          <a onClick={(e) => smoothScroll(e, 'contact')} className="hidden lg:block bg-[#c8f547] text-[#04080f] px-[22px] py-[9px] rounded-full text-[13px] font-bold tracking-wide transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(200,245,71,0.22)] cursor-pointer">
            Hire Me
          </a>
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex lg:hidden flex-col gap-[5px] border border-[#1c3050] w-10 h-10 rounded-[10px] items-center justify-center bg-transparent cursor-pointer"
            aria-label="Toggle menu"
          >
            <span className="w-[18px] h-[1.5px] bg-[#6b8aaa] rounded-sm"></span>
            <span className="w-[18px] h-[1.5px] bg-[#6b8aaa] rounded-sm"></span>
            <span className="w-[18px] h-[1.5px] bg-[#6b8aaa] rounded-sm"></span>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`fixed inset-0 bg-[#04080f] z-[700] flex flex-col items-center justify-center gap-10 transition-all duration-300 ${isMenuOpen ? 'flex' : 'hidden'}`}>
        <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 border border-[#1c3050] color-[#6b8aaa] text-xl w-[42px] h-[42px] rounded-[10px] cursor-pointer bg-transparent text-[#6b8aaa]">
          ✕
        </button>
        <nav className="flex flex-col items-center gap-6">
          {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
            <a key={item} onClick={(e) => smoothScroll(e, item)} className="font-['Fraunces'] text-[42px] font-bold text-[#ddeeff] transition-colors duration-200 hover:text-[#c8f547] cursor-pointer">
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}