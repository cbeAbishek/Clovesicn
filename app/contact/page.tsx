import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      contact: '+1 (555) 123-4567',
      availability: '24/7 Global Support'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get detailed responses to your inquiries',
      contact: 'info@ecotechsolutions.com',
      availability: 'Response within 2 hours'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Instant support for quick questions',
      contact: 'Available on website',
      availability: 'Mon-Fri, 8AM-8PM EST'
    },
    {
      icon: MapPin,
      title: 'Office Locations',
      description: 'Visit our facilities worldwide',
      contact: '15 Global Offices',
      availability: 'Regional business hours'
    },
  ];

  const offices = [
    {
      region: 'North America HQ',
      address: '123 Innovation Drive\nSustainability City, SC 12345\nUnited States',
      phone: '+1 (555) 123-4567',
      email: 'americas@ecotechsolutions.com'
    },
    {
      region: 'Europe Office',
      address: '45 Green Technology Park\nLondon, UK EC1A 1BB\nUnited Kingdom',
      phone: '+44 20 7123 4567',
      email: 'europe@ecotechsolutions.com'
    },
    {
      region: 'Asia Pacific',
      address: '88 Sustainable Solutions Blvd\nSingapore 018956\nSingapore',
      phone: '+65 6123 4567',
      email: 'apac@ecotechsolutions.com'
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
                Get in Touch
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to discuss your sustainable product needs? Our expert team is here to help 
                you find the perfect solution for your industry.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
                    <p className="text-gray-600 mb-4">{method.description}</p>
                    <div className="font-semibold text-primary-600 mb-1">{method.contact}</div>
                    <div className="text-sm text-gray-500">{method.availability}</div>
                  </div>
                );
              })}
            </div>

            {/* Contact Form & Info */}
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                  
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                        Industry
                      </label>
                      <select
                        id="industry"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Select your industry</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="industrial">Industrial</option>
                        <option value="commercial">Commercial</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select inquiry type</option>
                        <option value="product-inquiry">Product Inquiry</option>
                        <option value="quote-request">Quote Request</option>
                        <option value="technical-support">Technical Support</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="general">General Question</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                        placeholder="Please provide details about your inquiry..."
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-primary-600 hover:bg-primary-700 py-4 text-lg">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>

              {/* Office Locations */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Office Locations</h2>
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6">
                      <h3 className="font-semibold text-lg text-gray-900 mb-3">{office.region}</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start space-x-2">
                          <MapPin className="h-4 w-4 text-primary-600 mt-0.5 flex-shrink-0" />
                          <div className="text-gray-600 whitespace-pre-line">{office.address}</div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-primary-600 flex-shrink-0" />
                          <div className="text-gray-600">{office.phone}</div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-primary-600 flex-shrink-0" />
                          <div className="text-gray-600">{office.email}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Business Hours */}
                <div className="mt-8 bg-primary-50 rounded-xl p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <Clock className="h-5 w-5 text-primary-600" />
                    <h3 className="font-semibold text-lg text-gray-900">Business Hours</h3>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>8:00 AM - 8:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>9:00 AM - 5:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Emergency Support Only</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Need Immediate Assistance?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              For urgent technical support or emergency orders, our 24/7 hotline is always available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 px-8 py-4">
                Emergency Hotline: +1 (555) 911-HELP
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4">
                Live Chat Support
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}