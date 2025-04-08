import React, { useState } from 'react';
import { ArrowDown, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Hero: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCVClick = () => {
    setShowModal(true);
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/50 px-6"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-primary/20 blur-3xl"></div>
      </div>

      {/* CV Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white text-black p-6 rounded-xl shadow-xl w-full max-w-md relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              <X size={20} />
            </button>
            <h2 className="text-xl font-semibold mb-2">📄 CV Coming Soon</h2>
            <p className="text-sm text-gray-700">
              I’m currently updating my CV. A fresh and polished version will be available here in a couple of days. Stay tuned!
            </p>
          </div>
        </div>
      )}
      
      <div className="container mx-auto text-center relative z-10">
        <div className="flex justify-center mb-6 animate-fade-in">
          <Avatar className="w-44 h-44 border-4 border-primary">
            <AvatarImage 
              className="scale-125 object-cover translate-y-4"
              src="/lovable-uploads/558032c7-3861-4e84-8b85-97525ef093fa.png"
              alt="Shikhar Pokhrel" 
            />
            <AvatarFallback>SP</AvatarFallback>
          </Avatar>
        </div>
        <p className="text-primary mb-2 animate-fade-in" style={{animationDelay: '0.1s'}}>Hello, I'm</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
          Sikhar Panthi
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.4s'}}>
          A passionate web developer specializing in HTML, CSS, C, JavaScript and Java.
        </p>
        <div className="flex justify-center animate-fade-in" style={{animationDelay: '0.1s'}}>
          <Button size="lg" className="bg-primary hover:bg-primary/80 text-white" onClick={handleCVClick}>
            View CV
          </Button>
          <Button size="lg" className="bg-primary hover:bg-primary/80 text-white ml-4" onClick={handleCVClick}>
            Download CV
          </Button>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;
