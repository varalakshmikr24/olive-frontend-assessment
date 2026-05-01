'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Share2 } from 'lucide-react';

const PhoneMockup = () => {
  return (
    <div className="relative mx-auto w-[320px] h-[650px] bg-white rounded-[3rem] border-[8px] border-zinc-100 shadow-2xl overflow-hidden">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-zinc-100 rounded-b-2xl z-20 flex items-center justify-center">
        <div className="w-12 h-1.5 bg-zinc-200 rounded-full" />
      </div>

      {/* App Content */}
      <div className="h-full bg-white flex flex-col pt-10 px-4">
        {/* Product Image Container */}
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 bg-zinc-50 border border-zinc-100">
           <Image 
             src="/crackers.png" 
             alt="Fig and Olive Crackers" 
             fill 
             className="object-cover"
           />
        </div>

        {/* Product Info */}
        <div className="mb-4">
          <h3 className="text-lg font-bold text-zinc-900 leading-tight">Fig and Olive Crackers, Fig and Olive</h3>
          <p className="text-zinc-500 text-sm">Lesley Stowe</p>
        </div>

        {/* Score Row */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full border-4 border-red-500 flex items-center justify-center font-bold text-red-500 text-sm">
              46/100
            </div>
            <div>
              <span className="bg-red-50 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Avoid</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="p-2 rounded-full bg-zinc-50 text-zinc-400 hover:text-zinc-600 transition-colors">
              <Heart size={18} />
            </button>
            <button className="p-2 rounded-full bg-zinc-50 text-zinc-400 hover:text-zinc-600 transition-colors">
              <Share2 size={18} />
            </button>
          </div>
        </div>

        {/* Oliver Says Box */}
        <div className="bg-[#FAF9F6] rounded-2xl p-4 border border-zinc-100">
          <div className="flex items-center gap-2 mb-2">
             <div className="w-6 h-6 bg-[#87A330] rounded-full flex items-center justify-center">
                <span className="text-[10px] text-white">🫒</span>
             </div>
             <span className="font-bold text-sm text-zinc-900">Oliver Says:</span>
          </div>
          <p className="text-[11px] leading-relaxed text-zinc-600 italic">
            &ldquo;This product&apos;s low score mainly comes from the processed sugars, like honey and brown sugar, which can impact your family&apos;s health when consumed frequently, especially for kids who are still developing. Additionally, there are several additives that aren&apos;t ideal for your goal of avoiding processed foods, making this a choice to consider more carefully.&rdquo;
          </p>
        </div>

        {/* Bottom Nav Hint */}
        <div className="mt-auto pb-4">
           <div className="w-1/2 h-1 bg-zinc-100 mx-auto rounded-full" />
        </div>
      </div>
    </div>
  );
};

const Showcase = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex items-center justify-center"
        >
          {/* Background blurred cards */}
          <div className="absolute left-1/2 top-1/2 -translate-x-[280px] -translate-y-1/2 w-[240px] h-[480px] bg-white rounded-[2rem] border border-zinc-100 shadow-xl opacity-20 scale-90 blur-[1px]"></div>
          <div className="absolute left-1/2 top-1/2 translate-x-[40px] -translate-y-1/2 w-[240px] h-[480px] bg-white rounded-[2rem] border border-zinc-100 shadow-xl opacity-20 scale-90 blur-[1px]"></div>

          {/* Main Phone */}
          <PhoneMockup />
        </motion.div>
      </div>
    </section>
  );
};

export default Showcase;
