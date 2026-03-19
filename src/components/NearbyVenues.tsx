import { MapPin, Star, Navigation, IndianRupee, ArrowUpRight, Zap, Target, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useRef } from 'react';
import { VenueDetails } from './VenueDetails';
import { AnimatePresence } from 'motion/react';

const nearbyVenues = [
  {
    id: 11,
    name: 'Quick Play Cricket Arena',
    sport: 'Cricket',
    location: 'Near You, Mumbai',
    distance: '500m',
    rating: 4.7,
    reviews: 88,
    price: "₹2,000",
    image: 'https://images.unsplash.com/photo-1740021046738-7c79d168bcc0?q=80&w=1080',
    type: 'Outdoor'
  },
  {
    id: 12,
    name: 'City Center Badminton',
    sport: 'Badminton',
    location: 'City Center, Mumbai',
    distance: '750m',
    rating: 4.8,
    reviews: 156,
    price: "₹700",
    image: 'https://images.unsplash.com/photo-1624024834874-2a1611305604?q=80&w=1080',
    type: 'Indoor'
  },
  {
    id: 13,
    name: 'Elite Football Turf',
    sport: 'Football',
    location: 'Downtown, Mumbai',
    distance: '1.2km',
    rating: 4.9,
    reviews: 230,
    price: "₹2,500",
    image: 'https://images.unsplash.com/photo-1604412132568-9d5c14de13c4?q=80&w=1080',
    type: 'Outdoor'
  },
  {
    id: 14,
    name: 'Pro Tennis Courts',
    sport: 'Tennis',
    location: 'Westside, Mumbai',
    distance: '1.8km',
    rating: 4.6,
    reviews: 42,
    price: "₹1,100",
    image: 'https://images.unsplash.com/photo-1566241121793-3e25f3586e43?q=80&w=1080',
    type: 'Outdoor'
  },
  {
    id: 15,
    name: 'Champion Basketball Hub',
    sport: 'Basketball',
    location: 'Eastern, Mumbai',
    distance: '2.0km',
    rating: 4.8,
    reviews: 125,
    price: "₹1,800",
    image: 'https://images.unsplash.com/photo-1646250661461-d561ae2ec8ee?q=80&w=1080',
    type: 'Indoor'
  },
];

export function NearbyVenues() {
  const [selectedVenue, setSelectedVenue] = useState<any | null>(null);

  return (
    <>
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 rounded-lg text-orange-600 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                <Navigation className="w-3.5 h-3.5" />
                <span>Geospatial Proximity</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black italic uppercase text-gray-900 tracking-tighter leading-none">
                Nearby <span className="text-orange-600">Arenas</span>
              </h2>
            </div>
            <button className="flex items-center gap-3 px-8 py-4 bg-gray-900 text-white text-[10px] font-black rounded-2xl uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl active:scale-95">
              <Target className="w-4 h-4" />
              Scan Current Location
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {nearbyVenues.slice(0, 4).map((venue) => (
              <div 
                key={venue.id} 
                className="group relative bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden hover:-translate-y-2 transition-all duration-500 shadow-xl shadow-black/5 cursor-pointer"
                onClick={() => setSelectedVenue(venue)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/20 to-transparent"></div>
                  
                  <div className="absolute top-6 left-6 flex flex-col gap-2">
                    <div className="px-4 py-2 bg-orange-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-xl">
                      <Zap className="w-4 h-4" />
                      {venue.distance}
                    </div>
                    <div className="px-4 py-2 bg-white/95 backdrop-blur-md rounded-xl text-[10px] font-black uppercase tracking-widest text-gray-900 shadow-xl border border-white/20">
                      {venue.sport}
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-3.5 h-3.5 text-orange-400 fill-orange-400" />
                      <span className="text-gray-900 font-black text-xs uppercase tracking-widest">{venue.rating}</span>
                      <span className="text-gray-500 text-[9px] font-black uppercase tracking-widest">({venue.reviews})</span>
                    </div>
                    <h4 className="text-gray-900 text-lg font-black uppercase leading-tight group-hover:text-orange-600 transition-colors">{venue.name}</h4>
                  </div>
                </div>
                
                <div className="p-6 bg-white">
                  <div className="flex items-center gap-2 text-gray-400 mb-4">
                    <MapPin className="w-4 h-4 text-orange-600" />
                    <span className="text-[10px] font-black uppercase tracking-widest truncate">{venue.location}</span>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex flex-col">
                      <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Per Hour</span>
                      <span className="text-2xl font-black text-gray-900 tracking-tight">{venue.price}</span>
                    </div>
                    <button 
                      onClick={(e) => { e.stopPropagation(); setSelectedVenue(venue); }}
                      className="w-12 h-12 bg-gray-900 text-white rounded-2xl flex items-center justify-center hover:bg-orange-600 transition-all active:scale-95 shadow-lg"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
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