'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaShip, FaArrowLeft } from 'react-icons/fa';

interface ComingSoonPageProps {
  title: string;
  description?: string;
}

const ComingSoonPage = ({ title, description }: ComingSoonPageProps) => {
  return (
    <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <FaShip className="text-6xl text-primary mx-auto" />
        </motion.div>
        
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {title}
        </motion.h1>
        
        <motion.div
          className="max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {description || "We're working hard to bring you an amazing experience. This page is coming soon!"}
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="inline-block relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-primary/20 rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 0.3, 0.5]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <Link href="/">
              <motion.button
                className="relative z-10 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaArrowLeft /> Back to Home
              </motion.button>
            </Link>
          </div>
        </motion.div>
        
        <motion.div
          className="mt-16 text-gray-500 dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p>© {new Date().getFullYear()} Jebsen Travel & Tours Services Sdn. Bhd. All rights reserved.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default ComingSoonPage;
