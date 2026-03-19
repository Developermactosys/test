import { MapPin, Star, ArrowRight, Building2, Clock, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { VenueDetails } from './VenueDetails';
import { AnimatePresence, motion } from 'motion/react';

const sportPlaces = [
  {
    id: 31,
    name: 'Urban Sports Complex',
    sport: 'Multi-Sport',
    location: 'Powai, Mumbai',
    rating: 4.8,
    reviews: 520,
    price: '₹1,500',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1080',
    type: 'Indoor',
  },
  {
    id: 32,
    name: 'Metro Football Ground',
    sport: 'Football',
    location: 'HSR Layout, Bangalore',
    rating: 4.6,
    reviews: 380,
    price: '₹2,000',
    image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=1080',
    type: 'Outdoor',
  },
  {
    id: 33,
    name: 'City Basketball Arena',
    sport: 'Basketball',
    location: 'Cyber City, Gurgaon',
    rating: 4.7,
    reviews: 295,
    price: '₹1,800',
    image: 'https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?q=80&w=1080',
    type: 'Indoor',
  },
  {
    id: 34,
    name: 'Central Cricket Stadium',
    sport: 'Cricket',
    location: 'Andheri East, Mumbai',
    rating: 4.9,
    reviews: 645,
    price: '₹2,500',
    image: 'https://images.unsplash.com/photo-1512719994953-eabf50895df7?q=80&w=1080',
    type: 'Outdoor',
  },
  {
    id: 35,
    name: 'Ace Badminton Center',
    sport: 'Badminton',
    location: 'Indiranagar, Bangalore',
    rating: 4.8,
    reviews: 410,
    price: '₹900',
    image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=1080',
    type: 'Indoor',
  },
  {
    id: 36,
    name: 'Prime Tennis Courts',
    sport: 'Tennis',
    location: 'Connaught Place, Delhi',
    rating: 4.7,
    reviews: 220,
    price: '₹1,200',
    image: 'https://images.unsplash.com/photo-1529347748334-32e95e1e2563?q=80&w=1080',
    type: 'Outdoor',
  },
];

export function SportPlacesSection() {
  const [selectedVenue, setSelectedVenue] = useState<any | null>(null);

  return (
    <>
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 rounded-lg text-orange-600 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                <Building2 className="w-3.5 h-3.5" />
                <span>Verified Venues</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black italic uppercase text-gray-900 tracking-tighter leading-none">
                Sport <span className="text-orange-600">Places</span>
              </h2>
              <p className="text-gray-500 mt-4 font-bold text-sm uppercase tracking-tight italic">
                Professional venues across major cities
              </p>
            </div>
            <button className="flex items-center gap-3 px-8 py-4 bg-gray-900 text-white text-[10px] font-black rounded-2xl uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl active:scale-95">
              Explore All Places
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sportPlaces.map((place, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                key={place.id}
                className="group relative bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-black/5 hover:shadow-orange-600/10 hover:-translate-y-3 transition-all duration-500 cursor-pointer border border-gray-100"
                onClick={() => setSelectedVenue(place)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={place.image}
                    alt={place.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/20 to-transparent"></div>

                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <div className="px-2.5 py-1 bg-white/95 backdrop-blur-md rounded-lg text-[8px] font-black uppercase tracking-widest text-gray-900 shadow-xl border border-white/20">
                      {place.sport}
                    </div>
                    <div className="px-2.5 py-1 bg-orange-600/95 backdrop-blur-md rounded-lg text-[8px] font-black uppercase tracking-widest text-white shadow-xl">
                      {place.type}
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <Star className="w-3 h-3 text-orange-400 fill-orange-400" />
                      <span className="text-gray-900 font-black text-xs uppercase tracking-widest">{place.rating}</span>
                      <span className="text-gray-500 text-[8px] font-black uppercase tracking-widest">({place.reviews})</span>
                    </div>
                    <h3 className="text-gray-900 text-sm font-black uppercase tracking-tight leading-tight group-hover:text-orange-600 transition-colors">
                      {place.name}
                    </h3>
                  </div>
                </div>

                <div className="p-4 bg-white">
                  <div className="flex items-center gap-2 text-gray-400 mb-4">
                    <MapPin className="w-3.5 h-3.5 text-orange-600" />
                    <span className="text-[9px] font-black uppercase tracking-widest truncate">{place.location}</span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex flex-col">
                      <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Slot Rate</span>
                      <span className="text-lg font-black text-gray-900 tracking-tight">
                        {place.price}
                        <span className="text-[8px] font-black uppercase text-gray-400 ml-0.5">/hr</span>
                      </span>
                    </div>
                    <button
                      onClick={(e) => { e.stopPropagation(); setSelectedVenue(place); }}
                      className="px-3 py-2 bg-gray-900 text-white text-[9px] font-black rounded-xl uppercase tracking-widest transition-all hover:bg-orange-600 shadow-lg active:scale-95"
                    >
                      Book
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedVenue && (
          <VenueDetails
            venue={selectedVenue}
            onClose={() => setSelectedVenue(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}