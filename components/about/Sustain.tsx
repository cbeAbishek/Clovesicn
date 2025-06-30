'use client';
import { motion } from 'framer-motion';

const QualityFocusSection = () => {
  return (
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
      </div>
    </section>
  );
};

export default QualityFocusSection;
