
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { TechStack } from '@/components/TechStack';
import { Portfolio } from '@/components/Portfolio';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';

const Index = () => {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  return (
    <div className={`min-h-screen ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <Header language={language} onLanguageToggle={toggleLanguage} />
      <Hero language={language} />
      <About language={language} />
      <Services language={language} />
      <TechStack language={language} />
      <Portfolio language={language} />
      <Testimonials language={language} />
      <Contact language={language} />
      <Footer language={language} />
      <WhatsAppFloat language={language} />
    </div>
  );
};

export default Index;
