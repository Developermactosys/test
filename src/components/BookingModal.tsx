import { X, MapPin, Calendar, Clock, IndianRupee, User, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  venue: {
    name: string;
    location: string;
    price: number;
    image: string;
  } | null;
}

export function BookingModal({ isOpen, onClose, venue }: BookingModalProps) {
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    timeSlot: '',
    hours: '1',
  });

  if (!isOpen || !venue) return null;

  const timeSlots = [
    '06:00 AM - 07:00 AM',
    '07:00 AM - 08:00 AM',
    '08:00 AM - 09:00 AM',
    '09:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '12:00 PM - 01:00 PM',
    '01:00 PM - 02:00 PM',
    '02:00 PM - 03:00 PM',
    '03:00 PM - 04:00 PM',
    '04:00 PM - 05:00 PM',
    '05:00 PM - 06:00 PM',
    '06:00 PM - 07:00 PM',
    '07:00 PM - 08:00 PM',
    '08:00 PM - 09:00 PM',
    '09:00 PM - 10:00 PM',
  ];

  const totalAmount = venue.price * parseInt(bookingData.hours || '1');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Booking confirmed! You will receive a confirmation email shortly.');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
          <h2 className="text-gray-900">Book Your Venue</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="p-6">
          {/* Venue Info */}
          <div className="bg-gradient-to-br from-orange-50 to-white p-4 rounded-xl border-2 border-orange-100 mb-6">
            <h3 className="text-gray-900 mb-2">{venue.name}</h3>
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <MapPin className="w-4 h-4 text-orange-500" />
              <span className="text-sm">{venue.location}</span>
            </div>
            <div className="flex items-center gap-1 text-orange-600">
              <IndianRupee className="w-5 h-5" />
              <span>{venue.price}</span>
              <span className="text-sm text-gray-600">/hour</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div>
              <h4 className="text-gray-900 mb-4">Personal Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-gray-700">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500 w-5 h-5" />
                    <input
                      type="text"
                      required
                      value={bookingData.name}
                      onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-gray-700">Phone Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500 w-5 h-5" />
                    <input
                      type="tel"
                      required
                      value={bookingData.phone}
                      onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none"
                      placeholder="+91 1234567890"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block mb-2 text-gray-700">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500 w-5 h-5" />
                    <input
                      type="email"
                      required
                      value={bookingData.email}
                      onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Details */}
            <div>
              <h4 className="text-gray-900 mb-4">Booking Details</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-gray-700">Select Date *</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500 w-5 h-5" />
                    <input
                      type="date"
                      required
                      value={bookingData.date}
                      onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-gray-700">Duration (Hours) *</label>
                  <select
                    required
                    value={bookingData.hours}
                    onChange={(e) => setBookingData({ ...bookingData, hours: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none"
                  >
                    <option value="1">1 Hour</option>
                    <option value="2">2 Hours</option>
                    <option value="3">3 Hours</option>
                    <option value="4">4 Hours</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block mb-2 text-gray-700">Select Time Slot *</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500 w-5 h-5" />
                    <select
                      required
                      value={bookingData.timeSlot}
                      onChange={(e) => setBookingData({ ...bookingData, timeSlot: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none appearance-none"
                    >
                      <option value="">Choose a time slot</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Price Summary */}
            <div className="bg-gray-50 p-4 rounded-xl">
              <h4 className="text-gray-900 mb-3">Price Summary</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>Price per hour</span>
                  <span className="flex items-center">
                    <IndianRupee className="w-4 h-4" />
                    {venue.price}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Duration</span>
                  <span>{bookingData.hours} hour(s)</span>
                </div>
                <div className="border-t border-gray-300 pt-2 flex justify-between">
                  <span className="text-gray-900">Total Amount</span>
                  <span className="flex items-center text-orange-600">
                    <IndianRupee className="w-5 h-5" />
                    {totalAmount}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors"
              >
                Confirm Booking
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
