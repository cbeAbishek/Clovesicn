'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Leaf } from 'lucide-react';

const SustainabilityFocusSection = () => {
  return (
    <section id="sustainability" className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-2 bg-[#e6f4ea] text-[#2e7d32] px-4 py-2 rounded-full font-medium text-sm w-fit uppercase tracking-wide">
            <Leaf className="w-4 h-4" />
            Sustainability Focus
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-green-900 leading-tight">
            Built for Tomorrow, Inspired by Nature
          </h2>

          <ul className="text-gray-700 text-base space-y-4 leading-relaxed list-disc pl-5 marker:text-green-600">
            <li>Zero-waste production & recyclable raw materials.</li>
            <li>Continuous R&D in biodegradable & reusable solutions.</li>
            <li>Eco-aligned packaging for global compliance.</li>
            <li>Driving greener transitions across industries.</li>
          </ul>
        </motion.div>

        {/* Right Side - Image (Hidden on mobile) */}
        <div className="hidden md:block">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-lg"
          >
            <Image
              src="/adi/yu.jpg"
              alt="Sustainability Focus"
              className="w-full h-full object-cover"
              width={800}
              height={600}
              layout="responsive"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilityFocusSection;
