'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

type UniversityCardProps = {
  university: {
    id: string;
    name: string;
    originalName: string;
    country: string;
    city: string;
    costPerYear: number;
    programs: string[];
    campusImage: string;
  };
  onViewDetails: () => void;
};

const UniversityCard = ({ university, onViewDetails }: UniversityCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg transition-shadow hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48">
        <Image
          src={university.campusImage}
          alt={`${university.name} campus`}
          fill
          className="object-cover"
        />
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          >
            <button
              onClick={onViewDetails}
              className="bg-accent-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-accent-blue/90 transition-colors"
            >
              Подивитися програму
            </button>
          </motion.div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{university.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{university.originalName}</p>

        <div className="flex items-center mb-3">
          <span className="text-gray-600">
            {university.city}, {university.country}
          </span>
        </div>

        <div className="mb-4">
          <span className="text-accent-blue font-semibold">
            {university.costPerYear.toLocaleString()}$ в рік
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {university.programs.map((program) => (
            <span
              key={program}
              className="bg-accent-purple/10 text-accent-purple px-3 py-1 rounded-full text-sm"
            >
              {program}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default UniversityCard; 