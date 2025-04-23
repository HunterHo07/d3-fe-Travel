'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaAnchor, FaShip, FaUsers, FaGlobe, FaAward, FaArrowRight } from 'react-icons/fa';

const AboutSection = () => {
  const features = [
    {
      icon: <FaShip className="text-3xl text-primary" />,
      title: 'Luxury Fleet',
      description: 'Our modern fleet of cruise ships offers the highest standards of comfort and luxury.'
    },
    {
      icon: <FaUsers className="text-3xl text-primary" />,
      title: 'Expert Crew',
      description: 'Our professional crew members are dedicated to providing exceptional service.'
    },
    {
      icon: <FaGlobe className="text-3xl text-primary" />,
      title: 'Global Destinations',
      description: 'Explore over 100 destinations worldwide with our carefully crafted itineraries.'
    },
    {
      icon: <FaAward className="text-3xl text-primary" />,
      title: 'Award-Winning',
      description: 'Recognized for excellence in cruise experiences and customer satisfaction.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <FaAnchor className="text-accent text-xl" />
              <span className="text-accent font-medium">ABOUT JEBSEN TRAVEL</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Since 1979 - <span className="text-primary">Professional</span> Cruise Specialists
            </h2>

            <p className="text-gray-600 dark:text-gray-400 mb-6">
              JEBSEN TRAVEL was founded in 1979 by a small group of experienced travel consultants who shared a common goal - unsurpassed customer service. This full-service organization is characterized by the highest standards of professional excellence with particular emphasis on the needs and comfort of travelers.
            </p>

            <p className="text-gray-600 dark:text-gray-400 mb-8">
              As a bonded member of The International Air Transport Association (IATA), JEBSEN has access to major airlines worldwide. In addition, premier international cruise lines have appointed JEBSEN as their GSA or ISR or Preferred Agent in Malaysia. With over 40 years of cruise travel experience, we have become the Largest Cruise Consolidator in Asia.
            </p>

            <Link href="/about">
              <motion.button
                className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors"
                whileHover={{ x: 5 }}
              >
                Learn more about our story <FaArrowRight />
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Column - Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <motion.h4
              className="text-4xl font-bold text-primary mb-2"
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              40+
            </motion.h4>
            <p className="text-gray-600 dark:text-gray-400">Years Experience</p>
          </div>

          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <motion.h4
              className="text-4xl font-bold text-primary mb-2"
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              40+
            </motion.h4>
            <p className="text-gray-600 dark:text-gray-400">Luxury Ships</p>
          </div>

          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <motion.h4
              className="text-4xl font-bold text-primary mb-2"
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              200+
            </motion.h4>
            <p className="text-gray-600 dark:text-gray-400">Destinations</p>
          </div>

          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <motion.h4
              className="text-4xl font-bold text-primary mb-2"
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            >
              1M+
            </motion.h4>
            <p className="text-gray-600 dark:text-gray-400">Happy Customers</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
