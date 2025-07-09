'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: 'Чи можна навчатися без знання мови?',
    answer: 'Так, багато університетів пропонують підготовчі мовні курси. Ми допоможемо підібрати програму відповідно до вашого рівня мови.',
  },
  {
    question: 'Як отримати стипендію?',
    answer: 'Існує багато можливостей отримати стипендію: академічні досягнення, спортивні успіхи, гранти від університетів та фондів. Ми допоможемо знайти та оформити заявку на відповідні стипендії.',
  },
  {
    question: 'Чи допомагаєте з візою?',
    answer: 'Так, ми надаємо повний супровід у процесі отримання студентської візи, включаючи підготовку документів та консультацію перед співбесідою.',
  },
  {
    question: 'Можна влаштуватися на роботу під час навчання?',
    answer: 'У більшості країн студенти можуть працювати під час навчання з певними обмеженнями. Ми розповімо про умови роботи в конкретній країні та допоможемо з оформленням необхідних дозволів.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-off-white">
      <div className="container max-w-3xl">
        <h2 className="heading-2 text-center mb-12">
          Вам можуть бути корисні ці відповіді:
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-medium text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <MinusIcon className="w-5 h-5 text-accent-blue" />
                ) : (
                  <PlusIcon className="w-5 h-5 text-accent-blue" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 