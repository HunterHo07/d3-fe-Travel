'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FaShip, FaCalendarAlt, FaUsers, FaCreditCard, FaCheck } from 'react-icons/fa';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  destination: string;
  departureDate: string;
  returnDate: string;
  adults: number;
  children: number;
  cabinClass: string;
  specialRequests: string;
};

const BookingPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // In a real application, you would send this data to your backend
    setIsSubmitted(true);
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

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
      transition: { duration: 0.4 }
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Book Your Dream Cruise</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Complete the form below to reserve your spot on one of our luxury cruise ships. JEBSEN TRAVEL team will contact you to confirm your booking.
          </p>
        </motion.div>

        {!isSubmitted ? (
          <div className="max-w-4xl mx-auto">
            {/* Progress Steps */}
            <div className="flex justify-between items-center mb-12">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex flex-col items-center">
                  <motion.div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold ${
                      step === currentStep
                        ? 'bg-primary text-white'
                        : step < currentStep
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                    }`}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: step === currentStep ? 1.1 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step < currentStep ? <FaCheck /> : step}
                  </motion.div>
                  <span className={`mt-2 text-sm ${
                    step === currentStep
                      ? 'text-primary font-medium'
                      : 'text-gray-500 dark:text-gray-400'
                  }`}>
                    {step === 1 ? 'Personal Info' : step === 2 ? 'Trip Details' : 'Review & Pay'}
                  </span>
                </div>
              ))}

              {/* Progress Line */}
              <div className="absolute left-0 right-0 h-1 top-6 -z-10">
                <div className="mx-auto max-w-3xl px-16">
                  <div className="h-1 w-full bg-gray-200 dark:bg-gray-700">
                    <motion.div
                      className="h-1 bg-primary"
                      initial={{ width: '0%' }}
                      animate={{ width: `${(currentStep - 1) * 50}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.h2
                    className="text-2xl font-bold mb-6 flex items-center gap-2"
                    variants={itemVariants}
                  >
                    <FaUsers className="text-primary" /> Personal Information
                  </motion.h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div variants={itemVariants}>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2">First Name *</label>
                      <input
                        type="text"
                        className={`w-full px-4 py-2 rounded-md border ${errors.firstName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700`}
                        {...register('firstName', { required: 'First name is required' })}
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                      )}
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2">Last Name *</label>
                      <input
                        type="text"
                        className={`w-full px-4 py-2 rounded-md border ${errors.lastName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700`}
                        {...register('lastName', { required: 'Last name is required' })}
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                      )}
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2">Email Address *</label>
                      <input
                        type="email"
                        className={`w-full px-4 py-2 rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700`}
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                          }
                        })}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        className={`w-full px-4 py-2 rounded-md border ${errors.phone ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700`}
                        {...register('phone', { required: 'Phone number is required' })}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Trip Details */}
              {currentStep === 2 && (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.h2
                    className="text-2xl font-bold mb-6 flex items-center gap-2"
                    variants={itemVariants}
                  >
                    <FaShip className="text-primary" /> Trip Details
                  </motion.h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div variants={itemVariants}>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2">Destination *</label>
                      <select
                        className={`w-full px-4 py-2 rounded-md border ${errors.destination ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700`}
                        {...register('destination', { required: 'Please select a destination' })}
                      >
                        <option value="">Select Destination</option>
                        <option value="caribbean">Caribbean Islands</option>
                        <option value="mediterranean">Mediterranean</option>
                        <option value="alaska">Alaska</option>
                        <option value="asia">Southeast Asia</option>
                        <option value="europe">Northern Europe</option>
                        <option value="australia">Australia & New Zealand</option>
                      </select>
                      {errors.destination && (
                        <p className="text-red-500 text-sm mt-1">{errors.destination.message}</p>
                      )}
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2">Cabin Class *</label>
                      <select
                        className={`w-full px-4 py-2 rounded-md border ${errors.cabinClass ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700`}
                        {...register('cabinClass', { required: 'Please select a cabin class' })}
                      >
                        <option value="">Select Cabin Class</option>
                        <option value="interior">Interior</option>
                        <option value="oceanview">Ocean View</option>
                        <option value="balcony">Balcony</option>
                        <option value="suite">Suite</option>
                        <option value="deluxe">Deluxe Suite</option>
                      </select>
                      {errors.cabinClass && (
                        <p className="text-red-500 text-sm mt-1">{errors.cabinClass.message}</p>
                      )}
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2">Departure Date *</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <FaCalendarAlt className="text-gray-400" />
                        </div>
                        <input
                          type="date"
                          className={`w-full pl-10 px-4 py-2 rounded-md border ${errors.departureDate ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700`}
                          {...register('departureDate', { required: 'Departure date is required' })}
                        />
                      </div>
                      {errors.departureDate && (
                        <p className="text-red-500 text-sm mt-1">{errors.departureDate.message}</p>
                      )}
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2">Return Date *</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <FaCalendarAlt className="text-gray-400" />
                        </div>
                        <input
                          type="date"
                          className={`w-full pl-10 px-4 py-2 rounded-md border ${errors.returnDate ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700`}
                          {...register('returnDate', { required: 'Return date is required' })}
                        />
                      </div>
                      {errors.returnDate && (
                        <p className="text-red-500 text-sm mt-1">{errors.returnDate.message}</p>
                      )}
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2">Number of Adults *</label>
                      <input
                        type="number"
                        min="1"
                        className={`w-full px-4 py-2 rounded-md border ${errors.adults ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700`}
                        {...register('adults', {
                          required: 'Number of adults is required',
                          min: {
                            value: 1,
                            message: 'At least 1 adult is required'
                          }
                        })}
                      />
                      {errors.adults && (
                        <p className="text-red-500 text-sm mt-1">{errors.adults.message}</p>
                      )}
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2">Number of Children</label>
                      <input
                        type="number"
                        min="0"
                        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700"
                        {...register('children')}
                      />
                    </motion.div>
                  </div>

                  <motion.div className="mt-6" variants={itemVariants}>
                    <label className="block text-gray-700 dark:text-gray-300 mb-2">Special Requests or Requirements</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700"
                      placeholder="Any dietary requirements, accessibility needs, or special occasions?"
                      {...register('specialRequests')}
                    />
                  </motion.div>
                </motion.div>
              )}

              {/* Step 3: Review & Payment */}
              {currentStep === 3 && (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.h2
                    className="text-2xl font-bold mb-6 flex items-center gap-2"
                    variants={itemVariants}
                  >
                    <FaCreditCard className="text-primary" /> Review & Payment
                  </motion.h2>

                  <motion.div
                    className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-6"
                    variants={itemVariants}
                  >
                    <h3 className="text-lg font-semibold mb-4">Booking Summary</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Please review your booking details before proceeding to payment. Our team will contact you to confirm availability and process your payment securely.
                    </p>

                    <div className="animate-pulse">
                      <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-3/4 mb-3"></div>
                      <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-1/2 mb-3"></div>
                      <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-5/6 mb-3"></div>
                      <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-2/3 mb-3"></div>
                      <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-1/2"></div>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <div className="flex items-center mb-4">
                      <input
                        type="checkbox"
                        id="terms"
                        className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary"
                        required
                      />
                      <label htmlFor="terms" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                        I agree to the <a href="#" className="text-primary hover:underline">Terms and Conditions</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                      </label>
                    </div>
                  </motion.div>

                  <motion.button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-md mt-4"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Complete Booking
                  </motion.button>
                </motion.div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                {currentStep > 1 && (
                  <motion.button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Previous
                  </motion.button>
                )}

                {currentStep < 3 && (
                  <motion.button
                    type="button"
                    onClick={nextStep}
                    className="ml-auto px-6 py-2 bg-primary text-white rounded-md font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Next
                  </motion.button>
                )}
              </div>
            </form>
          </div>
        ) : (
          <motion.div
            className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <FaCheck className="text-green-500 text-3xl" />
            </motion.div>

            <h2 className="text-2xl font-bold mb-4">Booking Request Submitted!</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Thank you for your booking request. JEBSEN TRAVEL team will review your information and contact you within 24 hours to confirm your reservation and process payment.
            </p>

            <motion.button
              onClick={() => window.location.href = '/'}
              className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Return to Homepage
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BookingPage;
