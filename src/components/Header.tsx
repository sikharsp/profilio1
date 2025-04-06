import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed w-full z-50 transition-all duration-300 py-4 px-6 md:px-12", 
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white">
          Sikhar<span className="text-primary">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#education" className="nav-link">Education</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden text-white hover:bg-secondary/40"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "md:hidden fixed top-[72px] left-0 w-full bg-background/95 backdrop-blur-md transition-all duration-300 shadow-md overflow-hidden",
          mobileMenuOpen ? "max-h-[300px] py-4" : "max-h-0"
        )}
      >
        <nav className="flex flex-col gap-2 px-6">
          <a 
            href="#home" 
            className="py-2 px-4 hover:bg-secondary/40 rounded-md"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </a>
          <a 
            href="#about" 
            className="py-2 px-4 hover:bg-secondary/40 rounded-md"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#skills" 
            className="py-2 px-4 hover:bg-secondary/40 rounded-md"
            onClick={() => setMobileMenuOpen(false)}
          >
            Skills
          </a>
          <a 
            href="#education" 
            className="py-2 px-4 hover:bg-secondary/40 rounded-md"
            onClick={() => setMobileMenuOpen(false)}
          >
            Education
          </a>
          <a 
            href="#contact" 
            className="py-2 px-4 hover:bg-secondary/40 rounded-md"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
