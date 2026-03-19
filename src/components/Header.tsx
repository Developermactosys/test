import { Menu, Search, User, Heart, Bell, MapPin, ChevronDown, ListPlus, Sparkles, Check, Trash2, Crosshair } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onOpenAuth?: (type: 'signin' | 'signup') => void;
}

export function Header({ onOpenAuth }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showLocationSelect, setShowLocationSelect] = useState(false);
  const [currentCity, setCurrentCity] = useState('Mumbai');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const notifications = [
    { id: 1, title: 'Booking Confirmed!', desc: 'Your slot at Arena Turf is confirmed for 6 PM.', time: '2m ago', read: false },
    { id: 2, title: 'Elite Academy Admission', desc: 'New masterclass for Cricket starts next week.', time: '1h ago', read: false },
    { id: 3, title: 'Payment Success', desc: 'Refund for cancelled booking processed.', time: '5h ago', read: true },
  ];

  const locations = [
    'Mumbai', 'Bangalore', 'Delhi', 'Gurgaon', 'Pune', 'Hyderabad', 'Chennai', 'Kolkata'
  ];

  return (
    <header className={`sticky top-0 left-0 right-0 z-[200] transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]' 
        : 'bg-white border-b border-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & AI Badge */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-200 group-hover:rotate-6 transition-all duration-500">
                <span className="text-white font-black text-xl">SB</span>
              </div>
              <div className="flex flex-col overflow-hidden">
                <h1 className="text-gray-900 font-black tracking-tighter text-base leading-none uppercase whitespace-nowrap">
                  INDIA'S #1 <span className="text-orange-600">SPORTBOOK</span>
                </h1>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-1">
                    AI POWERED <Sparkles className="w-2 h-2 text-orange-500" />
                  </span>
                </div>
              </div>
            </div>

            <div className="hidden lg:relative lg:block">
              <button 
                onClick={() => setShowLocationSelect(!showLocationSelect)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-100 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors"
              >
                <MapPin className="w-4 h-4 text-orange-600" />
                <span className="text-[10px] font-black text-gray-700 uppercase tracking-wider">{currentCity}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform ${showLocationSelect ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {showLocationSelect && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full mt-2 left-0 w-64 bg-white border border-gray-100 rounded-2xl shadow-2xl p-4 overflow-hidden"
                  >
                    <div className="flex items-center gap-2 mb-4 p-2 bg-orange-50 rounded-xl text-orange-600 cursor-pointer hover:bg-orange-100 transition-colors">
                      <Crosshair className="w-4 h-4" />
                      <span className="text-[10px] font-black uppercase tracking-widest">Detect Current</span>
                    </div>
                    <div className="space-y-1">
                       {locations.map(loc => (
                         <button 
                            key={loc}
                            onClick={() => { setCurrentCity(loc); setShowLocationSelect(false); }}
                            className={`w-full text-left px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${currentCity === loc ? 'bg-orange-600 text-white' : 'hover:bg-gray-50 text-gray-600'}`}
                         >
                           {loc}
                         </button>
                       ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-orange-500 transition-colors" />
              <input 
                type="text" 
                placeholder="Find arenas, clubs, academies..."
                className="w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/10 focus:bg-white focus:border-orange-500/20 transition-all text-sm font-bold placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-1 mr-2">
              <button className="p-2.5 text-gray-400 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all">
                <Heart className="w-5 h-5" />
              </button>
              
              <div className="relative">
                <button 
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="p-2.5 text-gray-400 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all relative"
                >
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-orange-500 rounded-full ring-2 ring-white"></span>
                </button>

                <AnimatePresence>
                  {showNotifications && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full right-0 mt-4 w-80 bg-white border border-gray-100 rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] overflow-hidden"
                    >
                      <div className="p-6 border-b border-gray-50 flex items-center justify-between">
                         <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-900">Neural Alerts</h4>
                         <button className="text-[8px] font-black uppercase text-orange-600 hover:underline">Clear All</button>
                      </div>
                      <div className="max-h-[400px] overflow-y-auto no-scrollbar">
                        {notifications.map(notif => (
                          <div key={notif.id} className={`p-5 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0 relative cursor-pointer ${!notif.read ? 'bg-orange-50/30' : ''}`}>
                             {!notif.read && <div className="absolute top-6 right-6 w-1.5 h-1.5 bg-orange-500 rounded-full"></div>}
                             <h5 className="text-[11px] font-black uppercase tracking-tight text-gray-900 mb-1 leading-none">{notif.title}</h5>
                             <p className="text-[10px] font-medium text-gray-500 leading-relaxed mb-2">{notif.desc}</p>
                             <span className="text-[8px] font-black uppercase text-gray-400">{notif.time}</span>
                          </div>
                        ))}
                      </div>
                      <button className="w-full py-4 bg-gray-50 text-[9px] font-black uppercase tracking-widest text-gray-500 hover:bg-gray-100 transition-colors border-t border-gray-100">
                        View All Activity
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <button className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-gray-900 hover:bg-black text-white font-black rounded-xl transition-all shadow-xl active:scale-95 text-[10px] uppercase tracking-widest">
              <ListPlus className="w-3.5 h-3.5 text-orange-500" />
              List Venue
            </button>

            <button 
              onClick={() => onOpenAuth?.('signin')}
              className="flex items-center gap-2 px-5 py-2.5 bg-orange-600 hover:bg-orange-500 text-white font-black rounded-xl transition-all text-[10px] uppercase tracking-widest shadow-lg shadow-orange-600/20 active:scale-95"
            >
              <User className="w-3.5 h-3.5" />
              Sign In
            </button>

            <button
              className="md:hidden p-2 text-gray-600 hover:text-orange-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="p-4 space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input 
                  type="text" 
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-lg text-sm focus:outline-none"
                />
              </div>
              <nav className="flex flex-col gap-1">
                {['Home', 'Venues', 'Events', 'Tournaments', 'Memberships'].map((item) => (
                  <a key={item} href="#" className="p-3 text-[10px] font-black text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors uppercase tracking-widest">
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}