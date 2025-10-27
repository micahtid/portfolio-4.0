'use client';

import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    title: '',
    description: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission - replace with actual API call if needed
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Here you would typically send the data to an API endpoint
      console.log('Form submitted:', formData);

      setSubmitStatus('success');
      setFormData({ email: '', title: '', description: '' });

      // Reset success message after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen section flex items-center justify-center">
      <div className="section-container w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left Column - Header and Description */}
          <div className="flex flex-col justify-start">
            <h2 className="header mb-6">Get In Touch</h2>
            <p className="text text-white/70 leading-relaxed">
              Have a project in mind or want to collaborate? I'd love to hear from you.
              Fill out the form and I'll get back to you as soon as possible.
            </p>
          </div>

          {/* Right Column - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="title"
                  placeholder="Subject / Title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="input"
                />
              </div>

              <div>
                <textarea
                  name="description"
                  placeholder="Your Message"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="input resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-400/80 text-sm">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-400/80 text-sm">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
