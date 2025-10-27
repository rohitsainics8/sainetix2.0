import React, { useState } from 'react';
import WhatsAppIcon from './icons/WhatsAppIcon';
import RocketIcon from './icons/RocketIcon';

const WhatsAppToggle: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "919528421225";
  const message = "Hello, I'm interested in your services.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* Chat Widget */}
      {isOpen && (
        <div 
          className="fixed bottom-24 right-6 z-40 w-80 max-w-[calc(100vw-3rem)] bg-zinc-900 rounded-xl shadow-2xl border border-white/10"
          style={{ animation: 'slideInUp 0.3s ease-out forwards' }}
        >
          {/* Header */}
          <div className="bg-zinc-800 p-4 rounded-t-xl flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="bg-indigo-600 p-2 rounded-full">
                <RocketIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white text-md">Sainetix</h3>
                <p className="text-xs text-zinc-400">Online</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white text-2xl font-bold">&times;</button>
          </div>
          
          {/* Body */}
          <div className="p-4">
            <div className="bg-zinc-800 p-3 rounded-lg max-w-max">
              <p className="text-sm text-zinc-200">Hello! 👋<br />How can we help you today?</p>
            </div>
          </div>
          
          {/* Footer */}
          <div className="p-4 border-t border-white/10">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 bg-[#25D366] text-white font-bold py-3 px-4 rounded-lg text-center transition-transform hover:scale-105"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>Start Chat</span>
            </a>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle WhatsApp chat"
        className={`fixed bottom-6 right-6 z-50 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg transform transition-all hover:scale-110 ${isOpen ? 'bg-indigo-600' : 'bg-[#25D366] animate-[whatsapp-float_3s_ease-in-out_infinite]'}`}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <WhatsAppIcon className="w-8 h-8" />
        )}
      </button>
    </>
  );
};

export default WhatsAppToggle;
