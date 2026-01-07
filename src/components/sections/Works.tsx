"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const worksData = [
  {
    id: 1,
    client: "UrbanThread",
    category: ["E-commerce", "SEO"],
    metric: "140%",
    title: "Scaling E-Commerce Growth for UrbanThread",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6e69a292-db84-47f6-8c7e-26279ce05a28-marketra-framer-wiki/assets/images/S704mMBUIRnIp9bnofeV06bF4-4.jpg",
    color: "bg-subtle-gray",
    textColor: "text-black",
    btnColor: "bg-brand-red text-white",
    metricColor: "bg-brand-red"
  },
  {
    id: 2,
    client: "Elixify",
    category: ["Supplements", "Influencer Marketing"],
    metric: "80%",
    title: "Launching Globally with Elixify Supplements",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6e69a292-db84-47f6-8c7e-26279ce05a28-marketra-framer-wiki/assets/images/KB9BAgVQ8MmehraSrENBMeCZ8M-3.jpg",
    color: "bg-white",
    textColor: "text-black",
    btnColor: "bg-black text-white",
    metricColor: "bg-brand-red"
  }
];

const Works = () => {
  return (
    <section id="works" className="bg-white py-24 md:py-32 px-6">
      <div className="container">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
          <div className="w-full md:max-w-[50%]">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-[2px] w-12 bg-brand-red" />
              <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-brand-red">Case Studies</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-h2 text-black"
            >
              Real brands, <br /><span className="text-brand-red">Unreal</span> results.
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full md:max-w-[40%] flex flex-col items-start md:pt-12"
          >
            <p className="text-[18px] md:text-[20px] text-muted-foreground leading-relaxed mb-10">
              We help brands break through the noise with data-backed strategies and world-class execution. See how we&apos;ve moved the needle for our partners.
            </p>
            <a 
              href="/work/works" 
              className="btn-primary"
            >
              Explore Our Case Studies
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Case Study Cards */}
        <div className="flex flex-col gap-10">
          {worksData.map((work, index) => (
            <motion.div 
              key={work.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className={`${work.color} rounded-[48px] p-6 md:p-12 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-stretch min-h-[600px] overflow-hidden border border-border group`}
            >
              <div className="flex-1 flex flex-col justify-between py-6">
                <div className="flex gap-3 flex-wrap">
                  {work.category.map(cat => (
                    <span key={cat} className={`${work.textColor === 'text-white' ? 'bg-white/10 border-white/20' : 'bg-black/5 border-black/10'} px-5 py-2 rounded-full ${work.textColor} text-[14px] font-bold border`}>
                      {cat}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto">
                  <div className="flex items-center gap-4 mb-4">
                    <motion.h3 
                      whileInView={{ scale: [0.9, 1.1, 1], rotate: [0, -5, 0] }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className={`text-[80px] md:text-[120px] font-black ${work.textColor} leading-[0.8] tracking-[-0.06em]`}
                    >
                      {work.metric}
                    </motion.h3>
                    <div className={`w-14 h-14 rounded-full ${work.metricColor} flex items-center justify-center shadow-xl`}>
                      <ArrowUpRight className="text-white w-8 h-8" />
                    </div>
                  </div>
                  <h4 className={`text-[32px] md:text-[48px] font-bold ${work.textColor} leading-[1.1] mb-10 tracking-tight max-w-[90%]`}>
                    {work.title}
                  </h4>
                  <a 
                    href="#" 
                    className={`btn-primary w-full md:w-auto ${work.btnColor === 'bg-brand-red text-white' ? 'bg-brand-red text-white hover:bg-white hover:text-black' : 'bg-black text-white hover:bg-brand-red'}`}
                  >
                    Read Full Case Study
                  </a>
                </div>
              </div>
              <div className="flex-1 relative rounded-[32px] overflow-hidden min-h-[400px] md:min-h-auto shadow-2xl group-hover:scale-[1.02] transition-transform duration-700">
                <Image 
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
