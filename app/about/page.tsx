import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Users, Target, Globe, Award, History, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  const milestones = [
    { year: '1999', title: 'Company Founded', description: 'Started with a vision to create sustainable textile solutions' },
    { year: '2005', title: 'ISO Certification', description: 'Achieved ISO 9001 and ISO 14001 certifications' },
    { year: '2012', title: 'Global Expansion', description: 'Opened manufacturing facilities in 3 continents' },
    { year: '2018', title: 'Innovation Center', description: 'Established R&D facility for sustainable materials' },
    { year: '2020', title: 'Carbon Neutral', description: 'Achieved carbon neutrality across all operations' },
    { year: '2024', title: 'Industry Leader', description: 'Serving 500+ clients across 40+ countries' },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Chief Executive Officer',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: '15+ years in sustainable manufacturing and business strategy'
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Chief Technology Officer',
      image: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Leading materials scientist with 20+ patents in eco-friendly textiles'
    },
    {
      name: 'Emma Rodriguez',
      role: 'VP of Operations',
      image: 'https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Global operations expert ensuring quality and sustainability'
    },
    {
      name: 'James Thompson',
      role: 'VP of Sales & Marketing',
      image: 'https://images.pexels.com/photos/3735230/pexels-photo-3735230.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Building partnerships across healthcare and industrial sectors'
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                About EcoTech Solutions
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                For over 25 years, we've been pioneering sustainable solutions that protect 
                both your business and our planet.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide high-quality, sustainable products that enable our clients to achieve 
                  their goals while contributing to a healthier planet for future generations.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the global leader in sustainable industrial solutions, setting the standard 
                  for environmental responsibility and innovation in our industry.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
                <p className="text-gray-600 leading-relaxed">
                  Integrity, sustainability, innovation, and customer success drive everything we do. 
                  We believe business success and environmental stewardship go hand in hand.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 rounded-full px-4 py-2 mb-4">
                <History className="h-4 w-4" />
                <span className="text-sm font-medium">Our Journey</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">25 Years of Innovation</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From a small startup to a global leader, our journey has been marked by 
                continuous innovation and unwavering commitment to sustainability.
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-primary-200" />
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                        <div className="text-2xl font-bold text-primary-600 mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                    
                    {/* Timeline Dot */}
                    <div className="relative z-10 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg" />
                    
                    <div className="w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-secondary-100 text-secondary-700 rounded-full px-4 py-2 mb-4">
                <Users className="h-4 w-4" />
                <span className="text-sm font-medium">Leadership</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Led by industry veterans with decades of combined experience in sustainable 
                manufacturing and innovation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <div className="text-primary-600 font-medium mb-3">{member.role}</div>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Impact by the Numbers</h2>
              <p className="text-xl text-primary-100 max-w-3xl mx-auto">
                Our commitment to excellence and sustainability is reflected in our achievements.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-primary-200">Global Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">40+</div>
                <div className="text-primary-200">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50M+</div>
                <div className="text-primary-200">Products Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="text-primary-200">Years Experience</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}