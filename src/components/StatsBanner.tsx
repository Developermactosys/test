import { TrendingUp, MapPin, Users, Award } from 'lucide-react';

export function StatsBanner() {
  const stats = [
    {
      icon: MapPin,
      value: '500+',
      label: 'Verified Venues',
    },
    {
      icon: Users,
      value: '50K+',
      label: 'Active Users',
    },
    {
      icon: TrendingUp,
      value: '100K+',
      label: 'Bookings Made',
    },
    {
      icon: Award,
      value: '4.8',
      label: 'Average Rating',
    },
  ];

  return (
    <div className="relative py-16">
      <div className="absolute inset-0 bg-gray-900"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="flex flex-col items-center">
                <div className="w-14 h-14 bg-orange-600/10 border border-orange-500/20 rounded-2xl flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(234,88,12,0.15)] group hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-orange-500" />
                </div>
                <div className="text-center">
                  <h3 className="text-white text-3xl font-black mb-1">{stat.value}</h3>
                  <p className="text-gray-400 font-bold text-xs uppercase tracking-widest">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
