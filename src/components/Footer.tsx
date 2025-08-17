import React from 'react';
import { Heart, Github, Linkedin, Mail, Facebook } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div>
            <h3 className="text-xl font-bold mb-4">{personalInfo.name}</h3>
            <p className="text-gray-300 mb-4">
              DevOps Engineer and AWS Solutions Architect passionate about leveraging 
              cloud technology to drive digital transformation and community impact.
            </p>
            <div className="flex gap-4">
              <a
                href={personalInfo.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={personalInfo.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
              <a
                href={personalInfo.links.ngoFacebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-300 hover:text-white transition-colors duration-200">
                About
              </a>
              <a href="#experience" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Experience
              </a>
              <a href="#projects" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Projects
              </a>
              <a href="#skills" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Skills
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2 text-gray-300">
              <p>{personalInfo.email}</p>
              {/* <p>{personalInfo.phone}</p> */}
              <p>{personalInfo.location}</p>
            </div>
            <div className="mt-4">
              <a
                href={personalInfo.links.companyWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 transition-colors duration-200"
              >
                Basic Resilience Mentorship Program →
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart className="text-red-500" size={16} /> by {personalInfo.name}
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;