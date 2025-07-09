'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/universities.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 h-full">
        <div className="container h-full flex flex-col justify-center items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="heading-1 text-white mb-6">
              Навчання за кордоном — твій перший крок до великого майбутнього
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Ми допоможемо вступити у ВНЗ США, Канади, Європи. З документами, візою і адаптацією.
            </p>
            <button
              onClick={() => {
                const form = document.getElementById('contact-form');
                form?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary text-lg"
            >
              Записатися на безкоштовну консультацію
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 