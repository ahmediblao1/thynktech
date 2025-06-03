
import React from 'react';
import { Button } from '@/components/ui/button';
import { LanguageToggle } from './LanguageToggle';

interface HeaderProps {
  language: 'en' | 'ar';
  onLanguageToggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({ language, onLanguageToggle }) => {
  const isArabic = language === 'ar';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-tech-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="text-white font-bold text-xl">ThynkTech</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8 text-white/80">
            <a href="#about" className="hover:text-white transition-colors">
              {isArabic ? 'من نحن' : 'About'}
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              {isArabic ? 'خدماتنا' : 'Services'}
            </a>
            <a href="#portfolio" className="hover:text-white transition-colors">
              {isArabic ? 'أعمالنا' : 'Portfolio'}
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              {isArabic ? 'تواصل معنا' : 'Contact'}
            </a>
          </nav>

          <div className="flex items-center">
            <LanguageToggle language={language} onToggle={onLanguageToggle} />
          </div>
        </div>
      </div>
    </header>
  );
};
