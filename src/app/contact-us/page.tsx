'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';

export default function ContactUsPage() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We're here to help you plan your perfect cruise vacation. Reach out to our team of cruise specialists today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <FaEnvelope className="text-primary" /> Get In Touch
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FaMapMarkerAlt className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Our Office</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Lot 2.81, Wisma Cosway, 88, Jalan Raja Chulan,<br />
                    50200 Kuala Lumpur, Malaysia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FaPhone className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    <a href="tel:+60321485583" className="hover:text-primary">+60-3-2148 5583</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FaWhatsapp className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">WhatsApp</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    <a href="https://wa.me/60321485583" className="hover:text-primary">+60-3-2148 5583</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FaEnvelope className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    <a href="mailto:cruise@jebsen.com.my" className="hover:text-primary">cruise@jebsen.com.my</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-4">Office Hours</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday & Public Holidays:</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Map and Newsletter */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Map */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <FaMapMarkerAlt className="text-primary" /> Find Us
              </h2>

              <div className="h-[300px] bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.7748476825384!2d101.70522661475855!3d3.1502000977034237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49c701efeae7%3A0xf4d98e5b2f1c287d!2sWisma%20Cosway%2C%2088%2C%20Jalan%20Raja%20Chulan%2C%20Bukit%20Bintang%2C%2050200%20Kuala%20Lumpur%2C%20Wilayah%20Persekutuan%20Kuala%20Lumpur%2C%20Malaysia!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <FaPaperPlane className="text-primary" /> Newsletter
              </h2>

              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Subscribe to our newsletter for special deals and updates on new cruise packages.
              </p>

              {subscribed ? (
                <motion.div
                  className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900 rounded-lg p-4 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-green-700 dark:text-green-300 font-medium">
                    Thank you for subscribing to our newsletter!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubscribe}>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="flex-1 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <motion.button
                      type="submit"
                      className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Subscribe
                    </motion.button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
