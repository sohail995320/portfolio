import React, { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  const [isLoaderHidden, setIsLoaderHidden] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      setIsLoaderHidden(true);
      document.body.style.overflow = '';
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#04080f] text-[#ddeeff] font-['Satoshi'] leading-[1.65] overflow-x-hidden min-h-screen relative selection:bg-[#c8f547]/30 selection:text-[#c8f547]">
      {/* Noise Overlay Layer */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.035] bg-[url('data:image/svg+xml,%3Csvg_viewBox=%220_0_200_200%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter_id=%22n%22%3E%3CfeTurbulence_type=%22fractalNoise%22_baseFrequency=%220.85%22_numOctaves=%224%22_stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23n)%22/%3E%3C/svg%3E')]" />
      
      <CustomCursor />
      <Loader isHidden={isLoaderHidden} />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#132030] py-10 bg-[#04080f]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex flex-wrap items-center justify-between gap-4">
          <div className="font-['Fraunces'] text-24px font-black text-2xl">
            SK<span className="text-[#c8f547]">.</span>
          </div>
          <p className="text-[#364d63] text-sm font-['Fira_Code']">
            © 2025 Sohail Khan — Designed &amp; Built with ❤️ in Abbottabad, Pakistan
          </p>
          <div className="flex gap-6">
            <a onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-[#364d63] text-xs font-['Fira_Code'] hover:text-[#c8f547] transition-colors duration-200 cursor-pointer">Top ↑</a>
            <a onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="text-[#364d63] text-xs font-['Fira_Code'] hover:text-[#c8f547] transition-colors duration-200 cursor-pointer">Projects</a>
            <a onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-[#364d63] text-xs font-['Fira_Code'] hover:text-[#c8f547] transition-colors duration-200 cursor-pointer">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}