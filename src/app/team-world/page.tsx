'use client';

import { motion } from 'framer-motion';
import { FaUsers, FaGlobe, FaBuilding, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function TeamWorldPage() {
  const offices = [
    {
      id: 1,
      location: 'Kuala Lumpur, Malaysia',
      address: 'Lot 2.81, Wisma Cosway, 88, Jalan Raja Chulan, 50200 Kuala Lumpur',
      phone: '+60-3-2148 5583',
      email: 'cruise@jebsen.com.my',
      team: [
        { name: 'Sarah Chen', position: 'Regional Director', specialty: 'Luxury Cruises' },
        { name: 'Ahmad Rizal', position: 'Senior Cruise Consultant', specialty: 'Mediterranean Cruises' },
        { name: 'Mei Ling Tan', position: 'Cruise Specialist', specialty: 'Family Cruises' },
      ]
    },
    {
      id: 2,
      location: 'Singapore',
      address: '36 Robinson Road, #13-01 City House, Singapore 068877',
      phone: '+65 6226 1155',
      email: 'singapore@jebsen.com',
      team: [
        { name: 'David Wong', position: 'Country Manager', specialty: 'Asian Cruises' },
        { name: 'Priya Nair', position: 'Senior Cruise Consultant', specialty: 'Caribbean Cruises' },
        { name: 'Michael Lim', position: 'Cruise Specialist', specialty: 'Adventure Cruises' },
      ]
    },
    {
      id: 3,
      location: 'Hong Kong',
      address: 'Unit 2503, 25/F, Tower 1, Lippo Centre, 89 Queensway, Admiralty',
      phone: '+852 2736 1888',
      email: 'hongkong@jebsen.com',
      team: [
        { name: 'William Chan', position: 'Country Manager', specialty: 'Luxury Cruises' },
        { name: 'Jennifer Lee', position: 'Senior Cruise Consultant', specialty: 'European Cruises' },
        { name: 'Thomas Wu', position: 'Cruise Specialist', specialty: 'Alaska Cruises' },
      ]
    },
  ];

  const leadership = [
    {
      name: 'Robert Tan',
      position: 'Chief Executive Officer',
      bio: 'With over 25 years in the travel industry, Robert has led JEBSEN TRAVEL to become the largest cruise consolidator in Asia.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop'
    },
    {
      name: 'Emily Wong',
      position: 'Chief Operations Officer',
      bio: 'Emily oversees all operational aspects of JEBSEN TRAVEL, ensuring exceptional service delivery across all our locations.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&auto=format&fit=crop'
    },
    {
      name: 'James Chen',
      position: 'Director of Partnerships',
      bio: 'James manages our relationships with cruise lines and travel partners, securing exclusive deals for our clients.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&auto=format&fit=crop'
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Team World</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Meet our global team of cruise specialists and travel experts dedicated to creating unforgettable cruise experiences.
          </p>
        </motion.div>

        {/* Leadership Team Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <FaUsers className="text-primary text-2xl" />
            <h2 className="text-2xl font-bold">Leadership Team</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                  <p className="text-primary font-medium mb-3">{leader.position}</p>
                  <p className="text-gray-600 dark:text-gray-400">{leader.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Global Offices Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <FaGlobe className="text-primary text-2xl" />
            <h2 className="text-2xl font-bold">Global Offices</h2>
          </div>

          <div className="space-y-8">
            {offices.map((office) => (
              <motion.div
                key={office.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: office.id * 0.1 }}
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
                    <div className="md:w-1/3">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <FaBuilding className="text-primary text-xl" />
                        </div>
                        <h3 className="text-xl font-bold">{office.location}</h3>
                      </div>

                      <div className="space-y-3 text-gray-600 dark:text-gray-400">
                        <p>{office.address}</p>

                        <div className="flex items-center gap-2">
                          <FaPhoneAlt className="text-primary" />
                          <a href={`tel:${office.phone.replace(/[\s-]/g, '')}`} className="hover:text-primary">
                            {office.phone}
                          </a>
                        </div>

                        <div className="flex items-center gap-2">
                          <FaEnvelope className="text-primary" />
                          <a href={`mailto:${office.email}`} className="hover:text-primary">
                            {office.email}
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="md:w-2/3">
                      <h4 className="text-lg font-semibold mb-4">Team Members</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {office.team.map((member) => (
                          <div
                            key={member.name}
                            className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
                          >
                            <h5 className="font-semibold">{member.name}</h5>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{member.position}</p>
                            <p className="text-xs text-primary mt-1">Specialty: {member.specialty}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Join Our Team Section */}
        <motion.section
          className="bg-primary/5 rounded-xl p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <FaUsers className="text-primary text-2xl" />
            <h2 className="text-2xl font-bold">Join Our Team</h2>
          </div>

          <div className="text-center max-w-2xl mx-auto">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We're always looking for passionate travel enthusiasts to join our global team. If you have a love for cruising and exceptional customer service, we'd love to hear from you.
            </p>
            <a
              href="/contact-us"
              className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium"
            >
              Contact Us About Opportunities
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
