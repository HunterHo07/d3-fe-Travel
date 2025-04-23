'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaShip, FaPhone, FaEnvelope } from 'react-icons/fa';

const CtaSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1566375638485-1c181e0c348a?q=80&w=1920&auto=format&fit=crop')",
            backgroundAttachment: "fixed"
          }}
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      {/* Animated Wave Shapes */}
      <div className="absolute top-0 left-0 right-0 h-20 overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute -top-5 left-0 w-full h-auto text-white dark:text-gray-900 fill-current"
        >
          <motion.path
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,197.3C840,192,960,160,1080,165.3C1200,171,1320,213,1380,234.7L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center mb-6"
          >
            <FaShip className="text-4xl" />
          </motion.div>

          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Ready to Embark on Your Dream Cruise?
          </motion.h2>

          <motion.p
            className="text-xl mb-10 text-white/90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Contact our cruise specialists today to plan your perfect vacation.
            Special discounts available for early bookings and group reservations.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
              <FaPhone className="text-3xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="mb-4">Speak directly with our cruise specialists</p>
              <a
                href="tel:+1234567890"
                className="text-accent font-medium hover:underline"
              >
                +60-3-2148 5583
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
              <FaEnvelope className="text-3xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="mb-4">Send us your inquiries anytime</p>
              <a
                href="mailto:cruise@jebsen.com.my"
                className="text-accent font-medium hover:underline"
              >
                cruise@jebsen.com.my
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-bold mb-2">Book Online</h3>
              <p className="mb-4">Reserve your cruise with our easy booking system</p>
              <Link
                href="/booking"
                className="text-accent font-medium hover:underline"
              >
                Book Now
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/contact">
              <motion.button
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us Today
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-0 left-0 w-full h-auto text-white dark:text-gray-900 fill-current"
        >
          <motion.path
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            d="M0,64L60,80C120,96,240,128,360,128C480,128,600,96,720,90.7C840,85,960,107,1080,112C1200,117,1320,107,1380,101.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default CtaSection;
