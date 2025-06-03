
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
          name: 'Captain Ahmed Al-Mansouri',
          position: 'CEO, Sky Libya Aviation',
          content: 'ThynkTech delivered an outstanding website that perfectly represents our aviation services. The booking system is smooth and our customers love the user experience.',
          rating: 5
        },
        {
          name: 'Marco Rossi',
          position: 'Owner, Solo Makarna Restaurant',
          content: 'Our restaurant website exceeded all expectations. The online ordering system has increased our sales significantly, and the design perfectly captures our Italian heritage.',
          rating: 5
        },
        {
          name: 'Dr. Fatima Benali',
          position: 'Director, Benghazi Medical Center',
          content: 'The healthcare platform ThynkTech built for us has revolutionized how we manage patient appointments and medical records. Highly professional team.',
          rating: 5
        },
        {
          name: 'Omar Khalil',
          position: 'Manager, Libya Trade Center',
          content: 'Professional, reliable, and innovative. ThynkTech helped us establish a strong digital presence with a multilingual corporate website that serves our international clients.',
          rating: 5
        },
        {
          name: 'Eng. Sarah Al-Zawiya',
          position: 'Tech Director, Tripoli Tech Hub',
          content: 'The educational platform they developed has enabled us to reach thousands of students across Libya. The technology stack is robust and scalable.',
          rating: 5
        }
      ]
    },
    ar: {
      title: 'ما يقوله عملاؤنا',
      subtitle: 'تقييمات حقيقية من الشركات التي ساعدناها في التحول الرقمي',
      testimonials: [
        {
          name: 'الكابتن أحمد المنصوري',
          position: 'الرئيس التنفيذي، سكاي ليبيا للطيران',
          content: 'ثِنك تك قدمت موقعاً إلكترونياً متميزاً يمثل خدماتنا الجوية بشكل مثالي. نظام الحجز سلس وعملاؤنا يحبون تجربة المستخدم.',
          rating: 5
        },
        {
          name: 'ماركو روسي',
          position: 'مالك مطعم سولو مكرونة',
          content: 'موقع مطعمنا فاق كل التوقعات. نظام الطلب الإلكتروني زاد مبيعاتنا بشكل كبير، والتصميم يعكس تراثنا الإيطالي بشكل مثالي.',
          rating: 5
        },
        {
          name: 'د. فاطمة بن علي',
          position: 'مديرة المركز الطبي بنغازي',
          content: 'المنصة الصحية التي بناها ثِنك تك غيرت طريقة إدارتنا لمواعيد المرضى والسجلات الطبية. فريق محترف جداً.',
          rating: 5
        },
        {
          name: 'عمر خليل',
          position: 'مدير مركز ليبيا التجاري',
          content: 'محترفون وموثوقون ومبدعون. ثِنك تك ساعدتنا في تأسيس حضور رقمي قوي بموقع شركة متعدد اللغات يخدم عملاءنا الدوليين.',
          rating: 5
        },
        {
          name: 'م. سارة الزاوية',
          position: 'مديرة تقنية، مركز طرابلس التقني',
          content: 'المنصة التعليمية التي طوروها مكنتنا من الوصول لآلاف الطلاب عبر ليبيا. المجموعة التقنية قوية وقابلة للتطوير.',
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
          {currentContent.testimonials.slice(0, 3).map((testimonial, index) => (
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
