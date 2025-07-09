'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const countries = ['США', 'Канада', 'Великобританія', 'Німеччина', 'Польща', 'Інші'];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    country: '',
    comment: '',
    useTelegram: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Введіть ваше ім\'я';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Введіть номер телефону';
    } else if (!/^\+?[\d\s-()]+$/.test(formData.phone)) {
      newErrors.phone = 'Некоректний формат телефону';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Введіть email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Некоректний формат email';
    }

    if (!formData.country) {
      newErrors.country = 'Оберіть країну';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    // Reset form after successful submission
    setFormData({
      name: '',
      phone: '',
      email: '',
      country: '',
      comment: '',
      useTelegram: false,
    });
  };

  return (
    <section id="contact-form" className="py-20 bg-gradient-to-br from-accent-blue to-accent-purple">
      <div className="container max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-8 shadow-lg"
        >
          <h2 className="heading-2 text-center mb-8">
            Отримай 3 варіанти програм, що підходять саме тобі
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Ім'я *
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-accent-blue`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Телефон *
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-accent-blue`}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-accent-blue`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                Країна, яка цікава *
              </label>
              <select
                id="country"
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.country ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-accent-blue`}
              >
                <option value="">Оберіть країну</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              {errors.country && (
                <p className="mt-1 text-sm text-red-500">{errors.country}</p>
              )}
            </div>

            <div>
              <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                Коментар
              </label>
              <textarea
                id="comment"
                value={formData.comment}
                onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-blue"
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="useTelegram"
                checked={formData.useTelegram}
                onChange={(e) => setFormData({ ...formData, useTelegram: e.target.checked })}
                className="h-4 w-4 text-accent-blue focus:ring-accent-blue border-gray-300 rounded"
              />
              <label htmlFor="useTelegram" className="ml-2 block text-sm text-gray-700">
                Надіслати заявку через Telegram
              </label>
            </div>

            <button
              type="submit"
              className="w-full btn-primary text-lg py-4"
            >
              Підібрати програму
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
} 