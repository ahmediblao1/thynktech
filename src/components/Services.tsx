
import React from 'react';
import { Code, Image, Star, Shield, Users, Contact } from 'lucide-react';

interface ServicesProps {
  language: 'en' | 'ar';
}

export const Services: React.FC<ServicesProps> = ({ language }) => {
  const isArabic = language === 'ar';

  const content = {
    en: {
      title: 'Our Services',
      subtitle: 'Comprehensive digital solutions tailored for your success',
      services: [
        {
          icon: Code,
          title: 'Custom Website Development',
          description: 'Modern, responsive websites built with the latest technologies. From simple landing pages to complex web applications.',
          features: ['Responsive Design', 'Fast Loading', 'SEO Optimized']
        },
        {
          icon: Image,
          title: 'UI/UX Design',
          description: 'User-centered design that combines aesthetics with functionality. Creating interfaces that users love to interact with.',
          features: ['User Research', 'Wireframing', 'Prototyping']
        },
        {
          icon: Star,
          title: 'SEO & Digital Marketing',
          description: 'Boost your online presence with proven SEO strategies and targeted digital marketing campaigns.',
          features: ['Keyword Research', 'Content Strategy', 'Analytics']
        },
        {
          icon: Shield,
          title: 'Branding',
          description: 'Complete brand identity solutions from logo design to brand guidelines that make your business memorable.',
          features: ['Logo Design', 'Brand Guidelines', 'Marketing Materials']
        },
        {
          icon: Users,
          title: 'Tech Consulting',
          description: 'Strategic technology guidance to help your business make informed decisions about digital transformation.',
          features: ['Technology Audit', 'Strategy Planning', 'Implementation']
        },
        {
          icon: Contact,
          title: 'Maintenance & Support',
          description: '24/7 technical support and regular maintenance to keep your digital assets running smoothly.',
          features: ['24/7 Support', 'Regular Updates', 'Security Monitoring']
        }
      ]
    },
    ar: {
      title: 'خدماتنا',
      subtitle: 'حلول رقمية شاملة مصممة لنجاحك',
      services: [
        {
          icon: Code,
          title: 'تطوير المواقع المخصصة',
          description: 'مواقع حديثة ومتجاوبة مبنية بأحدث التقنيات. من الصفحات البسيطة إلى تطبيقات الويب المعقدة.',
          features: ['تصميم متجاوب', 'تحميل سريع', 'محسن لمحركات البحث']
        },
        {
          icon: Image,
          title: 'تصميم واجهات المستخدم',
          description: 'تصميم محوره المستخدم يجمع بين الجمالية والوظائف. إنشاء واجهات يحب المستخدمون التفاعل معها.',
          features: ['بحث المستخدم', 'إطار سلكي', 'نماذج أولية']
        },
        {
          icon: Star,
          title: 'تحسين محركات البحث والتسويق الرقمي',
          description: 'عزز حضورك الرقمي مع استراتيجيات SEO المثبتة وحملات التسويق الرقمي المستهدفة.',
          features: ['بحث الكلمات المفتاحية', 'استراتيجية المحتوى', 'التحليلات']
        },
        {
          icon: Shield,
          title: 'الهوية التجارية',
          description: 'حلول هوية العلامة التجارية الكاملة من تصميم الشعار إلى إرشادات العلامة التجارية التي تجعل عملك لا يُنسى.',
          features: ['تصميم الشعار', 'إرشادات العلامة التجارية', 'مواد تسويقية']
        },
        {
          icon: Users,
          title: 'الاستشارات التقنية',
          description: 'إرشادات تقنية استراتيجية لمساعدة عملك على اتخاذ قرارات مدروسة حول التحول الرقمي.',
          features: ['تدقيق التكنولوجيا', 'تخطيط الاستراتيجية', 'التنفيذ']
        },
        {
          icon: Contact,
          title: 'الصيانة والدعم',
          description: 'دعم فني 24/7 وصيانة منتظمة للحفاظ على أصولك الرقمية تعمل بسلاسة.',
          features: ['دعم 24/7', 'تحديثات منتظمة', 'مراقبة الأمان']
        }
      ]
    }
  };

  const currentContent = content[language];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isArabic ? 'font-arabic' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            {currentContent.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            {currentContent.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentContent.services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100 hover:border-purple-200"
            >
              <div className="w-16 h-16 bg-tech-gradient rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className={`text-xl font-bold text-gray-900 mb-4 ${isArabic ? 'font-arabic text-right' : 'text-left'}`}>
                {service.title}
              </h3>
              
              <p className={`text-gray-600 leading-relaxed mb-4 ${isArabic ? 'font-arabic text-right' : 'text-left'}`}>
                {service.description}
              </p>

              <ul className={`space-y-2 ${isArabic ? 'text-right' : 'text-left'}`}>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className={`w-1.5 h-1.5 bg-purple-500 rounded-full ${isArabic ? 'ml-2' : 'mr-2'}`}></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
