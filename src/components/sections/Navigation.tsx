"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, ChevronRight, Phone, Compass } from 'lucide-react';
import { useAuditPopup } from '@/lib/hooks/useAuditPopup';

const EngineIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 40 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="12" fill="currentColor" />
    <path d="M12 28V12L28 20L12 28Z" fill="white" className="group-hover:translate-x-1 transition-transform" />
    <path d="M22 12L32 20L22 28" stroke="#ff2d2d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);



const Navigation = () => {
  const { openAuditPopup } = useAuditPopup();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Case Studies', href: '#works' },
    { name: 'Process', href: '#process' },
    { name: 'Team', href: '#team' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-6'
        }`}
      >
        <div className="container px-4">
          <nav className={`flex items-center justify-between px-5 md:px-8 py-3 rounded-full transition-all duration-500 ${
            scrolled 
              ? 'bg-white/90 backdrop-blur-xl border border-black/5 shadow-[0_8px_40px_rgba(0,0,0,0.06)]' 
              : 'bg-transparent border border-transparent'
          }`}>
            <a href="/" className="flex items-center gap-4 relative z-[130] group">
                <div className="w-10 h-10 flex items-center justify-center bg-black rounded-xl overflow-hidden group-hover:scale-110 transition-transform duration-500">
                  {/* <Zap className="w-6 h-6 text-white transition-all duration-700 group-hover:rotate-[360deg]" /> */}
                  <EngineIcon className="w-10 h-10 text-black transition-all duration-500 group-hover:rotate-[360deg]" />
                </div>
              <div className="flex flex-col">
                <span className="text-[22px] font-black tracking-tighter text-black leading-none uppercase italic">
                  ONLINE<span className="text-brand-red">NGINE</span>
                </span>
                <span className="text-[8px] font-black text-black/40 uppercase tracking-[0.4em] mt-1">
                  High Performance Agency
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="px-5 py-2 text-[13px] font-bold text-black/60 hover:text-brand-red transition-all rounded-full hover:bg-brand-red/5"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              <a 
                href="tel:+918369697652"
                className="flex items-center gap-2 text-[13px] font-black text-black/40 hover:text-black transition-colors mr-2"
              >
                <Phone className="w-3.5 h-3.5" />
                +91 83696 97652
              </a>
                <button 
                  onClick={openAuditPopup}
                  className="h-11 px-7 rounded-full bg-black text-white text-[13px] font-black flex items-center gap-2 hover:bg-brand-red transition-all hover:scale-105 active:scale-95 shadow-xl shadow-black/10"
                >
                  Get Started
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              {/* Mobile Toggle */}
              <div className="flex items-center gap-3 md:hidden relative z-[130]">
                <button 
                  onClick={() => setIsOpen(!isOpen)}
                className={`w-12 h-12 flex items-center justify-center rounded-full transition-all active:scale-90 shadow-lg ${
                  isOpen ? 'bg-brand-red text-white' : 'bg-black text-white'
                }`}
                aria-label="Toggle Menu"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-[120] bg-white md:hidden overflow-y-auto"
          >
            <div className="flex flex-col min-h-screen pt-32 pb-12 px-6">
              <div className="flex flex-col gap-8">
                <p className="text-[10px] font-black text-brand-red uppercase tracking-[0.4em]">Navigation</p>
                <div className="flex flex-col gap-2">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 + 0.2 }}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between py-5 group border-b border-black/5"
                    >
                      <span className="text-[36px] font-black tracking-tighter text-black group-hover:text-brand-red transition-colors">
                        {link.name}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-brand-red group-hover:text-white transition-all">
                        <ChevronRight className="w-5 h-5" />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-12 space-y-8">
                <div className="flex flex-col gap-4">
                  <p className="text-[10px] font-black text-black/30 uppercase tracking-[0.2em]">Growth Support</p>
                    <div className="grid grid-cols-1 gap-4">
                      <a 
                        href="tel:+918369697652"
                        className="h-20 w-full rounded-3xl bg-black/5 border border-black/5 text-black flex items-center px-8 gap-5 transition-colors hover:bg-black/10"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="w-12 h-12 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red">
                          <Phone className="w-6 h-6" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] font-black text-black/40 uppercase tracking-widest">Call Expert</span>
                          <span className="text-[18px] font-black">+91 83696 97652</span>
                        </div>
                      </a>
                    <button 
                      onClick={() => {
                        setIsOpen(false);
                        openAuditPopup();
                      }}
                      className="h-20 w-full rounded-3xl bg-brand-red text-white flex items-center px-8 gap-5 shadow-2xl shadow-brand-red/30 active:scale-[0.98] transition-all"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                        <ArrowUpRight className="w-6 h-6" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Consultation</span>
                        <span className="text-[18px] font-black">Book Free Audit</span>
                      </div>
                    </button>
                  </div>
                </div>
                
                <div className="pt-8 flex justify-between items-center text-[10px] font-black text-black/40 uppercase tracking-[0.2em] border-t border-black/5">
                  <span>©2024 ONLINENGINE</span>
                  <div className="flex gap-5 text-black">
                    <span className="hover:text-brand-red transition-colors">Instagram</span>
                    <span className="hover:text-brand-red transition-colors">LinkedIn</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
