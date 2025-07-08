'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

function PerfumeBottleSVG(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      viewBox="0 0 120 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Perfume bottle illustration"
      className={props.className}
      {...props}
    >
      <ellipse cx="60" cy="180" rx="40" ry="20" fill="url(#glassGradient)" opacity="0.7" />
      <rect x="30" y="60" width="60" height="120" rx="30" fill="url(#glassGradient)" stroke="url(#goldGradient)" strokeWidth="4" />
      <rect x="48" y="40" width="24" height="30" rx="8" fill="url(#goldGradient)" />
      <rect x="44" y="20" width="32" height="24" rx="8" fill="url(#goldGradient)" stroke="var(--color-midnight-blue)" strokeWidth="2" />
      <ellipse cx="60" cy="120" rx="18" ry="60" fill="white" opacity="0.08" />
      <ellipse cx="60" cy="100" rx="8" ry="30" fill="white" opacity="0.12" />
      <defs>
        <linearGradient id="glassGradient" x1="0" y1="60" x2="120" y2="220" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F9F9F7" />
          <stop offset="1" stopColor="#D4AF37" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="goldGradient" x1="0" y1="0" x2="120" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D4AF37" />
          <stop offset="1" stopColor="#BFA14A" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-zinc-50">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 via-stone-50 to-zinc-100 opacity-60" />
      
      {/* Minimal geometric accent */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-px h-32 bg-zinc-300"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      />
      
      <div className="relative z-10 container mx-auto px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <motion.div
                className="w-12 h-px bg-zinc-900"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
              
              <h1 className="font-light text-5xl md:text-6xl xl:text-7xl text-zinc-900 leading-[0.9] tracking-tight">
                Perfume
                <br />
                <span className="font-thin italic text-zinc-600">Redefined</span>
              </h1>
              
              <motion.p
                className="text-lg md:text-xl text-zinc-600 max-w-md leading-relaxed font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Discover luxury fragrances crafted for the modern connoisseur. 
                Where elegance meets accessibility.
              </motion.p>
            </div>
            
            <motion.div
              className="flex items-center gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link
                href="/search"
                className="group inline-flex items-center gap-3 text-zinc-900 font-medium text-sm tracking-wider uppercase hover:text-zinc-600 transition-colors duration-300"
              >
                <span>Explore Collection</span>
                <motion.div
                  className="w-8 h-px bg-zinc-900 group-hover:bg-zinc-600 transition-colors duration-300"
                  whileHover={{ scaleX: 1.2 }}
                />
              </Link>
              
              <Link
                href="/about"
                className="text-zinc-500 font-light text-sm hover:text-zinc-700 transition-colors duration-300"
              >
                Our Story
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Bottle */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative">
              {/* Subtle shadow */}
              <motion.div
                className="absolute inset-0 bg-zinc-200 rounded-full blur-3xl opacity-20 scale-75"
                animate={{ 
                  scale: [0.75, 0.85, 0.75],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <motion.div
                animate={{ 
                  y: [0, -8, 0],
                  rotateY: [0, 3, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <PerfumeBottleSVG className="w-48 h-80 md:w-56 md:h-96 drop-shadow-xl" />
              </motion.div>
              
              {/* Accent line */}
              <motion.div
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-24 h-px bg-zinc-300"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
              />
            </div>
          </motion.div>
        </div>
        
        {/* Bottom minimal branding */}
        <motion.div
          className="absolute bottom-8 left-8 flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="w-8 h-px bg-zinc-400" />
          <span className="text-xs text-zinc-500 font-light tracking-widest uppercase">
            Royal Balc
          </span>
        </motion.div>
      </div>
    </section>
  );
}