
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  language: 'en' | 'ar';
}

export const Hero: React.FC<HeroProps> = ({ language }) => {
  const isArabic = language === 'ar';

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-blue-500/5 via-purple-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
        {/* Additional floating elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-indigo-500/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center max-w-4xl mx-auto ${isArabic ? 'font-arabic' : ''}`}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in text-center">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              {currentContent.headline}
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-300 mb-8 font-medium animate-fade-in text-center" style={{ animationDelay: '0.2s' }}>
            {currentContent.subheadline}
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in text-center" style={{ animationDelay: '0.4s' }}>
            {currentContent.description}
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in ${isArabic ? 'sm:flex-row-reverse' : ''}`} style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="bg-tech-gradient hover:bg-tech-gradient-reverse text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-purple-500/25"
              onClick={() => window.open('https://wa.me/218930538733', '_blank')}
            >
              {currentContent.cta}
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-500 px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-lg"
              onClick={scrollToContact}
            >
              {currentContent.learnMore}
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <ArrowDown size={24} />
        <div className="w-1 h-16 bg-gradient-to-b from-white/20 to-transparent mx-auto mt-2"></div>
      </div>
    </section>
  );
};
