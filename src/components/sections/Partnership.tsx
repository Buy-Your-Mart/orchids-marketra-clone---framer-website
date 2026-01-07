"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Star, Sparkles, Rocket } from 'lucide-react';

const Partnership = () => {
  return (
    <section className="bg-white py-24 md:py-40 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-brand-red/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-brand-red/5 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Star className="w-5 h-5 text-brand-red fill-brand-red" />
              <h6 className="text-[14px] font-bold text-brand-red uppercase tracking-[0.3em]">Growth Engine</h6>
            </div>
            <h2 className="text-h2 text-black mb-10">
              A partnership built <br/>
              <span className="text-brand-red">To Scale.</span>
            </h2>
              <p className="text-[18px] md:text-[22px] text-muted-foreground leading-relaxed mb-12 max-w-[500px]">
                We don&apos;t just work for you; we work <span className="text-black font-bold">with</span> you. Our dedicated performance and engineering team becomes a lethal extension of your brand.
              </p>

              <div className="space-y-6">
                {[
                  "Amazon ATES & SPN Certified",
                  "Official Partner of Flipkart & Meesho",
                  "JioMart Strategic Partner",
                  "End-to-End Marketplace Management"
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-6 h-6 rounded-full bg-brand-red/10 flex items-center justify-center group-hover:bg-brand-red transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-brand-red group-hover:text-white" />
                    </div>
                    <span className="text-black font-bold text-[18px]">{item}</span>
                  </motion.div>
                ))}
              </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Premium Card */}
            <div className="relative z-10 p-12 bg-white border border-border rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.08)] group hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 bg-brand-red/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-red transition-colors duration-500">
                <Sparkles className="w-8 h-8 text-brand-red group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-[32px] font-bold text-black mb-6 leading-tight">Always on, <br/>Always optimized.</h3>
              <p className="text-muted-foreground text-[16px] leading-relaxed mb-10">
                Replace slow agencies and fragmented teams with one cohesive performance engine. Real results, zero friction, infinite scale.
              </p>
              <div className="pt-8 border-t border-border flex items-center justify-between">
                <div>
                  <p className="text-black font-black text-[24px]">98%</p>
                  <p className="text-muted-foreground text-[12px] font-bold uppercase tracking-widest">Success Rate</p>
                </div>
                <div className="w-[1px] h-12 bg-border" />
                <div>
                  <p className="text-black font-black text-[24px]">3.5x</p>
                  <p className="text-muted-foreground text-[12px] font-bold uppercase tracking-widest">Avg. Growth</p>
                </div>
              </div>
            </div>

            {/* Floating Element */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 p-6 bg-brand-red rounded-[30px] shadow-[0_20px_50px_rgba(255,45,45,0.3)] z-20"
            >
              <Rocket className="w-8 h-8 text-white" />
            </motion.div>
            
            <div className="absolute -bottom-10 -left-10 w-full h-full bg-brand-red/5 rounded-[40px] -rotate-6 -z-10 border border-brand-red/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
