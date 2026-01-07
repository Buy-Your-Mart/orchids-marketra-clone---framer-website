"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, TrendingUp, Target, Zap, Search } from 'lucide-react';
import { useAuditPopup } from '@/lib/hooks/useAuditPopup';

const GrowthEngine = () => {
  const { openAuditPopup } = useAuditPopup();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} className="bg-white py-24 md:py-40 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-red/[0.02] -skew-x-12 translate-x-1/4 pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-20 md:mb-32 gap-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-[2px] w-12 bg-brand-red" />
              <span className="text-[14px] font-black uppercase tracking-[0.3em] text-brand-red">The Growth Engine</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[48px] md:text-[90px] font-black text-black leading-[1] tracking-tighter uppercase"
            >
              Mastering the <br />
              <span className="text-brand-red">Indian Algorithm.</span>
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[18px] text-black/60 font-medium max-w-sm mb-4 leading-relaxed"
          >
            We don't just "list" products. We engineer digital storefronts that dominate Amazon, Myntra, and Zepto from day one.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            { 
              title: "Hyper-Local SEO", 
              desc: "Optimizing for how India searches. From regional nuances to high-intent Hinglish keywords.",
              icon: <Search className="w-8 h-8" />,
              badge: "Visibility"
            },
            { 
              title: "Inventory Intelligence", 
              desc: "Predictive analytics to prevent stock-outs on Blinkit and Zepto during peak Indian festivals.",
              icon: <TrendingUp className="w-8 h-8" />,
              badge: "Efficiency"
            },
            { 
              title: "D2C Velocity", 
              desc: "Building Shopify stores that load in <2s on mobile networks, integrated with local COD flows.",
              icon: <Zap className="w-8 h-8" />,
              badge: "Conversion"
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative h-full"
            >
              <div className="h-full bg-subtle-gray border border-black/5 p-10 rounded-[40px] transition-all duration-500 hover:translate-y-[-10px] shadow-sm hover:shadow-2xl hover:shadow-black/5">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center text-brand-red transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-black/30 border border-black/10 px-3 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>
                
                <h3 className="text-[28px] font-black text-black mb-4">
                  {item.title}
                </h3>
                <p className="text-black/50 text-[16px] leading-relaxed">
                  {item.desc}
                </p>
                
                <div className="mt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex items-center gap-2 text-brand-red font-black text-[14px] uppercase tracking-wider">
                    Learn More <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 md:mt-32 p-1 bg-black/5 rounded-[50px] overflow-hidden"
        >
            <div className="bg-brand-red p-10 md:p-20 rounded-[46px] flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10 text-center md:text-left max-w-xl">
                <h4 className="text-[36px] md:text-[56px] font-black text-white leading-[1] mb-6 tracking-tighter uppercase">
                  Stop Guessing. <br />
                  <span className="text-black">Start Growing.</span>
                </h4>
                <p className="text-white/80 text-[18px] font-medium">
                  Get a custom marketplace growth audit and performance roadmap today.
                </p>
              </div>
              
              <button 
                onClick={openAuditPopup}
                className="relative z-10 inline-flex items-center gap-4 bg-white text-black px-12 py-7 rounded-full text-[18px] font-black hover:bg-black hover:text-white transition-all active:scale-95 shadow-2xl"
              >
                Claim Free Audit
                <ArrowUpRight className="w-6 h-6" />
              </button>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GrowthEngine;
