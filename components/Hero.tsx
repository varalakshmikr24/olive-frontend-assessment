'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 px-6 text-center max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center"
      >
        {/* Avatar Stack */}
        <div className="flex items-center justify-center mb-6">
          <div className="flex -space-x-2 overflow-hidden h-10">
            <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-zinc-100">
              <Image src="/family.png" alt="Family 1" width={40} height={40} className="object-cover scale-[3] translate-x-[-10px]" />
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-zinc-100">
              <Image src="/family.png" alt="Family 2" width={40} height={40} className="object-cover scale-[3] translate-x-[-40px]" />
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-zinc-100">
              <Image src="/family.png" alt="Family 3" width={40} height={40} className="object-cover scale-[3] translate-x-[-70px]" />
            </div>
            <div className="flex items-center justify-center h-10 w-10 rounded-full border-2 border-white bg-zinc-100 text-[10px] font-bold text-zinc-400">
              50k+
            </div>
          </div>
          <span className="ml-4 text-[14px] text-zinc-500 font-medium">
            Trusted by thousands of healthy families
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-6xl md:text-7xl font-serif text-[#2D3A1F] mb-8 leading-[1.1] tracking-tight">
          The Safest Way to <br /> Shop for Groceries
        </h1>

        {/* Sub-headline */}
        <p className="text-zinc-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
          Use the Olive Food Scanner App to Instantly Eliminate Harmful Ingredients from Your Family’s Diet and Get Expert-Backed Food Insights
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="bg-[#2D3A1F] text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 hover:bg-[#1f2815] transition-all shadow-lg shadow-olive/10">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M17.05 20.28c-.96.95-2.03 1.05-2.95.54-.92-.51-2-.52-2.96 0-.96.52-1.92.42-2.94-.54-3.23-3.25-3.87-8.62-1.22-11.27 1.34-1.34 3.01-1.31 3.99-.44 1.15.99 1.14.99 2.29 0 .98-.87 2.65-.9 3.99.44 1.25 1.25 1.83 2.97 1.83 4.2 0 1.25-.6 2.76-2.03 4.07zM12 4.01C11.53 4.01 10.4 4.54 9.68 5.3c-1.12 1.17-1.07 2.74-1.07 2.74s1.65.17 2.79-1.03c.79-.83 1.22-2.22 1.22-2.22s-.27-.78-.62-.78z" />
            </svg>
            Download for iOS
          </button>
          <button className="text-[#2D3A1F] font-semibold flex items-center gap-2 group transition-all">
            Join the Olive Community 
            <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
