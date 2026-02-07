
import React, { useState } from 'react';
import { getBreakfastRecommendation } from '../services/geminiService';
import { AIRecommendation } from '../types';

export const AIAssistant: React.FC = () => {
  const [mood, setMood] = useState('');
  const [diet, setDiet] = useState('Standard');
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<AIRecommendation | null>(null);

  const handleConsult = async () => {
    if (!mood) return;
    setLoading(true);
    try {
      const result = await getBreakfastRecommendation(mood, diet);
      setRecommendation(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="glass-dark rounded-[3rem] p-12 relative border border-white/10">
          <div className="absolute top-0 right-0 p-8">
            <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center blur-2xl animate-pulse" />
          </div>
          
          <div className="relative z-10 text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">Personal Morning Chef</h2>
            <p className="text-white/60 max-w-xl mx-auto text-lg">
              Not sure what you're craving? Let our AI-sommelier design the perfect start to your day based on your current vibe.
            </p>

            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/40 uppercase tracking-widest px-2">How are you feeling?</label>
                <input 
                  type="text" 
                  value={mood}
                  onChange={(e) => setMood(e.target.value)}
                  placeholder="e.g. Energized for a long hike, Lazy Sunday, Productive morning"
                  className="w-full glass bg-white/5 border-white/10 rounded-2xl p-4 focus:ring-2 focus:ring-orange-500 outline-none transition-all placeholder:text-white/20"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/40 uppercase tracking-widest px-2">Dietary focus</label>
                <select 
                  value={diet}
                  onChange={(e) => setDiet(e.target.value)}
                  className="w-full glass bg-white/5 border-white/10 rounded-2xl p-4 focus:ring-2 focus:ring-orange-500 outline-none appearance-none cursor-pointer"
                >
                  <option value="Standard">No Preference</option>
                  <option value="Vegan">Plant-Based</option>
                  <option value="Gluten-Free">Gluten-Free</option>
                  <option value="High-Protein">High Protein</option>
                </select>
              </div>
            </div>

            <button 
              onClick={handleConsult}
              disabled={loading || !mood}
              className="px-12 py-5 bg-gradient-to-r from-orange-600 to-amber-500 rounded-2xl font-bold text-lg hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100 flex items-center gap-3 mx-auto shadow-xl shadow-orange-900/20"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Designing your meal...
                </>
              ) : 'Craft My Experience'}
            </button>

            {recommendation && (
              <div className="mt-12 text-left glass p-8 rounded-3xl border border-orange-500/20 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-orange-400">Our Curated Suggestion</h3>
                    <p className="text-white/80 leading-relaxed mt-1 italic">"{recommendation.reasoning}"</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 mt-4">
                  {recommendation.suggestedItems.map((item, i) => (
                    <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium">
                      ✨ {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
