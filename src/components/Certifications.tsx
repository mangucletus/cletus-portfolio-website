import React from 'react';
import { Award, ExternalLink, CheckCircle } from 'lucide-react';
import { certifications } from '../data/portfolio';

const Certifications = () => {
  const additionalCertifications = [
    "AWS Educate Getting Started with Networking",
    "AWS Educate Getting Started with Security", 
    "AWS Educate Introduction to Cloud 101",
    "Networking Essentials",
    "AWS Educate Getting Started with Storage"
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Certifications & Training
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Continuous learning and professional development through industry-recognized 
            certifications and specialized training programs.
          </p>
        </div>

        {/* Featured Certifications */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            AWS Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.filter(cert => cert.featured).map((cert, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-blue-50 p-8 rounded-xl border-2 border-orange-200 hover:border-orange-300 transition-colors duration-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-white rounded-lg shadow-sm">
                    <Award className="text-orange-500" size={32} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {cert.name}
                    </h4>
                    <p className="text-orange-600 font-semibold mb-3">
                      Issued by {cert.issuer}
                    </p>
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle size={16} />
                      <span className="text-sm font-medium">Verified Credential</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Professional Certifications */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Professional Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors duration-200">
                  <div className="flex items-center gap-3">
                    <Award className={`${cert.featured ? 'text-orange-500' : 'text-blue-600'}`} size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-900">{cert.name}</h4>
                      <p className="text-sm text-gray-600">{cert.issuer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Training */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Specialized Training
            </h3>
            <div className="space-y-4">
              {additionalCertifications.map((training, index) => (
                <div key={index} className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors duration-200">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-blue-600" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-900">{training}</h4>
                      <p className="text-sm text-gray-600">AWS Educate Program</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certification Stats */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">
              Commitment to Continuous Learning
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">10+</div>
                <div className="opacity-90">Certifications Earned</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">2</div>
                <div className="opacity-90">AWS Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">20+</div>
                <div className="opacity-90">AWS Labs Completed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Verify Credentials */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            All certifications can be verified through their respective issuing organizations.
          </p>
          <button className="inline-flex items-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors duration-200">
            <ExternalLink size={20} />
            Verify Credentials
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certifications;