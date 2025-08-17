import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-orange-500 rounded-full opacity-20 blur-xl"></div>
              <img
                src="https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg"
                alt="Cletus Mangu"
                className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-2xl"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Available for Opportunities
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
              {personalInfo.name}
            </h1>
            
            <h2 className="text-xl lg:text-2xl font-semibold text-blue-600 mb-6">
              {personalInfo.title}
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              {personalInfo.summary}
            </p>

            {/* Key Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="text-3xl font-bold text-orange-500 mb-2">60%</div>
                <div className="text-sm text-gray-600">Deployment Time Reduction</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">99.5%</div>
                <div className="text-sm text-gray-600">System Uptime</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                <div className="text-sm text-gray-600">Community Members Reached</div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                {personalInfo.location}
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                {personalInfo.email}
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                {personalInfo.phone}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={personalInfo.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a
                href={personalInfo.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
              >
                <Github size={20} />
                GitHub
              </a>
              <a
                href={personalInfo.links.currentPortfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
              >
                <ExternalLink size={20} />
                View Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;