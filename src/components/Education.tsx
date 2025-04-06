
import React from 'react';
import { Card } from '@/components/ui/card';

const Education: React.FC = () => {
  const education = [
    {
      degree: "Bachelor of Computer Applications (BCA) (Ongoing)",
      institution: "Butwal Kalika Campus",
      location: "Butwal, Rupandehi",
      period: "2024 - Present",
      description: "Currently pursuing my BCA degree with focus on programming, web development, and computer applications."
    },
    {
      degree: "Higher Secondary Education (+2)",
      institution: "Kanti Secondary School",
      location: "Butwal-04, Rupandehi",
      period: "2078 - 2080",
    
    },
    {
      degree: "Secondary Education Examination (SEE)",
      institution: "Shree Jana Jagriti Secondary School",
      location: "Tilottama-02, Jogikuti, Rupandehi",
      period: "2076-2077",
      description: "Completed my secondary education with good academic standing."
    }
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="section-title">Education</h2>
        
        <div className="space-y-6 mt-12">
          {education.map((edu, index) => (
            <Card key={index} className="education-card pl-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
                <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                <span className="text-primary text-sm mt-1 md:mt-0 px-3 py-1 bg-primary/10 rounded-full">
                  {edu.period}
                </span>
              </div>
              <p className="text-gray-400 mb-2">{edu.institution}, {edu.location}</p>
              <p className="text-gray-300">{edu.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
