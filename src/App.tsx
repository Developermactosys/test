import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryFilter } from './components/CategoryFilter';
import { VenueGrid } from './components/VenueGrid';
import { FeaturedSection } from './components/FeaturedSection';
import { PopularLocations } from './components/PopularLocations';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { StatsBanner } from './components/StatsBanner';
import { AppPromotion } from './components/AppPromotion';
import { NearbyVenues } from './components/NearbyVenues';
import { FavoriteVenues } from './components/FavoriteVenues';
import { TournamentsSection } from './components/TournamentsSection';
import { EventsSection } from './components/EventsSection';
import { MembershipSection } from './components/MembershipSection';
import { PromoBanner, ShopMarquee, AcademySection } from './components/ExtraSections';
import { ClubsSection } from './components/ClubsSection';
import { SportPlacesSection } from './components/SportPlacesSection';
import { AllTurfSection } from './components/AllTurfSection';
import { SportsBanner } from './components/SportsBanner';
import { AuthModal } from './components/AuthModal';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [selectedSport, setSelectedSport] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'indoor' | 'outdoor'>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [authModal, setAuthModal] = useState<{isOpen: boolean, type: 'signin' | 'signup'}>({isOpen: false, type: 'signin'});

  const handleOpenAuth = (type: 'signin' | 'signup') => {
    setAuthModal({ isOpen: true, type });
  };

  return (
    <div className="min-h-screen bg-white selection:bg-orange-600 selection:text-white">
      <Header onOpenAuth={handleOpenAuth} />
      
      <main className="relative">
        {/* Hero Section */}
        <Hero 
          onLocationChange={setSelectedLocation}
          onDateChange={setSelectedDate}
          location={selectedLocation}
          date={selectedDate}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          selectedSport={selectedSport}
          onSelectSport={setSelectedSport}
        />
        
        {/* Category Filter with Dynamic Venue Display - Only shows filtered venues when sport selected */}
        <CategoryFilter 
          selectedSport={selectedSport}
          onSelectSport={setSelectedSport}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        
        {/* Nearby Venues - Premium Slider Section */}
        <div className="bg-white py-12">
          <NearbyVenues />
        </div>

        {/* All Turf Section */}
        <AllTurfSection />

        {/* Elite Clubs Section */}
        <ClubsSection />

        {/* Sport Places Section */}
        <SportPlacesSection />

        {/* Academy Section */}
        <AcademySection />

        {/* Favorite Venues */}
        <div className="bg-gray-50 border-y border-gray-100 py-12">
          <FavoriteVenues />
        </div>

        {/* Shop Network Marquee */}
        <ShopMarquee />

        {/* Main Venue Section - All Arenas */}
        <section id="explore-venues" className="bg-white">
          <VenueGrid 
            selectedSport={selectedSport}
            selectedLocation={selectedLocation}
            selectedDate={selectedDate}
            selectedCategory={selectedCategory}
          />
        </section>

        {/* Value Proposition */}
        <FeaturedSection />

        {/* Promo Middle Banner */}
        <PromoBanner />

        {/* Memberships */}
        <MembershipSection />

        {/* Events & Tournaments */}
        <EventsSection />
        <TournamentsSection />

        {/* Performance Stats */}
        <StatsBanner />
        
        {/* Sports Platform Banner */}
        <SportsBanner />
        
        {/* How it Works */}
        <HowItWorks />
        
        {/* Social Proof */}
        <Testimonials />
        
        {/* Mobile Growth */}
        <AppPromotion />
        
        {/* Destination Discovery */}
        <PopularLocations onSelectLocation={setSelectedLocation} />
      </main>

      <AnimatePresence mode="wait">
        {authModal.isOpen && (
          <AuthModal 
            isOpen={authModal.isOpen} 
            type={authModal.type} 
            onClose={() => setAuthModal({...authModal, isOpen: false})} 
          />
        )}
      </AnimatePresence>
      
      <footer className="bg-gray-950 text-white pt-32 pb-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-600 rounded-2xl flex items-center justify-center font-black text-xl shadow-2xl shadow-orange-600/30">SB</div>
                <h1 className="text-3xl font-black italic uppercase tracking-tighter leading-none">SportBook</h1>
              </div>
              <p className="text-gray-400 font-medium leading-relaxed text-lg italic uppercase tracking-tight">India's #1 AI-Powered Sports Ecosystem.</p>
              <div className="flex gap-4">
                <button onClick={() => handleOpenAuth('signin')} className="px-6 py-3 bg-white/5 hover:bg-orange-600 border border-white/10 rounded-xl transition-all font-black uppercase text-[10px] tracking-widest active:scale-95">Sign In</button>
                <button onClick={() => handleOpenAuth('signup')} className="px-6 py-3 bg-orange-600 hover:bg-orange-500 rounded-xl transition-all font-black uppercase text-[10px] tracking-widest shadow-lg shadow-orange-600/20 active:scale-95">Sign Up</button>
              </div>
            </div>
            <div>
              <h4 className="text-[10px] font-black mb-10 text-white uppercase tracking-[0.3em]">Core Services</h4>
              <ul className="space-y-6 text-gray-400 font-black text-[10px] uppercase tracking-widest">
                <li className="hover:text-orange-500 transition-colors cursor-pointer">AI Arena Matchmaker</li>
                <li className="hover:text-orange-500 transition-colors cursor-pointer">Live Pro Ticketing</li>
                <li className="hover:text-orange-500 transition-colors cursor-pointer">Global Academy Pass</li>
                <li className="hover:text-orange-500 transition-colors cursor-pointer">Tournament HQ</li>
                <li className="hover:text-orange-500 transition-colors cursor-pointer">Physio Connect</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-black mb-10 text-white uppercase tracking-[0.3em]">Network</h4>
              <ul className="space-y-6 text-gray-400 font-black text-[10px] uppercase tracking-widest">
                <li className="hover:text-orange-500 transition-colors cursor-pointer">Partner Hub</li>
                <li className="hover:text-orange-500 transition-colors cursor-pointer">Brand Marquee</li>
                <li className="hover:text-orange-500 transition-colors cursor-pointer">Sponsorships</li>
                <li className="hover:text-orange-500 transition-colors cursor-pointer">Venue Listing</li>
                <li className="hover:text-orange-500 transition-colors cursor-pointer">Enterprise API</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-black mb-10 text-white uppercase tracking-[0.3em]">Neural Updates</h4>
              <p className="text-gray-400 font-medium mb-8 text-sm italic">Join the 100k+ players receiving AI-curated sports updates.</p>
              <div className="flex flex-col gap-4">
                 <div className="relative">
                    <input 
                      type="email" 
                      placeholder="Neural Address (Email)" 
                      className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl focus:outline-none focus:border-orange-600 transition-all font-bold text-xs"
                    />
                    <button className="absolute right-2 top-2 px-6 py-2 bg-orange-600 rounded-xl text-[9px] font-black uppercase tracking-widest shadow-lg shadow-orange-600/20">Sync</button>
                 </div>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-gray-600 text-[9px] font-black uppercase tracking-[0.3em]">
            <p>&copy; 2026 SportBook Neural Network. Powering the athlete of tomorrow.</p>
            <div className="flex gap-12">
              <span className="hover:text-white cursor-pointer transition-colors">Privacy Protocol</span>
              <span className="hover:text-white cursor-pointer transition-colors">Service Terms</span>
              <span className="hover:text-white cursor-pointer transition-colors">Neural Security</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}