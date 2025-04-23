'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaShip, FaCalendarAlt, FaMapMarkerAlt, FaTag, FaSearch, FaFilter } from 'react-icons/fa';

export default function SpecialPackagesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDestination, setSelectedDestination] = useState('All');
  const [selectedDuration, setSelectedDuration] = useState('All');

  const packages = [
    {
      id: 1,
      title: 'Mediterranean Splendor',
      destination: 'Mediterranean',
      ship: 'Costa Cruises',
      duration: '10 Days',
      price: 1899,
      discount: 15,
      description: 'Explore the beautiful Mediterranean coastline with stops in Italy, Greece, and Spain. Enjoy luxurious accommodations and world-class dining.',
      image: 'https://images.unsplash.com/photo-1534190239940-9ba8944ea261?q=80&w=1000&auto=format&fit=crop',
      highlights: ['Visit Rome, Athens, and Barcelona', 'Luxury accommodations', 'All-inclusive dining', 'Evening entertainment'],
      departure: 'July 15, 2023'
    },
    {
      id: 2,
      title: 'Caribbean Paradise',
      destination: 'Caribbean',
      ship: 'Royal Caribbean',
      duration: '7 Days',
      price: 1299,
      discount: 20,
      description: 'Experience the crystal-clear waters and white sandy beaches of the Caribbean. Perfect for families and couples seeking a tropical getaway.',
      image: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80&w=1000&auto=format&fit=crop',
      highlights: ['Visit Jamaica, Bahamas, and Mexico', 'Water activities', 'Family-friendly entertainment', 'Island excursions'],
      departure: 'August 5, 2023'
    },
    {
      id: 3,
      title: 'Alaskan Adventure',
      destination: 'Alaska',
      ship: 'Holland America',
      duration: '8 Days',
      price: 1599,
      discount: 10,
      description: 'Discover the breathtaking beauty of Alaska\'s glaciers, wildlife, and untamed wilderness. A once-in-a-lifetime adventure.',
      image: 'https://images.unsplash.com/photo-1464278533981-50106e6176b1?q=80&w=1000&auto=format&fit=crop',
      highlights: ['Glacier viewing', 'Wildlife spotting', 'Scenic fjords', 'Onboard naturalist guides'],
      departure: 'September 10, 2023'
    },
    {
      id: 4,
      title: 'Asian Discovery',
      destination: 'Asia',
      ship: 'Star Cruises',
      duration: '12 Days',
      price: 2199,
      discount: 15,
      description: 'Embark on a journey through the exotic cultures and vibrant cities of Asia. Experience the best of Singapore, Thailand, Vietnam, and Hong Kong.',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1000&auto=format&fit=crop',
      highlights: ['Visit Singapore, Thailand, Vietnam, and Hong Kong', 'Cultural excursions', 'Asian cuisine', 'Evening shows'],
      departure: 'October 15, 2023'
    },
    {
      id: 5,
      title: 'Northern Europe Explorer',
      destination: 'Europe',
      ship: 'MSC Cruises',
      duration: '14 Days',
      price: 2499,
      discount: 10,
      description: 'Explore the stunning fjords, historic cities, and spectacular scenery of Northern Europe. Visit Norway, Sweden, Denmark, and more.',
      image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=1000&auto=format&fit=crop',
      highlights: ['Norwegian fjords', 'Historic city tours', 'Northern lights possibility', 'Luxury accommodations'],
      departure: 'June 20, 2023'
    },
    {
      id: 6,
      title: 'South Pacific Paradise',
      destination: 'South Pacific',
      ship: 'Norwegian Cruise Line',
      duration: '10 Days',
      price: 1999,
      discount: 20,
      description: 'Discover the paradise islands, coral reefs, and Polynesian culture of the South Pacific. Perfect for honeymooners and beach lovers.',
      image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?q=80&w=1000&auto=format&fit=crop',
      highlights: ['Visit Fiji, Bora Bora, and Tahiti', 'Snorkeling and diving', 'Beach activities', 'Cultural performances'],
      departure: 'November 5, 2023'
    },
  ];

  const destinations = ['All', 'Mediterranean', 'Caribbean', 'Alaska', 'Asia', 'Europe', 'South Pacific'];
  const durations = ['All', '7 Days', '8 Days', '10 Days', '12 Days', '14 Days'];

  const filteredPackages = packages.filter(pkg => {
    const matchesSearch = pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          pkg.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDestination = selectedDestination === 'All' || pkg.destination === selectedDestination;
    const matchesDuration = selectedDuration === 'All' || pkg.duration === selectedDuration;

    return matchesSearch && matchesDestination && matchesDuration;
  });

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Special Packages</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover our exclusive cruise packages and special offers. Book now for the best deals on your dream vacation.
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.section
          className="mb-12 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search packages..."
                  className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaMapMarkerAlt className="text-gray-400" />
                </div>
                <select
                  className="pl-10 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700"
                  value={selectedDestination}
                  onChange={(e) => setSelectedDestination(e.target.value)}
                >
                  {destinations.map(destination => (
                    <option key={destination} value={destination}>{destination}</option>
                  ))}
                </select>
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaCalendarAlt className="text-gray-400" />
                </div>
                <select
                  className="pl-10 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700"
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                >
                  {durations.map(duration => (
                    <option key={duration} value={duration}>{duration}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Packages Section */}
        <div className="mb-16">
          {filteredPackages.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredPackages.map((pkg, index) => (
                <motion.div
                  key={pkg.id}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="md:flex">
                    <div className="md:w-2/5 relative">
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-primary/90 text-white px-3 py-1 rounded-full font-medium text-sm shadow-md border-2 border-white">
                        {pkg.discount}% OFF
                      </div>
                    </div>

                    <div className="md:w-3/5 p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold">{pkg.title}</h3>
                        <div className="text-right">
                          <div className="text-gray-500 dark:text-gray-400 line-through text-sm">${pkg.price}</div>
                          <div className="text-primary font-bold text-xl">${Math.round(pkg.price * (1 - pkg.discount / 100))}</div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3 mb-3">
                        <div className="flex items-center gap-1 text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                          <FaShip className="text-primary" />
                          <span>{pkg.ship}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                          <FaMapMarkerAlt className="text-primary" />
                          <span>{pkg.destination}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                          <FaCalendarAlt className="text-primary" />
                          <span>{pkg.duration}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{pkg.description}</p>

                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Highlights:</h4>
                        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                          {pkg.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          <span className="font-medium">Departure:</span> {pkg.departure}
                        </div>
                        <a
                          href="#"
                          className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md font-medium text-sm"
                        >
                          View Details
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FaFilter className="text-gray-400 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">No packages found</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </div>

        {/* Call to Action Section */}
        <motion.section
          className="bg-primary/5 rounded-xl p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
            Our cruise specialists can help you find the perfect cruise package tailored to your preferences and budget. Contact us for personalized assistance.
          </p>
          <a
            href="/contact-us"
            className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium"
          >
            Contact Our Cruise Specialists
          </a>
        </motion.section>
      </div>
    </div>
  );
}
