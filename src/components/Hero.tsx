import { MapPin, Calendar, Search, Trophy, Dribbble, Zap, Target, ChevronDown, Cpu, Crosshair } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useEffect, useRef } from 'react';

// Attractive Sports Backgrounds (Orange/Warm Tone)
const heroImages = [
  'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1920', // Cricket Stadium Night
  'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1920', // Football Action
  'https://images.unsplash.com/photo-1626224580173-95995272132c?q=80&w=1920', // High-end Badminton
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920', // Elite Training Center
];

const sportsTypewriter = ["CRICKET.", "FOOTBALL.", "BADMINTON.", "TENNIS.", "SWIMMING."];
const staticLocations = ['Andheri, Mumbai', 'Bandra, Mumbai', 'Powai, Mumbai', 'Koramangala, Bangalore', 'HSR Layout, Bangalore', 'Cyber City, Gurgaon'];
const popularSearches = [
  { name: 'Cricket', icon: Trophy },
  { name: 'Football', icon: Dribbble },
  { name: 'Badminton', icon: Zap },
  { name: 'Tennis', icon: Target },
];

export function Hero({ onLocationChange, onDateChange, location, date, selectedSport = 'all', onSelectSport = () => {} }: any) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showGameDropdown, setShowGameDropdown] = useState(false);
  const [locSearch, setLocSearch] = useState('');
  const dateInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const bgTimer = setInterval(() => setCurrentImageIndex(p => (p + 1) % heroImages.length), 5000);
    const textTimer = setInterval(() => setTypewriterIndex(p => (p + 1) % sportsTypewriter.length), 2500);
    return () => { clearInterval(bgTimer); clearInterval(textTimer); };
  }, []);

  // Click handle for the entire Date box
  const handleDateClick = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker();
    }
  };

  return (
    <div className="relative min-h-[95vh] flex items-center bg-white overflow-hidden mt-16 pb-24">
      
      {/* BACKGROUND IMAGE LAYER */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((img, i) => (
          <ImageWithFallback
            key={i} 
            src={img}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${
              i === currentImageIndex ? 'opacity-40 scale-105' : 'opacity-0 scale-100'
            }`}
          />
        ))}
        {/* Orange & White Blend Gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-white/80 to-white"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white"></div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-6 z-10 text-center">
        
        {/* AI Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 bg-orange-600/10 border border-orange-500/20 rounded-full text-orange-600 text-[10px] font-black uppercase tracking-[0.3em] mb-10 shadow-sm animate-pulse">
          <Cpu className="w-4 h-4" />
          <span>India's AI-Powered Sports Discovery</span>
        </div>

        {/* Headline: India's #1 (Fixed) + Sport (Typewriter) */}
        <h1 className="text-5xl md:text-8xl font-black mb-6 leading-[0.85] tracking-tighter italic uppercase text-gray-900">
          India's #1 <br />
          <span className="text-orange-600 text-4xl md:text-7xl">
            {sportsTypewriter[typewriterIndex]}
          </span>
        </h1>
        
        <p className="w-full text-sm md:text-base text-gray-400 mb-16 font-bold italic uppercase tracking-[0.4em] opacity-80">
          Elite Arenas • Real-time Access • Pro Training
        </p>
        
        {/* THE "WOW" FILTER BOX */}
        <div className="bg-white/95 backdrop-blur-3xl border border-gray-100 rounded-[3rem] p-3 
          shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1),0_0_40px_rgba(249,115,22,0.08)] 
          flex flex-col md:flex-row items-stretch gap-2 max-w-5xl mx-auto relative z-50 group hover:border-orange-200 transition-all duration-500">
          
          {/* 1. Location Selector with Search & Icons */}
          <div className="flex-[1.2] relative">
            <div 
              className="flex items-center gap-4 px-6 py-5 cursor-pointer hover:bg-orange-50/50 rounded-[2.5rem] transition-all h-full group/loc"
              onClick={() => { setShowLocationDropdown(!showLocationDropdown); setShowGameDropdown(false); }}
            >
              <div className="w-12 h-12 bg-orange-600 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-orange-600/30 group-hover/loc:scale-110 transition-transform">
                <MapPin className="text-white w-6 h-6" />
              </div>
              <div className="text-left overflow-hidden min-w-0">
                <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block mb-0.5">Location</span>
                <span className="text-gray-900 font-black text-sm uppercase truncate block">{location || 'Locate Arena'}</span>
              </div>
              <ChevronDown className={`ml-auto w-4 h-4 text-orange-300 transition-transform ${showLocationDropdown ? 'rotate-180' : ''}`} />
            </div>

            {showLocationDropdown && (
              <div className="absolute top-[115%] left-0 w-full md:w-[450px] bg-white border border-gray-100 rounded-[2.5rem] shadow-2xl z-[100] p-5 animate-in slide-in-from-top-4">
                <div className="relative mb-4">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                  <input 
                    type="text" placeholder="Search for a region..." 
                    className="w-full pl-12 pr-5 py-3 bg-gray-50 border-none rounded-2xl text-xs font-bold outline-none focus:ring-2 ring-orange-100"
                    onChange={(e) => setLocSearch(e.target.value)}
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
                <div className="grid grid-cols-2 gap-2 max-h-[250px] overflow-y-auto no-scrollbar">
                  {staticLocations.filter(l => l.toLowerCase().includes(locSearch.toLowerCase())).map(loc => (
                    <div key={loc} onClick={() => { onLocationChange(loc); setShowLocationDropdown(false); }} 
                      className="p-4 hover:bg-orange-50 rounded-2xl cursor-pointer text-[11px] font-black uppercase flex items-center gap-3 text-gray-700 transition-all border border-transparent hover:border-orange-100">
                      <div className="p-2 bg-white rounded-lg shadow-sm"><MapPin className="w-4 h-4 text-orange-600" /></div>
                      {loc.split(',')[0]}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="w-px bg-gray-100 hidden md:block my-6"></div>

          {/* 2. Game Selector (2-Column) */}
          <div className="flex-1 relative">
            <div 
              className="flex items-center gap-4 px-6 py-5 cursor-pointer hover:bg-orange-50/50 rounded-[2.5rem] transition-all h-full group/game"
              onClick={() => { setShowGameDropdown(!showGameDropdown); setShowLocationDropdown(false); }}
            >
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100 shrink-0 group-hover/game:bg-white shadow-sm transition-all">
                <Trophy className="text-orange-600 w-6 h-6" />
              </div>
              <div className="text-left overflow-hidden min-w-0">
                <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block mb-0.5">Discipline</span>
                <span className="text-gray-900 font-black text-sm uppercase truncate block">{selectedSport || 'All Games'}</span>
              </div>
              <ChevronDown className={`ml-auto w-4 h-4 text-orange-300 transition-transform ${showGameDropdown ? 'rotate-180' : ''}`} />
            </div>

            {showGameDropdown && (
              <div className="absolute top-[115%] left-0 w-full md:w-[450px] bg-white border border-gray-100 rounded-[2.5rem] shadow-2xl z-[100] p-5 animate-in slide-in-from-top-4">
                <div className="grid grid-cols-2 gap-3">
                  {popularSearches.map(sport => (
                    <div key={sport.name} onClick={() => { onSelectSport(sport.name); setShowGameDropdown(false); }} 
                      className="p-4 hover:bg-orange-50 rounded-2xl cursor-pointer text-[11px] font-black uppercase flex items-center gap-4 transition-all">
                      <sport.icon className="w-5 h-5 text-orange-600" /> {sport.name}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="w-px bg-gray-100 hidden md:block my-6"></div>
          
          {/* 3. Schedule Section (Clickable Area Fix) */}
          <div 
            className="flex-1 flex items-center gap-4 px-6 py-5 hover:bg-orange-50/50 rounded-[2.5rem] transition-all cursor-pointer group/date shrink-0"
            onClick={handleDateClick}
          >
            <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100 shrink-0 group-hover/date:bg-white transition-all shadow-sm">
              <Calendar className="text-gray-400 group-hover:text-orange-600 w-6 h-6" />
            </div>
            <div className="text-left flex-1 min-w-0">
              <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block mb-0.5">Schedule</span>
              <input
                ref={dateInputRef}
                type="date" 
                value={date} 
                onChange={(e) => onDateChange(e.target.value)}
                className="bg-transparent border-none text-gray-900 focus:outline-none font-black text-[13px] uppercase w-full cursor-pointer"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>

          {/* Search Button */}
          <button className="bg-orange-600 hover:bg-orange-500 text-white px-12 py-5 rounded-[2.5rem] transition-all font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3 shadow-2xl shadow-orange-600/40 active:scale-95 text-xs group shrink-0">
            <Search className="w-5 h-5 group-hover:scale-125 transition-transform" /> SEARCH
          </button>
        </div>
        
        {/* TRENDING SECTION - Glass Capsules */}
        <div className="mt-20 flex flex-col items-center gap-8">
          <span className="text-gray-400 text-[10px] font-black uppercase tracking-[0.6em] whitespace-nowrap opacity-60">Elite Disciplines</span>
          <div className="flex items-center gap-6 overflow-x-auto no-scrollbar pb-2">
            {popularSearches.map((item) => (
              <button
                key={item.name}
                className="group whitespace-nowrap px-10 py-4 bg-white/60 backdrop-blur-xl border border-gray-100 hover:border-orange-500 rounded-2xl text-[11px] font-black uppercase tracking-[0.25em] transition-all flex items-center gap-4 shadow-sm hover:shadow-orange-200 hover:-translate-y-1"
              >
                <item.icon className="w-5 h-5 text-orange-600 group-hover:animate-pulse" />
                {item.name}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}