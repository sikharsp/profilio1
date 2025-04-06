import React from 'react';
import { Github, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <a href="#" className="text-3xl font-bold text-white mb-6">
            Sikhar<span className="text-primary">.</span>
          </a>
          
          <div className="flex gap-4 mb-8">
            <a href="https://github.com/sikharsp" target="_blank" className="social-icon">
              <Github size={20} />
            </a>
            <a href="https://facebook.com/sagar.panthi.5832" target="_blank" className="social-icon">
              <Facebook size={20} />
            </a>
            <a href="https://www.instagram.com/sikhar_panthi/" target="_blank" className="social-icon">
              <Instagram size={20} />
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-gray-400">
              &copy; {currentYear} Sikhar Panthi. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
