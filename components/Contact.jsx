'use client';

import { useState } from 'react';
import {
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  PhoneIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

const contactInfo = [
  {
    icon: EnvelopeIcon,
    label: 'Email',
    value: 'access@nmas.co.za',
    href: 'mailto:access@nmas.co.za',
  },
  {
    icon: ChatBubbleLeftRightIcon,
    label: 'WhatsApp',
    value: '+27 67 487 7278',
    href: 'https://wa.me/27674877278',
  },
  {
    icon: PhoneIcon,
    label: 'Phone',
    value: '+27 67 487 7278',
    href: 'tel:+27674877278',
  },
  {
    icon: ClockIcon,
    label: 'Hours',
    value: 'Mon-Fri: 8am - 5pm, Sat: 9am - 1pm',
    href: null,
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const formData = new FormData(e.target);
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const isDisabled =
    loading || !form.name.trim() || !form.email.trim() || !form.message.trim();

  return (
    <section id="contact" className="bg-charcoal py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Ready to secure your premises? Contact us for a free consultation
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left – Contact Info */}
          <div className="card p-8">
            <h3 className="text-gold-primary text-2xl font-bold mb-6 font-heading">
              Contact Information
            </h3>

            <div className="space-y-6">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-gold-primary" />
                    </div>
                    <div>
                      <p className="text-grey-metal text-sm">{item.label}</p>
                      <p className="text-white-clean font-medium text-sm">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      item.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    className="block hover:opacity-80 transition-all duration-300"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>

            <div className="mt-8 p-4 bg-gold-primary/5 border border-gold-primary/20 rounded-lg">
              <p className="text-sm text-gold-primary">
                🚀 Emergency support available 24/7 for existing clients
              </p>
            </div>
          </div>

          {/* Right – Form */}
          <div className="card p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <input type="hidden" name="access_key" value="55991955-afb0-4f42-852a-1ba2e8d5dd48" />
              <input type="hidden" name="subject" value="New Contact Form Submission from NMAS Website" />
              <input type="hidden" name="replyto" value={form.email} />

              <div>
                <label
                  htmlFor="name"
                  className="block text-white-clean text-sm font-medium mb-2"
                >
                  Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-black-main border border-grey-metal/50 rounded-lg focus:ring-2 focus:ring-gold-primary focus:border-transparent text-white-clean placeholder-grey-metal/60 outline-none transition-all duration-300"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-white-clean text-sm font-medium mb-2"
                >
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-black-main border border-grey-metal/50 rounded-lg focus:ring-2 focus:ring-gold-primary focus:border-transparent text-white-clean placeholder-grey-metal/60 outline-none transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-white-clean text-sm font-medium mb-2"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-black-main border border-grey-metal/50 rounded-lg focus:ring-2 focus:ring-gold-primary focus:border-transparent text-white-clean placeholder-grey-metal/60 outline-none transition-all duration-300"
                  placeholder="+27 XX XXX XXXX"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-white-clean text-sm font-medium mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-black-main border border-grey-metal/50 rounded-lg focus:ring-2 focus:ring-gold-primary focus:border-transparent text-white-clean placeholder-grey-metal/60 outline-none transition-all duration-300 resize-none"
                  placeholder="Tell us about your security needs..."
                />
              </div>

              <button
                type="submit"
                disabled={isDisabled}
                className="btn-primary w-full"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <div className="p-3 rounded-lg bg-green-900/50 text-green-400 border border-green-500 text-sm">
                  Thank you! We will contact you shortly.
                </div>
              )}

              {status === 'error' && (
                <div className="p-3 rounded-lg bg-red-900/50 text-red-400 border border-red-500 text-sm">
                  Something went wrong. Please try again or WhatsApp us.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
