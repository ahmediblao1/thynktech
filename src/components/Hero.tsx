
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  language: 'en' | 'ar';
}

export const Hero: React.FC<HeroProps> = ({ language }) => {
  const isArabic = language === 'ar';

  const content = {
    en: {
      headline: 'Build. Launch. Grow.',
      subheadline: 'Your Digital Partner in Libya',
      description: 'We transform ideas into exceptional digital experiences. From custom websites to complete digital strategies, ThynkTech delivers cutting-edge solutions that drive your business forward.',
      cta: 'Start Your Project',
      learnMore: 'Learn More'
    },
    ar: {
      headline: 'نبني. نطلق. ننمو.',
      subheadline: 'شريكك الرقمي في ليبيا',
      description: 'نحول الأفكار إلى تجارب رقمية استثنائية. من المواقع المخصصة إلى الاستراتيجيات الرقمية الكاملة، ثِنك تك تقدم حلولاً متطورة تدفع عملك إلى الأمام.',
      cta: 'ابدأ مشروعك',
      learnMore: 'اعرف أكثر'
    }
  };

  const currentContent = content[language];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-blue-500/5 via-purple-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center max-w-4xl mx-auto ${isArabic ? 'font-arabic' : ''}`}>
          <h1 className={`text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in ${isArabic ? 'text-right' : ''}`}>
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              {currentContent.headline}
            </span>
          </h1>
          
          <h2 className={`text-xl md:text-2xl text-gray-300 mb-8 font-medium animate-fade-in ${isArabic ? 'text-right' : ''}`} style={{ animationDelay: '0.2s' }}>
            {currentContent.subheadline}
          </h2>
          
          <p className={`text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in ${isArabic ? 'text-right' : ''}`} style={{ animationDelay: '0.4s' }}>
            {currentContent.description}
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in ${isArabic ? 'flex-row-reverse' : ''}`} style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="bg-tech-gradient hover:bg-tech-gradient-reverse text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {currentContent.cta}
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300"
            >
              {currentContent.learnMore}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};
