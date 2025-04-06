
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-1 gap-10 mt-8">
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              Hello! I'm Sikhar Panthi, a passionate web developer and BCA student at Butwal Kalika Campus. I specialize in creating responsive and user-friendly websites using HTML, CSS, JavaScript, and Java.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My journey in web development started during my early education, and I've been constantly improving my skills since then. I'm particularly interested in front-end development and enjoy creating visually appealing and interactive user interfaces.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I'm not coding, you can find me enhancing my design skills with Photoshop or exploring new technologies in the ever-evolving web development landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
