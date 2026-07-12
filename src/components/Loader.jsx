import React from 'react';

export default function Loader({ isHidden }) {
  return (
    <div
      className={`fixed inset-0 bg-[#04080f] flex items-center justify-center z-[8000] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isHidden ? 'opacity-0 visibility-hidden pointer-events-none' : ''
      }`}
    >
      <div className="text-center">
        <div className="font-['Fraunces'] text-[52px] font-black text-[#c8f547] tracking-[-2px] mb-6 animate-pulse">
          SK
        </div>
        <div className="w-[180px] h-[2px] bg-[#1c3050] rounded-sm overflow-hidden">
          <div className="h-full bg-[#c8f547] rounded-sm w-full animate-[load-progress_1.4s_cubic-bezier(0.16,1,0.3,1)_forwards]" />
        </div>
      </div>
    </div>
  );
}