"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2 } from 'lucide-react';

interface AuditPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuditPopup: React.FC<AuditPopupProps> = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-[500px] bg-white rounded-[40px] overflow-hidden shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-black/10 transition-colors z-10"
            >
              <X className="w-5 h-5 text-black" />
            </button>

            <div className="p-8 md:p-12">
              {!isSubmitted ? (
                <>
                  <div className="mb-8">
                    <h3 className="text-[32px] font-black tracking-tight text-black leading-none mb-3">
                      Book Your Free <span className="text-brand-red uppercase">Growth Audit</span>
                    </h3>
                    <p className="text-[14px] font-bold text-black/40 uppercase tracking-widest">
                      Our experts will analyze your account within 24 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-black/30 uppercase tracking-widest ml-4">Full Name</label>
                      <input 
                        type="text" 
                        required 
                        className="w-full h-16 px-8 rounded-2xl bg-black/5 border border-transparent focus:border-brand-red focus:bg-white outline-none transition-all text-black font-bold"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-black/30 uppercase tracking-widest ml-4">Phone Number</label>
                      <input 
                        type="tel" 
                        required 
                        className="w-full h-16 px-8 rounded-2xl bg-black/5 border border-transparent focus:border-brand-red focus:bg-white outline-none transition-all text-black font-bold"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-black/30 uppercase tracking-widest ml-4">Marketplace Link / Store Name</label>
                      <input 
                        type="text" 
                        required 
                        className="w-full h-16 px-8 rounded-2xl bg-black/5 border border-transparent focus:border-brand-red focus:bg-white outline-none transition-all text-black font-bold"
                        placeholder="Amazon / Flipkart Store Link"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full h-20 mt-6 rounded-2xl bg-black text-white text-[16px] font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-brand-red transition-all shadow-xl shadow-black/10"
                    >
                      Analyze My Account
                      <Send className="w-5 h-5" />
                    </button>
                  </form>
                </>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center text-center"
                >
                  <div className="w-24 h-24 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red mb-8">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h3 className="text-[32px] font-black tracking-tight text-black mb-3 leading-none">
                    Audit Booked!
                  </h3>
                  <p className="text-[16px] font-bold text-black/40">
                    Our team will reach out to you within 24 hours with your custom strategy.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AuditPopup;
