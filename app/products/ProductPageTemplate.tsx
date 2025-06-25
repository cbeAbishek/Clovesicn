'use client';
import Link from 'next/link';
import { CheckCircle, BadgeCheck, ShieldCheck, ArrowRight } from 'lucide-react';

interface SubProduct {
  name: string;
  href: string;
}

interface ProductPageTemplateProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  specifications: { label: string; value: string }[];
  subProducts?: SubProduct[];
}

export default function ProductPageTemplate({
  title,
  description,
  image,
  features,
  specifications,
  subProducts = [],
}: ProductPageTemplateProps) {
  return (
    <section className="pt-28 px-4 sm:px-6 lg:px-8 pb-32 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* 🌟 Hero Section */}
        <div className="text-center space-y-4 animate-fade-in-up">
          <span className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm">
            Premium Product Category
          </span>
          <h1 className="text-4xl font-extrabold text-green-700">{title}</h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* 🖼️ Image + Features */}
        <div className="grid md:grid-cols-2 gap-10 items-center animate-fade-in-up">
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img
              src={image}
              alt={title}
              className="w-full h-72 object-cover transform transition-transform duration-700 hover:scale-105 rounded-xl"
            />
          </div>
          <div className="space-y-5">
            <h2 className="text-2xl font-bold text-green-600">Why Choose Our {title}?</h2>
            <ul className="space-y-3">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 🧾 Specifications Grid */}
        <div className="bg-gray-50 rounded-xl p-8 shadow-sm animate-fade-in-up">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Specifications</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-gray-700">
            {specifications.map((spec, i) => (
              <div key={i} className="hover:bg-white hover:shadow px-3 py-2 rounded-md transition">
                <span className="font-semibold">{spec.label}:</span> {spec.value}
              </div>
            ))}
          </div>
        </div>

        {/* 📈 Stats Section */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-green-50 py-6 rounded-lg shadow hover:shadow-md transition">
            <BadgeCheck className="mx-auto text-green-600 w-6 h-6 mb-2" />
            <p className="font-semibold text-gray-800">ISO 9001 Certified</p>
          </div>
          <div className="bg-green-50 py-6 rounded-lg shadow hover:shadow-md transition">
            <ShieldCheck className="mx-auto text-green-600 w-6 h-6 mb-2" />
            <p className="font-semibold text-gray-800">FDA Approved Materials</p>
          </div>
          <div className="bg-green-50 py-6 rounded-lg shadow hover:shadow-md transition">
            <p className="text-3xl font-bold text-green-700">25+</p>
            <p className="text-gray-600 text-sm">Countries Served</p>
          </div>
          <div className="bg-green-50 py-6 rounded-lg shadow hover:shadow-md transition">
            <p className="text-3xl font-bold text-green-700">15+</p>
            <p className="text-gray-600 text-sm">Years in Industry</p>
          </div>
        </div>

        {/* 🔗 Subproduct Navigation */}
        {subProducts.length > 0 && (
          <div className="flex flex-wrap gap-4 justify-center my-8 animate-fade-in-up">
            {subProducts.map((sp) => (
              <Link
                key={sp.href}
                href={sp.href}
                className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
              >
                {sp.name}
              </Link>
            ))}
          </div>
        )}

        {/* 📩 CTA Banner */}
        <div className="bg-green-600 text-white px-8 py-12 rounded-xl text-center shadow-lg space-y-4 animate-fade-in-up">
          <h2 className="text-2xl font-bold">Interested in {title}?</h2>
          <p className="text-white/90 max-w-xl mx-auto">
            Get in touch to request a quote, sample, or personalized recommendation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-green-700 font-semibold rounded-full hover:bg-gray-100 transition"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
