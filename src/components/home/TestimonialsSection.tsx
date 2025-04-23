'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'New York, USA',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
    text: "Our Caribbean cruise with JEBSEN TRAVEL was absolutely incredible! The staff was attentive, the ship was luxurious, and the destinations were breathtaking. We'll definitely be booking with them again!",
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Toronto, Canada',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    text: 'The Mediterranean cruise exceeded all our expectations. The excursions were well-organized, the food was exceptional, and the entertainment options were diverse. A perfect family vacation!',
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    location: 'Barcelona, Spain',
    image: 'https://randomuser.me/api/portraits/women/63.jpg',
    rating: 4,
    text: 'As a solo traveler, I was worried about feeling out of place, but the JEBSEN TRAVEL team made me feel welcome and included. The activities were fantastic, and I made friends from around the world.',
  },
  {
    id: 4,
    name: 'David Thompson',
    location: 'Sydney, Australia',
    image: 'https://randomuser.me/api/portraits/men/86.jpg',
    rating: 5,
    text: 'Our Alaskan cruise was the trip of a lifetime! The views of the glaciers were spectacular, and the wildlife sightings were incredible. The ship was comfortable and the staff was knowledgeable.',
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Hear from travelers who have experienced the JEBSEN TRAVEL difference and created memories that last a lifetime.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Carousel */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 min-h-[300px]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex flex-col md:flex-row gap-8 items-center"
              >
                {/* Testimonial Image */}
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/20 rounded-full z-0" />
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full z-0" />
                    <motion.img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-32 h-32 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-lg relative z-10"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="w-full md:w-2/3 text-center md:text-left">
                  <FaQuoteLeft className="text-3xl text-accent/30 mb-4" />
                  <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 italic">
                    "{testimonials[currentIndex].text}"
                  </p>

                  <div>
                    <h4 className="text-xl font-bold">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-500 dark:text-gray-400 mb-2">{testimonials[currentIndex].location}</p>
                    <div className="flex items-center gap-1 justify-center md:justify-start">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FaStar
                          key={i}
                          className={`${i < testimonials[currentIndex].rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <motion.button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <motion.button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-4 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
