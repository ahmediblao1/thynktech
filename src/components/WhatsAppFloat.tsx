
import React from 'react';
import { MessageSquare } from 'lucide-react';

interface WhatsAppFloatProps {
  language: 'en' | 'ar';
}

export const WhatsAppFloat: React.FC<WhatsAppFloatProps> = ({ language }) => {
  const isArabic = language === 'ar';
  
  const content = {
    en: 'Chat with us',
    ar: 'تحدث معنا'
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => window.open('https://wa.me/218930538733', '_blank')}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
        aria-label={content[language]}
      >
        <MessageSquare className="w-6 h-6" />
        <span className={`absolute ${isArabic ? 'right-16' : 'left-16'} top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${isArabic ? 'font-arabic' : ''}`}>
          {content[language]}
        </span>
      </button>
    </div>
  );
};
