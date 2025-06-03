
import React from 'react';
import { MessageSquare, Contact, Star } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'ar';
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const isArabic = language === 'ar';

  const content = {
    en: {
      description: 'ThynkTech - Your digital transformation partner in Libya. Building the future, one project at a time.',
      services: {
        title: 'Services',
        items: ['Web Development', 'UI/UX Design', 'SEO & Marketing', 'Branding', 'Consulting']
      },
      company: {
        title: 'Company',
        items: ['About Us', 'Portfolio', 'Careers', 'Contact']
      },
      legal: {
        title: 'Legal',
        items: ['Privacy Policy', 'Terms of Service', 'Cookie Policy']
      },
      contact: {
        title: 'Contact',
        email: 'hello@thynktech.ly',
        phone: '+218 91 234 5678',
        address: 'Tripoli, Libya'
      },
      copyright: '© 2024 ThynkTech. All rights reserved.'
    },
    ar: {
      description: 'ثِنك تك - شريكك في التحول الرقمي في ليبيا. نبني المستقبل، مشروع واحد في كل مرة.',
      services: {
        title: 'الخدمات',
        items: ['تطوير الويب', 'تصميم واجهات', 'تحسين محركات البحث', 'الهوية التجارية', 'الاستشارات']
      },
      company: {
        title: 'الشركة',
        items: ['من نحن', 'أعمالنا', 'الوظائف', 'تواصل معنا']
      },
      legal: {
        title: 'قانوني',
        items: ['سياسة الخصوصية', 'شروط الخدمة', 'سياسة الكوكيز']
      },
      contact: {
        title: 'تواصل معنا',
        email: 'hello@thynktech.ly',
        phone: '+218 91 234 5678',
        address: 'طرابلس، ليبيا'
      },
      copyright: '© 2024 ثِنك تك. جميع الحقوق محفوظة.'
    }
  };

  const currentContent = content[language];

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-tech-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="text-white font-bold text-xl">ThynkTech</span>
            </div>
            <p className={`text-gray-400 leading-relaxed mb-6 ${isArabic ? 'font-arabic text-right' : ''}`}>
              {currentContent.description}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Contact className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors">
                <MessageSquare className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Star className="w-5 h-5" />
              </a>
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
                  <a href="#" className={`text-gray-400 hover:text-white transition-colors ${isArabic ? 'text-right block' : ''}`}>
                    {item}
                  </a>
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
                  <a href="#" className={`text-gray-400 hover:text-white transition-colors ${isArabic ? 'text-right block' : ''}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className={`${isArabic ? 'font-arabic' : ''}`}>
            <h3 className={`font-bold text-lg mb-4 ${isArabic ? 'text-right' : ''}`}>
              {currentContent.legal.title}
            </h3>
            <ul className="space-y-2">
              {currentContent.legal.items.map((item, index) => (
                <li key={index}>
                  <a href="#" className={`text-gray-400 hover:text-white transition-colors ${isArabic ? 'text-right block' : ''}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
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
