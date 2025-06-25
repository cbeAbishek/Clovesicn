'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, PackageCheck, Users, TimerReset } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { icon: Users, number: '500+', label: 'Clients' },
    { icon: Globe, number: '10+', label: 'Countries Served' },
    { icon: PackageCheck, number: '50M+', label: 'Products Delivered' },
    { icon: TimerReset, number: '8+', label: 'Years of Experience' },
  ];

  return (
    <>

      <main className="pt-20 px-6 space-y-16 min-h-screen bg-[url('/wavesgren.jpg')] bg-cover bg-center bg-no-repeat">
        {/* Impact Stats */}
        <section className="bg-gradient-to-r from-green-50 to-green-100 py-16">
          <div className="max-w-6xl mx-auto px-4 text-center space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-2">
                Our Impact at a Glance
              </h2>
              <p className="text-gray-700 text-sm max-w-2xl mx-auto">
                Driving sustainable growth and global solutions, one milestone at a time.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.5 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition"
                >
                  <div className="flex justify-center items-center mb-4">
                    <stat.icon className="w-8 h-8 text-green-700" />
                  </div>
                  <div className="text-3xl font-bold text-green-900">{stat.number}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;
