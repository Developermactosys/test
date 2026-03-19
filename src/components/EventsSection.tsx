import { Ticket, MapPin, Calendar, Clock, ArrowRight, Share2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const events = [
  {
    id: 1,
    title: 'ISL 2026: Mumbai City FC vs ATK Mohun Bagan',
    category: 'Pro Football Match',
    date: 'March 10, 2026',
    time: '07:30 PM',
    venue: 'Mumbai Football Arena',
    price: '₹499',
    image: 'https://images.unsplash.com/photo-1762792760947-0f73f249c37d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHRvdXJuYW1lbnQlMjBjcm93ZCUyMGNoZWVyaW5nfGVufDF8fHx8MTc3MDAyNzcwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    title: 'Tata Open Maharashtra: Tennis Semifinals',
    category: 'Professional Tennis',
    date: 'March 15, 2026',
    time: '02:00 PM',
    venue: 'Balewadi Stadium, Pune',
    price: '₹1,200',
    image: 'https://images.unsplash.com/photo-1566241121793-3e25f3586e43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBjb3VydCUyMG91dGRvb3J8ZW58MXx8fHwxNzY1Mjc3NTI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    title: 'Pro Kabaddi League: Season 12 Finale',
    category: 'Kabaddi Championship',
    date: 'March 25, 2026',
    time: '08:00 PM',
    venue: 'NSCI Dome, Mumbai',
    price: '₹750',
    image: 'https://images.unsplash.com/photo-1716561388086-cbc1e07f9f65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzcG9ydHMlMjBiYW5uZXIlMjBzdGFkaXVtJTIwbGlnaHRzfGVufDF8fHx8MTc3MDAyNzcwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
  }
];

export function EventsSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
              <Ticket className="w-3 h-3 text-orange-600" />
              <span>Catch the live action</span>
            </div>
            <h2 className="text-gray-900 font-black">Game <span className="text-orange-600">Events & Tickets</span></h2>
            <p className="text-gray-500 max-w-xl font-medium mt-2">Book tickets for upcoming pro matches, celebrity games, and local championships.</p>
          </div>
          
          <button className="flex items-center gap-2 text-orange-600 font-black text-sm uppercase tracking-widest hover:gap-3 transition-all">
            See More Events
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {events.map((event) => (
            <div key={event.id} className="group relative bg-white border border-gray-100 rounded-[3rem] overflow-hidden shadow-2xl shadow-black/5 hover:-translate-y-2 transition-all duration-500">
              <div className="relative aspect-[4/3] overflow-hidden">
                <ImageWithFallback 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/20 backdrop-blur-xl border border-white/30 text-white text-[10px] font-black rounded-xl uppercase tracking-widest">
                  {event.category}
                </div>
                
                <div className="absolute bottom-6 left-6 right-6">
                   <div className="flex items-center gap-3 text-white/90 mb-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span className="text-xs font-bold">{event.date}</span>
                  </div>
                </div>
              </div>

              <div className="p-10">
                <h3 className="text-gray-900 text-xl font-black mb-6 leading-tight group-hover:text-orange-600 transition-colors">{event.title}</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-gray-500">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    <span className="text-sm font-bold">{event.venue}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span className="text-sm font-bold">{event.time} Onwards</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">Starting From</span>
                    <span className="text-2xl font-black text-gray-900">{event.price}</span>
                  </div>
                  <button className="px-8 py-3 bg-gray-900 hover:bg-orange-600 text-white text-xs font-black rounded-2xl transition-all shadow-xl shadow-black/10 uppercase tracking-widest active:scale-95">
                    Buy Tickets
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
