import { Search, Calendar, CreditCard, PlayCircle } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: 'Search Venues',
      description: 'Browse through hundreds of verified sports facilities near you',
      step: '01',
    },
    {
      icon: Calendar,
      title: 'Select Date & Time',
      description: 'Choose your preferred date and time slot that suits you',
      step: '02',
    },
    {
      icon: CreditCard,
      title: 'Make Payment',
      description: 'Secure online payment with multiple payment options',
      step: '03',
    },
    {
      icon: PlayCircle,
      title: 'Play & Enjoy',
      description: 'Show up and enjoy your game at the booked venue',
      step: '04',
    },
  ];

  return (
    <div className="bg-gray-50 py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="text-orange-600 font-extrabold text-xs uppercase tracking-[0.2em] mb-3">Simple Process</div>
          <h2 className="text-gray-900 font-black mb-4">How It Works</h2>
          <p className="text-gray-500 text-lg font-medium max-w-2xl mx-auto">
            Get from the couch to the court in less than 2 minutes with our streamlined booking experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative group">
                <div className="text-center flex flex-col items-center">
                  <div className="relative mb-8">
                    <div className="w-24 h-24 bg-white rounded-[2rem] shadow-xl flex items-center justify-center border border-gray-100 group-hover:bg-orange-600 transition-all duration-300 group-hover:-translate-y-2">
                      <Icon className="w-10 h-10 text-orange-600 group-hover:text-white transition-colors" />
                    </div>
                    <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-orange-600 text-white rounded-xl shadow-lg flex items-center justify-center font-black text-sm border-4 border-white">
                      {step.step}
                    </div>
                  </div>
                  
                  <h3 className="text-gray-900 font-extrabold text-xl mb-4">{step.title}</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">{step.description}</p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[70%] w-[60%] border-t-2 border-dashed border-gray-200"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
