import React from 'react';
import { Calendar, MapPin, CheckCircle } from 'lucide-react';
import { experience } from '../data/portfolio';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A track record of delivering scalable cloud solutions and leading impactful 
            community initiatives across technical and educational environments.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform md:-translate-x-px"></div>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full transform md:-translate-x-2 border-4 border-white shadow-lg z-10"></div>

                {/* Content */}
                <div className="flex-1 ml-16 md:ml-0">
                  <div className={`bg-white p-8 rounded-xl shadow-lg border border-gray-100 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {exp.title}
                        </h3>
                        <h4 className="text-lg font-semibold text-blue-600 mb-2">
                          {exp.company}
                        </h4>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-100 px-3 py-2 rounded-lg">
                        <Calendar size={16} />
                        {exp.period}
                      </div>
                    </div>

                    <div className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start gap-3">
                          <CheckCircle size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                          <p className="text-gray-600">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Experience */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Developers Foundry Fellow
            </h3>
            <p className="text-blue-600 font-medium mb-2">Tech4Dev</p>
            <p className="text-sm text-gray-500 mb-3">November 2024 – Present</p>
            <p className="text-gray-600">One Year Fellowship in DevOps Engineering</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              AWS Re/Start Trainee
            </h3>
            <p className="text-blue-600 font-medium mb-2">AmaliTech Services GmbH</p>
            <p className="text-sm text-gray-500 mb-3">May 2024 – August 2024</p>
            <p className="text-gray-600">
              Completed intensive AWS re/Start training leading to AWS Certified Cloud Practitioner credential
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;