
import React from 'react';
import { Button } from '@/components/ui/button';

interface PortfolioProps {
  language: 'en' | 'ar';
}

export const Portfolio: React.FC<PortfolioProps> = ({ language }) => {
  const isArabic = language === 'ar';

  const content = {
    en: {
      title: 'Our Portfolio',
      subtitle: 'Showcasing successful digital transformations across Libya',
      viewProject: 'View Project',
      projects: [
        {
          title: 'Sky Libya Aviation',
          description: 'Modern aviation website with booking system and flight information',
          category: 'Web Development',
          image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          url: 'https://www.skylibya.net/index.html'
        },
        {
          title: 'Solo Makarna Restaurant',
          description: 'Restaurant website with menu display and online ordering system',
          category: 'Web Development',
          image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          url: 'https://www.solomakarna.com/'
        },
        {
          title: 'Libya Trade Center',
          description: 'Corporate website with multi-language support and CMS',
          category: 'Corporate Website',
          image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          url: '#'
        },
        {
          title: 'Benghazi Medical Center',
          description: 'Healthcare platform with appointment booking and patient portal',
          category: 'Healthcare System',
          image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          url: '#'
        },
        {
          title: 'Tripoli Tech Hub',
          description: 'Educational platform for tech courses and certification',
          category: 'Educational Platform',
          image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          url: '#'
        },
        {
          title: 'Libya Oil Services',
          description: 'Industrial website with service portfolio and client management',
          category: 'Industrial Website',
          image: 'https://images.unsplash.com/photo-1518709414026-cfce69b3d5ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          url: '#'
        }
      ]
    },
    ar: {
      title: 'أعمالنا',
      subtitle: 'عرض التحولات الرقمية الناجحة عبر ليبيا',
      viewProject: 'عرض المشروع',
      projects: [
        {
          title: 'سكاي ليبيا للطيران',
          description: 'موقع طيران حديث مع نظام حجز ومعلومات الرحلات',
          category: 'تطوير الويب',
          image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          url: 'https://www.skylibya.net/index.html'
        },
        {
          title: 'مطعم سولو مكرونة',
          description: 'موقع مطعم مع عرض القائمة ونظام طلب إلكتروني',
          category: 'تطوير الويب',
          image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          url: 'https://www.solomakarna.com/'
        },
        {
          title: 'مركز ليبيا التجاري',
          description: 'موقع شركة مع دعم متعدد اللغات ونظام إدارة المحتوى',
          category: 'موقع شركة',
          image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          url: '#'
        },
        {
          title: 'المركز الطبي بنغازي',
          description: 'منصة رعاية صحية مع حجز المواعيد وبوابة المرضى',
          category: 'نظام صحي',
          image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          url: '#'
        },
        {
          title: 'مركز طرابلس التقني',
          description: 'منصة تعليمية للدورات التقنية والشهادات',
          category: 'منصة تعليمية',
          image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          url: '#'
        },
        {
          title: 'خدمات ليبيا النفطية',
          description: 'موقع صناعي مع محفظة خدمات وإدارة العملاء',
          category: 'موقع صناعي',
          image: 'https://images.unsplash.com/photo-1518709414026-cfce69b3d5ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          url: '#'
        }
      ]
    }
  };

  const currentContent = content[language];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isArabic ? 'font-arabic' : ''}`}>
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 ${isArabic ? 'text-right' : ''}`}>
            {currentContent.title}
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${isArabic ? 'text-right' : ''}`}>
            {currentContent.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentContent.projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button 
                      size="sm" 
                      className="w-full bg-white text-gray-900 hover:bg-gray-100"
                      onClick={() => window.open(project.url, '_blank')}
                    >
                      {currentContent.viewProject}
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className={`text-xl font-bold text-gray-900 mb-2 ${isArabic ? 'font-arabic text-right' : ''}`}>
                  {project.title}
                </h3>
                
                <p className={`text-gray-600 ${isArabic ? 'font-arabic text-right' : ''}`}>
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
