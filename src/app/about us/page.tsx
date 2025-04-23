'use client';

import { motion } from 'framer-motion';
import { FaShip, FaAnchor, FaUsers, FaGlobe, FaAward } from 'react-icons/fa';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About JEBSEN TRAVEL</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Over 40 years of exceptional service and unforgettable cruise experiences.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6">Our Story</h2>
            <div className="space-y-6">
              <p className="text-gray-600 dark:text-gray-400">
                JEBSEN TRAVEL was founded in 1979 by a small group of experienced travel consultants who shared a common goal- unsurpassed customer service. This full-service organization was to be characterized by the highest standards of professional excellence with the particular emphasis on the needs and comfort of the business traveller. Now, JEBSEN is still identified by the highest of standards for the leisure traveller as well as the business traveller.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Selecting the best computerized reservation and ticketing system available, Galileo. JEBSEN's founders trained and developed a staff of specialists in both business and leisure travel to use this system to optimize the comfort and service value for the traveller.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                As a bonded member of The International Air Transport Association (IATA), JEBSEN has access to major airlines worldwide. In addition, premier international cruise lines have appointed JEBSEN as their GSA or ISR or Preferred Agent in Malaysia. With over 20 years of cruise travel experience, we have become the Largest Cruise Consolidator in Asia with cruise businesses setup in prime cities within Asia and the Middle East. We can truly offer timely specials on both air and sea journeys.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl mb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FaAnchor className="text-primary text-xl" />
                </div>
                <h3 className="text-xl font-bold">Our Mission Statement</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 italic">
                "To impart our years of professional experience and expertise into a custom package tailored to your individual travel wants, needs and fantasies. WE'LL TAKE YOU ANYWHERE YOU WANT TO GO!"
              </p>
            </div>
            
            <h2 className="text-2xl font-bold mb-6">Why Choose Us</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FaShip className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Cruise Specialists</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    With over 40 years of experience in the cruise industry, we offer unparalleled expertise.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FaUsers className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Expert Team</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Our professional staff is dedicated to providing exceptional service and personalized attention.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FaGlobe className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Global Connections</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    As a bonded IATA member, we have access to major airlines and cruise lines worldwide.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FaAward className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Industry Recognition</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Recognized as the Largest Cruise Consolidator in Asia with cruise businesses in prime cities.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-primary/5 p-8 rounded-xl"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Major Cruise Lines We Work With</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'Amadeus Waterways', 'Antarctic Shipping', 'Antarpply Expeditions',
              'Aqua Expeditions', 'Carnival Cruise Lines', 'Classic International Cruises',
              'Costa Cruise Lines', 'Cruise North Expeditions Inc', 'Cruise West',
              'Crystal Cruises', 'Disney Cruise Line', 'Hapag-Lloyd Cruises',
              'Holland America Line', 'Hurtigruten', 'MSC Cruises',
              'Norwegian Cruise Line', 'Oceania Cruises', 'Regent Seven Seas Cruises',
              'Seabourn Cruise Lines', 'Silversea Cruises', 'Star Clippers',
              'Viking River Cruises', 'Windstar Cruises'
            ].map((line, index) => (
              <motion.div
                key={line}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {line}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUsPage;
