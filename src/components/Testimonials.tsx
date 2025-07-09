'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const testimonials = [
  {
    name: 'Олена Петренко',
    university: 'University of Toronto',
    country: '🇨🇦',
    image: '/images/testimonial-1.jpg',
    text: 'Завдяки GoGlobalEd я здійснила свою мрію про навчання в Канаді. Команда допомогла з усіма документами та візою.',
  },
  {
    name: 'Максим Ковальчук',
    university: 'TU Munich',
    country: '🇩🇪',
    image: '/images/testimonial-2.jpg',
    text: 'Професійний підхід та підтримка на кожному етапі. Дуже вдячний за допомогу з вступом до університету в Німеччині.',
  },
  {
    name: 'Анна Мельник',
    university: 'Boston University',
    country: '🇺🇸',
    image: '/images/testimonial-3.jpg',
    text: 'Чудова команда професіоналів. Допомогли не тільки з документами, але й з адаптацією на місці.',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <h2 className="heading-2 text-center mb-16">
          Вони вже навчаються за кордоном
        </h2>
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="bg-off-white rounded-xl p-8 shadow-sm"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 relative shrink-0">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="absolute bottom-0 right-0 text-2xl">
                    {testimonials[currentIndex].country}
                  </span>
                </div>
                <div>
                  <blockquote className="text-lg mb-4">
                    "{testimonials[currentIndex].text}"
                  </blockquote>
                  <div className="font-bold">{testimonials[currentIndex].name}</div>
                  <div className="text-accent-blue">
                    {testimonials[currentIndex].university}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-accent-blue' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 