'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const SustainabilityFocusSection = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="inline-block bg-[#39b54b]/10 text-[#39b54b] px-4 py-2 rounded-full font-semibold text-sm tracking-wider uppercase">
            Sustainability Focus
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-green-900 leading-tight">
            Built for Tomorrow, Inspired by Nature
          </h2>

          <p className="text-gray-700 text-base leading-relaxed">
            Sustainability is not a feature — its our foundation. From recyclable raw materials to zero-waste production lines, Cloves Inc. designs every process to minimize environmental impact.
          </p>

          <p className="text-gray-700 text-base leading-relaxed">
            We invest heavily in R&D to continuously innovate biodegradable liners and reusable systems that meet evolving regulations and expectations.
          </p>

          <p className="text-gray-700 text-base leading-relaxed">
            Our goal is to redefine packaging as a force for environmental good, empowering businesses to transition to greener practices with confidence.
          </p>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden"
        >
         <Image
              src="/about/Sustainability.png"
              alt="Global Presence"
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

export default SustainabilityFocusSection;
