'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaShip, FaPhone, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navbarVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const linkVariants = {
    hover: {
      scale: 1.1,
      color: 'var(--accent)',
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            whileHover={{ rotate: 15 }}
            transition={{ duration: 0.2 }}
          >
            <FaShip className="text-3xl text-primary" />
          </motion.div>
          <motion.span
            className="text-2xl font-bold text-primary"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            JEBSEN TRAVEL
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {['Home', 'About Us', 'Cruise Info', 'What\'s New', 'Team World', 'Special Packages', 'Contact Us'].map((item, index) => (
            <motion.div key={item} whileHover="hover" variants={linkVariants}>
              <Link
                href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/ /g, '-').replace(/'/g, '')}`}
                className={`font-medium transition-colors ${
                  isScrolled ? 'text-foreground' : 'text-text-light'
                }`}
              >
                {item}
              </Link>
            </motion.div>
          ))}
          <motion.a
            href="tel:+1234567890"
            className="flex items-center gap-2 bg-primary text-text-light px-4 py-2 rounded-full font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPhone /> Book Now
          </motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white dark:bg-black shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {['Home', 'About Us', 'Cruise Info', 'What\'s New', 'Team World', 'Special Packages', 'Contact Us'].map((item) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/ /g, '-').replace(/'/g, '')}`}
                className="font-medium py-2 border-b border-gray-200 dark:border-gray-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <a
              href="tel:+1234567890"
              className="flex items-center justify-center gap-2 bg-primary text-text-light px-4 py-3 rounded-full font-medium mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FaPhone /> Book Now
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
