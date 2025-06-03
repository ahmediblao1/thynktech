
import React from 'react';
import { Shield, Users, Star, Award, Clock, Globe } from 'lucide-react';

interface AboutProps {
  language: 'en' | 'ar';
}

export const About: React.FC<AboutProps> = ({ language }) => {
  const isArabic = language === 'ar';

  const content = {
    en: {
      title: 'About ThynkTech',
      subtitle: 'Your trusted digital transformation partner in Libya',
      description: 'Founded with a vision to bridge the digital gap in Libya, ThynkTech combines international expertise with local insights. We understand the unique challenges and opportunities in the Libyan market, delivering solutions that are both globally competitive and locally relevant.',
      mission: 'Our Mission',
      missionText: 'To empower Libyan businesses with cutting-edge digital solutions that drive growth, efficiency, and innovation in the digital age.',
      stats: [
        { icon: Users, number: '50+', label: 'Happy Clients' },
        { icon: Star, number: '100+', label: 'Projects Completed' },
        { icon: Shield, number: '5+', label: 'Years Experience' },
        { icon: Award, number: '24/7', label: 'Support Available' },
        { icon: Clock, number: '99%', label: 'Uptime Guarantee' },
        { icon: Globe, number: '3', label: 'Countries Served' }
      ]
    },
    ar: {
      title: 'عن ثِنك تك',
      subtitle: 'شريكك الموثوق في التحول الرقمي في ليبيا',
      description: 'تأسست ثِنك تك برؤية لسد الفجوة الرقمية في ليبيا، نجمع بين الخبرة الدولية والرؤى المحلية. نحن نفهم التحديات والفرص الفريدة في السوق الليبي، ونقدم حلولاً تنافسية عالمياً وذات صلة محلياً.',
      mission: 'مهمتنا',
      missionText: 'تمكين الشركات الليبية بحلول رقمية متطورة تدفع النمو والكفاءة والابتكار في العصر الرقمي.',
      stats: [
        { icon: Users, number: '+50', label: 'عميل سعيد' },
        { icon: Star, number: '+100', label: 'مشروع مكتمل' },
        { icon: Shield, number: '+5', label: 'سنوات خبرة' },
        { icon: Award, number: '24/7', label: 'دعم متاح' },
        { icon: Clock, number: '99%', label: 'ضمان وقت التشغيل' },
        { icon: Globe, number: '3', label: 'دول نخدمها' }
      ]
    }
  };

  const currentContent = content[language];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isArabic ? 'font-arabic' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            {currentContent.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            {currentContent.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`${isArabic ? 'font-arabic order-2 lg:order-1' : 'order-1'}`}>
            <p className={`text-lg text-gray-700 mb-8 leading-relaxed ${isArabic ? 'text-right' : 'text-left'}`}>
              {currentContent.description}
            </p>
            
            <div className={`bg-white p-8 rounded-2xl shadow-lg border-l-4 border-purple-500 ${isArabic ? 'text-right border-r-4 border-l-0' : 'border-l-4'}`}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {currentContent.mission}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {currentContent.missionText}
              </p>
            </div>
          </div>

          <div className={`${isArabic ? 'order-1 lg:order-2' : 'order-2'}`}>
            <div className="grid grid-cols-2 gap-6">
              {currentContent.stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-tech-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
