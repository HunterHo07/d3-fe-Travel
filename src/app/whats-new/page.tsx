'use client';

import { motion } from 'framer-motion';
import { FaCalendarAlt, FaTag, FaShip, FaNewspaper } from 'react-icons/fa';

export default function WhatsNewPage() {
  const news = [
    {
      id: 1,
      title: 'New Caribbean Itineraries for 2024',
      date: 'June 15, 2023',
      category: 'New Cruises',
      excerpt: 'Explore our exciting new Caribbean itineraries for the 2024 cruise season. Visit exotic islands and experience the best of Caribbean culture.',
      image: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'Royal Caribbean Adds New Ship to Fleet',
      date: 'May 28, 2023',
      category: 'Cruise Lines',
      excerpt: 'Royal Caribbean announces the addition of a new ship to their fleet, featuring innovative amenities and exciting entertainment options.',
      image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'Summer Sale: Up to 30% Off Select Cruises',
      date: 'May 10, 2023',
      category: 'Promotions',
      excerpt: 'Take advantage of our summer sale with up to 30% off select cruise packages. Book now for the best deals on your dream vacation.',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1000&auto=format&fit=crop'
    },
  ];

  const promotions = [
    {
      id: 1,
      title: 'Early Bird Discount',
      description: 'Book 6 months in advance and receive 15% off your cruise package.',
      expiry: 'Ongoing'
    },
    {
      id: 2,
      title: 'Family Package',
      description: 'Kids sail free on select family cruises when booking a balcony cabin or higher.',
      expiry: 'December 31, 2023'
    },
    {
      id: 3,
      title: 'Loyalty Rewards',
      description: 'Returning customers receive special perks and exclusive discounts on their next booking.',
      expiry: 'Ongoing'
    },
  ];

  const upcomingCruises = [
    {
      id: 1,
      title: 'Mediterranean Explorer',
      ship: 'Costa Cruises',
      departure: 'July 15, 2023',
      duration: '10 Days',
      highlights: 'Visit Rome, Athens, Santorini, and Barcelona'
    },
    {
      id: 2,
      title: 'Alaska Adventure',
      ship: 'Holland America',
      departure: 'August 5, 2023',
      duration: '7 Days',
      highlights: 'Glacier viewing, wildlife spotting, and scenic fjords'
    },
    {
      id: 3,
      title: 'Asian Discovery',
      ship: 'Star Cruises',
      departure: 'September 12, 2023',
      duration: '12 Days',
      highlights: 'Explore Singapore, Thailand, Vietnam, and Hong Kong'
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">What's New</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Stay updated with the latest news, promotions, and upcoming cruise packages from JEBSEN TRAVEL.
          </p>
        </motion.div>

        {/* Latest News Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <FaNewspaper className="text-primary text-2xl" />
            <h2 className="text-2xl font-bold">Latest News</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item) => (
              <motion.div
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: item.id * 0.1 }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400">{item.date}</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{item.category}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{item.excerpt}</p>
                  <a
                    href="#"
                    className="text-primary font-medium hover:underline inline-flex items-center"
                  >
                    Read More <span className="ml-1">→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Current Promotions Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <FaTag className="text-primary text-2xl" />
            <h2 className="text-2xl font-bold">Current Promotions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {promotions.map((promo) => (
              <motion.div
                key={promo.id}
                className="bg-primary/5 rounded-xl p-6 border border-primary/20"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: promo.id * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-2 text-primary">{promo.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{promo.description}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="font-medium">Expires:</span>
                  <span className="text-gray-500 dark:text-gray-400">{promo.expiry}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Upcoming Cruises Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <FaShip className="text-primary text-2xl" />
            <h2 className="text-2xl font-bold">Upcoming Cruises</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-md">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Cruise</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Ship</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Departure</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Duration</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Highlights</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {upcomingCruises.map((cruise) => (
                  <motion.tr
                    key={cruise.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: cruise.id * 0.1 }}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium">{cruise.title}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600 dark:text-gray-400">{cruise.ship}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600 dark:text-gray-400">{cruise.departure}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600 dark:text-gray-400">{cruise.duration}</td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-400">{cruise.highlights}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <a href="#" className="text-primary hover:underline">Details</a>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Newsletter Section */}
        <motion.section
          className="bg-primary/5 rounded-xl p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <FaCalendarAlt className="text-primary text-2xl" />
            <h2 className="text-2xl font-bold">Stay Updated</h2>
          </div>

          <div className="text-center max-w-2xl mx-auto">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Subscribe to our newsletter to receive the latest news, promotions, and cruise packages directly to your inbox.
            </p>
            <a
              href="/contact-us"
              className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium"
            >
              Subscribe to Newsletter
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
