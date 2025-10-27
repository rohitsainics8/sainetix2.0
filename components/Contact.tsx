// Fix: Redesigned the Contact page with a cleaner layout and updated form styles.
import React from 'react';
import AnimatedSection from './AnimatedSection';
import PhoneIcon from './icons/PhoneIcon';
import EmailIcon from './icons/EmailIcon';
import WhatsAppIcon from './icons/WhatsAppIcon';

// Placeholder contact info
const contactDetails = {
  phone: {
    display: '+91 95284 21225',
    link: 'tel:+919528421225',
  },
  email: {
    display: 'info@sainetix.com',
    link: 'mailto:info@sainetix.com',
  },
  whatsapp: {
    display: 'Chat on WhatsApp',
    link: 'https://wa.me/919528421225',
  },
};

const ContactPage: React.FC = () => {
  return (
    <div className="py-24 pt-36 min-h-screen flex items-center">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Get In Touch</h2>
              <p className="text-lg text-zinc-400">
                Have a project in mind, a question, or just want to say hello? Reach out to us through any of the channels below.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay="delay-200">
            <div className="space-y-6">
              {/* Phone */}
              <a href={contactDetails.phone.link} className="group block bg-white/5 border border-white/10 p-6 rounded-xl shadow-lg transition-all hover:border-indigo-500/50 hover:bg-white/10">
                <div className="flex items-center space-x-5">
                  <div className="flex-shrink-0 bg-zinc-800 p-4 rounded-full border border-zinc-700 group-hover:bg-indigo-600/20 group-hover:border-indigo-500 transition-colors">
                    <PhoneIcon className="w-6 h-6 text-indigo-400"/>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Call Us</h3>
                    <p className="text-lg text-zinc-300 group-hover:text-indigo-300 transition-colors">{contactDetails.phone.display}</p>
                  </div>
                </div>
              </a>

              {/* Email */}
              <a href={contactDetails.email.link} className="group block bg-white/5 border border-white/10 p-6 rounded-xl shadow-lg transition-all hover:border-indigo-500/50 hover:bg-white/10">
                <div className="flex items-center space-x-5">
                  <div className="flex-shrink-0 bg-zinc-800 p-4 rounded-full border border-zinc-700 group-hover:bg-indigo-600/20 group-hover:border-indigo-500 transition-colors">
                    <EmailIcon className="w-6 h-6 text-indigo-400"/>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Email Us</h3>
                    <p className="text-lg text-zinc-300 group-hover:text-indigo-300 transition-colors">{contactDetails.email.display}</p>
                  </div>
                </div>
              </a>

              {/* WhatsApp */}
              <a href={contactDetails.whatsapp.link} target="_blank" rel="noopener noreferrer" className="group block bg-white/5 border border-white/10 p-6 rounded-xl shadow-lg transition-all hover:border-indigo-500/50 hover:bg-white/10">
                <div className="flex items-center space-x-5">
                  <div className="flex-shrink-0 bg-zinc-800 p-4 rounded-full border border-zinc-700 group-hover:bg-indigo-600/20 group-hover:border-indigo-500 transition-colors">
                    <WhatsAppIcon className="w-6 h-6 text-indigo-400"/>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Message Us</h3>
                    <p className="text-lg text-zinc-300 group-hover:text-indigo-300 transition-colors">{contactDetails.whatsapp.display}</p>
                  </div>
                </div>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
