'use client';
import React, { useState, useEffect } from 'react';
import {
  Globe,
  Leaf,
  Zap,
  Package,
  Award,
  Users,
  User,
  Shield,
  TrendingUp,
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
  Heart,
  Target,
  Lightbulb,
} from 'lucide-react';

const WhyChooseUs = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

  const keyPoints = [
    {
      icon: Globe,
      title: 'Global Expertise',
      description:
        'Serving clients across North America, Europe, Asia, and Australia with tailored solutions.',
      color: 'from-blue-500 to-cyan-500',
      stats: '50+ Countries Served',
    },
    {
      icon: Leaf,
      title: 'Quality Focus',
      description:
        'Eco-friendly materials and processes that support a circular economy.',
      color: 'from-green-500 to-emerald-500',
      stats: '100% Eco-Friendly',
    },
    {
      icon: Zap,
      title: 'Innovation & Quality',
      description:
        'Continuous R&D for durable, high-performance products meeting global standards.',
      color: 'from-purple-500 to-pink-500',
      stats: '15+ Patents Filed',
    },
    {
      icon: Package,
      title: 'Comprehensive Range',
      description:
        'One-stop solution for autoclave liners, industrial packaging, fabrics, and commercial textiles.',
      color: 'from-orange-500 to-red-500',
      stats: '500+ Product Lines',
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Advanced manufacturing technology and strict quality control processes.',
      color: 'from-yellow-500 to-orange-500',
      stats: '12+ Quality Standards',
    },
    {
      icon: Users,
      title: 'Customer-Centric',
      description:
        'Personalized service, timely delivery, and post-sales support.',
      color: 'from-indigo-500 to-purple-500',
      stats: '99.8% Client Satisfaction',
    },
  ];

  const additionalFeatures = [
    {
      icon: TrendingUp,
      title: 'Market Leadership',
      description:
        'Leading the industry with innovative solutions for over a decade',
      value: '10+ Years',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer service and technical assistance',
      value: 'Always Available',
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description:
        'Rigorous testing and quality control at every production stage',
      value: 'Zero Defects',
    },
    {
      icon: Target,
      title: 'Custom Solutions',
      description:
        'Tailored products designed to meet specific client requirements',
      value: 'Bespoke Design',
    },
  ];

  const testimonialStats = [
    { number: '10,000+', label: 'Happy Clients', icon: Heart },
    { number: '50M+', label: 'Products Delivered', icon: Package },
    { number: '99.9%', label: 'On-Time Delivery', icon: Clock },
    { number: '24/7', label: 'Global Support', icon: Users },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 },
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#39b54b] to-[#2d8f3a] text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white opacity-5 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white opacity-5 rounded-full animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div
              data-animate
              id="hero-title"
              className={`transform transition-all duration-1000 ${
                isVisible['hero-title']
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Why Choose
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white animate-pulse">
                  Cloves Inc?
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
                Your trusted partner in quality packaging solutions with
                global expertise and innovation
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {testimonialStats.map((stat, index) => (
                <div
                  key={index}
                  className={`bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 transform transition-all duration-700 hover:scale-105 ${
                    isVisible['hero-title']
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-2">
                    <stat.icon className="w-5 h-5 text-yellow-300" />
                    <div className="text-left">
                      <div className="text-2xl font-bold">{stat.number}</div>
                      <div className="text-sm opacity-90">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div
          data-animate
          id="features-title"
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible['features-title']
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Competitive Advantages
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover what makes Cloves Inc. the preferred choice for businesses
            worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {keyPoints.map((point, index) => (
            <div
              key={index}
              data-animate
              id={`feature-${index}`}
              className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform transition-all duration-700 hover:-translate-y-2 cursor-pointer ${
                isVisible[`feature-${index}`]
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div
                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${
                    point.color.split(' ')[1]
                  }, ${point.color.split(' ')[3]})`,
                }}
              ></div>

              <div className="relative">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${point.color} rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                >
                  <point.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#39b54b] transition-colors duration-300">
                  {point.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {point.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#39b54b] bg-[#39b54b] bg-opacity-10 px-3 py-1 rounded-full">
                    {point.stats}
                  </span>
                  {/* <ArrowRight className={`w-5 h-5 text-[#39b54b] transform transition-transform duration-300 ${
                    activeCard === index ? 'translate-x-1' : ''
                  }`} /> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Features */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            data-animate
            id="additional-title"
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible['additional-title']
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Additional Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              More reasons why industry leaders trust Cloves Inc.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                data-animate
                id={`additional-${index}`}
                className={`