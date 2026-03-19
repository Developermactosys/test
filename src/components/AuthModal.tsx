import { X, Smartphone, ArrowRight, ShieldCheck, Sparkles, User, Fingerprint } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'signin' | 'signup';
}

export function AuthModal({ isOpen, onClose, type }: AuthModalProps) {
  const [step, setStep] = useState<'details' | 'otp'>('details');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);

  if (!isOpen) return null;

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('otp');
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-gray-950/80 backdrop-blur-2xl"
    >
      <div className="absolute inset-0" onClick={onClose}></div>
      
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="relative w-full max-w-md bg-white rounded-[3.5rem] overflow-hidden shadow-[0_0_100px_rgba(249,115,22,0.2)] border border-gray-100"
      >
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 text-gray-400 hover:text-gray-900 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-10 md:p-14">
          <div className="mb-12 text-center">
            <div className="w-20 h-20 bg-orange-600 rounded-[2rem] flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-orange-600/30">
              <Fingerprint className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-black italic uppercase text-gray-900 tracking-tighter mb-2">
              {step === 'details' ? (type === 'signin' ? 'Welcome Back' : 'Create Profile') : 'Verify Identity'}
            </h2>
            <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">
              {step === 'details' ? 'Next-Gen Sports Authentication' : `Code sent to ${phone}`}
            </p>
          </div>

          <form onSubmit={handleSendOtp} className="space-y-6">
            {step === 'details' ? (
              <>
                {type === 'signup' && (
                  <div className="relative group">
                    <User className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
                    <input 
                      type="text" 
                      placeholder="Your First Name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-16 pr-6 py-5 bg-gray-50 border border-transparent rounded-[2rem] focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:bg-white focus:border-orange-500/20 transition-all font-bold text-sm"
                    />
                  </div>
                )}
                <div className="relative group">
                  <Smartphone className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
                  <div className="absolute left-14 top-1/2 -translate-y-1/2 h-6 w-px bg-gray-200"></div>
                  <input 
                    type="tel" 
                    placeholder="Mobile Number"
                    required
                    maxLength={10}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-20 pr-6 py-5 bg-gray-50 border border-transparent rounded-[2rem] focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:bg-white focus:border-orange-500/20 transition-all font-bold text-sm tracking-widest"
                  />
                </div>

                <button className="w-full py-6 bg-orange-600 hover:bg-orange-500 text-white font-black rounded-[2.5rem] uppercase tracking-[0.3em] text-[10px] transition-all shadow-2xl shadow-orange-600/30 flex items-center justify-center gap-3 active:scale-95">
                  Get Secure OTP <ArrowRight className="w-4 h-4" />
                </button>
              </>
            ) : (
              <div className="space-y-10">
                <div className="flex justify-between gap-4">
                  {otp.map((digit, i) => (
                    <input
                      key={i}
                      type="text"
                      maxLength={1}
                      className="w-16 h-20 bg-gray-50 border border-transparent rounded-3xl text-center text-3xl font-black focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:bg-white focus:border-orange-500/20 transition-all"
                    />
                  ))}
                </div>
                
                <div className="space-y-4">
                  <button type="button" onClick={onClose} className="w-full py-6 bg-gray-900 text-white font-black rounded-[2.5rem] uppercase tracking-[0.3em] text-[10px] transition-all shadow-xl flex items-center justify-center gap-3">
                    Verify & Enter Arena
                  </button>
                  <p className="text-center text-[10px] font-black text-gray-400 uppercase tracking-widest cursor-pointer hover:text-orange-600">
                    Resend Code in 24s
                  </p>
                </div>
              </div>
            )}
          </form>

          <div className="mt-12 pt-8 border-t border-gray-50 text-center">
            <div className="flex items-center justify-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4 text-green-500" />
              Quantum Encrypted Connection
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
