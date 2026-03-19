import { MapPin, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PopularLocationsProps {
  onSelectLocation: (location: string) => void;
}

const locations = [
  {
    id: 1,
    name: 'Mumbai',
    venues: 120,
    image: 'https://images.unsplash.com/photo-1623868677243-fc9f09f14511?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdW1iYWklMjBjaXR5JTIwc2t5bGluZXxlbnwxfHx8fDE3NjUyNzc1OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    name: 'Delhi',
    venues: 95,
    image: 'https://images.unsplash.com/photo-1674559793997-8b94366ddf41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxoaSUyMGluZGlhJTIwY2l0eXxlbnwxfHx8fDE3NjUyNzc1OTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    name: 'Bangalore',
    venues: 85,
    image: 'https://images.unsplash.com/photo-1687158668463-3e7de8929bb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5nYWxvcmUlMjBjaXR5JTIwaW5kaWF8ZW58MXx8fHwxNzY1Mjc3NTkzfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 4,
    name: 'Chennai',
    venues: 72,
    image: 'https://images.unsplash.com/photo-1724992609113-bb30249a2573?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVubmFpJTIwY2l0eSUyMHZpZXd8ZW58MXx8fHwxNzY1Mjc3NTkzfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function PopularLocations({ onSelectLocation }: PopularLocationsProps) {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-orange-600 font-extrabold text-xs uppercase tracking-[0.2em] mb-3">Expore Cities</div>
            <h2 className="text-gray-900 font-black">Popular Locations</h2>
            <p className="text-gray-500 mt-2 max-w-md font-medium">
              We've curated the best sports complexes across the major sporting hubs in India.
            </p>
          </div>
          
          <button className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-bold rounded-2xl hover:bg-orange-600 transition-all shadow-xl shadow-gray-900/10 active:scale-95">
            View All Cities
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {locations.map((location) => (
            <button
              key={location.id}
              onClick={() => onSelectLocation(location.name)}
              className="group relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl hover:shadow-orange-900/20 transition-all"
            >
              <ImageWithFallback
                src={location.image}
                alt={location.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 text-left">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-orange-500" />
                  </div>
                  <h3 className="text-white text-3xl font-black">{location.name}</h3>
                </div>
                <div className="flex items-center gap-2 text-orange-400 font-bold mb-6">
                  <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                  <p className="text-sm uppercase tracking-widest">{location.venues} Venues</p>
                </div>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-xl text-xs font-bold uppercase tracking-wider group-hover:bg-orange-600 group-hover:text-white transition-all">
                  Browse Arena
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
