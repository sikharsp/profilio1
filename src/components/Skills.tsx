
import React from 'react';
import { Card } from '@/components/ui/card';

const Skills: React.FC = () => {
  const skills = [
    {
      name: "HTML",
      level: 90,
      icon: "📄"
    },
    {
      name: "CSS",
      level: 85,
      icon: "🎨"
    },
    {
      name: "JavaScript",
      level: 75,
      icon: "🔧"
    },
    {
      name: "Java",
      level: 70,
      icon: "☕"
    },
    {
      name: "Photoshop",
      level: 90,
      icon: "🖌️"
    },
    {
      name: "Responsive Design",
      level: 85,
      icon: "📱"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="section-title">My Skills</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skills.map((skill, index) => (
            <Card key={index} className="skill-card">
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{skill.name}</h3>
              <div className="w-full bg-secondary/50 h-2 rounded-full">
                <div 
                  className="bg-primary h-full rounded-full"
                  style={{width: `${skill.level}%`}}
                ></div>
              </div>
              <p className="mt-2 text-gray-400">{skill.level}%</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
