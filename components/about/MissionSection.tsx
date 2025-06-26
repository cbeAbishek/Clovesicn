'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Leaf } from 'lucide-react';

const MissionSection = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Minimal Content with Icon */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-2 bg-[#e6f4ea] text-[#2e7d32] px-4 py-2 rounded-full font-medium text-sm w-fit uppercase tracking-wide">
            <Leaf className="w-4 h-4" />
            Our Mission
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-green-900 leading-tight">
            Smarter Packaging for a Greener Planet
          </h2>

          <ul className="text-gray-700 text-base space-y-4 leading-relaxed list-disc pl-5 marker:text-green-600">
            <li>Eco-friendly liners & containers built for performance.</li>
            <li>Seamless integration into global supply chains.</li>
            <li>Innovation that scales with sustainability.</li>
            <li>Designed to reduce waste and maximize efficiency.</li>
          </ul>
        </motion.div>

        {/* Right Side - Image (Hidden on mobile, visible on md+) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden shadow-lg hidden md:block"
        >
          <Image
            src="/adi/df.jpg"
            alt="Sustainable Mission Visual"
            className="w-full h-full object-cover"
            width={800}
            height={600}
            layout="responsive"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
