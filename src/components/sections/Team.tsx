"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Linkedin, Twitter, Instagram, Globe, Code } from 'lucide-react';

const teamMembers = [
  {
    name: "Rushabh Buricha",
    role: "Founder & Amazon Expert",
    quote: "Official Amazon Trained Specialist Partner and SPN partner with 6+ years of experience. Having scaled 2500+ sellers and honored with Amazon's Scale Up award in 2022 and 2023, he specializes in driving 10X growth across all Amazon India categories.",
    image: "/team/rushabh.jpg",
    color: "#ff2d2d",
    badges: ["Amazon ATES", "SPN Partner", "Scale Up Award"]
  },
    {
      name: "Vishwas Moorjani",
      role: "Lead Developer & SEO",
      quote: "Expert full-stack developer and SEO specialist focused on building high-performance, search-engine-friendly digital projects. Master of PHP, JavaScript, Laravel, and modern web frameworks for scalable architecture.",
      image: "https://avatars.githubusercontent.com/u/100036402?v=4",
      color: "#000000",
      badges: ["Full-Stack", "SEO Expert", "Tech Lead"]
    }
];

const Team = () => {
  return (
    <section className="bg-white py-24 md:py-40 overflow-hidden relative" id="team">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-red/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 md:mb-32 gap-10">
          <div className="max-w-[800px]">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-[2px] w-12 bg-brand-red" />
              <h6 className="text-[14px] font-bold text-brand-red uppercase tracking-[0.3em]">The Engine Leads</h6>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-h2 text-black"
            >
              The Visionaries Behind <br/><span className="text-brand-red">Your Growth.</span>
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:pb-4"
          >
            <p className="text-muted-foreground text-[18px] md:text-[20px] max-w-[400px] mb-10 leading-relaxed font-medium">
              A collective of Indian marketplace experts recognized for helping sellers scale their businesses since 2016.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px]">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className="relative group h-[650px] overflow-hidden rounded-[40px] border border-border bg-subtle-gray"
            >
              <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex flex-wrap gap-2 mb-6">
                  {member.badges.map((badge, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-full bg-brand-red text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-brand-red/20">
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mb-8 opacity-0 group-hover:opacity-100 transition-all delay-100 translate-y-4 group-hover:translate-y-0 duration-500">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer text-white">
                    <Linkedin size={20} />
                  </div>
                  {index === 0 ? (
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer text-white">
                      <Instagram size={20} />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer text-white">
                      <Code size={20} />
                    </div>
                  )}
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer text-white">
                    <Globe size={20} />
                  </div>
                </div>

                <p className="text-white text-[15px] mb-8 font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-all delay-200 duration-500">
                  {member.quote}
                </p>

                <div className="relative">
                  <h5 className="text-[36px] font-black text-white tracking-tight leading-none mb-3">
                    {member.name}
                  </h5>
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: member.color }}
                    />
                    <p className="text-white/60 text-[14px] font-black uppercase tracking-[0.2em]">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
              
              <div 
                className="absolute top-10 right-10 w-4 h-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100 shadow-[0_0_30px_#ff2d2d]"
                style={{ backgroundColor: member.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
