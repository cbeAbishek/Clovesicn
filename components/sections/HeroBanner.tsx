'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Play, CheckCircle, Users, Globe, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Sustainable Solutions for a Better Tomorrow",
      subtitle: "Leading provider of eco-friendly products for healthcare, industrial, and commercial sectors worldwide",
      image: "https://images.pexels.com/photos/3735230/pexels-photo-3735230.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      stats: "50M+ Products Delivered Globally"
    },
    {
      title: "Innovation Meets Sustainability",
      subtitle: "Advanced textile solutions and industrial packaging designed for performance and environmental responsibility",
      image: "https://images.pexels.com/photos/3912979/pexels-photo-3912979.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      stats: "ISO 14001 Certified Manufacturing"
    },
    {
      title: "Healthcare Solutions You Can Trust",
      subtitle: "Premium autoclave liners and medical-grade textiles meeting the highest industry standards",
      image: "https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      stats: "99.9% Customer Satisfaction Rate"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const achievements = [
    { icon: Users, label: "500+ Global Clients", value: "500+" },
    { icon: Globe, label: "40+ Countries Served", value: "40+" },
    { icon: Award, label: "25+ Years Experience", value: "25+" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="text-white animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-primary-600/20 backdrop-blur-sm border border-primary-400/30 rounded-full px-4 py-2 mb-6">
              <CheckCircle className="h-4 w-4 text-primary-400" />
              <span className="text-sm font-medium text-primary-200">
                {slides[currentSlide].stats}
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {slides[currentSlide].title}
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
              {slides[currentSlide].subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 text-lg font-semibold shadow-brand">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold backdrop-blur-sm"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Our Story
              </Button>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <div className="p-3 bg-primary-600/20 backdrop-blur-sm rounded-xl group-hover:bg-primary-600/30 transition-colors">
                    <achievement.icon className="h-6 w-6 text-primary-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{achievement.value}</div>
                    <div className="text-sm text-gray-300">{achievement.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="hidden lg:block animate-slide-in-right">
            <div className="space-y-6">
              {/* Sustainability Card */}
              <div className="glass-effect rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary-600 rounded-xl">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Environmental Leadership</h3>
                    <p className="text-gray-600 text-sm">
                      Carbon-neutral manufacturing with 100% recyclable materials and sustainable practices.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quality Card */}
              <div className="glass-effect rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-secondary-600 rounded-xl">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Premium Quality</h3>
                    <p className="text-gray-600 text-sm">
                      ISO certified products meeting the highest international standards for healthcare and industry.
                    </p>
                  </div>
                </div>
              </div>

              {/* Support Card */}
              <div className="glass-effect rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-accent rounded-xl">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Global Support</h3>
                    <p className="text-gray-600 text-sm">
                      24/7 technical support and customized solutions for clients across 40+ countries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-primary-400 w-8' : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20 hidden lg:block">
        <div className="text-white text-sm font-medium">
          <div className="animate-bounce">Scroll to explore</div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;