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

  const handleChange = (_e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = _e.target;
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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitStatus('success');
      setFormData({ email: '', title: '', description: '' });

      // Reset success message after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="h-full section flex items-center justify-center">
      <div className="section-container w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left Column - Header and Description */}
          <div className="flex flex-col justify-start">
            <h2 className="header mb-6">Get In Touch</h2>
            <p className="text contact-description leading-relaxed">
              Have a project in mind or want to collaborate? I&rsquo;d love to hear from you.
              Fill out the form and I&rsquo;ll get back to you as soon as possible.
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
                <p className="text-sm contact-success">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-sm contact-error">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
