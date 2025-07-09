'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const UniversityFinderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    contact: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center p-8 bg-white rounded-xl shadow-lg"
      >
        <h3 className="text-2xl font-bold text-accent-blue mb-4">
          Дякуємо за заявку!
        </h3>
        <p className="text-gray-600">
          Наш консультант зв'яжеться з вами найближчим часом для підбору
          найкращого варіанту навчання.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-8 rounded-xl shadow-lg"
      onSubmit={handleSubmit}
    >
      <h3 className="text-2xl font-bold text-center mb-6">
        Підібрати мені університет
      </h3>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="name">
            Ім'я
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            placeholder="Введіть ваше ім'я"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="country">
            Бажана країна навчання
          </label>
          <select
            id="country"
            name="country"
            required
            value={formData.country}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          >
            <option value="">Оберіть країну</option>
            <option value="США">США 🇺🇸</option>
            <option value="Канада">Канада 🇨🇦</option>
            <option value="Німеччина">Німеччина 🇩🇪</option>
            <option value="Франція">Франція 🇫🇷</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="contact">
            Контактні дані
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            required
            value={formData.contact}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            placeholder="Email або номер телефону"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full mt-6 bg-accent-blue text-white py-3 rounded-lg font-medium hover:bg-accent-blue/90 transition-colors"
      >
        Знайти університет
      </button>
    </motion.form>
  );
};

export default UniversityFinderForm; 