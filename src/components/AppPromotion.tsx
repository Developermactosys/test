import { Smartphone, Download, Bell, Star } from 'lucide-react';

export function AppPromotion() {
  return (
    <div className="bg-gradient-to-br from-orange-600 via-orange-500 to-orange-400 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-white mb-4">Book on the Go with Our Mobile App</h2>
            <p className="text-xl text-orange-50 mb-8">
              Download the SportBook app for a seamless booking experience. Available on iOS and Android.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white mb-1">Easy Booking</h4>
                  <p className="text-orange-100 text-sm">Book venues in just a few taps</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Bell className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white mb-1">Smart Notifications</h4>
                  <p className="text-orange-100 text-sm">Get updates on your bookings</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white mb-1">Exclusive Offers</h4>
                  <p className="text-orange-100 text-sm">Special deals for app users</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white mb-1">User Friendly</h4>
                  <p className="text-orange-100 text-sm">Simple and intuitive interface</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-white text-orange-600 rounded-xl hover:bg-orange-50 transition-colors flex items-center justify-center gap-3">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                App Store
              </button>
              
              <button className="px-8 py-4 bg-white text-orange-600 rounded-xl hover:bg-orange-50 transition-colors flex items-center justify-center gap-3">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm10.56-7.94L5.47 20.65c.19.14.42.22.67.22.26 0 .51-.08.72-.23l11.38-6.43-4.68-2.65zm4.72-3.44L14.93 12l3.35 1.88 2.79-1.58c.8-.45.8-1.61 0-2.06l-2.79-1.58zm-4.72-3.44L5.47 3.35c-.21-.15-.46-.23-.72-.23-.25 0-.48.08-.67.22l8.09 8.09 4.68-2.65z"/>
                </svg>
                Google Play
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/20">
              <div className="aspect-[9/16] bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center">
                <Smartphone className="w-24 h-24 text-white/40" />
              </div>
            </div>
            <div className="absolute top-8 left-8 w-full h-full bg-white/5 backdrop-blur-sm rounded-3xl border-2 border-white/10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
