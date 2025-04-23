'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaShip, FaArrowRight } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1920&auto=format&fit=crop')",
            backgroundAttachment: "fixed"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      {/* Animated Ocean Waves */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden z-10">
        <motion.div
          className="absolute bottom-0 left-0 w-[200%] h-24 bg-[url('https://assets.codepen.io/85486/wave.svg')] bg-repeat-x animate-wave"
          style={{ backgroundSize: '50% 100%' }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[200%] h-24 bg-[url('https://assets.codepen.io/85486/wave.svg')] bg-repeat-x animate-wave"
          style={{
            backgroundSize: '50% 100%',
            opacity: 0.5,
            animationDelay: '0.4s',
            animationDuration: '10s'
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-4"
          >
            <FaShip className="text-accent text-2xl" />
            <span className="text-accent font-medium">SINCE 1979 - OVER 40 YEARS OF EXCELLENCE</span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            JEBSEN TRAVEL <br />
            <span className="text-accent">The Cruise Specialists</span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            The Largest Cruise Consolidator in Asia with over 40 years of experience.
            Professional services by the professionals - we'll take you anywhere you want to go!
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link href="/booking">
              <motion.button
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Your Cruise <FaArrowRight />
              </motion.button>
            </Link>
            <Link href="/cruises">
              <motion.button
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-4 rounded-full font-medium text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Destinations
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Floating Ship Animation */}
      <motion.div
        className="hidden lg:block absolute right-10 bottom-32 z-10"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut"
          }}
        >
          <img
            src="/images/ships/cruise-ship.png"
            alt="Cruise Ship"
            className="w-96 h-auto"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
