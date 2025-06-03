
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
      className="ml-4 font-medium border-white/20 text-white hover:bg-white/10 transition-all duration-300"
    >
      {language === 'en' ? 'عربي' : 'English'}
    </Button>
  );
};
