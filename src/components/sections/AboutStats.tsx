"use client";

import React from 'react';
import { motion } from 'framer-motion';

const statsData = [
  {
    label: "Years Experience",
    value: "8+",
  },
  {
    label: "Sellers Trained",
    value: "6500+",
  },
  {
    label: "A/C Handled",
    value: "2500+",
  },
];

const AboutStats = () => {
  return (
    <section id="about" className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/4"
          >
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-12 bg-brand-red" />
              <p className="text-[14px] font-bold text-brand-red uppercase tracking-[0.3em]">
                Who We Are
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-3/4"
          >
            <h2 className="text-h2 text-black mb-8">
              ONLINENGINE is the engine behind <span className="text-brand-red">High-Growth</span> brands. We bridge the gap between imagination and digital dominance.
            </h2>
            <p className="text-[20px] text-muted-foreground leading-relaxed max-w-[800px]">
              We don&apos;t follow trends—we set them. By combining psychological triggers with advanced data modeling, we create marketing ecosystems that convert consistently and scale infinitely.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-border pt-20">
          {statsData.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
                <p className="text-[12px] font-bold text-muted-foreground uppercase tracking-widest group-hover:text-black transition-colors">
                  {stat.label}
                </p>
              </div>
              <div className="relative inline-block">
                <span className="text-[80px] md:text-[100px] font-black text-black leading-none tracking-tighter group-hover:text-brand-red transition-all duration-500 block group-hover:-translate-y-2">
                  {stat.value}
                </span>
                <div className="h-2 w-0 bg-brand-red absolute -bottom-2 left-0 group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
