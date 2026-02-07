
import React, { useState } from 'react';

type Vibe = 'day' | 'night' | 'dawn';

export const VibeSwitcher: React.FC = () => {
  const [active, setActive] = useState<Vibe>('dawn');

  return (
    <div className="flex justify-center my-8">
      <div className="glass-liquid rounded-full p-1.5 flex items-center relative gap-1 min-w-[240px]">
        {/* Active Indicator Layer */}
        <div 
          className="absolute h-[calc(100%-12px)] w-[calc(33.33%-4px)] bg-white/20 border border-white/30 rounded-full transition-all duration-500 ease-out"
          style={{
            transform: `translateX(${active === 'day' ? '0%' : active === 'night' ? '100%' : '200%'})`,
            left: '6px'
          }}
        />
        
        <button 
          onClick={() => setActive('day')}
          className={`flex-1 flex items-center justify-center py-3 z-10 transition-colors duration-300 ${active === 'day' ? 'text-white' : 'text-white/40 hover:text-white/60'}`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
          </svg>
        </button>

        <button 
          onClick={() => setActive('night')}
          className={`flex-1 flex items-center justify-center py-3 z-10 transition-colors duration-300 ${active === 'night' ? 'text-white' : 'text-white/40 hover:text-white/60'}`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>

        <button 
          onClick={() => setActive('dawn')}
          className={`flex-1 flex items-center justify-center py-3 z-10 transition-colors duration-300 ${active === 'dawn' ? 'text-white' : 'text-white/40 hover:text-white/60'}`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m8.66 1.34l-.707.707M4.047 4.34l.707.707M2 17.657h20M5 17.657c0-3.866 3.134-7 7-7s7 3.134 7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};
