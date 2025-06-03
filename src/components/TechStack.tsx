
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
        { name: 'Frontend', description: 'Modern frameworks for stunning user interfaces', color: 'from-blue-500 to-cyan-500' },
        { name: 'Backend', description: 'Robust server solutions for scalable applications', color: 'from-green-500 to-emerald-500' },
        { name: 'Database', description: 'Reliable data storage and management systems', color: 'from-orange-500 to-red-500' },
        { name: 'Cloud', description: 'Secure and scalable cloud infrastructure', color: 'from-purple-500 to-pink-500' },
        { name: 'Mobile', description: 'Cross-platform mobile app development', color: 'from-indigo-500 to-blue-500' },
        { name: 'DevOps', description: 'Automated deployment and monitoring tools', color: 'from-yellow-500 to-orange-500' }
      ]
    },
    ar: {
      title: 'تقنيات متطورة',
      subtitle: 'نعمل مع أفضل الأدوات والتقنيات في السوق لتقديم نتائج استثنائية',
      technologies: [
        { name: 'الواجهات الأمامية', description: 'أطر عمل حديثة لواجهات مستخدم مذهلة', color: 'from-blue-500 to-cyan-500' },
        { name: 'الخادم الخلفي', description: 'حلول خادم قوية للتطبيقات القابلة للتطوير', color: 'from-green-500 to-emerald-500' },
        { name: 'قواعد البيانات', description: 'أنظمة تخزين وإدارة بيانات موثوقة', color: 'from-orange-500 to-red-500' },
        { name: 'الحوسبة السحابية', description: 'بنية تحتية سحابية آمنة وقابلة للتطوير', color: 'from-purple-500 to-pink-500' },
        { name: 'التطبيقات المحمولة', description: 'تطوير تطبيقات محمولة متعددة المنصات', color: 'from-indigo-500 to-blue-500' },
        { name: 'DevOps', description: 'أدوات نشر ومراقبة آلية', color: 'from-yellow-500 to-orange-500' }
      ]
    }
  };

  const currentContent = content[language];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isArabic ? 'font-arabic' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            {currentContent.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center">
            {currentContent.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentContent.technologies.map((tech, index) => (
            <div 
              key={index}
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-r ${tech.color} rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-white font-bold text-lg">{tech.name.charAt(0)}</span>
              </div>
              
              <h3 className={`text-lg font-bold text-white mb-2 ${isArabic ? 'font-arabic text-right' : 'text-left'}`}>
                {tech.name}
              </h3>
              
              <p className={`text-gray-300 text-sm ${isArabic ? 'font-arabic text-right' : 'text-left'}`}>
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
