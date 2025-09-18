'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate form submission with potential failure
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate random success/failure for testing
          const shouldSucceed = Math.random() > 0.2; // 80% success rate
          if (shouldSucceed) {
            resolve(undefined);
          } else {
            reject(new Error('Network error or server unavailable'));
          }
        }, 1000);
      });
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <div className="w-full bg-background/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
      <h1 className="text-3xl font-bold text-foreground mb-2">Get in Touch</h1>
      <p className="text-foreground/80 mb-8">
        We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 rounded-lg bg-background/10 border text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:border-transparent transition-colors ${
                errors.name ? 'border-red-500 focus:ring-red-500' : 'border-white/20 focus:ring-blue-500'
              }`}
              placeholder="Your name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-400">{errors.name}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 rounded-lg bg-background/10 border text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:border-transparent transition-colors ${
                errors.email ? 'border-red-500 focus:ring-red-500' : 'border-white/20 focus:ring-blue-500'
              }`}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">{errors.email}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 rounded-lg bg-background/10 border text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:border-transparent transition-colors ${
              errors.subject ? 'border-red-500 focus:ring-red-500' : 'border-white/20 focus:ring-blue-500'
            }`}
            placeholder="What's this about?"
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-400">{errors.subject}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={formData.message}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 rounded-lg bg-background/10 border text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:border-transparent transition-colors resize-vertical ${
              errors.message ? 'border-red-500 focus:ring-red-500' : 'border-white/20 focus:ring-blue-500'
            }`}
            placeholder="Tell us more about your inquiry..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-400">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-red-600 text-white gap-2 hover:bg-red-700 font-medium text-sm sm:text-base h-12 px-8 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {submitStatus === 'success' && (
          <div className="p-4 rounded-lg bg-green-500/20 border border-green-500/30 text-green-400">
            <p className="font-medium">Message sent successfully!</p>
            <p className="text-sm opacity-90">We&apos;ll get back to you soon.</p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 rounded-lg bg-red-500/20 border border-red-500/30 text-red-400">
            <p className="font-medium">Failed to send message</p>
            <p className="text-sm opacity-90">Please try again or contact us directly.</p>
          </div>
        )}
      </form>
    </div>
  );
}