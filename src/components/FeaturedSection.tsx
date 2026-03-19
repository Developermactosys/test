import { Trophy, Users, Shield, Zap, ArrowRight, Star } from 'lucide-react';

export function FeaturedSection() {
  const features = [
    {
      icon: Trophy,
      title: '500+ Premium Venues',
      description: 'Hand-picked sports facilities across India with world-class amenities.',
      color: 'orange',
    },
    {
      icon: Users,
      title: 'Global Community',
      description: 'Join a massive network of 50k+ athletes playing every single day.',
      color: 'orange',
    },
    {
      icon: Shield,
      title: 'Verified Experience',
      description: 'Every club and turf is physically verified for quality and safety.',
      color: 'orange',
    },
    {
      icon: Zap,
      title: 'Instant Play',
      description: 'Real-time slot availability. Book in 10 seconds, play in minutes.',
      color: 'orange',
    },
  ];

  return (
    <div className="relative py-32 overflow-hidden bg-gray-950">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] -z-0"></div>
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[120px] -z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-600/20 border border-orange-500/30 rounded-full text-orange-500 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <Star className="w-3 h-3 fill-orange-500" />
              <span>Industry Leaders</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 italic leading-tight">
              Why <span className="text-orange-500 underline decoration-white/10">SportBook</span> is the <br /> 
              Athlete's Choice?
            </h2>
            <p className="text-gray-400 text-xl font-medium mb-12 max-w-xl leading-relaxed">
              We're not just a booking platform. We're an ecosystem designed to help you discover, compete, and improve your game every day.
            </p>
            
            <button className="group flex items-center gap-4 px-10 py-5 bg-white text-gray-950 font-black rounded-3xl hover:bg-orange-600 hover:text-white transition-all shadow-2xl uppercase tracking-widest text-sm active:scale-95">
              Explore Our Advantage
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="group relative">
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem] shadow-2xl hover:bg-white/10 transition-all hover:-translate-y-2 duration-500 h-full">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mb-8 shadow-2xl shadow-orange-600/20 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-white font-black text-xl mb-4 leading-tight group-hover:text-orange-500 transition-colors">{feature.title}</h3>
                    <p className="text-gray-400 font-medium leading-relaxed text-sm">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
