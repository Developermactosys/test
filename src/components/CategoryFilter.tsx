import { Grid3x3, Dribbble, Trophy, Zap, Target, Dumbbell, Users, Waves, Home, Sun, LayoutGrid, CheckCircle2, ChevronDown, ChevronUp, Star, MapPin, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { VenueDetails } from './VenueDetails';

interface CategoryFilterProps {
  selectedSport: string;
  onSelectSport: (sport: string) => void;
  selectedCategory: 'all' | 'indoor' | 'outdoor';
  onSelectCategory: (category: 'all' | 'indoor' | 'outdoor') => void;
}

const indoorSports = [
  { id: 'badminton', name: 'Badminton', icon: Zap },
  { id: 'basketball', name: 'Basketball', icon: Dribbble },
  { id: 'chess', name: 'Chess', icon: LayoutGrid },
  { id: 'table-tennis', name: 'Table Tennis', icon: Target },
  { id: 'volleyball', name: 'Volleyball', icon: Users },
  { id: 'swimming', name: 'Swimming', icon: Waves },
  { id: 'gym', name: 'Gym', icon: Dumbbell },
];

const outdoorSports = [
  { id: 'cricket', name: 'Cricket', icon: Trophy },
  { id: 'football', name: 'Football', icon: Dribbble },
  { id: 'tennis', name: 'Tennis', icon: Target },
  { id: 'hockey', name: 'Hockey', icon: Trophy },
  { id: 'baseball', name: 'Baseball', icon: Target },
  { id: 'rugby', name: 'Rugby', icon: Users },
];

// Sample venues for different sports
const sportVenues: Record<string, any[]> = {
  cricket: [
    {
      id: 101,
      name: 'Champions Cricket Arena',
      sport: 'Cricket',
      location: 'Andheri West, Mumbai',
      rating: 4.8,
      reviews: 240,
      price: '₹2,200',
      image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1080',
      type: 'Outdoor',
    },
    {
      id: 102,
      name: 'Elite Cricket Ground',
      sport: 'Cricket',
      location: 'Koramangala, Bangalore',
      rating: 4.9,
      reviews: 310,
      price: '₹2,500',
      image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1080',
      type: 'Outdoor',
    },
    {
      id: 103,
      name: 'Victory Cricket Club',
      sport: 'Cricket',
      location: 'South Ex, Delhi',
      rating: 4.7,
      reviews: 185,
      price: '₹2,000',
      image: 'https://images.unsplash.com/photo-1512719994953-eabf50895df7?q=80&w=1080',
      type: 'Outdoor',
    },
  ],
  football: [
    {
      id: 201,
      name: 'Pro Football Turf',
      sport: 'Football',
      location: 'Bandra East, Mumbai',
      rating: 4.9,
      reviews: 420,
      price: '₹2,800',
      image: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=1080',
      type: 'Outdoor',
    },
    {
      id: 202,
      name: 'Urban Football Arena',
      sport: 'Football',
      location: 'HSR Layout, Bangalore',
      rating: 4.8,
      reviews: 355,
      price: '₹2,600',
      image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=1080',
      type: 'Outdoor',
    },
    {
      id: 203,
      name: 'Elite Soccer Ground',
      sport: 'Football',
      location: 'Cyber City, Gurgaon',
      rating: 4.7,
      reviews: 290,
      price: '₹2,400',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1080',
      type: 'Outdoor',
    },
  ],
  badminton: [
    {
      id: 301,
      name: 'Smash Badminton Academy',
      sport: 'Badminton',
      location: 'Powai, Mumbai',
      rating: 4.9,
      reviews: 380,
      price: '₹800',
      image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=1080',
      type: 'Indoor',
    },
    {
      id: 302,
      name: 'City Badminton Club',
      sport: 'Badminton',
      location: 'Whitefield, Bangalore',
      rating: 4.8,
      reviews: 295,
      price: '₹700',
      image: 'https://images.unsplash.com/photo-1624024834874-2a1611305604?q=80&w=1080',
      type: 'Indoor',
    },
  ],
  basketball: [
    {
      id: 401,
      name: 'Hoops Basketball Arena',
      sport: 'Basketball',
      location: 'HSR Layout, Bangalore',
      rating: 4.8,
      reviews: 210,
      price: '₹1,800',
      image: 'https://images.unsplash.com/photo-1646250661461-d561ae2ec8ee?q=80&w=1080',
      type: 'Indoor',
    },
    {
      id: 402,
      name: 'Pro Basketball Court',
      sport: 'Basketball',
      location: 'Andheri West, Mumbai',
      rating: 4.7,
      reviews: 175,
      price: '₹1,600',
      image: 'https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?q=80&w=1080',
      type: 'Indoor',
    },
  ],
  tennis: [
    {
      id: 501,
      name: 'Grand Tennis Academy',
      sport: 'Tennis',
      location: 'South Ex, Delhi',
      rating: 4.8,
      reviews: 165,
      price: '₹1,200',
      image: 'https://images.unsplash.com/photo-1566241121793-3e25f3586e43?q=80&w=1080',
      type: 'Outdoor',
    },
    {
      id: 502,
      name: 'Elite Tennis Courts',
      sport: 'Tennis',
      location: 'Indiranagar, Bangalore',
      rating: 4.7,
      reviews: 140,
      price: '₹1,000',
      image: 'https://images.unsplash.com/photo-1529347748334-32e95e1e2563?q=80&w=1080',
      type: 'Outdoor',
    },
  ],
};

export function CategoryFilter({ selectedSport, onSelectSport, selectedCategory, onSelectCategory }: CategoryFilterProps) {
  const [selectedVenue, setSelectedVenue] = useState<any | null>(null);
  
  // Get venues for selected sport
  const currentSportVenues = selectedSport !== 'all' ? (sportVenues[selectedSport] || []) : [];
  const showVenues = selectedSport !== 'all' && currentSportVenues.length > 0;

  return (
    <>
      {/* Filtered Sport Venues Section */}
      <AnimatePresence>
        {showVenues && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-50 border-b border-gray-100 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl md:text-4xl font-black italic uppercase text-gray-900 tracking-tighter leading-none">
                    {[...indoorSports, ...outdoorSports].find(s => s.id === selectedSport)?.name} <span className="text-orange-600">Venues</span>
                  </h3>
                  <p className="text-gray-500 mt-2 text-[10px] font-black uppercase tracking-widest">
                    {currentSportVenues.length} Premium locations available
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {currentSportVenues.map((venue, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    key={venue.id}
                    className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-black/5 hover:shadow-orange-600/10 hover:-translate-y-3 transition-all duration-500 cursor-pointer border border-gray-100"
                    onClick={() => setSelectedVenue(venue)}
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <ImageWithFallback
                        src={venue.image}
                        alt={venue.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent"></div>

                      <div className="absolute top-6 left-6">
                        <div className="px-3 py-1.5 bg-orange-600 backdrop-blur-md rounded-xl text-[9px] font-black uppercase tracking-widest text-white shadow-xl">
                          {venue.type}
                        </div>
                      </div>

                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Star className="w-3.5 h-3.5 text-orange-400 fill-orange-400" />
                          <span className="text-white font-black text-xs uppercase tracking-widest">{venue.rating}</span>
                          <span className="text-white/40 text-[9px] font-black uppercase tracking-widest">({venue.reviews})</span>
                        </div>
                        <h3 className="text-white text-2xl font-black italic uppercase tracking-tighter leading-tight group-hover:text-orange-400 transition-colors">
                          {venue.name}
                        </h3>
                      </div>
                    </div>

                    <div className="p-6 bg-white">
                      <div className="flex items-center gap-2 text-gray-400 mb-6">
                        <MapPin className="w-4 h-4 text-orange-600" />
                        <span className="text-[10px] font-black uppercase tracking-widest truncate">{venue.location}</span>
                      </div>

                      <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                        <div className="flex flex-col">
                          <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Per Hour</span>
                          <span className="text-2xl font-black text-gray-900 italic tracking-tighter">
                            {venue.price}
                          </span>
                        </div>
                        <button
                          onClick={(e) => { e.stopPropagation(); setSelectedVenue(venue); }}
                          className="w-12 h-12 bg-gray-900 text-white rounded-2xl flex items-center justify-center hover:bg-orange-600 transition-all active:scale-95 shadow-lg"
                        >
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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