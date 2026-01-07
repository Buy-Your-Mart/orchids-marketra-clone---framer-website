"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "How Brand Strategy Impacts Business Growth",
      date: "July 2025",
      category: "Strategy",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6e69a292-db84-47f6-8c7e-26279ce05a28-marketra-framer-wiki/assets/images/yxcBsMoGV9gfUgzn1A8ugvA3yxM-7.png",
      alt: "Fragrance bottle illustrative of brand luxury",
    },
    {
      id: 2,
      title: "The Rise of Micro-Influencers in Digital Campaigns",
      date: "June 2025",
      category: "Social",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6e69a292-db84-47f6-8c7e-26279ce05a28-marketra-framer-wiki/assets/images/mmLbb4h953dg9cl7jNDng3AzjE-8.png",
      alt: "Two people working at a desk in a modern office",
    },
    {
      id: 3,
      title: "Why Your Brand Needs a Visual Identity",
      date: "May 2025",
      category: "Design",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6e69a292-db84-47f6-8c7e-26279ce05a28-marketra-framer-wiki/assets/images/qcQ98exGZLMPGyNkvWfHv1P0c-9.png",
      alt: "Fashion model with blue cap and branded white tee",
    },
  ];

  return (
    <section className="bg-white py-24 md:py-40 px-6" id="blog">
      <div className="container">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
          <div className="max-w-[700px]">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-[2px] w-12 bg-brand-red" />
              <span className="text-[14px] font-bold tracking-[0.3em] uppercase text-brand-red">Insights</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-h2 text-black"
            >
              From the edge of <br /><span className="text-brand-red">The Future.</span>
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-start md:items-end gap-10 md:pb-6"
          >
            <p className="text-muted-foreground text-[18px] md:text-[20px] max-w-[420px] leading-relaxed font-medium md:text-right">
              Explore marketing trends, strategies, and expert tips to help your brand grow faster and smarter.
            </p>
            <a 
              href="#blog" 
              className="btn-primary"
            >
              View All Articles
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((article, index) => (
            <motion.a 
              key={article.id} 
              href="#blog" 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col"
            >
              <div className="relative aspect-[4/5] mb-8 overflow-hidden rounded-[40px] bg-subtle-gray border border-border transition-all duration-700 group-hover:shadow-[0_40px_100px_rgba(0,0,0,0.1)] group-hover:-translate-y-2">
                <Image
                  src={article.image}
                  alt={article.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-6 left-6">
                    <span className="bg-white px-5 py-2 rounded-full text-[12px] font-black uppercase tracking-widest text-black shadow-sm border border-border group-hover:bg-brand-red group-hover:text-white group-hover:border-brand-red transition-all">
                        {article.category}
                    </span>
                </div>
              </div>
              <div className="flex flex-col gap-4 px-4">
                <span className="text-[12px] font-bold text-muted-foreground uppercase tracking-widest group-hover:text-brand-red transition-colors">
                  {article.date}
                </span>
                <h3 className="text-[28px] font-black leading-[1.1] text-black group-hover:text-brand-red transition-colors tracking-tight">
                  {article.title}
                </h3>
                <div className="flex items-center gap-2 text-[14px] font-bold text-black group-hover:gap-4 transition-all">
                    <span>Read More</span>
                    <ArrowUpRight size={16} className="text-brand-red" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
