"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play, Sparkles } from 'lucide-react';
import { useAuditPopup } from '@/lib/hooks/useAuditPopup';

const Hero = () => {
  const { openAuditPopup } = useAuditPopup();

  return (
    <header className="relative w-full overflow-hidden bg-white pt-[140px] md:pt-[200px] pb-[80px] md:pb-[120px]">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03]">
          <div className="grid grid-cols-6 md:grid-cols-12 gap-0 h-full w-full">
            {Array.from({ length: 72 }).map((_, i) => (
              <div key={i} className="border-r border-b border-black" />
            ))}
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-brand-red/5 rounded-full blur-[120px]"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-[100px]"
        />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-red/5 border border-brand-red/10 mb-8"
          >
            <Sparkles className="w-4 h-4 text-brand-red" />
            <span className="text-[12px] font-bold uppercase tracking-wider text-brand-red">Innovate • Scale • Dominate</span>
          </motion.div>

          {/* Headline */}
          <div className="max-w-[1100px] mb-12">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-h1 mb-8"
            >
              We Build <span className="text-brand-red">Digital</span> <br className="hidden md:block" />
              Powerhouses.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[18px] md:text-[24px] text-muted-foreground max-w-[850px] mx-auto leading-relaxed font-medium"
            >
              ONLINENGINE is a performance-first marketing agency that transforms brands into industry leaders through creative engineering and data intelligence.
            </motion.p>
          </div>

            {/* Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-5 mb-24"
            >
              <button 
                onClick={openAuditPopup}
                className="btn-primary group h-[64px] px-10"
              >
                Start Scaling Now
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

            <a href="#works" className="btn-outline h-[64px] px-10 flex items-center justify-center">
              Our Case Studies
            </a>
          </motion.div>

          {/* Video / Image Asset Section */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative w-full max-w-[1200px] aspect-[16/9] rounded-[32px] overflow-hidden bg-black border-[8px] border-white shadow-[0_48px_100px_rgba(0,0,0,0.12)] group"
          >
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
              src="https://framerusercontent.com/assets/Tpvikg3UcZ7idcRlGRo9JUFPlI.mp4"
            />
            
            {/* Play Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-24 h-24 bg-brand-red rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 group/btn">
                <Play className="w-8 h-8 text-white fill-white ml-1" />
              </button>
            </div>

            {/* Floating Labels */}
            <div className="absolute bottom-10 left-10 hidden md:flex items-center gap-4">
              <div className="bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-white/20">
                <p className="text-[12px] font-bold text-brand-red uppercase tracking-widest mb-1">Success Rate</p>
                <p className="text-[32px] font-black text-black">98.4%</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust Badges - Mini */}
      <div className="container mt-20 md:mt-32">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-30 grayscale"
        >
          {/* Placeholders for logos */}
          <p className="font-black text-[20px] md:text-[24px]">ECONOMIC TIMES</p>
          <p className="font-black text-[20px] md:text-[24px]">YOURSTORY</p>
          <p className="font-black text-[20px] md:text-[24px]">BUSINESS STANDARD</p>
          <p className="font-black text-[20px] md:text-[24px]">INC42</p>
          <p className="font-black text-[20px] md:text-[24px]">MINT</p>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
