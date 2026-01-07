"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Zap, BarChart3 } from 'lucide-react';

const partners = [
  { name: 'Growth', logoText: 'GROWTH' },
  { name: 'Vibe', logoText: 'VIBE' },
  { name: 'Velocity', logoText: 'VELOCITY' },
  { name: 'Apex', logoText: 'APEX' },
  { name: 'Pulse', logoText: 'PULSE' },
  { name: 'Evolve', logoText: 'EVOLVE' },
];

const features = [
  {
    title: "Military-Grade Strategy",
    desc: "We deploy precision-engineered marketing frameworks that outperform competitors in the most saturated markets.",
    icon: ShieldCheck,
    stat: "100%",
    label: "Execution Rate"
  },
  {
    title: "Hyper-Growth Engine",
    desc: "Our automated systems identify and exploit high-yield opportunities before they go mainstream.",
    icon: Zap,
    stat: "3.5x",
    label: "Scale Factor"
  },
  {
    title: "Data Intelligence",
    desc: "Real-time behavioral tracking and predictive modeling ensure every marketing dollar is optimized for maximum impact.",
    icon: BarChart3,
    stat: "24/7",
    label: "Live Optimization"
  }
];

const Collaborations = () => {
  return (
    <section className="bg-subtle-gray py-24 md:py-32 relative overflow-hidden">
      <div className="container relative z-10">
        {/* Header */}
        <div className="max-w-[800px] mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[2px] w-12 bg-brand-red" />
            <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-brand-red">Collaborations</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-h2 mb-8"
          >
            We don&apos;t just work with brands. <br/>
            <span className="text-muted-foreground">We build empires.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[18px] text-muted-foreground leading-relaxed max-w-[600px]"
          >
            Strategic partnerships with industry leaders to push the boundaries of what&apos;s possible in the digital landscape.
          </motion.p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border border border-border rounded-[24px] overflow-hidden mb-32">
          {partners.map((partner, i) => (
            <motion.div 
              key={i}
              whileHover={{ backgroundColor: '#ffffff' }}
              className="h-32 md:h-40 bg-white/50 flex items-center justify-center p-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 group cursor-pointer"
            >
              {partner.logo ? (
                <div className="relative w-full h-12">
                  <Image src={partner.logo} alt={partner.name} fill className="object-contain" />
                </div>
              ) : (
                <span className="text-[18px] font-black text-black tracking-tighter group-hover:text-brand-red transition-colors">{partner.logoText}</span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[32px] border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(255,45,45,0.08)] hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="w-16 h-16 bg-brand-red/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-red group-hover:scale-110 transition-all duration-500">
                <feature.icon className="w-8 h-8 text-brand-red group-hover:text-white transition-colors" />
              </div>
              
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-[40px] font-black text-black tracking-tighter">{feature.stat}</span>
                <span className="text-[12px] font-bold text-brand-red uppercase tracking-widest">{feature.label}</span>
              </div>
              
              <h3 className="text-[24px] font-bold text-black mb-4 group-hover:text-brand-red transition-colors">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed group-hover:text-black/70 transition-colors">
                {feature.desc}
              </p>
              
              <div className="mt-8 flex items-center gap-2 text-[14px] font-bold text-black group-hover:translate-x-2 transition-transform cursor-pointer">
                Learn More
                <ArrowUpRight className="w-4 h-4 text-brand-red" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[50%] h-full pointer-events-none opacity-[0.02]">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="100" cy="0" r="80" fill="currentColor" className="text-brand-red" />
        </svg>
      </div>
    </section>
  );
};

export default Collaborations;
