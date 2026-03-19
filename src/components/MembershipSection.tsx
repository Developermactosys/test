import { Users, CheckCircle2, Star, ArrowRight, GraduationCap, Building2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const memberships = [
  {
    id: 1,
    type: 'Student',
    icon: GraduationCap,
    title: 'Elite Student Pass',
    subtitle: 'For Aspiring Athletes',
    price: '₹1,999',
    period: '/month',
    features: [
      'Unlimited turf access (Mon-Fri)',
      'Free specialized coaching',
      'Entry to all student tournaments',
      '20% off at pro shops'
    ],
    image: 'https://images.unsplash.com/photo-1623208525215-a573aacb1560?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBtZW1iZXJzaGlwJTIwYWNhZGVteSUyMHRyYWluaW5nfGVufDF8fHx8MTc3MDAyNzcwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'orange',
  },
  {
    id: 2,
    type: 'Professional',
    icon: Building2,
    title: 'Pro Club Membership',
    subtitle: 'For Advanced Players',
    price: '₹4,499',
    period: '/month',
    features: [
      'Priority booking 24/7',
      'Locker & Shower facilities',
      'Monthly medical assessment',
      'Guest passes for friends'
    ],
    image: 'https://images.unsplash.com/photo-1757924284732-4189190321cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwY2x1YiUyMG1lbWJlcnNoaXAlMjBneW0lMjBsdXh1cnl8ZW58MXx8fHwxNzcwMDI3NzAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'gray',
  }
];

export function MembershipSection() {
  return (
    <section className="py-32 bg-[#fafafa] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 rounded-full text-orange-600 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            <Users className="w-3 h-3" />
            <span>Join the Community</span>
          </div>
          <h2 className="text-gray-900 font-black mb-6 italic">Sports <span className="text-orange-600">Academies & Clubs</span></h2>
          <p className="text-gray-500 text-lg font-medium">Elevate your game with professional memberships. Join top-tier clubs and academies to train with the best.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {memberships.map((plan) => {
            const Icon = plan.icon;
            return (
              <div key={plan.id} className="group relative bg-white border border-gray-100 rounded-[3.5rem] overflow-hidden shadow-2xl shadow-black/5 flex flex-col lg:flex-row items-stretch hover:shadow-orange-600/5 transition-all duration-500">
                <div className="lg:w-1/2 relative min-h-[300px]">
                  <ImageWithFallback 
                    src={plan.image} 
                    alt={plan.title} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-${plan.color === 'orange' ? 'orange-600/80' : 'gray-900/80'} via-transparent to-transparent`}></div>
                  
                  <div className="absolute bottom-10 left-10">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-2xl mb-4 group-hover:rotate-6 transition-transform">
                      <Icon className={`w-8 h-8 text-${plan.color === 'orange' ? 'orange-600' : 'gray-900'}`} />
                    </div>
                    <span className="text-white text-[10px] font-black uppercase tracking-widest bg-white/20 backdrop-blur-md px-3 py-1 rounded-lg border border-white/20">
                      {plan.type}
                    </span>
                  </div>
                </div>

                <div className="lg:w-1/2 p-12 flex flex-col">
                  <div className="mb-8">
                    <h3 className="text-gray-900 text-3xl font-black mb-2 leading-tight">{plan.title}</h3>
                    <p className="text-gray-500 font-bold text-sm">{plan.subtitle}</p>
                  </div>

                  <div className="space-y-4 mb-10 flex-1">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                        <span className="text-gray-600 font-medium text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-8 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <span className="text-3xl font-black text-gray-900">{plan.price}</span>
                      <span className="text-gray-400 font-bold text-sm">{plan.period}</span>
                    </div>
                    <button className={`px-8 py-3 ${plan.color === 'orange' ? 'bg-orange-600' : 'bg-gray-900'} hover:opacity-90 text-white text-xs font-black rounded-2xl transition-all shadow-xl uppercase tracking-widest`}>
                      Join Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
