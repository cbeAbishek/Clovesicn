'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Globe } from 'lucide-react';

const GlobalPresenceSection = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image (Hidden on mobile, visible on md+) */}
        <div className="hidden md:block">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-lg"
          >
            <Image
              src="/adi/bl.jpg"
              alt="Global Presence"
              className="w-full h-full object-cover"
              width={800}
              height={600}
              layout="responsive"
              priority
            />
          </motion.div>
        </div>

        {/* Right Side - Minimal Content with Icon */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-2 bg-[#e6f4ea] text-[#2e7d32] px-4 py-2 rounded-full font-medium text-sm w-fit uppercase tracking-wide">
            <Globe className="w-4 h-4" />
            Global Presence
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-green-900 leading-tight">
            Delivering Worldwide, Supporting Locally
          </h2>

          <ul className="text-gray-700 text-base space-y-4 leading-relaxed list-disc pl-5 marker:text-green-600">
            <li>Operations across 4 continents.</li>
            <li>Localized support through regional hubs.</li>
            <li>Agile logistics tailored by region.</li>
            <li>Trusted globally for sustainable solutions.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalPresenceSection;
