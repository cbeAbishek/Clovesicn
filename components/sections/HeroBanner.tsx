'use client';
import { useState, useEffect } from 'react';
import { ArrowRight, Play, CheckCircle, Users, Globe, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import lapSlides from '@/constants/slides.lap';
import mobileSlides from '@/constants/slides.mobile';

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect device type (simple width check)
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Select slides based on device
  const slides = isMobile ? mobileSlides : lapSlides;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const achievements = [
    { icon: Users, label: "500+ Global Clients", value: "500+" },
    { icon: Globe, label: "10+ Countries Served", value: "10+" },
    { icon: Award, label: "8+ Years Experience", value: "8+" },
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
      <div className="relative z-10 max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-20 flex items-center justify-center min-h-[60vh]">
        <div className="w-full  items-center justify-center">
          {/* Left Column - Main Content */}
            <div className="text-white flex flex-col items-center text-center">
            {/* Stats */}
            <div className="inline-flex items-center space-x-2 bg-primary-600/20 backdrop-blur-sm border border-primary-400/30 rounded-full px-4 py-2 mb-6 transition-all duration-700 ease-in-out"
              key={`stats-${currentSlide}`}
              style={{ willChange: 'opacity, transform' }}
            >
              <CheckCircle className="h-4 w-4 text-primary-400" />
              <span
              className="text-sm font-medium text-primary-200 transition-opacity duration-700 ease-in-out"
              key={`stats-text-${currentSlide}`}
              >
              {slides[currentSlide].stats}
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 transition-all duration-700 ease-in-out"
              key={`title-${currentSlide}`}
              style={{ willChange: 'opacity, transform' }}
            >
              {slides[currentSlide].title}
            </h1>

            {/* Subtitle */}
            <p
              className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed max-w-2xl transition-all duration-700 ease-in-out"
              key={`subtitle-${currentSlide}`}
              style={{ willChange: 'opacity, transform' }}
            >
              {slides[currentSlide].subtitle}
            </p>
            

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
                <a href="/products">
                <Button size="lg" className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 text-lg font-semibold shadow-brand">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                </a>
                <a href="/about">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-[#39b54b] hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold backdrop-blur-sm"
                >
                  About us
                </Button>
                </a>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3 group justify-center">
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