import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Rahul Sharma',
      role: 'Cricket Enthusiast',
      rating: 5,
      comment: 'Amazing platform! Booked a cricket turf for my team in minutes. The facility was top-notch and the process was seamless.',
      avatar: 'RS',
    },
    {
      id: 2,
      name: 'Priya Patel',
      role: 'Badminton Player',
      rating: 5,
      comment: 'Love how easy it is to find and book badminton courts near me. The quality of venues is always verified and excellent.',
      avatar: 'PP',
    },
    {
      id: 3,
      name: 'Arjun Kumar',
      role: 'Football Coach',
      rating: 5,
      comment: 'As a coach, I need reliable venues for training sessions. SportBook has never disappointed me. Highly recommended!',
      avatar: 'AK',
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      role: 'Tennis Player',
      rating: 5,
      comment: 'The variety of sports venues available is impressive. Great customer service and transparent pricing. 5 stars!',
      avatar: 'SR',
    },
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-3">What Our Users Say</h2>
          <p className="text-gray-600 text-lg">
            Join thousands of happy sports enthusiasts
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl border-2 border-orange-100 hover:border-orange-300 transition-colors">
              <Quote className="w-10 h-10 text-orange-400 mb-4" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6">{testimonial.comment}</p>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
