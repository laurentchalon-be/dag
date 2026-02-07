
import React, { useState, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { AIAssistant } from './components/AIAssistant';
import { FloatingBlobs } from './components/FloatingBlobs';
import { BreakfastItem, CartItem } from './types';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = useCallback((item: BreakfastItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  }, []);

  const updateQuantity = useCallback((itemId: string, delta: number) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.id === itemId) {
          const newQuantity = item.quantity + delta;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
        }
        return item;
      }).filter(item => item.quantity > 0);
    });
  }, []);

  const removeFromCart = useCallback((itemId: string) => {
    setCart(prev => prev.filter(item => item.id !== itemId));
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="relative min-h-screen selection:bg-white/30">
      <FloatingBlobs />
      <Navbar cartCount={cart.length} onOpenCart={() => setIsCartOpen(true)} />

      <main className="relative z-10">
        <Hero />

        <Menu onAddToCart={handleAddToCart} />

        <div className="my-24">
          <AIAssistant />
        </div>

        {/* High-end Value Props */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
            {[
              { title: 'Liquid Sourcing', desc: 'Direct honey flows and dairy from heritage valley farms.', label: 'Artisan' },
              { title: 'Velvet Delivery', desc: 'Silent morning dispatch in temperature-stabilized glass pods.', label: 'Luxe' },
              { title: 'Chef Concierge', desc: 'Personalized morning menus updated weekly by our Michelin partners.', label: 'Elite' }
            ].map((feature, i) => (
              <div key={i} className="space-y-6 group">
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 group-hover:text-white transition-colors duration-500">{feature.label}</div>
                <h3 className="text-3xl font-bold italic serif">{feature.title}</h3>
                <p className="text-white/40 leading-relaxed font-light">{feature.desc}</p>
                <div className="w-12 h-[1px] bg-white/10 group-hover:w-full transition-all duration-700" />
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-md" onClick={() => setIsCartOpen(false)} />
          <div className="relative w-full max-w-md glass-liquid h-full p-10 shadow-2xl animate-in slide-in-from-right-full duration-700 ease-out border-l border-white/20">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-4xl font-bold italic serif">The Box</h2>
              <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-8 max-h-[calc(100vh-300px)] pr-2 scrollbar-hide">
              {cart.length === 0 ? (
                <div className="text-center py-32 text-white/20 uppercase tracking-[0.2em] text-xs font-bold italic">
                  Empty Morning <br />---<br /> Savor the sunrise
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex gap-6 group">
                    <div className="w-24 h-24 rounded-3xl overflow-hidden glass p-1">
                      <img src={item.image} className="w-full h-full rounded-2xl object-cover" alt={item.name} />
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="flex justify-between items-start">
                        <h4 className="text-lg font-bold">{item.name}</h4>
                        <span className="text-white/60 font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                      <div className="flex items-center gap-4 mt-4">
                        <div className="flex items-center glass rounded-full px-3 py-1 border-white/10">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-6 h-6 flex items-center justify-center hover:text-white/100 text-white/30 cursor-pointer transition-colors"
                            aria-label="Decrease quantity"
                          >
                            −
                          </button>
                          <span className="mx-3 text-xs font-bold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-6 h-6 flex items-center justify-center hover:text-white/100 text-white/30 cursor-pointer transition-colors"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-[10px] uppercase tracking-widest text-white/20 hover:text-red-400 cursor-pointer transition-colors"
                          aria-label={`Remove ${item.name} from cart`}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="absolute bottom-0 left-0 right-0 p-10 space-y-6 bg-gradient-to-t from-[#0f0a15] to-transparent">
                <div className="flex justify-between items-end border-t border-white/10 pt-8">
                  <span className="text-white/40 uppercase tracking-[0.2em] text-[10px] font-bold">Total Experience</span>
                  <span className="text-4xl font-bold tracking-tighter">${total.toFixed(2)}</span>
                </div>
                <button className="w-full py-6 bg-white text-black rounded-2xl font-black text-xl hover:scale-[1.02] transition-all shadow-[0_20px_40px_rgba(255,255,255,0.1)]">
                  Confirm Reservation
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-32 px-8 border-t border-white/5 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-5 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center">
                <span className="text-black font-black text-2xl">M</span>
              </div>
              <span className="text-3xl font-black tracking-tighter">Morning Glow</span>
            </div>
            <p className="text-white/30 text-lg font-light leading-relaxed max-w-sm">
              Crafting a higher standard for the first moments of your day. Ethical, artisanal, and delivered with grace.
            </p>
          </div>
          <div className="md:col-span-2 space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-white/50">Curation</h4>
            <ul className="space-y-4 text-white/30 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Daily Catch</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pastry Lab</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Dairy Origins</a></li>
            </ul>
          </div>
          <div className="md:col-span-2 space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-white/50">Service</h4>
            <ul className="space-y-4 text-white/30 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Concierge</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gifting</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bulk Luxe</a></li>
            </ul>
          </div>
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-white/50">Morning Update</h4>
            <form className="glass-liquid rounded-2xl p-1 flex items-center border-white/10" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="email-subscribe" className="sr-only">Email Address</label>
              <input
                id="email-subscribe"
                type="email"
                placeholder="Your Sanctuary Email"
                className="bg-transparent border-none focus:ring-0 text-sm p-3 w-full"
                aria-label="Email address for newsletter subscription"
                required
              />
              <button
                type="submit"
                className="bg-white text-black p-3 rounded-xl hover:scale-105 transition-all cursor-pointer"
                aria-label="Subscribe to newsletter"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
