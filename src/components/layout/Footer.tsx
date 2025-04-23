'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaShip, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <FaShip className="text-3xl text-accent" />
              <span className="text-2xl font-bold">JEBSEN TRAVEL</span>
            </div>
            <p className="text-gray-400 mb-4">
              Providing unforgettable cruise experiences since 1979. The Largest Cruise Consolidator in Asia!
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: '#4267B2' }}
                className="text-gray-400 hover:text-white text-xl"
              >
                <FaFacebook />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: '#1DA1F2' }}
                className="text-gray-400 hover:text-white text-xl"
              >
                <FaTwitter />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: '#E1306C' }}
                className="text-gray-400 hover:text-white text-xl"
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: '#FF0000' }}
                className="text-gray-400 hover:text-white text-xl"
              >
                <FaYoutube />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'Cruises', path: '/cruises' },
                { name: 'About Us', path: '/about' },
                { name: 'Booking', path: '/booking' },
                { name: 'Contact', path: '/contact' },
                { name: 'Terms & Conditions', path: '/terms' },
                { name: 'Privacy Policy', path: '/privacy' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-gray-400 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-accent mt-1" />
                <span className="text-gray-400">
                  Lot 2.81, Wisma Cosway, 88, Jalan Raja Chulan,<br />
                  50200 Kuala Lumpur, Malaysia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-accent" />
                <a href="tel:+60321485583" className="text-gray-400 hover:text-accent">
                  +60-3-2148 5583
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaWhatsapp className="text-accent" />
                <a href="https://wa.me/60321485583" className="text-gray-400 hover:text-accent">
                  +60-3-2148 5583
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-accent" />
                <a href="mailto:cruise@jebsen.com.my" className="text-gray-400 hover:text-accent">
                  cruise@jebsen.com.my
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for special deals and updates.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
              <motion.button
                type="submit"
                className="w-full bg-accent text-white font-medium py-2 rounded-md"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© {currentYear} Jebsen Travel & Tours Services Sdn. Bhd. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Celebrating over 40 years of exceptional cruise experiences.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
