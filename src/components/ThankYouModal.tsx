import { CheckCircle2, X, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

interface ThankYouModalProps {
  isOpen: boolean;
  onClose: () => void;
  venueName: string;
}

export function ThankYouModal({ isOpen, onClose, venueName }: ThankYouModalProps) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[300] flex items-center justify-center p-4"
    >
      <div className="absolute inset-0 bg-white/95 backdrop-blur-2xl" onClick={onClose}></div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-lg bg-white rounded-[3rem] p-12 shadow-[0_0_150px_-20px_rgba(249,115,22,0.6)] border border-gray-100"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-12 h-12 bg-gray-100 hover:bg-orange-600 hover:text-white rounded-full flex items-center justify-center transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-12 h-12 text-green-600" />
          </div>

          <h2 className="text-3xl md:text-4xl font-black uppercase text-gray-900 tracking-tight mb-4">
            Thank You!
          </h2>

          <p className="text-gray-600 font-bold text-sm uppercase tracking-wider mb-2">
            Booking Session Confirmed
          </p>

          <p className="text-gray-900 font-black text-lg uppercase mb-8">
            {venueName}
          </p>

          <div className="bg-orange-50 border border-orange-100 rounded-[2rem] p-6 mb-8">
            <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">
              Confirmation Details
            </p>
            <p className="text-sm font-bold text-gray-700">
              You will receive a confirmation email and SMS shortly with your booking details.
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-full py-5 bg-orange-600 hover:bg-orange-500 text-white font-black rounded-[2rem] uppercase tracking-[0.3em] text-[10px] transition-all shadow-2xl shadow-orange-600/30 active:scale-95"
          >
            Got It!
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
