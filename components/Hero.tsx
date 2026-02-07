
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center px-6 pt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-12 duration-1000 ease-out">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-liquid border-white/30">
            <span className="flex h-2 w-2 rounded-full bg-white shadow-[0_0_10px_white] animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/80">Curated Morning Luxe</span>
          </div>

          <h1 className="text-8xl md:text-9xl font-bold leading-[0.85] tracking-tight">
            The <span className="italic serif font-normal text-white/90">liquid</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-purple-100 to-orange-100">Sunrise</span>
          </h1>

          <p className="text-xl text-white/50 max-w-lg leading-relaxed font-light">
            An ethereal breakfast experience crafted for the senses. We deliver liquid gold honey, artisanal pastries, and the freshest organic harvest to your doorstep.
          </p>

          <div className="flex flex-wrap gap-5 pt-4">
            <button className="px-12 py-5 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-all duration-200 shadow-[0_20px_40px_rgba(255,255,255,0.2)] cursor-pointer">
              Begin Journey
            </button>
            <button className="px-12 py-5 glass-liquid rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-200 cursor-pointer">
              Menu Gallery
            </button>
          </div>
        </div>

        <div className="hidden lg:block relative animate-in fade-in zoom-in duration-1000 delay-300">
          <div className="relative z-10 w-full aspect-[4/5] rounded-[5rem] overflow-hidden glass-liquid p-5 -rotate-2 group hover:rotate-0 transition-transform duration-300">
            <img
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1200"
              className="w-full h-full object-cover rounded-[4.5rem] saturate-[1.2]"
              alt="Premium breakfast spread featuring golden croissants, fresh berries, artisanal honey, and organic harvest on an elegant table setting"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Floating High-End Tag */}
          <div className="absolute -top-12 -right-8 glass-liquid px-8 py-5 rounded-[2rem] animate-bounce" style={{ animationDuration: '3s' }}>
            <div className="text-white text-xl font-bold italic serif">Freshly Plucked</div>
            <div className="text-[10px] tracking-widest uppercase text-white/50 mt-1">Farm to Bed • 6:00 AM</div>
          </div>
        </div>
      </div>
    </section>
  );
};
