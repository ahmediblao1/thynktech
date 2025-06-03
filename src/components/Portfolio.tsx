
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
          title: 'E-commerce Platform',
          description: 'Modern online store with secure payments and inventory management',
          category: 'Web Development',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'Corporate Website',
          description: 'Professional business website with CMS and analytics',
          category: 'Web Design',
          image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'Mobile Banking App',
          description: 'Secure and user-friendly banking application',
          category: 'UI/UX Design',
          image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'Restaurant Management',
          description: 'Complete POS and inventory management system',
          category: 'Full Stack',
          image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'Educational Platform',
          description: 'Online learning platform with video streaming',
          category: 'Web Development',
          image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'Healthcare System',
          description: 'Patient management and appointment booking system',
          category: 'Full Stack',
          image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        }
      ]
    },
    ar: {
      title: 'أعمالنا',
      subtitle: 'عرض التحولات الرقمية الناجحة عبر ليبيا',
      viewProject: 'عرض المشروع',
      projects: [
        {
          title: 'منصة التجارة الإلكترونية',
          description: 'متجر إلكتروني حديث مع مدفوعات آمنة وإدارة المخزون',
          category: 'تطوير الويب',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'موقع الشركة',
          description: 'موقع أعمال احترافي مع نظام إدارة المحتوى والتحليلات',
          category: 'تصميم الويب',
          image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'تطبيق البنك المحمول',
          description: 'تطبيق مصرفي آمن وسهل الاستخدام',
          category: 'تصميم واجهات',
          image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'إدارة المطاعم',
          description: 'نظام كامل لنقاط البيع وإدارة المخزون',
          category: 'تطوير كامل',
          image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'منصة تعليمية',
          description: 'منصة تعلم إلكتروني مع بث الفيديو',
          category: 'تطوير الويب',
          image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'نظام الرعاية الصحية',
          description: 'إدارة المرضى ونظام حجز المواعيد',
          category: 'تطوير كامل',
          image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
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
                    <Button size="sm" className="w-full bg-white text-gray-900 hover:bg-gray-100">
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
