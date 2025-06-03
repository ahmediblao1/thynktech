
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialsProps {
  language: 'en' | 'ar';
}

export const Testimonials: React.FC<TestimonialsProps> = ({ language }) => {
  const isArabic = language === 'ar';

  const content = {
    en: {
      title: 'What Our Clients Say',
      subtitle: 'Real feedback from businesses we\'ve helped transform digitally',
      testimonials: [
        {
          name: 'Ahmed Al-Mansouri',
          position: 'CEO, Libya Tech Solutions',
          content: 'ThynkTech transformed our outdated website into a modern, fast, and user-friendly platform. Our online sales increased by 300% within the first quarter.',
          rating: 5
        },
        {
          name: 'Fatima Benali',
          position: 'Marketing Director, Tripoli Retail',
          content: 'The team at ThynkTech understood our vision perfectly. They delivered a beautiful e-commerce platform that exceeded all our expectations.',
          rating: 5
        },
        {
          name: 'Omar Khalil',
          position: 'Founder, Benghazi Startup',
          content: 'Professional, reliable, and innovative. ThynkTech helped us launch our digital presence with a stunning website and effective SEO strategy.',
          rating: 5
        }
      ]
    },
    ar: {
      title: 'ما يقوله عملاؤنا',
      subtitle: 'تقييمات حقيقية من الشركات التي ساعدناها في التحول الرقمي',
      testimonials: [
        {
          name: 'أحمد المنصوري',
          position: 'الرئيس التنفيذي، ليبيا تك سوليوشنز',
          content: 'ثِنك تك حولت موقعنا القديم إلى منصة حديثة وسريعة وسهلة الاستخدام. زادت مبيعاتنا الإلكترونية بنسبة 300% خلال الربع الأول.',
          rating: 5
        },
        {
          name: 'فاطمة بن علي',
          position: 'مديرة التسويق، طرابلس للتجزئة',
          content: 'فريق ثِنك تك فهم رؤيتنا بشكل مثالي. قدموا منصة تجارة إلكترونية جميلة فاقت كل توقعاتنا.',
          rating: 5
        },
        {
          name: 'عمر خليل',
          position: 'مؤسس، بنغازي ستارت أب',
          content: 'محترفون وموثوقون ومبدعون. ثِنك تك ساعدتنا في إطلاق حضورنا الرقمي بموقع مذهل واستراتيجية SEO فعالة.',
          rating: 5
        }
      ]
    }
  };

  const currentContent = content[language];

  return (
    <section className="py-20 bg-white">
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
          {currentContent.testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className={`text-gray-700 mb-6 leading-relaxed ${isArabic ? 'font-arabic text-right' : ''}`}>
                "{testimonial.content}"
              </p>
              
              <div className={`${isArabic ? 'text-right' : ''}`}>
                <div className={`font-bold text-gray-900 ${isArabic ? 'font-arabic' : ''}`}>
                  {testimonial.name}
                </div>
                <div className={`text-gray-600 text-sm ${isArabic ? 'font-arabic' : ''}`}>
                  {testimonial.position}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
