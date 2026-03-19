import { X, Phone, MessageSquare, Shield, Users, Star, MapPin, Calendar, Clock, Sparkles, Zap, ChevronRight, CheckCircle2, Share2, Waves, Dumbbell, Target, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { ThankYouModal } from './ThankYouModal';

interface VenueDetailsProps {
  venue: {
    id: number;
    name: string;
    sport: string;
    rating: number;
    reviews: number;
    price: string;
    image: string;
    location: string;
    type: string;
  };
  onClose: () => void;
}

export function VenueDetails({ venue, onClose }: VenueDetailsProps) {
  const [showThankYou, setShowThankYou] = useState(false);
  
  const handleBooking = () => {
    setShowThankYou(true);
  };

  const handleCloseThankYou = () => {
    setShowThankYou(false);
    onClose();
  };
  
  // Ensuring we have valid images
  const galleryImages = [
    venue.image || "https://images.unsplash.com/photo-1538137913324-fe41747a106e?q=80&w=1080",
    "https://images.unsplash.com/photo-1758535013088-20f84ac4c645?q=80&w=1080",
    "https://images.unsplash.com/photo-1646250661461-d561ae2ec8ee?q=80&w=1080",
    "https://images.unsplash.com/photo-1746934960613-86fe80748101?q=80&w=1080"
  ];

  const amenities = [
    { icon: Waves, label: 'Pro Lighting' },
    { icon: Zap, label: 'Fast WiFi' },
    { icon: Shield, label: 'Safe Zone' },
    { icon: Users, label: 'Team Rooms' },
    { icon: Dumbbell, label: 'Gym Access' },
  ];

  const timeSlots = ['06:00 AM', '08:00 AM', '10:00 AM', '12:00 PM', '04:00 PM', '06:00 PM', '08:00 PM', '10:00 PM'];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-end md:items-center justify-center p-0 md:p-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-white/95 backdrop-blur-2xl" onClick={onClose}></div>
      
      <motion.div 
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="relative w-full max-w-7xl max-h-[95vh] md:max-h-[90vh] bg-white rounded-t-[3rem] md:rounded-[4rem] overflow-hidden flex flex-col shadow-[0_0_150px_-20px_rgba(249,115,22,0.4)] border border-gray-100"
      >
        {/* Close Button Floating */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-[210] w-14 h-14 bg-gray-900/90 hover:bg-orange-600 backdrop-blur-3xl rounded-full flex items-center justify-center text-white transition-all shadow-2xl"
        >
          <X className="w-6 h-6 group-hover:rotate-90 transition-transform" />
        </button>

        <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
          {/* Left Section: Visuals & Immersive Info */}
          <div className="lg:w-3/5 relative bg-gray-950 min-h-[40vh] lg:min-h-0 flex flex-col overflow-y-auto">
            <div className="absolute inset-0">
              <ImageWithFallback 
                src={venue.image} 
                alt={venue.name} 
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>
            </div>

            <div className="relative z-10 p-10 mt-auto">
              <div className="flex flex-wrap gap-4 mb-8">
                {galleryImages.map((img, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="w-24 h-24 rounded-3xl overflow-hidden border-2 border-white/10 cursor-pointer shadow-2xl relative group"
                  >
                    <ImageWithFallback src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-4">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-orange-600 rounded-2xl text-white text-[10px] font-black uppercase tracking-[0.3em] shadow-xl shadow-orange-600/20">
                  <Sparkles className="w-4 h-4" />
                  Next-Gen Verified
                </div>
                <h1 className="text-white text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none">{venue.name}</h1>
                <div className="flex items-center gap-4 text-gray-400">
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-md">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    <span className="text-xs font-black uppercase tracking-widest">{venue.location}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-md">
                    <Target className="w-4 h-4 text-orange-500" />
                    <span className="text-xs font-black uppercase tracking-widest">{venue.sport}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Smart Booking Hub */}
          <div className="lg:w-2/5 bg-white flex flex-col overflow-hidden">
            <div className="flex-1 overflow-y-auto p-8 md:p-10 space-y-8">
              {/* AI Insights Bar */}
              <div className="bg-orange-50 border border-orange-100 p-6 rounded-[2.5rem] flex items-center gap-6">
                <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center shadow-lg">
                  <Star className="w-8 h-8 text-orange-600 fill-orange-600" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-orange-600 uppercase tracking-widest mb-1">Expert Rating</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-gray-900">{venue.rating}</span>
                    <span className="text-gray-400 text-sm font-bold">/ 5.0</span>
                  </div>
                </div>
                <div className="ml-auto flex flex-col items-end">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{venue.reviews}</span>
                  <span className="text-[10px] font-black text-gray-900 uppercase">Reviews</span>
                </div>
              </div>

              {/* Smart Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-gray-50 rounded-[2.5rem] border border-gray-100 group hover:border-orange-500/20 transition-all cursor-default">
                   <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform"><Clock className="w-6 h-6 text-orange-600" /></div>
                   <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Peak Demand</h4>
                   <p className="text-sm font-black text-gray-900 uppercase">7 PM - 10 PM</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-[2.5rem] border border-gray-100 group hover:border-orange-500/20 transition-all cursor-default">
                   <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform"><Info className="w-6 h-6 text-orange-600" /></div>
                   <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Surface</h4>
                   <p className="text-sm font-black text-gray-900 uppercase">Hybrid Turf</p>
                </div>
              </div>

              {/* Premium Facilities Selection */}
              <div>
                <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-orange-500" /> Hyper-Amenities
                </h3>
                <div className="flex flex-wrap gap-3">
                  {amenities.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="flex items-center gap-3 px-5 py-3 bg-gray-50 hover:bg-white hover:shadow-xl hover:shadow-orange-600/5 rounded-2xl border border-gray-100 transition-all group">
                        <Icon className="w-4 h-4 text-orange-600 group-hover:scale-110 transition-transform" />
                        <span className="text-[10px] font-black text-gray-700 uppercase tracking-widest">{item.label}</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* AI Slot Prediction */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Quantum Availability</h3>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-[9px] font-black uppercase">Live Slots</span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {timeSlots.map((slot, i) => (
                    <button key={i} className={`py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest border transition-all ${i === 4 || i === 5 ? 'bg-orange-600 border-orange-600 text-white shadow-xl shadow-orange-600/20' : 'bg-white border-gray-100 text-gray-500 hover:border-orange-200 hover:text-orange-600'}`}>
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky Ultra-Action Footer */}
            <div className="p-8 md:p-10 bg-gray-950 border-t border-gray-100 shadow-[0_-30px_60px_rgba(0,0,0,0.1)]">
               <div className="flex items-center justify-between mb-6">
                 <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-black text-white italic tracking-tighter">{venue.price}</span>
                      <span className="text-gray-500 font-black text-[10px] uppercase tracking-widest">/ Session</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-green-500 text-[10px] font-black uppercase tracking-widest">Available for Instant Book</span>
                    </div>
                 </div>
                 <button className="w-16 h-16 bg-white/5 rounded-[2rem] flex items-center justify-center border border-white/10 hover:bg-white/10 transition-all text-white">
                   <Share2 className="w-6 h-6" />
                 </button>
               </div>
               
               <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 py-6 bg-white/10 hover:bg-white text-white hover:text-gray-950 font-black rounded-[2rem] uppercase tracking-[0.2em] text-[10px] transition-all border border-white/10 active:scale-95 flex items-center justify-center gap-3">
                    <Phone className="w-4 h-4" /> Direct Call
                  </button>
                  <button className="flex-[2] py-6 bg-orange-600 hover:bg-orange-500 text-white font-black rounded-[2rem] uppercase tracking-[0.3em] text-[10px] transition-all shadow-[0_20px_40px_rgba(234,88,12,0.3)] active:scale-95 flex items-center justify-center gap-3" onClick={handleBooking}>
                    <Calendar className="w-4 h-4" /> Book Session Now
                  </button>
               </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Thank You Modal */}
      <AnimatePresence>
        {showThankYou && (
          <ThankYouModal 
            isOpen={showThankYou} 
            onClose={handleCloseThankYou} 
            venueName={venue.name}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}