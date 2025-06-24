'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, PackageCheck, Users, TimerReset, CalendarDays } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/ui/Herosection';
import Timeline from '@/components/ui/Timeline';

const AboutPage = () => {
  const milestones = [
    { year: '1999', title: 'Founded', description: 'Started with a vision to create sustainable packaging solutions.' },
    { year: '2012', title: 'Global Expansion', description: 'Opened facilities across 3 continents.' },
    { year: '2020', title: 'Carbon Neutral', description: 'Became fully carbon neutral across all operations.' },
    { year: '2024', title: 'Industry Leader', description: 'Serving over 500 clients in 40+ countries.' },
  ];

  const stats = [
    { icon: Users, number: '500+', label: 'Clients' },
    { icon: Globe, number: '40+', label: 'Countries Served' },
    { icon: PackageCheck, number: '50M+', label: 'Products Delivered' },
    { icon: TimerReset, number: '25+', label: 'Years of Experience' },
  ];

  return (
    <>
      <Header />

      <main className="pt-20 px-6 space-y-16 min-h-screen bg-[url('/wavesgren.jpg')] bg-cover bg-center bg-no-repeat">

        {/* Hero Section (now light themed) */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="bg-gradient-to-br from-green-100 to-white text-green-900 text-center px-6 py-20 rounded-xl shadow-sm"
        >
          <div className="max-w-3xl mx-auto space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl font-bold"
            >
              About Cloves Inc.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg text-green-800"
            >
              A global leader in medical waste liners and packaging — rooted in innovation, sustainability, and service.
            </motion.p>
          </div>
        </motion.section>

        {/* Mission + Values */}
        <section className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          {[
            {
              title: 'Mission Statement',
              desc: 'To provide high-quality, sustainable products for healthcare, industrial, and commercial sectors.',
              icon: '/mission.png'
            },
            {
              title: 'Global Presence',
              desc: 'Serving clients in North America, Europe, Asia, and Australia with agile, eco-conscious delivery.',
              icon: '/global.png'
            },
            {
              title: 'Sustainability Focus',
              desc: 'Eco-friendly materials, carbon-neutral production, and fully recyclable product lines.',
              icon: '/sus.png'
            },
            {
              title: 'Meet the Founder',
              desc: 'Harsha Soundararajan brings 10+ years experience in waste packaging innovation.',
              icon: '/founder.png'
            }
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="rounded-xl bg-gradient-to-br from-white to-green-50 p-6 shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center">
                  <img src={card.icon} alt={card.title} className="w-6 h-6 object-contain" />
                </div>
                <h3 className="text-2xl font-bold text-green-900">{card.title}</h3>
              </div>
              <p className="text-gray-700 text-sm">{card.desc}</p>
            </motion.div>
          ))}
        </section>

        {/* Timeline Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-green-900 text-white px-6 py-10 rounded-xl shadow-md max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 justify-center text-green-100 mb-2">
            <CalendarDays className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wider">Our Journey</span>
          </div>
          <h2 className="text-3xl font-extrabold mb-2">Timeline of Innovation</h2>
          <p className="text-green-100 text-base leading-relaxed">
            From humble beginnings to global impact — discover how Cloves Inc. has grown into a sustainability leader.
          </p>
        </motion.div>

        {/* Timeline Component */}
        <Timeline milestones={milestones} />

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

      <Footer />
    </>
  );
};

export default AboutPage;
