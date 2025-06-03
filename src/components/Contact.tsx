
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MessageSquare } from 'lucide-react';

interface ContactProps {
  language: 'en' | 'ar';
}

export const Contact: React.FC<ContactProps> = ({ language }) => {
  const isArabic = language === 'ar';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const content = {
    en: {
      title: 'Let\'s Build Something Amazing',
      subtitle: 'Ready to transform your digital presence? Get in touch with us today.',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        company: 'Company Name',
        message: 'Tell us about your project',
        submit: 'Send Message'
      },
      whatsapp: 'Chat on WhatsApp',
      contact: {
        title: 'Get in Touch',
        email: 'ornardoxx@gmail.com',
        phone: '+218 93 053 8733',
        address: 'Tripoli, Libya'
      }
    },
    ar: {
      title: 'لنبني شيئاً مذهلاً معاً',
      subtitle: 'مستعد لتحويل حضورك الرقمي؟ تواصل معنا اليوم.',
      form: {
        name: 'الاسم الكامل',
        email: 'البريد الإلكتروني',
        company: 'اسم الشركة',
        message: 'أخبرنا عن مشروعك',
        submit: 'إرسال الرسالة'
      },
      whatsapp: 'تحدث عبر الواتساب',
      contact: {
        title: 'تواصل معنا',
        email: 'ornardoxx@gmail.com',
        phone: '+218 93 053 8733',
        address: 'طرابلس، ليبيا'
      }
    }
  };

  const currentContent = content[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email with form data
    const emailSubject = encodeURIComponent(`New Contact Form Submission from ${formData.name}`);
    const emailBody = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Message: ${formData.message}
    `);
    
    // Open email client
    window.location.href = `mailto:ornardoxx@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isArabic ? 'font-arabic' : ''}`}>
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 ${isArabic ? 'text-right' : ''}`}>
            {currentContent.title}
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${isArabic ? 'text-right' : ''}`}>
            {currentContent.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className={`${isArabic ? 'font-arabic order-2 lg:order-1' : 'order-1'}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Input
                    placeholder={currentContent.form.name}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder={currentContent.form.email}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                    required
                  />
                </div>
              </div>
              
              <div>
                <Input
                  placeholder={currentContent.form.company}
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
              </div>
              
              <div>
                <Textarea
                  placeholder={currentContent.form.message}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-tech-gradient hover:bg-tech-gradient-reverse text-white py-6 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                {currentContent.form.submit}
              </Button>
            </form>
          </div>

          <div className={`${isArabic ? 'font-arabic order-1 lg:order-2' : 'order-2'}`}>
            <div className="bg-gray-800 p-8 rounded-2xl">
              <h3 className={`text-2xl font-bold text-white mb-6 ${isArabic ? 'text-right' : ''}`}>
                {currentContent.contact.title}
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className={`${isArabic ? 'text-right' : ''}`}>
                  <div className="text-gray-400 text-sm mb-1">Email</div>
                  <div className="text-white">{currentContent.contact.email}</div>
                </div>
                <div className={`${isArabic ? 'text-right' : ''}`}>
                  <div className="text-gray-400 text-sm mb-1">Phone</div>
                  <div className="text-white">{currentContent.contact.phone}</div>
                </div>
                <div className={`${isArabic ? 'text-right' : ''}`}>
                  <div className="text-gray-400 text-sm mb-1">Location</div>
                  <div className="text-white">{currentContent.contact.address}</div>
                </div>
              </div>
              
              <Button 
                className="w-full bg-green-500 hover:bg-green-600 text-white py-6 text-lg font-semibold rounded-xl transition-all duration-300"
                onClick={() => window.open('https://wa.me/218930538733', '_blank')}
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                {currentContent.whatsapp}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
