
import React from 'react';

interface TechStackProps {
  language: 'en' | 'ar';
}

export const TechStack: React.FC<TechStackProps> = ({ language }) => {
  const isArabic = language === 'ar';

  const content = {
    en: {
      title: 'Our Tech Stack',
      subtitle: 'We use cutting-edge technologies to build robust and scalable solutions',
      technologies: [
        { name: 'React', description: 'Modern frontend library for building user interfaces' },
        { name: 'Next.js', description: 'Full-stack React framework for production' },
        { name: 'Tailwind CSS', description: 'Utility-first CSS framework for rapid UI development' },
        { name: 'TypeScript', description: 'Typed superset of JavaScript for better code quality' },
        { name: 'MongoDB', description: 'NoSQL database for flexible data storage' },
        { name: 'Docker', description: 'Containerization for consistent deployment' }
      ]
    },
    ar: {
      title: 'تقنياتنا',
      subtitle: 'نستخدم أحدث التقنيات لبناء حلول قوية وقابلة للتطوير',
      technologies: [
        { name: 'React', description: 'مكتبة حديثة لبناء واجهات المستخدم' },
        { name: 'Next.js', description: 'إطار عمل React كامل للإنتاج' },
        { name: 'Tailwind CSS', description: 'إطار عمل CSS للتطوير السريع للواجهات' },
        { name: 'TypeScript', description: 'مجموعة فائقة مكتوبة من JavaScript لجودة كود أفضل' },
        { name: 'MongoDB', description: 'قاعدة بيانات NoSQL لتخزين البيانات المرن' },
        { name: 'Docker', description: 'حاويات للنشر المتسق' }
      ]
    }
  };

  const currentContent = content[language];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isArabic ? 'font-arabic' : ''}`}>
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 ${isArabic ? 'text-right' : ''}`}>
            {currentContent.title}
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${isArabic ? 'text-right' : ''}`}>
            {currentContent.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentContent.technologies.map((tech, index) => (
            <div 
              key={index}
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-tech-gradient rounded-lg mb-4">
                <span className="text-white font-bold text-lg">{tech.name.charAt(0)}</span>
              </div>
              
              <h3 className={`text-lg font-bold text-white mb-2 ${isArabic ? 'font-arabic text-right' : ''}`}>
                {tech.name}
              </h3>
              
              <p className={`text-gray-300 text-sm ${isArabic ? 'font-arabic text-right' : ''}`}>
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
