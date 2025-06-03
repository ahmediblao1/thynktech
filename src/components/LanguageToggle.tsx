
import React from 'react';
import { Button } from '@/components/ui/button';

interface LanguageToggleProps {
  language: 'en' | 'ar';
  onToggle: () => void;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ language, onToggle }) => {
  return (
    <Button
      onClick={onToggle}
      variant="outline"
      size="sm"
      className="ml-4 font-medium border-gray-400 text-gray-300 bg-gray-900/50 hover:bg-gray-800 hover:text-white hover:border-gray-300 transition-all duration-300"
    >
      {language === 'en' ? 'عربي' : 'English'}
    </Button>
  );
};
