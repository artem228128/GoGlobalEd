'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardIcon, UserGroupIcon, DocumentTextIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const steps = [
  {
    icon: ClipboardIcon,
    title: 'Заявка на сайті',
    description: 'Заповніть форму і ми зв\'яжемося з вами',
  },
  {
    icon: UserGroupIcon,
    title: 'Безкоштовна консультація',
    description: 'Обговоримо ваші цілі та можливості',
  },
  {
    icon: DocumentTextIcon,
    title: 'Оформлення документів',
    description: 'Допоможемо зібрати та подати документи',
  },
  {
    icon: GlobeAltIcon,
    title: 'Віза + підготовка',
    description: 'Супровід до моменту переїзду',
  },
];

export default function Process() {
  return (
    <section className="py-20 bg-off-white">
      <div className="container">
        <h2 className="heading-2 text-center mb-16">
          Всього 4 кроки до навчання за кордоном
        </h2>
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 hidden lg:block" />
          <div className="absolute top-1/2 left-0 h-1 bg-accent-blue -translate-y-1/2 hidden lg:block" style={{ width: '25%' }} />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-4 relative z-10">
                    <step.icon className="w-8 h-8 text-accent-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 