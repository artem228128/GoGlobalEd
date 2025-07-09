'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

type UniversityModalProps = {
  university: {
    name: string;
    originalName: string;
    country: string;
    city: string;
    costPerYear: number;
    programs: string[];
    campusImage: string;
    level: string;
    deadlines: string;
    requirements: string;
    scholarships: string;
    videoTourUrl?: string;
  };
  onClose: () => void;
};

const UniversityModal = ({ university, onClose }: UniversityModalProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="bg-white rounded-xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
      >
        ✕
      </button>

      <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
        <Image
          src={university.campusImage}
          alt={`${university.name} campus`}
          fill
          className="object-cover"
        />
      </div>

      <h2 className="text-3xl font-bold mb-2">{university.name}</h2>
      <p className="text-xl text-gray-600 mb-6">{university.originalName}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Основна інформація</h3>
          <div className="space-y-3">
            <p>
              <span className="font-medium">Місто:</span> {university.city},{' '}
              {university.country}
            </p>
            <p>
              <span className="font-medium">Вартість навчання:</span>{' '}
              {university.costPerYear.toLocaleString()}$ в рік
            </p>
            <p>
              <span className="font-medium">Рівень:</span> {university.level}
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Дедлайни подачі</h3>
          <p className="whitespace-pre-line">{university.deadlines}</p>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Умови вступу</h3>
        <p className="whitespace-pre-line">{university.requirements}</p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Можливості стипендій</h3>
        <p className="whitespace-pre-line">{university.scholarships}</p>
      </div>

      {university.videoTourUrl && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Відео-тур кампусом</h3>
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <iframe
              src={university.videoTourUrl}
              title="Campus Tour"
              className="absolute inset-0 w-full h-full"
              allowFullScreen
            />
          </div>
        </div>
      )}

      <div className="flex justify-center">
        <button
          onClick={() => {
            // Handle application submission
            console.log('Submit application for:', university.name);
          }}
          className="bg-accent-blue text-white px-8 py-4 rounded-lg font-medium hover:bg-accent-blue/90 transition-colors text-lg"
        >
          Хочу подати заявку
        </button>
      </div>
    </motion.div>
  );
};

export default UniversityModal; 