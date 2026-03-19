import { Star, MapPin, Clock, Trophy, Dribbble, Zap, Target, ArrowRight, Heart, SlidersHorizontal, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { VenueDetails } from './VenueDetails';

interface Venue {
  id: number;
  name: string;
  sport: string;
  rating: number;
  reviews: number;
  price: string;
  image: string;
  location: string;
  type: string;
}

const venues: Venue[] = [
  {
    id: 1,
    name: "The Arena Turf",
    sport: "Cricket",
    rating: 4.8,
    reviews: 124,
    price: "₹1,200",
    image: "https://images.unsplash.com/photo-1538137913324-fe41747a106e?q=80&w=1080",
    location: "Andheri West, Mumbai",
    type: "Outdoor",
  },
  {
    id: 2,
    name: "Kick Off Futsal",
    sport: "Football",
    rating: 4.6,
    reviews: 89,
    price: "₹1,500",
    image: "https://images.unsplash.com/photo-1758535013088-20f84ac4c645?q=80&w=1080",
    location: "Bandra East, Mumbai",
    type: "Outdoor",
  },
  {
    id: 3,
    name: "Smash Badminton Club",
    sport: "Badminton",
    rating: 4.9,
    reviews: 210,
    price: "₹600",
    image: "https://images.unsplash.com/photo-1746934960613-86fe80748101?q=80&w=1080",
    location: "Powai, Mumbai",
    type: "Indoor",
  },
  {
    id: 4,
    name: "Elite Tennis Academy",
    sport: "Tennis",
    rating: 4.7,
    reviews: 56,
    price: "₹800",
    image: "https://images.unsplash.com/photo-1566241121793-3e25f3586e43?q=80&w=1080",
    location: "South Ex, Delhi",
    type: "Outdoor",
  },
  {
    id: 5,
    name: "Hoops Indoor Court",
    sport: "Basketball",
    rating: 4.5,
    reviews: 78,
    price: "₹1,800",
    image: "https://images.unsplash.com/photo-1646250661461-d561ae2ec8ee?q=80&w=1080",
    location: "HSR Layout, Bangalore",
    type: "Indoor",
  },
  {
    id: 6,
    name: "Grand Chess Club",
    sport: "Chess",
    rating: 4.9,
    reviews: 45,
    price: "₹300",
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=1080",
    location: "Cyber City, Gurgaon",
    type: "Indoor",
  }
];

interface VenueGridProps {
  selectedSport: string;
  selectedLocation: string;
  selectedDate: string;
  selectedCategory: 'all' | 'indoor' | 'outdoor';
}

export function VenueGrid({ selectedSport, selectedLocation, selectedDate, selectedCategory }: VenueGridProps) {
  const [selectedVenue, setSelectedVenue] = useState<Venue | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);
  };

  const filteredVenues = venues.filter(venue => {
    const sportMatch = selectedSport === 'all' || venue.sport.toLowerCase() === selectedSport.toLowerCase();
    const categoryMatch = selectedCategory === 'all' || venue.type.toLowerCase() === selectedCategory;
    const locationMatch = !selectedLocation || venue.location.toLowerCase().includes(selectedLocation.toLowerCase());
    return sportMatch && categoryMatch && locationMatch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-20 gap-8">
        <div className="space-y-4">
           <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-100 rounded-lg text-orange-600 text-[10px] font-black uppercase tracking-[0.2em]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Real-Time Arena Feed</span>
           </div>
           <h2 className="text-4xl md:text-6xl font-black italic uppercase text-gray-900 tracking-tighter leading-none">
             Explore <span className="text-orange-600">All Arenas</span>
           </h2>
        </div>
        
        <div className="flex items-center gap-4 bg-gray-50 p-2 rounded-[2rem] border border-gray-100">
          <button className="p-4 bg-white rounded-[1.5rem] shadow-xl text-gray-900 transition-all border border-gray-100 active:scale-95">
             <SlidersHorizontal className="w-5 h-5" />
          </button>
          <div className="px-6 flex flex-col">
            <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Sorting Matrix</span>
            <select className="bg-transparent font-black text-xs uppercase tracking-widest focus:outline-none cursor-pointer text-gray-900">
              <option>Dynamic Relevance</option>
              <option>Economic (Low to High)</option>
              <option>Elite (High to Low)</option>
              <option>Neural Rating</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredVenues.map((venue, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            key={venue.id} 
            className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-orange-600/10 hover:-translate-y-3 transition-all duration-700 cursor-pointer border border-gray-50"
            onClick={() => setSelectedVenue(venue)}
          >
            {/* Image Section */}
            <div className="relative aspect-square overflow-hidden">
              <ImageWithFallback 
                src={venue.image} 
                alt={venue.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent"></div>
              
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <div className="px-2.5 py-1 bg-white/95 backdrop-blur-md rounded-lg text-[8px] font-black uppercase tracking-widest text-gray-900 shadow-xl border border-white/20">
                  {venue.sport}
                </div>
                <div className="px-2.5 py-1 bg-orange-600/95 backdrop-blur-md rounded-lg text-[8px] font-black uppercase tracking-widest text-white shadow-xl">
                  {venue.type}
                </div>
              </div>

              <button 
                onClick={(e) => toggleFavorite(e, venue.id)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white hover:bg-white hover:text-orange-600 transition-all shadow-xl z-20 flex items-center justify-center"
              >
                <Heart className={`w-4 h-4 transition-colors ${favorites.includes(venue.id) ? 'fill-orange-500 text-orange-500' : ''}`} />
              </button>

              <div className="absolute bottom-4 left-4 right-4">
                 <div className="flex items-center gap-1.5 mb-1.5">
                    <Star className="w-3 h-3 text-orange-400 fill-orange-400" />
                    <span className="text-gray-900 font-black text-xs uppercase tracking-widest">{venue.rating}</span>
                    <span className="text-gray-500 text-[8px] font-black uppercase tracking-widest">({venue.reviews} verified)</span>
                 </div>
                 <h3 className="text-gray-900 text-base font-black uppercase tracking-tight leading-tight group-hover:text-orange-600 transition-colors">{venue.name}</h3>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
              <div className="flex items-center gap-2 text-gray-400 mb-6">
                <MapPin className="w-3.5 h-3.5 text-orange-600" />
                <span className="text-[9px] font-black uppercase tracking-widest truncate">{venue.location}</span>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                <div className="flex flex-col">
                  <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">Phase Rate</span>
                  <span className="text-xl font-black text-gray-900 tracking-tight">{venue.price}<span className="text-[8px] font-black uppercase text-gray-400 ml-1">/ Slot</span></span>
                </div>
                <button 
                  onClick={(e) => { e.stopPropagation(); setSelectedVenue(venue); }}
                  className="px-4 py-3 bg-gray-900 text-white text-[9px] font-black rounded-xl uppercase tracking-wider transition-all hover:bg-orange-600 shadow-xl active:scale-95"
                >
                  Book Slot
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {selectedVenue && (
          <VenueDetails 
            venue={selectedVenue} 
            onClose={() => setSelectedVenue(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}