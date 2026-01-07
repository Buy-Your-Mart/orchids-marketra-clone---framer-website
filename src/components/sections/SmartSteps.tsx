"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BarChart3, Globe, ShoppingCart, TrendingUp } from 'lucide-react';

const marketplaceStats = [
  { name: "Amazon", growth: "+120%", color: "bg-[#FF9900]" },
  { name: "Flipkart", growth: "+85%", color: "bg-[#2874F0]" },
  { name: "Myntra", growth: "+150%", color: "bg-[#FF3F6C]" },
  { name: "Zepto", growth: "+210%", color: "bg-[#5D3EBD]" }
];

const SmartSteps = () => {
  return (
    <section className="bg-white py-24 md:py-40 relative overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32">
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-[2px] w-12 bg-brand-red" />
              <h6 className="text-[14px] font-bold text-brand-red uppercase tracking-[0.4em]">Proven Results</h6>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[48px] md:text-[72px] font-black text-black leading-[0.95] tracking-tight mb-10"
            >
              The Science of <br/>
              <span className="text-brand-red">Predictable Scaling.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[20px] text-muted-foreground leading-relaxed max-w-[600px]"
            >
              We don&apos;t just launch brands; we engineer them for marketplace dominance. Our data-first approach consistently delivers industry-leading growth across all major Indian platforms.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-black rounded-[48px] p-12 text-center relative group overflow-hidden"
          >
            <div className="relative z-10">
                <motion.div 
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="text-[120px] md:text-[160px] font-black text-white leading-none tracking-tighter group-hover:text-brand-red transition-colors duration-700"
                >
                    99<span className="text-brand-red">%</span>
                </motion.div>
                <div className="text-[14px] font-black text-white/40 uppercase tracking-[0.3em] mt-4">Success Rate</div>
            </div>
            {/* Animated Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-red/20 rounded-full blur-[120px] group-hover:bg-brand-red/40 transition-colors" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketplaceStats.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-subtle-gray rounded-[40px] p-10 border border-border hover:bg-white hover:shadow-2xl transition-all duration-500 group"
                >
                    <div className="flex justify-between items-start mb-12">
                        <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center shadow-lg`}>
                            <ShoppingCart className="text-white w-7 h-7" />
                        </div>
                        <div className="flex flex-col items-end">
                            <span className="text-[12px] font-black text-black/20 uppercase tracking-widest">Growth</span>
                            <span className="text-[24px] font-black text-brand-red">{item.growth}</span>
                        </div>
                    </div>
                    <h4 className="text-[28px] font-black text-black mb-2 group-hover:text-brand-red transition-colors">{item.name}</h4>
                    <p className="text-[14px] text-muted-foreground font-medium">Marketplace Optimization & Management</p>
                    
                    <div className="mt-10 pt-8 border-t border-border flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-[12px] font-bold uppercase tracking-widest">Case Study</span>
                        <ArrowUpRight className="w-5 h-5 text-brand-red" />
                    </div>
                </motion.div>
            ))}
        </div>

        {/* Bottom Banner */}
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 p-12 bg-subtle-gray border border-border rounded-[48px] flex flex-col md:flex-row items-center justify-between gap-12"
        >
            <div className="flex items-center gap-8">
                <div className="w-20 h-20 rounded-full bg-white border border-border flex items-center justify-center">
                    <Globe className="w-10 h-10 text-brand-red animate-pulse" />
                </div>
                <div>
                    <h5 className="text-[24px] font-black text-black">Global Standards.</h5>
                    <p className="text-muted-foreground font-medium">Delivering world-class digital engineering since day one.</p>
                </div>
            </div>
            <div className="flex items-center gap-12">
                <div className="text-center">
                    <div className="text-[32px] font-black text-black">100+</div>
                    <div className="text-[12px] font-bold text-muted-foreground uppercase tracking-widest">Brands Scaled</div>
                </div>
                <div className="h-12 w-[1px] bg-border" />
                <div className="text-center">
                    <div className="text-[32px] font-black text-black">₹50Cr+</div>
                    <div className="text-[12px] font-bold text-muted-foreground uppercase tracking-widest">Revenue Generated</div>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SmartSteps;
