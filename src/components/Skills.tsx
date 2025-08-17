import React from 'react';
import { Cloud, Code, Server, Wrench } from 'lucide-react';
import { skills } from '../data/portfolio';

const Skills = () => {
  const skillCategories = [
    { name: 'Cloud', icon: <Cloud size={24} />, color: 'text-blue-600' },
    { name: 'Programming', icon: <Code size={24} />, color: 'text-green-600' },
    { name: 'DevOps', icon: <Server size={24} />, color: 'text-orange-500' },
    { name: 'IaC', icon: <Wrench size={24} />, color: 'text-purple-600' },
    { name: 'CI/CD', icon: <Server size={24} />, color: 'text-red-500' },
    { name: 'Scripting', icon: <Code size={24} />, color: 'text-indigo-600' }
  ];

  const getCategoryColor = (category: string) => {
    const cat = skillCategories.find(c => c.name === category);
    return cat ? cat.color : 'text-gray-600';
  };

  const getCategoryBg = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'Cloud': 'bg-blue-100',
      'Programming': 'bg-green-100',
      'DevOps': 'bg-orange-100',
      'IaC': 'bg-purple-100',
      'CI/CD': 'bg-red-100',
      'Scripting': 'bg-indigo-100'
    };
    return colorMap[category] || 'bg-gray-100';
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit of cloud technologies, programming languages, and DevOps practices 
            that enable me to build scalable, reliable, and secure solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Technical Expertise</h3>
            <div className="space-y-6">
              {skills.technical.map((skill, index) => (
                <div key={index} className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-3">
                      <span className={`px-2 py-1 rounded-md text-xs font-medium ${getCategoryBg(skill.category)} ${getCategoryColor(skill.category)}`}>
                        {skill.category}
                      </span>
                      <span className="font-medium text-gray-900">{skill.name}</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills & Tools */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Core Competencies</h3>
            
            {/* Soft Skills */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Leadership & Communication</h4>
              <div className="grid grid-cols-1 gap-3">
                {skills.soft.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AWS Services */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">AWS Services</h4>
              <div className="grid grid-cols-2 gap-3">
                {['EC2', 'S3', 'RDS', 'Lambda', 'VPC', 'IAM', 'CloudFormation', 'ECS', 'Cognito', 'API Gateway', 'CloudWatch', 'Auto Scaling'].map((service, index) => (
                  <div key={index} className="bg-orange-50 text-orange-700 px-3 py-2 rounded-lg text-sm font-medium text-center border border-orange-200">
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skill Categories Overview */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Technology Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-200">
                <div className={`${category.color} mb-3 flex justify-center`}>
                  {category.icon}
                </div>
                <h4 className="font-semibold text-gray-900">{category.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;