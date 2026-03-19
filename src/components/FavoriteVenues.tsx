import { Heart, MapPin, Star, IndianRupee, Trophy, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { VenueDetails } from './VenueDetails';
import { AnimatePresence } from 'motion/react';

const favoriteVenues = [
  {
    id: 21,
    name: 'Champions Cricket Stadium',
    sport: 'Cricket',
    location: 'Sports Complex, Mumbai',
    rating: 4.9,
    reviews: 421,
    price: "₹2,800",
    image: 'https://images.unsplash.com/photo-1740021046738-7c79d168bcc0?q=80&w=1080',
    tags: ['Premium', 'Most Booked'],
    type: 'Outdoor'
  },
  {
    id: 22,
    name: 'Pro Badminton Arena',
    sport: 'Badminton',
    location: 'Central Sports Hub, Bangalore',
    rating: 4.8,
    reviews: 356,
    price: "₹900",
    image: 'https://images.unsplash.com/photo-1624024834874-2a1611305604?q=80&w=1080',
    tags: ['AC Courts', 'Top Rated'],
    type: 'Indoor'
  },
  {
    id: 23,
    name: 'Supreme Football Ground',
    sport: 'Football',
    location: 'Westside Arena, Delhi',
    rating: 4.9,
    reviews: 389,
    price: "₹3,200",
    image: 'https://images.unsplash.com/photo-1604412132568-9d5c14de13c4?q=80&w=1080',
    tags: ['Professional', 'Lighting'],
    type: 'Outdoor'
  },
];

export function FavoriteVenues() {
  const [favorites, setFavorites] = useState<number[]>([21, 22, 23]);
  const [selectedVenue, setSelectedVenue] = useState<any | null>(null);

  const toggleFavorite = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  return (
    <>
      <div className="relative py-32 overflow-hidden bg-gray-50/50">
        <div className="absolute -top-48 -right-48 w-[600px] h-[600px] bg-orange-100 rounded-full blur-[150px] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-20">
            <div className="flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-100 rounded-full text-orange-600 font-black text-[10px] uppercase tracking-[0.3em] mb-6 shadow-xl shadow-black/5">
              <Heart className="w-3.5 h-3.5 fill-orange-600" />
              <span>Community Favorites</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black italic uppercase text-gray-900 tracking-tighter leading-none mb-6">
              Most Loved <span className="text-orange-600">Venues</span>
            </h2>
            <p className="text-gray-500 max-w-xl font-bold italic uppercase text-xs tracking-widest leading-loose">
              Arenas that have consistently achieved the highest player satisfaction metrics and elite status.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {favoriteVenues.map((venue) => (
              <div 
                key={venue.id} 
                className="group relative cursor-pointer"
                onClick={() => setSelectedVenue(venue)}
              >
                <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden mb-8 shadow-2xl transition-all duration-700 group-hover:-translate-y-3 group-hover:shadow-orange-600/10">
                  <ImageWithFallback
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent"></div>
                  
                  <button
                    onClick={(e) => toggleFavorite(e, venue.id)}
                    className="absolute top-8 right-8 w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[1.5rem] flex items-center justify-center shadow-2xl hover:bg-white hover:text-orange-600 active:scale-90 transition-all z-10"
                  >
                    <Heart
                      className={`w-6 h-6 transition-colors ${
                        favorites.includes(venue.id)
                          ? 'fill-orange-500 text-orange-500 border-none'
                          : 'text-white'
                      }`}
                    />
                  </button>

                  <div className="absolute top-8 left-8 flex flex-col gap-2">
                    {venue.tags.map((tag) => (
                      <span
                        key={tag}
                        className="w-fit px-3 py-1.5 bg-orange-600/90 backdrop-blur-md text-white rounded-xl text-[8px] font-black uppercase tracking-[0.2em] shadow-xl"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="absolute bottom-10 left-10 right-10">
                    <div className="flex items-center gap-2 mb-3">
                      <Star className="w-4 h-4 text-orange-400 fill-orange-400" />
                      <span className="text-white font-black text-xs uppercase tracking-widest">{venue.rating}</span>
                      <span className="text-white/40 text-[9px] font-black uppercase tracking-widest">({venue.reviews} Players)</span>
                    </div>
                    <h3 className="text-white text-3xl font-black italic uppercase tracking-tighter leading-none">{venue.name}</h3>
                  </div>
                </div>
                
                <div className="flex items-center justify-between px-6">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-gray-400">
                      <MapPin className="w-3.5 h-3.5 text-orange-600" />
                      <span className="text-[10px] font-black uppercase tracking-widest truncate max-w-[150px]">{venue.location}</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black text-gray-900 italic tracking-tighter">{venue.price}</span>
                      <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">/ Session</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={(e) => { e.stopPropagation(); setSelectedVenue(venue); }}
                    className="group-hover:translate-x-1 transition-transform w-14 h-14 bg-gray-900 text-white rounded-[1.5rem] flex items-center justify-center hover:bg-orange-600 shadow-xl active:scale-95"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
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
