"use client";
import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Upload, MessageCircle, Shield, Award, Leaf, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

const RequestQuotePage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<{
    productCategory: string;
    specificProduct: string;
    industry: string;
    quantity: string;
    specifications: string;
    sustainabilityPref: boolean;
    name: string;
    company: string;
    email: string;
    phone: string;
    region: string;
    deliveryTimeline: string;
    gdprConsent: boolean;
    fileUploads: File[];
  }>({
    productCategory: '',
    specificProduct: '',
    industry: '',
    quantity: '',
    specifications: '',
    sustainabilityPref: false,
    name: '',
    company: '',
    email: '',
    phone: '',
    region: '',
    deliveryTimeline: '',
    gdprConsent: false,
    fileUploads: []
  });
  const [submitted, setSubmitted] = useState(false);

  const productCategories = {
    'Autoclave Liners': ['High-temp plastic', 'Textile', 'Jute/Hessian', 'Woven plastic'],
    'Packaging Solutions': ['Bulk bags', 'Poly woven bags', 'Mesh bags', 'Multiwall paper sacks'],
    'Natural/Synthetic Fabrics': ['Cotton blends', 'Polyester', 'Biodegradable options', 'Custom weaves'],
    'Commercial Textiles': ['Industrial fabrics', 'Hospitality linens', 'Protective materials', 'Custom solutions']
  };

  const industries = ['Healthcare', 'Agriculture', 'Hospitality', 'Manufacturing', 'Retail', 'Food Service', 'Other'];
  const regions = ['North America', 'Europe', 'Asia Pacific', 'Australia', 'South America', 'Africa', 'Middle East'];
  const timelines = ['ASAP (1-2 weeks)', 'Standard (3-4 weeks)', 'Flexible (1-2 months)', 'Long-term project'];

  interface FormData {
    productCategory: string;
    specificProduct: string;
    industry: string;
    quantity: string;
    specifications: string;
    sustainabilityPref: boolean;
    name: string;
    company: string;
    email: string;
    phone: string;
    region: string;
    deliveryTimeline: string;
    gdprConsent: boolean;
    fileUploads: File[];
  }

  interface HandleInputChange {
    (field: keyof FormData, value: string | boolean): void;
  }

  const handleInputChange: HandleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  interface FileUploadEvent extends React.ChangeEvent<HTMLInputElement> {
    target: HTMLInputElement & { files: FileList };
  }

  const handleFileUpload = (e: FileUploadEvent) => {
    const files = Array.from(e.target.files) as File[];
    setFormData(prev => ({ ...prev, fileUploads: [...prev.fileUploads, ...files] }));
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    // Here you would normally send data to your backend/CRM
    setSubmitted(true);
    setCurrentStep(5);
  };

  const StepIndicator = () => (
    <div className="flex justify-center mb-8 ">
      {[1, 2, 3, 4].map((step) => (
        <div key={step} className="flex items-center">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
            step <= currentStep ? 'bg-[#39b54b] text-white' : 'bg-gray-200 text-gray-600'
          }`}>
            {step}
          </div>
          {step < 4 && <div className={`w-12 h-0.5 ${step < currentStep ? 'bg-[#39b54b]' : 'bg-gray-200'}`} />}
        </div>
      ))}
    </div>
  );

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-white ">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <CheckCircle className="w-20 h-20 text-[#39b54b] mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Quote Request Submitted!</h1>
            <p className="text-xl text-gray-600 mb-6">
              Thank you for your request. We'll get back to you within 24-48 hours with a customized quote.
            </p>
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Your Tracking Number</h3>
              <p className="text-2xl font-mono text-[#39b54b] bg-green-50 py-2 px-4 rounded">
                CLV-{Math.random().toString(36).substr(2, 9).toUpperCase()}
              </p>
            </div>
            <p className="text-gray-600 mb-8">
              A confirmation email has been sent to {formData.email} with your request details.
            </p>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-[#39b54b] text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white mt-[100px]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#39b54b] to-green-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Request a Quote</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Get tailored solutions for your healthcare, industrial, and commercial needs. 
            Our sustainable products meet the highest quality standards.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <StepIndicator />

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            {/* Step 1: Product Selection */}
            {currentStep === 1 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Step 1: Product Selection</h2>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">Product Category</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.keys(productCategories).map((category) => (
                      <div
                        key={category}
                        onClick={() => handleInputChange('productCategory', category)}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          formData.productCategory === category
                            ? 'border-[#39b54b] bg-green-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <h3 className="font-semibold text-gray-900">{category}</h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {productCategories[category as keyof typeof productCategories].join(', ')}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {formData.productCategory && (
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-3">Specific Product</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {productCategories[formData.productCategory as keyof typeof productCategories].map((product) => (
                        <label key={product} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="radio"
                            name="specificProduct"
                            value={product}
                            checked={formData.specificProduct === product}
                            onChange={(e) => handleInputChange('specificProduct', e.target.value)}
                            className="text-[#39b54b] focus:ring-[#39b54b]"
                          />
                          <span className="text-gray-700">{product}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">Industry</label>
                  <select
                    value={formData.industry}
                    onChange={(e) => handleInputChange('industry', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39b54b] focus:border-[#39b54b]"
                  >
                    <option value="">Select your industry</option>
                    {industries.map((industry) => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {/* Step 2: Customization Details */}
            {currentStep === 2 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Step 2: Customization Details</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Quantity Required</label>
                    <input
                      type="number"
                      value={formData.quantity}
                      onChange={(e) => handleInputChange('quantity', e.target.value)}
                      placeholder="e.g., 500"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39b54b] focus:border-[#39b54b]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Timeline</label>
                    <select
                      value={formData.deliveryTimeline}
                      onChange={(e) => handleInputChange('deliveryTimeline', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39b54b] focus:border-[#39b54b]"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((timeline) => (
                        <option key={timeline} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Specifications & Requirements</label>
                  <textarea
                    value={formData.specifications}
                    onChange={(e) => handleInputChange('specifications', e.target.value)}
                    placeholder="Please describe your specific requirements: size, material, temperature resistance, regulatory compliance needs, etc."
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39b54b] focus:border-[#39b54b]"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Upload Drawings/Specifications (Optional)</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">Drop files here or click to upload</p>
                    <input
                      type="file"
                      multiple
                      onChange={handleFileUpload}
                      className="hidden"
                      id="file-upload"
                    />
                    <label
                      htmlFor="file-upload"
                      className="bg-[#39b54b] text-white px-4 py-2 rounded-lg hover:bg-green-600 cursor-pointer transition-colors"
                    >
                      Choose Files
                    </label>
                  </div>
                  {formData.fileUploads.length > 0 && (
                    <div className="mt-3">
                      <p className="text-sm text-gray-600">Uploaded files:</p>
                      {formData.fileUploads.map((file, index) => (
                        <p key={index} className="text-sm text-[#39b54b]">• {file.name}</p>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.sustainabilityPref}
                      onChange={(e) => handleInputChange('sustainabilityPref', e.target.checked)}
                      className="text-[#39b54b] focus:ring-[#39b54b]"
                    />
                    <span className="text-gray-700 flex items-center">
                      <Leaf className="w-4 h-4 text-[#39b54b] mr-2" />
                      I prefer eco-friendly and sustainable options
                    </span>
                  </label>
                </div>
              </div>
            )}

            {/* Step 3: Contact & Delivery Info */}
            {currentStep === 3 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Step 3: Contact & Delivery Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="John Smith"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39b54b] focus:border-[#39b54b]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company *</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="ABC Healthcare"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39b54b] focus:border-[#39b54b]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="john@abchealthcare.com"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39b54b] focus:border-[#39b54b]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+1 (555) 123-4567"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39b54b] focus:border-[#39b54b]"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Region *</label>
                  <select
                    value={formData.region}
                    onChange={(e) => handleInputChange('region', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39b54b] focus:border-[#39b54b]"
                  >
                    <option value="">Select your region</option>
                    {regions.map((region) => (
                      <option key={region} value={region}>{region}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {/* Step 4: Review & Submit */}
            {currentStep === 4 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Step 4: Review & Submit</h2>
                
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Request Summary</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Product:</strong> {formData.productCategory} - {formData.specificProduct}</p>
                      <p><strong>Industry:</strong> {formData.industry}</p>
                      <p><strong>Quantity:</strong> {formData.quantity}</p>
                      <p><strong>Timeline:</strong> {formData.deliveryTimeline}</p>
                    </div>
                    <div>
                      <p><strong>Contact:</strong> {formData.name}</p>
                      <p><strong>Company:</strong> {formData.company}</p>
                      <p><strong>Email:</strong> {formData.email}</p>
                      <p><strong>Region:</strong> {formData.region}</p>
                    </div>
                  </div>
                  {formData.specifications && (
                    <div className="mt-4">
                      <p><strong>Specifications:</strong></p>
                      <p className="text-gray-700 mt-1">{formData.specifications}</p>
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.gdprConsent}
                      onChange={(e) => handleInputChange('gdprConsent', e.target.checked)}
                      className="text-[#39b54b] focus:ring-[#39b54b] mt-1"
                    />
                    <span className="text-sm text-gray-700">
                      I agree to the <a href="#" className="text-[#39b54b] hover:underline">Privacy Policy</a> and 
                      <a href="#" className="text-[#39b54b] hover:underline ml-1">Terms of Service</a>. 
                      I consent to the processing of my personal data for the purpose of providing a quote.
                    </span>
                  </label>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-colors ${
                  currentStep === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              {currentStep < 4 ? (
                <button
                  onClick={nextStep}
                  className="flex items-center space-x-2 bg-[#39b54b] text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!formData.gdprConsent}
                  className={`flex items-center space-x-2 px-8 py-3 rounded-lg transition-colors ${
                    formData.gdprConsent
                      ? 'bg-[#39b54b] text-white hover:bg-green-600'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <span>Submit Request</span>
                  <CheckCircle className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Additional Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Talk to Expert */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <MessageCircle className="w-6 h-6 text-[#39b54b]" />
                <h3 className="text-lg font-semibold text-gray-900">Talk to an Expert</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Need immediate assistance? Our product specialists are available to help you find the perfect solution.
              </p>
              <button className="w-full bg-[#39b54b] text-white py-3 rounded-lg hover:bg-green-600 transition-colors">
                Start Live Chat
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-6 h-6 text-[#39b54b]" />
                <h3 className="text-lg font-semibold text-gray-900">Trusted Quality</h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-[#39b54b]" />
                  <span className="text-sm text-gray-700">ISO 9001:2015 Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-[#39b54b]" />
                  <span className="text-sm text-gray-700">REACH Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Leaf className="w-4 h-4 text-[#39b54b]" />
                  <span className="text-sm text-gray-700">Eco-Friendly Options</span>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">What's the minimum order quantity?</h4>
                <p className="text-gray-600 text-sm">Minimum orders vary by product. Most items start at 100 units, but we can accommodate smaller quantities for samples.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Can I get samples before ordering?</h4>
                <p className="text-gray-600 text-sm">Yes! We provide free samples for most products. Sample delivery typically takes 3-5 business days.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Do you offer regional customization?</h4>
                <p className="text-gray-600 text-sm">Absolutely. We adapt our products to meet local regulations and requirements in different regions.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">How long until I receive my quote?</h4>
                <p className="text-gray-600 text-sm">Most quotes are delivered within 24-48 hours. Complex customizations may take up to 72 hours.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestQuotePage;