
import React from 'react';
import { MessageSquare, Contact, Star } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'ar';
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const isArabic = language === 'ar';

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const content = {
    en: {
      description: 'ThynkTech - Your digital transformation partner in Libya. Building the future, one project at a time.',
      services: {
        title: 'Services',
        items: [
          { name: 'Web Development', action: () => scrollToSection('services') },
          { name: 'UI/UX Design', action: () => scrollToSection('services') },
          { name: 'SEO & Marketing', action: () => scrollToSection('services') },
          { name: 'Branding', action: () => scrollToSection('services') },
          { name: 'Consulting', action: () => scrollToSection('services') }
        ]
      },
      company: {
        title: 'Company',
        items: [
          { name: 'About Us', action: () => scrollToSection('about') },
          { name: 'Portfolio', action: () => scrollToSection('portfolio') },
          { name: 'Contact', action: () => scrollToSection('contact') }
        ]
      },
      contact: {
        title: 'Contact',
        email: 'thynktech@gmail.com',
        phone: '+218 93 053 8733',
        address: 'Tripoli, Libya'
      },
      copyright: '© 2025 ThynkTech. All rights reserved.'
    },
    ar: {
      description: 'ثِنك تك - شريكك في التحول الرقمي في ليبيا. نبني المستقبل، مشروع واحد في كل مرة.',
      services: {
        title: 'الخدمات',
        items: [
          { name: 'تطوير الويب', action: () => scrollToSection('services') },
          { name: 'تصميم واجهات', action: () => scrollToSection('services') },
          { name: 'تحسين محركات البحث', action: () => scrollToSection('services') },
          { name: 'الهوية التجارية', action: () => scrollToSection('services') },
          { name: 'الاستشارات', action: () => scrollToSection('services') }
        ]
      },
      company: {
        title: 'الشركة',
        items: [
          { name: 'من نحن', action: () => scrollToSection('about') },
          { name: 'أعمالنا', action: () => scrollToSection('portfolio') },
          { name: 'تواصل معنا', action: () => scrollToSection('contact') }
        ]
      },
      contact: {
        title: 'تواصل معنا',
        email: 'thynktech@gmail.com',
        phone: '+218 93 053 8733',
        address: 'طرابلس، ليبيا'
      },
      copyright: '© 2025 ثِنك تك. جميع الحقوق محفوظة.'
    }
  };

  const currentContent = content[language];

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/lovable-uploads/d00f424d-db3a-4791-8f9a-d5d116addafa.png" 
                alt="ThynkTech Logo" 
                className="w-8 h-8"
              />
              <span className="text-white font-bold text-xl">ThynkTech</span>
            </div>
            <p className={`text-gray-400 leading-relaxed mb-6 ${isArabic ? 'font-arabic text-right' : ''}`}>
              {currentContent.description}
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => window.open('https://wa.me/218930538733', '_blank')}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
              </button>
              <button 
                onClick={() => window.open('mailto:ornardoxx@gmail.com', '_blank')}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Contact className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Services */}
          <div className={`${isArabic ? 'font-arabic' : ''}`}>
            <h3 className={`font-bold text-lg mb-4 ${isArabic ? 'text-right' : ''}`}>
              {currentContent.services.title}
            </h3>
            <ul className="space-y-2">
              {currentContent.services.items.map((item, index) => (
                <li key={index}>
                  <button 
                    onClick={item.action}
                    className={`text-gray-400 hover:text-white transition-colors ${isArabic ? 'text-right block w-full' : 'text-left'}`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className={`${isArabic ? 'font-arabic' : ''}`}>
            <h3 className={`font-bold text-lg mb-4 ${isArabic ? 'text-right' : ''}`}>
              {currentContent.company.title}
            </h3>
            <ul className="space-y-2">
              {currentContent.company.items.map((item, index) => (
                <li key={index}>
                  <button 
                    onClick={item.action}
                    className={`text-gray-400 hover:text-white transition-colors ${isArabic ? 'text-right block w-full' : 'text-left'}`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={`${isArabic ? 'font-arabic' : ''}`}>
            <h3 className={`font-bold text-lg mb-4 ${isArabic ? 'text-right' : ''}`}>
              {currentContent.contact.title}
            </h3>
            <div className="space-y-2">
              <p className={`text-gray-400 ${isArabic ? 'text-right' : ''}`}>
                {currentContent.contact.email}
              </p>
              <p className={`text-gray-400 ${isArabic ? 'text-right' : ''}`}>
                {currentContent.contact.phone}
              </p>
              <p className={`text-gray-400 ${isArabic ? 'text-right' : ''}`}>
                {currentContent.contact.address}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className={`text-center text-gray-400 ${isArabic ? 'font-arabic' : ''}`}>
            {currentContent.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
};
