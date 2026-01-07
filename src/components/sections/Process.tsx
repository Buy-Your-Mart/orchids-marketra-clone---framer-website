"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react';

const steps = [
  {
    title: "Market Intelligence",
    description: "We dissect the marketplace landscape—Amazon, Flipkart, and beyond—to identify your unfair advantage.",
    icon: Target,
    detail: "Data Mining & Competitor Analysis"
  },
  {
    title: "Conversion Engineering",
    description: "We build and optimize your digital storefronts and landing pages for maximum revenue generation.",
    icon: Zap,
    detail: "UX/UI Design & Shopify Dev"
  },
  {
    title: "Aggressive Scaling",
    description: "Our performance marketing engine kicks in, driving massive traffic through SEO, SMO, and PPC.",
    icon: TrendingUp,
    detail: "Organic & Paid Growth"
  },
  {
    title: "Ecosystem Mastery",
    description: "We handle the complexities of marketplace management, ensuring your brand dominates every shelf.",
    icon: ShieldCheck,
    detail: "Full Account Management"
  }
];

const Process = () => {
  return (
    <section className="bg-white py-32 md:py-48 relative overflow-hidden">
      {/* Background Blueprint Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#ff0000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-32 gap-12">
          <div className="max-w-[800px]">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-[2px] w-12 bg-brand-red" />
              <h6 className="text-[14px] font-bold text-brand-red uppercase tracking-[0.4em]">The Blueprint</h6>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[48px] md:text-[80px] font-black text-black leading-[0.9] tracking-tight"
            >
              4 Steps to <br/><span className="text-brand-red">Total Domination.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="hidden lg:block pb-4"
          >
            <div className="w-24 h-24 rounded-full border border-border flex items-center justify-center animate-spin-slow">
                <ArrowRight className="w-8 h-8 text-brand-red rotate-45" />
            </div>
          </motion.div>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-[120px] left-0 w-full h-[1px] bg-border hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                className="relative group"
              >
                {/* Step Number Bubble */}
                <div className="mb-12 relative">
                    <div className="w-20 h-20 rounded-[24px] bg-subtle-gray border border-border flex items-center justify-center group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-500 group-hover:-rotate-6">
                        <step.icon className="w-8 h-8 text-black group-hover:text-white transition-colors duration-500" />
                    </div>
                    <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-[14px] font-black text-black shadow-sm group-hover:scale-110 transition-transform">
                        0{index + 1}
                    </div>
                </div>

                <div className="space-y-6">
                    <h4 className="text-[28px] font-black text-black leading-tight group-hover:text-brand-red transition-colors">
                        {step.title}
                    </h4>
                    <p className="text-muted-foreground text-[16px] leading-relaxed group-hover:text-black/80 transition-colors">
                        {step.description}
                    </p>
                    
                    <div className="pt-6 border-t border-border mt-8 flex flex-col gap-2">
                        <span className="text-[11px] font-black uppercase tracking-widest text-brand-red/50">Phase Detail</span>
                        <span className="text-[14px] font-bold text-black">{step.detail}</span>
                    </div>
                </div>

                {/* Vertical Decorative Bar */}
                <div className="absolute -left-6 top-24 bottom-0 w-[1px] bg-gradient-to-b from-brand-red/20 to-transparent lg:hidden" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
