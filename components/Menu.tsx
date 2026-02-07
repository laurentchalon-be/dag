
import React from 'react';
import { BREAKFAST_MENU } from '../constants';
import { BreakfastItem } from '../types';

interface MenuProps {
  onAddToCart: (item: BreakfastItem) => void;
}

export const Menu: React.FC<MenuProps> = ({ onAddToCart }) => {
  return (
    <section id="menu" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4 block">Seasonal Selection</span>
          <h2 className="text-5xl font-bold">The Curated Gallery</h2>
        </div>
        <div className="flex gap-4">
          {['All', 'Healthy', 'Classic', 'Indulgent'].map(cat => (
            <button key={cat} className="px-6 py-2 rounded-full border border-white/10 hover:border-orange-500 hover:text-orange-500 transition-all text-sm font-medium">
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BREAKFAST_MENU.map((item) => (
          <div key={item.id} className="group relative glass rounded-[2.5rem] overflow-hidden hover:-translate-y-2 transition-all duration-500 cursor-pointer">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 glass px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-md flex items-center gap-1.5">
                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>{item.rating}</span>
              </div>
            </div>

            <div className="p-8 space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold">{item.name}</h3>
                <span className="text-xl font-bold text-orange-400">${item.price.toFixed(2)}</span>
              </div>
              <p className="text-white/50 text-sm line-clamp-2 leading-relaxed">
                {item.description}
              </p>

              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center gap-2 text-white/40 text-xs">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  <span>{item.calories} kcal</span>
                </div>
                <button
                  onClick={() => onAddToCart(item)}
                  className="bg-white text-black px-6 py-2.5 rounded-full font-bold text-sm hover:bg-orange-500 hover:text-white transition-colors flex items-center gap-2 shadow-xl cursor-pointer"
                  aria-label={`Add ${item.name} to cart`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
