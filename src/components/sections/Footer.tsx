"use client";

import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, Instagram, Linkedin, Twitter, Target, Zap, ShieldCheck, Map } from 'lucide-react';
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
    <footer className="relative w-full overflow-hidden bg-white pt-24 pb-12 border-t border-black/5">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-20">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-5">
            <a href="/" className="flex items-center gap-4 mb-10 group">
                <div className="relative w-14 h-14 flex items-center justify-center bg-black rounded-2xl overflow-hidden group-hover:scale-110 transition-transform duration-500">
                  {/* <Zap className="w-8 h-8 text-white transition-all duration-700 group-hover:rotate-[360deg]" /> */}
                  <EngineLogo className="w-10 h-10 text-black transition-all duration-500 group-hover:rotate-[360deg]" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              <div className="flex flex-col">
                <span className="text-[26px] font-black tracking-tighter text-black leading-none uppercase italic">
                  ONLINE<span className="text-brand-red">NGINE</span>
                </span>
                <span className="text-[10px] font-black text-black/40 uppercase tracking-[0.4em] mt-1">
                  Growth Accelerator
                </span>
              </div>
            </a>
            
            <p className="text-[17px] text-black/60 font-medium mb-10 max-w-[360px] leading-relaxed">
              We engineer high-performance growth systems for Indian marketplace brands. Specialized in Amazon, Flipkart, Myntra & Meesho.
            </p>

            <div className="flex gap-4">
              {[
                { Icon: Instagram, href: "https://instagram.com/onlinengine" },
                { Icon: Linkedin, href: "https://linkedin.com/company/onlinengine" },
                { Icon: Twitter, href: "https://twitter.com/onlinengine" }
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl border border-black/5 flex items-center justify-center text-black/40 hover:text-white hover:bg-black hover:border-black transition-all shadow-sm"
                >
                  <item.Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Location Column */}
          <div className="lg:col-span-5">
            <h6 className="text-[11px] font-black text-brand-red uppercase tracking-[0.5em] mb-12">Global Footprint</h6>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-10">
                <div className="group cursor-default">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-black/5 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors">
                      <MapPin size={16} />
                    </div>
                    <span className="text-[11px] font-black text-black/40 uppercase tracking-widest">Mumbai - Ghatkopar</span>
                  </div>
                  <p className="text-[15px] font-bold text-black/80 leading-relaxed pl-11">
                    HillView Industrial Estate, 202-B, Amrut Nagar Rd, Ghatkopar West, Mumbai 400086
                  </p>
                </div>
                <div className="group cursor-default">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-black/5 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors">
                      <MapPin size={16} />
                    </div>
                    <span className="text-[11px] font-black text-black/40 uppercase tracking-widest">Mumbai - Siddhpura</span>
                  </div>
                  <p className="text-[15px] font-bold text-black/80 leading-relaxed pl-11">
                    Ground Floor, Siddhpura Industry, D-18, Hill View Industry Gate, Ghatkopar West, Mumbai 400086
                  </p>
                </div>
              </div>
              <div className="space-y-10">
                <div className="group cursor-default">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-black/5 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors">
                      <MapPin size={16} />
                    </div>
                    <span className="text-[11px] font-black text-black/40 uppercase tracking-widest">Jaipur - Pratap Nagar</span>
                  </div>
                  <p className="text-[15px] font-bold text-black/80 leading-relaxed pl-11">
                    Sector 16, Pratap Nagar, Sanganer, Jaipur, Rajasthan 302033
                  </p>
                </div>
                <div className="pt-4">
                  <h6 className="text-[10px] font-black text-black/20 uppercase tracking-widest mb-4">Quick Links</h6>
                  <ul className="space-y-3">
                    {['Services', 'Works', 'Process', 'Team', 'FAQ'].map((link) => (
                      <li key={link}>
                        <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-[13px] font-black text-black/40 hover:text-brand-red transition-colors uppercase tracking-widest flex items-center gap-2 group">
                          <div className="w-1.5 h-1.5 rounded-full bg-black/10 group-hover:bg-brand-red transition-colors" />
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <div className="p-8 rounded-[32px] bg-subtle-gray border border-black/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-red/10 transition-colors" />
              
              <h6 className="text-[11px] font-black text-brand-red uppercase tracking-[0.5em] mb-8">Let's Connect</h6>
              <div className="space-y-8 relative z-10">
                <a href="mailto:info@click2online.in" className="block group/link">
                  <span className="text-[10px] font-black text-black/20 uppercase tracking-widest block mb-1">Send Email</span>
                  <span className="text-[18px] font-black text-black group-hover/link:text-brand-red transition-colors break-words">info@click2online.in</span>
                </a>
                <a href="tel:+918369697652" className="block group/link">
                  <span className="text-[10px] font-black text-black/20 uppercase tracking-widest block mb-1">Call Anytime</span>
                  <span className="text-[20px] font-black text-black group-hover/link:text-brand-red transition-colors">+91 83696 97652</span>
                </a>
                <button 
                  onClick={openAuditPopup}
                  className="w-full h-16 rounded-2xl bg-black text-white text-[14px] font-black uppercase tracking-[0.2em] hover:bg-brand-red transition-all shadow-xl shadow-black/10 flex items-center justify-center gap-3 active:scale-[0.98]"
                >
                  Free Audit
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* trust badges */}
        <div className="py-10 border-y border-black/5 flex flex-wrap justify-between items-center gap-10">
          {[
            { icon: ShieldCheck, text: "Amazon SPN Partner" },
            { icon: Zap, text: "Growth Focused" },
            { icon: Target, text: "Data Driven" },
            { icon: Map, text: "Pan-India Support" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
              <item.icon className="w-5 h-5 text-black" />
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-black">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[11px] font-black text-black/30 uppercase tracking-[0.3em]">
            ©2025 ONLINENGINE DIGITAL • BY CLICK2ONLINE
          </p>
          <div className="flex items-center gap-10">
            <a href="/privacy" className="text-[11px] font-black text-black/40 hover:text-black uppercase tracking-widest transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-[11px] font-black text-black/40 hover:text-black uppercase tracking-widest transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
