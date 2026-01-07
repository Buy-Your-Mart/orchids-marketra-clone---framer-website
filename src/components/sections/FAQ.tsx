"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight, MessageSquare, ShoppingBag, Zap, Search, Rocket } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  icon: React.ElementType;
}

const faqData: FAQItem[] = [
    {
      id: '1',
      question: "Which Indian marketplaces do you specialize in?",
      answer: "We offer end-to-end management for Amazon India, Flipkart, Myntra, Zepto, and Blinkit. This includes account health management, inventory planning, and platform-specific growth strategies.",
      icon: ShoppingBag
    },
    {
      id: '2',
      question: "Do you handle Shopify & D2C development?",
      answer: "Absolutely. We build high-performance Shopify stores optimized for the Indian market, integrating local payment gateways like Razorpay and configuring advanced COD verification systems.",
      icon: Zap
    },
    {
      id: '3',
      question: "What is your approach to SEO & SMO?",
      answer: "Our SEO strategy focuses on high-intent keywords for Indian consumers, while our SMO (Social Media Optimization) drives engagement on Instagram and WhatsApp to build a loyal community for your brand.",
      icon: Search
    },
    {
      id: '4',
      question: "How do you manage Marketplace Marketing?",
      answer: "We handle complete advertising suites including Amazon Advertising (AMS), Flipkart Advantage, and Myntra Brand Accelerator to ensure your products are always in front of the right buyers.",
      icon: Rocket
    }
  ];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('1');

  return (
    <section className="bg-white py-24 md:py-40" id="faq">
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Left Column */}
          <div className="lg:w-[35%]">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-[2px] w-12 bg-brand-red" />
              <h6 className="text-[14px] font-bold text-brand-red uppercase tracking-[0.3em]">Quick Answers</h6>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[48px] md:text-[64px] font-black text-black leading-[1.1] mb-12 tracking-tighter"
            >
              Indian E-commerce <br /><span className="text-brand-red">Simplified.</span>
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 bg-black rounded-[40px] text-white"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-8">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-[24px] font-bold mb-8">Have a specific question about Zepto or Myntra?</h4>
              <a
                href="/contact"
                className="flex items-center justify-between group bg-brand-red px-8 py-5 rounded-2xl font-bold transition-all hover:bg-white hover:text-black"
              >
                Connect with an Expert
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="lg:w-[65%] flex flex-col gap-4">
            {faqData.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`group rounded-[32px] border transition-all duration-500 overflow-hidden ${
                    openId === item.id 
                      ? 'bg-subtle-gray border-black/5' 
                      : 'bg-white border-black/5 hover:border-black/20'
                  }`}
                >
                  <button
                    onClick={() => setOpenId(openId === item.id ? null : item.id)}
                    className="w-full flex items-center justify-between p-8 text-left"
                  >
                    <div className="flex items-center gap-6">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${openId === item.id ? 'bg-brand-red text-white' : 'bg-black/5 text-black'}`}>
                        <IconComponent className={`w-5 h-5 transition-colors duration-500 ${openId === item.id ? 'text-white' : 'text-brand-red'}`} />
                      </div>
                      <span className="text-[20px] md:text-[22px] font-bold text-black tracking-tight leading-tight">
                        {item.question}
                      </span>
                    </div>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${openId === item.id ? 'bg-black text-white' : 'bg-black/5 text-black group-hover:bg-black group-hover:text-white'}`}>
                      {openId === item.id ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {openId === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "circOut" }}
                      >
                        <div className="px-8 pb-10 pl-[88px]">
                          <p className="text-[16px] md:text-[17px] text-black/60 font-medium leading-relaxed max-w-[90%]">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
