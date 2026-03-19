import { ArrowRight, Sparkles, Trophy, ShoppingBag, GraduationCap, Star, ShieldCheck, ChevronRight, Send, FileText } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function PromoBanner() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-[550px] rounded-[4rem] overflow-hidden group shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border border-white/5">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1716561388086-cbc1e07f9f65?q=80&w=1080"
            alt="Promotional Banner"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/70 to-transparent"></div>
          
          <div className="absolute inset-0 p-12 md:p-24 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-orange-600 rounded-2xl text-white text-[10px] font-black uppercase tracking-[0.3em] w-fit mb-10 shadow-2xl shadow-orange-600/40">
              <Sparkles className="w-4 h-4" />
              Elite Membership
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[0.95] tracking-tighter italic uppercase">
              Pro Gear.<br />
              <span className="text-orange-500 underline decoration-white/10">Pro Play.</span>
            </h2>
            
            <p className="text-gray-300 text-lg md:text-xl font-medium max-w-xl mb-12 leading-relaxed italic">
              Experience the convergence of technology and sport. Unlock premium arenas and elite coaching in one ecosystem.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="px-12 py-6 bg-white text-gray-950 font-black rounded-[2.5rem] hover:bg-orange-500 hover:text-white transition-all shadow-2xl uppercase tracking-[0.2em] text-xs active:scale-95 flex items-center gap-3">
                Unlock Access <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-12 py-6 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-black rounded-[2.5rem] hover:bg-white/20 transition-all uppercase tracking-[0.2em] text-xs active:scale-95">
                Explore Perks
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ShopMarquee() {
  const shops = [
    { name: 'NIKE PRO', logo: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=200' },
    { name: 'ADIDAS PERFORMANCE', logo: 'https://images.unsplash.com/photo-1511746015096-179ad0bcc83d?q=80&w=200' },
    { name: 'PUMA ELITE', logo: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=200' },
    { name: 'UNDER ARMOUR', logo: 'https://images.unsplash.com/photo-1519338381761-c7523edc1f46?q=80&w=200' },
  ];
  
  return (
    <div className="py-24 bg-gray-50 border-y border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-16 flex items-end justify-between">
        <div>
           <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-200 rounded-lg text-gray-500 text-[9px] font-black uppercase tracking-widest mb-4">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Official Partners</span>
           </div>
           <h2 className="text-4xl font-black italic uppercase text-gray-900 tracking-tighter">Sports <span className="text-orange-600">Store Network</span></h2>
        </div>
        <button className="text-xs font-black uppercase tracking-widest text-orange-600 flex items-center gap-2 hover:gap-3 transition-all">
          Visit Marketplace <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      
      <div className="flex gap-12 whitespace-nowrap animate-marquee px-4">
        {[...Array(4)].map((_, idx) => (
          <div key={idx} className="flex gap-12">
            {shops.map((shop, i) => (
              <div key={i} className="group relative w-72 h-44 bg-white rounded-[2.5rem] border border-gray-100 shadow-xl shadow-black/5 p-8 flex flex-col justify-center items-center hover:-translate-y-2 transition-all duration-500">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors">
                  <ShoppingBag className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" />
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-gray-900">{shop.name}</span>
                <div className="absolute inset-0 bg-orange-600/5 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function AcademySection() {
  const [showAdmissionForm, setShowAdmissionForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const courses = [
    {
      title: 'Junior Cricket Masterclass',
      age: '8-15 Years',
      slots: '12 Slots Left',
      img: 'https://images.unsplash.com/photo-1652063358980-95e553530481?q=80&w=1080',
      tag: 'Bestseller'
    },
    {
      title: 'Elite Football Academy',
      age: '12-18 Years',
      slots: 'Full House',
      img: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=1080',
      tag: 'Pro Coach'
    }
  ];

  const handleAdmissionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setShowAdmissionForm(false);
      setFormSubmitted(false);
    }, 2000);
  };

  return (
    <section className="py-32 bg-gray-950 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-600/10 blur-[150px] rounded-full -z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-600/20 border border-orange-500/30 rounded-xl text-orange-500 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
              <GraduationCap className="w-4 h-4" />
              <span>Admissions Open 2026</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white italic uppercase mb-8 leading-[0.95] tracking-tighter">
              Build The <br />
              <span className="text-orange-500">Athlete</span> Within.
            </h2>
            <p className="text-gray-400 text-xl font-medium mb-12 max-w-xl leading-relaxed italic">
              Join India's most advanced sports academies. Professional coaching, global scouting, and world-class training facilities.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-12">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10"><Star className="w-6 h-6 text-orange-600" /></div>
                  <div>
                    <p className="text-white font-black text-sm">4.9/5</p>
                    <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">Coaching Rank</p>
                  </div>
               </div>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10"><ShieldCheck className="w-6 h-6 text-orange-600" /></div>
                  <div>
                    <p className="text-white font-black text-sm">100%</p>
                    <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">Safety Score</p>
                  </div>
               </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setShowAdmissionForm(true)}
                className="px-12 py-6 bg-orange-600 hover:bg-orange-500 text-white font-black rounded-[2.5rem] uppercase tracking-[0.3em] text-[10px] transition-all shadow-2xl shadow-orange-600/30 flex items-center justify-center gap-3 active:scale-95">
                <FileText className="w-4 h-4" />
                Apply Online Now
              </button>
              <button className="px-12 py-6 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-black rounded-[2.5rem] hover:bg-white/20 transition-all uppercase tracking-[0.3em] text-[10px] active:scale-95">
                Download Brochure
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course, i) => (
              <div key={i} className="group relative bg-white/5 border border-white/10 rounded-[3.5rem] overflow-hidden hover:bg-white/10 transition-all duration-500">
                <div className="aspect-[4/5] relative">
                  <ImageWithFallback src={course.img} alt={course.title} className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent"></div>
                  
                  <div className="absolute top-8 left-8">
                     <span className="px-3 py-1.5 bg-white text-gray-900 rounded-xl text-[9px] font-black uppercase tracking-widest shadow-2xl">{course.tag}</span>
                  </div>

                  <div className="absolute bottom-10 left-10 right-10">
                    <p className="text-orange-500 text-[10px] font-black uppercase tracking-widest mb-2">{course.age}</p>
                    <h4 className="text-white text-2xl font-black italic uppercase leading-none mb-6">{course.title}</h4>
                    <div className="flex items-center justify-between pt-6 border-t border-white/10">
                       <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest">{course.slots}</span>
                       <button 
                         onClick={() => setShowAdmissionForm(true)}
                         className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-gray-950 hover:bg-orange-600 hover:text-white transition-all">
                         <ArrowRight className="w-5 h-5" />
                       </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Admission Form Modal */}
      <AnimatePresence>
        {showAdmissionForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[300] flex items-center justify-center p-4"
            onClick={() => setShowAdmissionForm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-[3rem] max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {!formSubmitted ? (
                <div className="p-12">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h3 className="text-4xl font-black italic uppercase text-gray-900 tracking-tighter leading-none mb-2">
                        Online <span className="text-orange-600">Admission</span>
                      </h3>
                      <p className="text-gray-500 text-sm font-black uppercase tracking-widest">Apply for 2026 Batch</p>
                    </div>
                    <button 
                      onClick={() => setShowAdmissionForm(false)}
                      className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-2xl flex items-center justify-center transition-all text-gray-900 font-black text-xl"
                    >
                      ×
                    </button>
                  </div>

                  <form onSubmit={handleAdmissionSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2 block">Student Name</label>
                        <input 
                          type="text" 
                          required
                          className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 font-bold text-sm"
                          placeholder="Full Name"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2 block">Age</label>
                        <input 
                          type="number" 
                          required
                          className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 font-bold text-sm"
                          placeholder="Age"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2 block">Parent Email</label>
                      <input 
                        type="email" 
                        required
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 font-bold text-sm"
                        placeholder="parent@example.com"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2 block">Contact Number</label>
                      <input 
                        type="tel" 
                        required
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 font-bold text-sm"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2 block">Select Program</label>
                      <select 
                        required
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 font-bold text-sm"
                      >
                        <option>Junior Cricket Masterclass</option>
                        <option>Elite Football Academy</option>
                        <option>Tennis Pro Training</option>
                        <option>Basketball Development Program</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2 block">Additional Information</label>
                      <textarea 
                        rows={4}
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 font-bold text-sm"
                        placeholder="Any previous sports experience, achievements, or special requirements..."
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full px-12 py-6 bg-orange-600 hover:bg-orange-500 text-white font-black rounded-[2rem] uppercase tracking-[0.3em] text-[10px] transition-all shadow-2xl shadow-orange-600/30 flex items-center justify-center gap-3 active:scale-95"
                    >
                      <Send className="w-4 h-4" />
                      Submit Application
                    </button>
                  </form>
                </div>
              ) : (
                <div className="p-12 text-center">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-black italic uppercase text-gray-900 mb-4">Application <span className="text-orange-600">Submitted!</span></h3>
                  <p className="text-gray-500 font-bold">We'll contact you within 24 hours.</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}