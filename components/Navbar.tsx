'use client';

import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const Logo = () => (
  <Link href="/" className="flex items-center gap-1 group">
    <div className="relative w-8 h-8 flex items-center justify-center">
      {/* The Olive Character */}
      <svg viewBox="0 0 100 100" className="w-full h-full fill-[#87A330]">
        <path d="M50 85C69.33 85 85 69.33 85 50C85 30.67 69.33 15 50 15C30.67 15 15 30.67 15 50C15 69.33 30.67 85 50 85Z" />
        {/* Leaf */}
        <path d="M50 20C50 20 55 5 70 5C70 5 65 20 50 25" fill="#87A330" />
        {/* Eyes */}
        <circle cx="40" cy="45" r="5" fill="#2D3A1F" />
        <circle cx="60" cy="45" r="5" fill="#2D3A1F" />
        {/* Smile */}
        <path d="M40 60 Q50 70 60 60" stroke="#2D3A1F" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>
    </div>
    <span className="text-2xl font-bold text-[#87A330] tracking-tight font-serif lowercase">olive</span>
  </Link>
);

const Navbar = () => {
  const navLinks = [
    { name: 'Solutions', hasDropdown: true },
    { name: 'Features', hasDropdown: false },
    { name: 'Pricing', hasDropdown: false },
    { name: 'Blog', hasDropdown: true },
    { name: 'Restaurants', hasDropdown: false },
    { name: 'Food', hasDropdown: true },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Logo />

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={`/${link.name.toLowerCase()}`}
              className="flex items-center gap-1 text-zinc-600 hover:text-zinc-900 font-medium text-[15px] transition-colors"
            >
              {link.name}
              {link.hasDropdown && <ChevronDown size={14} className="text-zinc-400" />}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <Link href="/signin" className="text-zinc-600 hover:text-zinc-900 font-medium text-[15px] transition-colors">
            Sign in
          </Link>
          <Link
            href="/get-olive"
            className="bg-[#2D3A1F] text-white px-5 py-2.5 rounded-full font-medium text-[15px] hover:bg-[#1f2815] transition-all flex items-center gap-2"
          >
            Get Olive <span className="text-lg">→</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
