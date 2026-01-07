"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Search, FileText, Share2, Target, Lightbulb, Monitor, Zap } from 'lucide-react';
import { useAuditPopup } from '@/lib/hooks/useAuditPopup';

const servicesData = [
  {
    number: "01",
    title: "Web Development",
    description: "High-performance, custom-built websites that turn visitors into loyal customers with seamless UX/UI.",
    icon: <Monitor size={22} />,
  },
  {
    number: "02",
    title: "Digital Marketing",
    description: "Data-driven growth strategies across all digital channels to amplify your brand's presence and impact.",
    icon: <Target size={22} />,
  },
  {
    number: "03",
    title: "SEO & SMO",
    description: "Dominating search rankings and building massive social authority to drive organic traffic at scale.",
    icon: <Search size={22} />,
  },
  {
    number: "04",
    title: "Shopify Solutions",
    description: "Specialized Shopify store development and optimization for high-conversion e-commerce success.",
    icon: <Zap size={22} />,
  },
  {
    number: "05",
    title: "Marketplace Management",
    description: "Full-scale handling for Amazon, Flipkart, Myntra, and Zepto to maximize your sales and visibility.",
    icon: <Share2 size={22} />,
  },
  {
    number: "06",
    title: "Content & Strategy",
    description: "Lethal content creation and brand positioning that makes your business impossible to ignore.",
    icon: <FileText size={22} />,
  },
];

const Services = () => {
  const { openAuditPopup } = useAuditPopup();

  return (
    <section id="services" className="bg-white py-24 md:py-32 px-6">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-12">
          <div className="max-w-[700px]">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-[2px] w-12 bg-brand-red" />
              <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-brand-red">Our Expertise</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-h2 mb-8"
            >
              Everything you need to <br/>
              <span className="text-brand-red">Dominate</span> your market.
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-start gap-8 max-w-[480px] lg:pt-12"
          >
            <p className="text-[18px] text-muted-foreground leading-relaxed">
              We provide a lethal combination of creative engineering and data intelligence to ensure your brand doesn&apos;t just compete—it wins.
            </p>
            <button 
              onClick={openAuditPopup}
              className="btn-primary"
            >
              Explore Services
              <ArrowUpRight size={20} />
            </button>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div 
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-subtle-gray rounded-[32px] p-10 flex flex-col justify-between min-h-[360px] border border-border transition-all duration-500 hover:bg-white hover:shadow-[0_40px_100px_rgba(0,0,0,0.06)] group cursor-default"
            >
              <div className="flex justify-between items-start">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-border group-hover:bg-brand-red group-hover:text-white group-hover:scale-110 transition-all duration-500">
                  {service.icon}
                </div>
                <span className="text-[64px] font-black text-black opacity-[0.03] leading-none group-hover:opacity-[0.08] transition-opacity">
                  {service.number}
                </span>
              </div>
              
              <div>
                <h3 className="text-[24px] font-bold text-black mb-4 leading-tight group-hover:text-brand-red transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
