import React from 'react';
import { Award, Users, Target, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const About = () => {
  const highlights = [
    {
      icon: <Award className="text-blue-600" size={24} />,
      title: "AWS Certified",
      description: "Solutions Architect and Cloud Practitioner with hands-on experience"
    },
    {
      icon: <Target className="text-orange-500" size={24} />,
      title: "Results-Driven",
      description: "Proven track record of improving system performance and reducing costs"
    },
    {
      icon: <Users className="text-green-600" size={24} />,
      title: "Team Leader",
      description: "Experience leading technical teams and community programs"
    },
    {
      icon: <Heart className="text-red-500" size={24} />,
      title: "Community Impact",
      description: "Founder of NGO reaching 500+ individuals in rural communities"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm passionate about leveraging cloud technology to solve real-world problems while building 
            resilient communities through technology and mentorship.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">My Journey</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                As a DevOps Engineer and AWS Certified Solutions Architect based in Kumasi, Ghana, 
                I bring a unique perspective to cloud infrastructure and community development. My 
                journey in technology began during my Computer Engineering studies at KNUST, where 
                I discovered the transformative power of cloud computing.
              </p>
              <p>
                With over 2 years of hands-on experience, I've successfully designed and deployed 
                scalable AWS solutions that have delivered measurable impact - reducing deployment 
                times by 60% and improving system reliability to 99.5% uptime. My expertise spans 
                infrastructure as code, CI/CD automation, and cloud-native architectures.
              </p>
              <p>
                Beyond technical excellence, I'm deeply committed to community development. In 2020, 
                I founded the Basic Resilience Mentorship Program, an NGO that has reached over 500 
                individuals across rural areas in Ghana. This work has taught me the importance of 
                technology accessibility and sustainable solutions.
              </p>
              <p>
                I believe in the power of technology to drive positive change, especially in emerging 
                communities. My goal is to bridge the digital divide while delivering enterprise-grade 
                solutions that support digital growth and economic development.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">What Drives Me</h3>
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                <div className="flex-shrink-0 p-2 bg-white rounded-lg shadow-sm">
                  {highlight.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">{highlight.title}</h4>
                  <p className="text-gray-600">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NGO Highlight */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Community Impact Through Technology
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
              Through the Basic Resilience Mentorship Program, I've combined my technical expertise 
              with community outreach to create lasting positive impact in rural Ghana.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Individuals Reached</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">15+</div>
                <div className="text-gray-600">Workshops Conducted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
                <div className="text-gray-600">Participant Retention</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;