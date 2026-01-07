"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useAuditPopup } from '@/lib/hooks/useAuditPopup';

const CTA = () => {
  const { openAuditPopup } = useAuditPopup();

  return (
    <section className="bg-white py-24 md:py-40 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/5 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-black text-white text-[14px] font-bold uppercase tracking-widest mb-12"
        >
          <Sparkles className="w-4 h-4 text-brand-red" />
          <span>Ready to dominate?</span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-h1 mb-12"
        >
          Let&apos;s build your <br/>
          <span className="text-brand-red">Digital Empire</span>.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[18px] md:text-[24px] text-muted-foreground font-medium max-w-[700px] mx-auto mb-16 leading-relaxed"
        >
          Stop waiting for growth. Let&apos;s create it. Join the elite brands scaling with ONLINENGINE.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button 
            onClick={openAuditPopup}
            className="btn-primary group h-[72px] px-12 text-[18px]"
          >
            Start Your Free Audit
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
          
          <a 
            href="#works" 
            className="text-[18px] font-bold text-black border-b-2 border-black/10 hover:border-brand-red transition-colors py-1"
          >
            View Case Studies
          </a>
        </motion.div>
      </div>

      {/* Dynamic Grid Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-[linear-gradient(to_top,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
    </section>
  );
};

export default CTA;
