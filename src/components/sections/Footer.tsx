"use client";

import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, Instagram, Linkedin, Twitter, Target, Zap, ShieldCheck, Map, Globe, MessageSquare, Compass } from 'lucide-react';
import { useAuditPopup } from '@/lib/hooks/useAuditPopup';
import { motion } from 'framer-motion';

const EngineLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 40 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="12" fill="currentColor" />
    <path d="M12 28V12L28 20L12 28Z" fill="white" className="group-hover:translate-x-1 transition-transform" />
    <path d="M22 12L32 20L22 28" stroke="#ff2d2d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Footer = () => {
  const { openAuditPopup } = useAuditPopup();

  return (
    <footer className="relative w-full overflow-hidden bg-white pt-32 pb-16 border-t border-black/[0.03]">
      {/* Premium Watermark */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 pointer-events-none select-none">
        <span className="text-[18vw] font-black text-black/[0.01] leading-none uppercase tracking-tighter whitespace-nowrap italic">
          ONLINENGINE
        </span>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-32">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-5">
            <a href="/" className="flex items-center gap-4 mb-10 group">
                <div className="relative w-14 h-14 flex items-center justify-center bg-black rounded-2xl overflow-hidden group-hover:scale-110 transition-transform duration-500">
                  {/* <Zap className="w-8 h-8 text-white transition-all duration-700 group-hover:rotate-[360deg]" /> */}
                  <EngineLogo className="w-10 h-10 text-black transition-all duration-500 group-hover:rotate-[360deg]" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              <div className="flex flex-col">
                <span className="text-[32px] font-black tracking-tighter text-black leading-none uppercase italic">
                  ONLINE<span className="text-brand-red font-extrabold">NGINE</span>
                </span>
                <span className="text-[11px] font-bold text-black/30 uppercase tracking-[0.5em] mt-1">
                  High Performance Agency
                </span>
              </div>
            </a>
            
            <p className="text-[20px] font-bold text-black/80 leading-relaxed mb-12 max-w-[480px]">
              We engineer hyper-growth systems for the next generation of Indian marketplace giants. 
              <span className="text-black/40"> Scaling Amazon, Flipkart & Myntra brands with surgical precision.</span>
            </p>

            <div className="flex flex-wrap gap-4">
              {[
                { icon: Instagram, label: "Instagram", href: "https://instagram.com/onlinengine" },
                { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/company/onlinengine" },
                { icon: Twitter, label: "Twitter", href: "https://twitter.com/onlinengine" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-6 py-4 rounded-2xl border border-black/5 bg-white hover:bg-black hover:border-black transition-all shadow-sm"
                >
                  <social.icon size={18} className="text-black/40 group-hover:text-white transition-colors" />
                  <span className="text-[12px] font-black uppercase tracking-widest text-black/40 group-hover:text-white transition-colors">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Location & Navigation */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            
            {/* Office 01 */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-6 bg-brand-red rounded-full" />
                <h6 className="text-[13px] font-black text-black uppercase tracking-[0.3em]">Mumbai HQ</h6>
              </div>
              <div className="space-y-6">
                <div className="group">
                  <span className="text-[10px] font-black text-black/20 uppercase tracking-widest block mb-2">Ghatkopar West</span>
                  <p className="text-[15px] font-bold text-black/70 leading-relaxed group-hover:text-black transition-colors">
                    HillView Industrial Estate, 202-B, Amrut Nagar Rd, Mumbai 400086
                  </p>
                </div>
                <div className="group border-t border-black/5 pt-6">
                  <span className="text-[10px] font-black text-black/20 uppercase tracking-widest block mb-2">Siddhpura</span>
                  <p className="text-[15px] font-bold text-black/70 leading-relaxed group-hover:text-black transition-colors">
                    Siddhpura Industry, D-18, Hill View Gate, Mumbai 400086
                  </p>
                </div>
              </div>
            </div>

            {/* Office 02 */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-6 bg-black rounded-full" />
                <h6 className="text-[13px] font-black text-black uppercase tracking-[0.3em]">Jaipur Hub</h6>
              </div>
              <div className="group">
                <span className="text-[10px] font-black text-black/20 uppercase tracking-widest block mb-2">Sanganer</span>
                <p className="text-[15px] font-bold text-black/70 leading-relaxed group-hover:text-black transition-colors">
                  Sector 16, Pratap Nagar, Sanganer, Jaipur, Rajasthan 302033
                </p>
              </div>
              <div className="pt-6 border-t border-black/5">
                <div className="flex items-center gap-2 mb-4">
                  <Globe size={14} className="text-brand-red" />
                  <span className="text-[10px] font-black text-black uppercase tracking-widest">Global Support</span>
                </div>
                <p className="text-[13px] font-bold text-black/40">Remote assistance available across all Indian time zones.</p>
              </div>
            </div>

            {/* Links */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-6 bg-brand-red/20 rounded-full" />
                <h6 className="text-[13px] font-black text-black uppercase tracking-[0.3em]">Explore</h6>
              </div>
                <ul className="space-y-4">
                  {[
                    { name: 'Services', id: 'services' },
                    { name: 'Our Work', id: 'works' },
                    { name: 'Strategy', id: 'process' },
                    { name: 'The Team', id: 'team' },
                    { name: 'Contact', id: 'contact', action: openAuditPopup }
                  ].map((link) => (
                    <li key={link.name}>
                      {link.action ? (
                        <button 
                          onClick={link.action}
                          className="group flex items-center justify-between py-1 w-full text-[14px] font-black text-black/40 hover:text-brand-red transition-all uppercase tracking-widest text-left"
                        >
                          {link.name}
                          <ArrowUpRight size={16} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                        </button>
                      ) : (
                        <a 
                          href={`#${link.id}`} 
                          className="group flex items-center justify-between py-1 text-[14px] font-black text-black/40 hover:text-brand-red transition-all uppercase tracking-widest"
                        >
                          {link.name}
                          <ArrowUpRight size={16} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="relative p-12 lg:p-16 rounded-[48px] bg-black overflow-hidden mb-24 group">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3 group-hover:bg-brand-red/20 transition-colors duration-1000" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
            <div className="space-y-4">
              <h2 className="text-[42px] lg:text-[56px] font-black text-white leading-tight tracking-tighter italic uppercase">
                READY TO <span className="text-brand-red">SCALE</span>?
              </h2>
              <p className="text-[18px] font-bold text-white/40 max-w-[500px]">
                Stop guessing. Start growing. Get your complimentary performance audit today.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
              <button 
                onClick={openAuditPopup}
                className="h-20 px-12 rounded-2xl bg-brand-red text-white text-[16px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all shadow-2xl shadow-brand-red/20 flex items-center justify-center gap-4 active:scale-95"
              >
                Claim Free Audit
                <ArrowUpRight size={20} />
              </button>
              <a 
                href="tel:+918369697652"
                className="h-20 px-12 rounded-2xl border border-white/10 text-white text-[16px] font-black uppercase tracking-[0.2em] hover:bg-white/5 transition-all flex items-center justify-center gap-4"
              >
                Talk to Expert
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-16 border-t border-black/5">
          <div className="flex flex-col items-center md:items-start gap-4">
            <p className="text-[12px] font-black text-black/30 uppercase tracking-[0.4em]">
              ©2025 ONLINENGINE • ENGINE POWERED BY CLICK2ONLINE
            </p>
            <div className="flex items-center gap-8">
              <a href="#" className="text-[10px] font-black text-black/20 hover:text-brand-red uppercase tracking-widest transition-colors">Privacy Policy</a>
              <a href="#" className="text-[10px] font-black text-black/20 hover:text-brand-red uppercase tracking-widest transition-colors">Terms of Service</a>
              <a href="#" className="text-[10px] font-black text-black/20 hover:text-brand-red uppercase tracking-widest transition-colors">Sitemap</a>
            </div>
          </div>

          <div className="flex items-center gap-12 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all">
            <div className="flex items-center gap-3">
              <ShieldCheck size={20} className="text-black" />
              <span className="text-[11px] font-black uppercase tracking-[0.2em]">Verified Partner</span>
            </div>
            <div className="flex items-center gap-3">
              <Target size={20} className="text-brand-red" />
              <span className="text-[11px] font-black uppercase tracking-[0.2em]">Data Obsessed</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;