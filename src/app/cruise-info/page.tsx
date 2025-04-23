'use client';

import { motion } from 'framer-motion';
import { FaShip, FaGlobe, FaCalendarAlt, FaUsers, FaUtensils, FaSwimmingPool, FaTheaterMasks, FaChild } from 'react-icons/fa';

export default function CruiseInfoPage() {
  const cruiseLines = [
    { name: 'Royal Caribbean', description: 'Known for innovative ships, thrilling activities, and excellent entertainment.' },
    { name: 'Costa Cruises', description: 'Italian-style cruising with a Mediterranean flair and international atmosphere.' },
    { name: 'Holland America', description: 'Premium cruises with elegant ships, exceptional service, and enriching experiences.' },
    { name: 'Star Cruises', description: 'Asia-Pacific\'s leading cruise line offering exciting itineraries throughout the region.' },
    { name: 'Norwegian Cruise Line', description: 'Freestyle cruising concept with flexible dining and casual atmosphere.' },
    { name: 'MSC Cruises', description: 'European-style cruising with modern ships and international ambiance.' },
  ];

  const destinations = [
    { name: 'Caribbean', description: 'Crystal-clear waters, white sandy beaches, and tropical paradise islands.' },
    { name: 'Mediterranean', description: 'Ancient civilizations, stunning coastal towns, and rich cultural experiences.' },
    { name: 'Alaska', description: 'Breathtaking glaciers, wildlife, and untamed natural beauty.' },
    { name: 'Asia', description: 'Exotic cultures, ancient temples, and vibrant city experiences.' },
    { name: 'Northern Europe', description: 'Stunning fjords, historic cities, and spectacular scenery.' },
    { name: 'South Pacific', description: 'Paradise islands, coral reefs, and Polynesian culture.' },
  ];

  const amenities = [
    { icon: <FaUtensils />, name: 'Fine Dining', description: 'Gourmet restaurants and casual eateries with international cuisine.' },
    { icon: <FaSwimmingPool />, name: 'Pools & Spas', description: 'Relaxing pools, hot tubs, and full-service spas.' },
    { icon: <FaTheaterMasks />, name: 'Entertainment', description: 'Broadway-style shows, live music, and various performances.' },
    { icon: <FaChild />, name: 'Family Activities', description: 'Kids clubs, teen programs, and family-friendly entertainment.' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Cruise Information</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our wide range of cruise options, destinations, and onboard amenities to find your perfect vacation.
          </p>
        </motion.div>

        {/* Cruise Lines Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <FaShip className="text-primary text-2xl" />
            <h2 className="text-2xl font-bold">Cruise Lines</h2>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {cruiseLines.map((line, index) => (
              <motion.div
                key={line.name}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
                variants={itemVariants}
              >
                <h3 className="text-xl font-bold mb-2">{line.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{line.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Destinations Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <FaGlobe className="text-primary text-2xl" />
            <h2 className="text-2xl font-bold">Popular Destinations</h2>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.name}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
                variants={itemVariants}
              >
                <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{destination.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Onboard Amenities Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <FaUsers className="text-primary text-2xl" />
            <h2 className="text-2xl font-bold">Onboard Amenities</h2>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {amenities.map((amenity, index) => (
              <motion.div
                key={amenity.name}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
                variants={itemVariants}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-primary text-2xl">{amenity.icon}</div>
                  <h3 className="text-xl font-bold">{amenity.name}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{amenity.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Booking Information Section */}
        <motion.section
          className="bg-primary/5 rounded-xl p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <FaCalendarAlt className="text-primary text-2xl" />
            <h2 className="text-2xl font-bold">Booking Information</h2>
          </div>

          <div className="space-y-4 text-gray-600 dark:text-gray-400">
            <p>
              To book your cruise or for more detailed information about our cruise packages, please contact our cruise specialists. We offer personalized service to help you find the perfect cruise vacation that matches your preferences and budget.
            </p>
            <p>
              Our team can provide information on cabin options, dining packages, shore excursions, and special promotions. We also offer group bookings and can arrange pre and post-cruise accommodations.
            </p>
            <div className="mt-6">
              <a
                href="/contact-us"
                className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium"
              >
                Contact Our Cruise Specialists
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
