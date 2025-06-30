'use client';
import { motion } from 'framer-motion';

const QualityFocusSection = () => {
  return (
<<<<<<< HEAD
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
            Sustainability is not a feature — it's our foundation. From recyclable raw materials to zero-waste production lines, Cloves Inc. designs every process to minimize environmental impact.
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
          className="rounded-3xl overflow-hidden border-4 border-[#39b54b]/20 shadow-xl"
        >
          <img
            src='/adi/bu.jpg'
            alt="Sustainability Visual"
            className="w-full h-full object-cover"
          />
        </motion.div>
=======
    <section id="quality" className="py-16 bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Quality Focus
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              Quality is not a feature — it's our foundation. From premium raw materials to zero-waste production lines, Cloves Inc. designs every process to maximize performance and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                We invest heavily in R&D to continuously innovate biodegradable liners and quality systems that meet evolving regulations and expectations.
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                Our commitment to excellence drives every decision, from material selection to final product delivery, ensuring consistent performance across all our solutions.
              </p>
            </div>
            <div className="relative">
              <img
                src="/about/Quality.png"
                alt="Quality Visual"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
>>>>>>> 588aeac076b34582da64bc0b8fd0d1ee46508d73
      </div>
    </section>
  );
};

export default QualityFocusSection;
