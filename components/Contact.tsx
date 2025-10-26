// Fix: Redesigned the Contact page with a cleaner layout and updated form styles.
import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="py-24 pt-36 min-h-screen flex items-center">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Get In Touch</h2>
              <p className="text-lg text-zinc-400">
                Have a project in mind, a question, or just want to say hello? We’d love to hear from you.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay="delay-200">
            {submitted ? (
              <div className="text-center bg-white/5 border border-indigo-500/30 p-12 rounded-xl">
                <h3 className="text-3xl font-bold text-white mb-3">Thank You!</h3>
                <p className="text-zinc-300">Your message has been sent. We'll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 p-8 rounded-xl shadow-lg space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">Full Name</label>
                  <input type="text" name="name" id="name" required className="w-full bg-white/5 border-2 border-white/10 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all" onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">Email Address</label>
                  <input type="email" name="email" id="email" required className="w-full bg-white/5 border-2 border-white/10 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all" onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">Message</label>
                  <textarea name="message" id="message" rows={5} required className="w-full bg-white/5 border-2 border-white/10 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all" onChange={handleChange}></textarea>
                </div>
                <div className="text-center pt-2">
                   <button type="submit" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-10 rounded-lg shadow-lg shadow-indigo-600/30 transition-all transform hover:scale-105 text-lg">
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;