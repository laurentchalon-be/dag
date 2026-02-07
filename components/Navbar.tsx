
import React from 'react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-center">
      <div className="glass-liquid w-full max-w-6xl rounded-full px-10 py-4 flex items-center justify-between border-white/20">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center shadow-xl shadow-white/10">
            <span className="text-black font-black text-xl">M</span>
          </div>
          <span className="text-xl font-extrabold tracking-tighter">Morning Glow</span>
        </div>

        <div className="hidden lg:flex flex-col items-center gap-2">
          <div className="flex items-center gap-8 text-xs font-bold uppercase tracking-[0.2em] text-white/60">
            <a href="#" className="hover:text-white transition-colors cursor-pointer">Accueil</a>
            <a href="#particuliers" className="hover:text-white transition-colors cursor-pointer">Particuliers</a>
            <a href="#entreprises" className="hover:text-white transition-colors cursor-pointer">Entreprises</a>
            <a href="#menu" className="hover:text-white transition-colors cursor-pointer">Menu</a>
            <a href="#offrir" className="hover:text-white transition-colors cursor-pointer">Offrir</a>
          </div>
          <a
            href="tel:+320473410970"
            className="text-[10px] font-semibold tracking-wider text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            +32 (0)473 41 09 70
          </a>
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={onOpenCart}
            className="group relative flex items-center gap-2 glass px-5 py-2 rounded-full hover:bg-white/10 transition-all border-white/20"
          >
            <span className="text-xs font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100">Box</span>
            <div className="relative">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-white text-black text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};
