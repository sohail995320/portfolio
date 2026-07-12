import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const mouseCoords = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;

    const handleMouseMove = (e) => {
      mouseCoords.current.mx = e.clientX;
      mouseCoords.current.my = e.clientY;
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    let animationId;
    const animateRing = () => {
      const { mx, my } = mouseCoords.current;
      mouseCoords.current.rx += (mx - mouseCoords.current.rx) * 0.13;
      mouseCoords.current.ry += (my - mouseCoords.current.ry) * 0.13;

      if (ring) {
        ring.style.left = `${mouseCoords.current.rx}px`;
        ring.style.top = `${mouseCoords.current.ry}px`;
      }
      animationId = requestAnimationFrame(animateRing);
    };
    animationId = requestAnimationFrame(animateRing);

    // Hover effect handlers
    const addHover = () => {
      cursor?.classList.add('scale-150', 'bg-[#c8f547]');
      ring?.classList.add('w-[56px]', 'height-[56px]', 'border-[#c8f547]');
    };

    const removeHover = () => {
      cursor?.classList.remove('scale-150', 'bg-[#c8f547]');
      ring?.classList.remove('w-[56px]', 'height-[56px]', 'border-[#c8f547]');
    };

    const targets = document.querySelectorAll('a, button, [role="button"], input, textarea');
    targets.forEach((el) => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-[9px] h-[9px] bg-[#c8f547] rounded-full pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2 transition-transform duration-150 mix-blend-difference hidden md:block"
      />
      <div
        ref={ringRef}
        className="fixed w-[34px] h-[34px] border border-[rgba(200,245,71,0.45)] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hidden md:block"
      />
    </>
  );
}