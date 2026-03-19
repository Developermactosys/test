import { Trophy, Zap, Target, Medal, Award, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function SportsBanner() {
  const stats = [
    { icon: Trophy, value: '500+', label: 'Active Venues', color: 'text-orange-600' },
    { icon: Medal, value: '100K+', label: 'Athletes Trained', color: 'text-blue-600' },
    { icon: Award, value: '50+', label: 'Cities Covered', color: 'text-green-600' },
    { icon: Target, value: '24/7', label: 'Booking Support', color: 'text-purple-600' },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-orange-600 via-orange-500 to-orange-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8">
            <Sparkles className="w-4 h-4" />
            <span>Platform Excellence</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.95] tracking-tighter italic uppercase">
            India's Most <br />
            <span className="text-gray-900">Trusted</span> Sports Platform
          </h2>
          
          <p className="text-white/90 text-xl font-bold max-w-2xl mx-auto leading-relaxed italic">
            Connecting athletes with world-class facilities. Real-time booking, AI-powered recommendations, and seamless experiences.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] p-8 hover:bg-white/20 transition-all duration-500"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-2xl">
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <h3 className="text-5xl font-black text-white mb-2 tracking-tighter">{stat.value}</h3>
                  <p className="text-white/80 text-[10px] font-black uppercase tracking-widest">{stat.label}</p>
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <button className="px-16 py-6 bg-gray-900 hover:bg-black text-white font-black rounded-[2.5rem] uppercase tracking-[0.3em] text-[11px] transition-all shadow-2xl shadow-black/30 active:scale-95 inline-flex items-center gap-3">
            <Zap className="w-5 h-5 text-orange-500" />
            Start Your Sports Journey
          </button>
        </div>
      </div>
    </section>
  );
}
