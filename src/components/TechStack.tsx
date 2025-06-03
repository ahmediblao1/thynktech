
import React from 'react';

interface TechStackProps {
  language: 'en' | 'ar';
}

export const TechStack: React.FC<TechStackProps> = ({ language }) => {
  const isArabic = language === 'ar';

  const content = {
    en: {
      title: 'Cutting-Edge Technology',
      subtitle: 'We work with the best tech tools and frameworks in the market to deliver exceptional results',
      technologies: [
        { name: 'Frontend', description: 'Modern frameworks for stunning user interfaces' },
        { name: 'Backend', description: 'Robust server solutions for scalable applications' },
        { name: 'Database', description: 'Reliable data storage and management systems' },
        { name: 'Cloud', description: 'Secure and scalable cloud infrastructure' },
        { name: 'Mobile', description: 'Cross-platform mobile app development' },
        { name: 'DevOps', description: 'Automated deployment and monitoring tools' }
      ]
    },
    ar: {
      title: 'تقنيات متطورة',
      subtitle: 'نعمل مع أفضل الأدوات والتقنيات في السوق لتقديم نتائج استثنائية',
      technologies: [
        { name: 'الواجهات الأمامية', description: 'أطر عمل حديثة لواجهات مستخدم مذهلة' },
        { name: 'الخادم الخلفي', description: 'حلول خادم قوية للتطبيقات القابلة للتطوير' },
        { name: 'قواعد البيانات', description: 'أنظمة تخزين وإدارة بيانات موثوقة' },
        { name: 'الحوسبة السحابية', description: 'بنية تحتية سحابية آمنة وقابلة للتطوير' },
        { name: 'التطبيقات المحمولة', description: 'تطوير تطبيقات محمولة متعددة المنصات' },
        { name: 'DevOps', description: 'أدوات نشر ومراقبة آلية' }
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
