'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AcademicCapIcon, UserGroupIcon, BriefcaseIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const audiences = [
  {
    icon: AcademicCapIcon,
    title: 'Школярам',
    description: 'Поступление после 11 класса',
  },
  {
    icon: UserGroupIcon,
    title: 'Студентам',
    description: 'Бакалавр/магістратура',
  },
  {
    icon: BriefcaseIcon,
    title: 'Дорослим',
    description: 'Перекваліфікація, друга освіта',
  },
  {
    icon: GlobeAltIcon,
    title: 'Тим, хто хоче виїхати',
    description: 'Через навчання',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

export default function Audience() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <h2 className="heading-2 text-center mb-12">
          Допомагаємо всім, хто мріє про освіту за кордоном
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-off-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <item.icon className="w-12 h-12 text-accent-blue mb-4" />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 