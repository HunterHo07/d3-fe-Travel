'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaStar, FaMapMarkerAlt, FaClock, FaShip } from 'react-icons/fa';

// Sample cruise data
const cruises = [
  {
    id: 1,
    title: 'Royal Caribbean',
    image: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80&w=1000&auto=format&fit=crop',
    destination: 'Caribbean Islands',
    duration: '7 Days',
    price: 1299,
    rating: 4.8,
    description: 'Explore the crystal-clear waters and white sandy beaches of the Caribbean islands with Royal Caribbean.',
  },
  {
    id: 2,
    title: 'Costa Cruises',
    image: 'https://images.unsplash.com/photo-1534190239940-9ba8944ea261?q=80&w=1000&auto=format&fit=crop',
    destination: 'Mediterranean Sea',
    duration: '10 Days',
    price: 1899,
    rating: 4.9,
    description: 'Discover ancient civilizations and stunning coastal towns along the Mediterranean with Costa Cruises.',
  },
  {
    id: 3,
    title: 'Holland America',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    destination: 'Alaska',
    duration: '8 Days',
    price: 1599,
    rating: 4.7,
    description: 'Witness breathtaking glaciers and wildlife in the untamed beauty of Alaska with Holland America.',
  },
  {
    id: 4,
    title: 'Star Cruises',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1000&auto=format&fit=crop',
    destination: 'Southeast Asia',
    duration: '12 Days',
    price: 2199,
    rating: 4.6,
    description: 'Experience the rich cultures and exotic landscapes of Southeast Asia with Star Cruises.',
  },
];

const FeaturedCruises = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Cruise Lines</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            As a bonded member of IATA, JEBSEN has access to major cruise lines worldwide. Discover our featured partners.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cruises.map((cruise, index) => (
            <motion.div
              key={cruise.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div className="relative overflow-hidden h-48">
                <motion.img
                  src={cruise.image}
                  alt={cruise.title}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-1 mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar key={i} className={`text-xs ${i < Math.floor(cruise.rating) ? 'text-yellow-400' : 'text-gray-400'}`} />
                    ))}
                    <span className="ml-1 text-sm">{cruise.rating}</span>
                  </div>
                  <h3 className="text-xl font-bold">{cruise.title}</h3>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
                  <FaMapMarkerAlt className="text-primary" />
                  <span>{cruise.destination}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
                  <FaClock className="text-primary" />
                  <span>{cruise.duration}</span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {cruise.description}
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">Starting from</span>
                    <p className="text-2xl font-bold text-primary">${cruise.price}</p>
                  </div>

                  <Link href={`/cruises/${cruise.id}`}>
                    <motion.button
                      className="bg-accent text-white px-4 py-2 rounded-full text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Details
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link href="/cruises">
            <motion.button
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-medium inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaShip /> View All Cruise Packages
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCruises;
