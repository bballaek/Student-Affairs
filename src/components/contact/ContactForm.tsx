"use client";

import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:studentaffairs.edu@chula.ac.th?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`จาก: ${formData.name}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="relative">
      <h3 className="font-heading font-bold text-2xl text-gray-900 mb-6">
        {t('contact.form.h3')}
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block font-sans text-sm font-semibold text-gray-700 mb-2">
            {t('contact.form.name.label')}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={t('contact.form.name.placeholder')}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-sans outline-none"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block font-sans text-sm font-semibold text-gray-700 mb-2">
            {t('contact.form.subject.label')}
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder={t('contact.form.subject.placeholder')}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-sans outline-none"
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-sans text-sm font-semibold text-gray-700 mb-2">
            {t('contact.form.message.label')}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t('contact.form.message.placeholder')}
            required
            rows={5}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-sans outline-none resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-4 rounded-xl hover:bg-gray-900 transition-colors duration-200 flex items-center justify-center gap-2 font-heading font-normal"
        >
          <Send className="w-5 h-5" />
          {t('contact.form.submit')}
        </button>
      </form>
    </div>
  );
}
