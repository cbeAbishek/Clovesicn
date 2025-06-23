import { Shield, Award, Globe, Users, Leaf, Zap } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: 'Uncompromising Quality',
      description: 'ISO certified manufacturing processes ensure every product meets the highest international standards for safety and performance.',
      stats: '99.9% Quality Rating',
    },
    {
      icon: Leaf,
      title: 'Sustainability First',
      description: 'Carbon-neutral production with 100% renewable energy, biodegradable materials, and circular economy principles.',
      stats: 'Carbon Neutral Since 2020',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients across 40+ countries with localized support, multilingual service, and understanding of regional requirements.',
      stats: '40+ Countries Served',
    },
    {
      icon: Award,
      title: 'Industry Expertise',
      description: '25+ years of specialized experience in healthcare, industrial, and commercial sectors with deep technical knowledge.',
      stats: '25 Years Experience',
    },
    {
      icon: Users,
      title: 'Customer-Centric',
      description: 'Dedicated account managers, 24/7 technical support, and custom solutions tailored to your specific needs.',
      stats: '500+ Satisfied Clients',
    },
    {
      icon: Zap,
      title: 'Innovation Leader',
      description: 'Continuous R&D investment, cutting-edge materials science, and breakthrough technologies for tomorrow\'s challenges.',
      stats: '$2M+ Annual R&D Investment',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary-100 text-secondary-700 rounded-full px-4 py-2 mb-4">
            <Award className="h-4 w-4" />
            <span className="text-sm font-medium">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The EcoTech Advantage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            When you partner with EcoTech Solutions, youre choosing proven excellence, 
            sustainable innovation, and unwavering commitment to your success.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Card */}
                <div className="h-full bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:border-primary-200 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {reason.description}
                  </p>

                  {/* Stat */}
                  <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 rounded-full px-3 py-1 text-sm font-medium">
                    <div className="w-2 h-2 bg-primary-500 rounded-full" />
                    <span>{reason.stats}</span>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies worldwide who trust EcoTech Solutions 
              for their sustainable product needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-colors">
                Request Quote
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-xl font-semibold transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;