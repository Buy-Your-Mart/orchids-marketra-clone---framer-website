"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const testimonials = [
  {
    number: "01",
    quote: "ONLINENGINE helped us scale on Amazon India. Their marketplace strategies didn’t just bring us visibility—they brought us a 140% jump in monthly orders.",
    name: "Amit Mehra",
    title: "Founder, Delhi Direct Brands",
  },
  {
    number: "02",
    quote: "We partnered with them for our Myntra launch, and the results exceeded expectations. Sharp, strategic, and they truly understand the Indian consumer mindset.",
    name: "Sandeep Singh",
    title: "Marketing Head, Mumbai Mart",
  },
  {
    number: "03",
    quote: "As a growing D2C brand in Bangalore, we needed a partner who understands Zepto and Blinkit logistics. ONLINENGINE nailed it from day one.",
    name: "Vikram Malhotra",
    title: "COO, Bengaluru Botanics",
  },
  {
    number: "04",
    quote: "Their Shopify development and Meta Ads combo is lethal. We've seen a massive ROI shift since moving our digital mandate to their team.",
    name: "Karan Bajaj",
    title: "Co-Founder, UrbanCart India",
  }
];

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 450;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="bg-white py-24 md:py-40 overflow-hidden" id="testimonials">
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
          <div className="max-w-[700px]">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-[2px] w-12 bg-brand-red" />
              <span className="text-[14px] font-bold text-brand-red uppercase tracking-[0.3em]">Client Impact</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-h2 text-black"
            >
              What they say about <br /><span className="text-brand-red">The Impact.</span>
            </motion.h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-8 md:pb-6">
            <div className="flex gap-4">
              <button
                onClick={() => scroll('left')}
                className="w-16 h-16 rounded-full border border-border flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300 group"
              >
                <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center hover:bg-brand-red transition-all duration-300 group shadow-xl"
              >
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-10 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-12"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.concat(testimonials).map((item, index) => (
            <motion.div
              key={`${item.name}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % testimonials.length) * 0.1 }}
              className="min-w-[340px] md:min-w-[480px] bg-subtle-gray p-12 rounded-[48px] flex flex-col justify-between snap-start border border-border group hover:bg-white hover:shadow-[0_40px_100px_rgba(0,0,0,0.06)] transition-all duration-500 relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-border group-hover:bg-brand-red group-hover:text-white transition-all duration-500">
                    <Quote className="w-6 h-6" />
                  </div>
                  <span className="text-[48px] font-black text-black opacity-[0.05] group-hover:text-brand-red opacity-[0.1] transition-colors">
                    {item.number}
                  </span>
                </div>
                <h3 className="text-[22px] md:text-[26px] font-bold leading-[1.3] text-black mb-16 tracking-tight italic">
                  &ldquo;{item.quote}&rdquo;
                </h3>
              </div>
              
              <div className="relative z-10 flex items-center gap-4 border-t border-border pt-10">
                <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center font-black text-brand-red text-[18px]">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="font-black text-black text-[20px] tracking-tight">{item.name}</p>
                  <p className="text-muted-foreground text-[12px] font-bold uppercase tracking-widest">{item.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
