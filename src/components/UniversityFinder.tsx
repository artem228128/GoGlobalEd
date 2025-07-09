'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Format number utility
const formatNumber = (num: number) => {
  return num.toLocaleString('en-US');
};

// Types
type University = {
  id: string;
  name: string;
  originalName: string;
  country: string;
  city: string;
  costPerYear: number;
  programs: string[];
  campusImage: string;
  level: 'Bachelor' | 'Master' | 'Language';
  deadlines: string;
  requirements: string;
  scholarships: string;
  videoTourUrl?: string;
};

type Filters = {
  country: string;
  program: string;
  budget: number;
};

// Mock data
const COUNTRIES = [
  { code: 'US', name: 'США', flag: '🇺🇸' },
  { code: 'CA', name: 'Канада', flag: '🇨🇦' },
  { code: 'DE', name: 'Німеччина', flag: '🇩🇪' },
  { code: 'FR', name: 'Франція', flag: '🇫🇷' },
  { code: 'GB', name: 'Велика Британія', flag: '🇬🇧' },
];

const PROGRAMS = [
  'ІТ',
  'Бізнес',
  'Інженерія',
  'Дизайн',
  'Гуманітарні науки',
  'Медицина',
  'Право',
  'Міжнародні відносини',
];

const MOCK_UNIVERSITIES: University[] = [
  {
    id: '1',
    name: 'University of Toronto',
    originalName: 'University of Toronto',
    country: 'Канада',
    city: 'Торонто',
    costPerYear: 35000,
    programs: ['ІТ', 'Бізнес', 'Інженерія'],
    campusImage: 'https://dummyimage.com/800x400/4A90E2/ffffff&text=University+of+Toronto',
    level: 'Bachelor',
    deadlines: 'Fall 2024: January 15, 2024\nWinter 2025: September 1, 2024',
    requirements: '- IELTS 6.5 або TOEFL 90\n- Атестат про середню освіту\n- Мотиваційний лист\n- 2 рекомендаційні листи',
    scholarships: 'Lester B. Pearson International Scholarship\nPresident\'s Scholars of Excellence\nUniversity of Toronto International Scholar Award',
    videoTourUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: '2',
    name: 'Technical University of Munich',
    originalName: 'Technische Universität München',
    country: 'Німеччина',
    city: 'Мюнхен',
    costPerYear: 3000,
    programs: ['Інженерія', 'ІТ'],
    campusImage: 'https://dummyimage.com/800x400/50E3C2/ffffff&text=TU+Munich',
    level: 'Master',
    deadlines: 'Winter Semester 2024: April 30, 2024\nSummer Semester 2025: November 30, 2024',
    requirements: '- TestDaF 4 або DSH 2\n- Диплом бакалавра\n- Резюме\n- Мотиваційний лист',
    scholarships: 'DAAD Scholarships\nBavarian Academic Center Scholarship\nDeutschlandstipendium',
  },
  {
    id: '3',
    name: 'University College London',
    originalName: 'University College London',
    country: 'Велика Британія',
    city: 'Лондон',
    costPerYear: 45000,
    programs: ['Медицина', 'Бізнес', 'Право'],
    campusImage: 'https://dummyimage.com/800x400/BD10E0/ffffff&text=UCL',
    level: 'Bachelor',
    deadlines: 'Fall 2024: January 15, 2024',
    requirements: '- IELTS 7.0\n- A-levels або еквівалент\n- Мотиваційний лист\n- Рекомендації',
    scholarships: 'UCL Global Excellence Scholarship\nUCL Undergraduate Bursary',
  },
  {
    id: '4',
    name: 'Sciences Po Paris',
    originalName: 'Institut d\'études politiques de Paris',
    country: 'Франція',
    city: 'Париж',
    costPerYear: 15000,
    programs: ['Політологія', 'Міжнародні відносини', 'Економіка'],
    campusImage: 'https://dummyimage.com/800x400/FF9500/ffffff&text=Sciences+Po',
    level: 'Bachelor',
    deadlines: 'Fall 2024: February 1, 2024',
    requirements: '- DELF B2 або TCF\n- Атестат\n- Мотиваційний лист\n- Інтерв\'ю',
    scholarships: 'Emile Boutmy Scholarship\nEiffel Excellence Scholarship',
  },
];

const UniversityCard = ({ university, onViewDetails }: { university: University; onViewDetails: () => void }) => {
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
            {formatNumber(university.costPerYear)}$ в рік
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

const UniversityModal = ({ university, onClose }: { university: University; onClose: () => void }) => {
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
              {formatNumber(university.costPerYear)}$ в рік
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
            {COUNTRIES.map((country) => (
              <option key={country.code} value={country.name}>
                {country.flag} {country.name}
              </option>
            ))}
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

const UniversityFinder = () => {
  const [filters, setFilters] = useState<Filters>({
    country: '',
    program: '',
    budget: 50000,
  });

  const [selectedUniversity, setSelectedUniversity] = useState<University | null>(
    null
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showFinderForm, setShowFinderForm] = useState(false);

  // Filter handlers
  const handleCountryChange = (country: string) => {
    setFilters((prev) => ({ ...prev, country }));
  };

  const handleProgramChange = (program: string) => {
    setFilters((prev) => ({ ...prev, program }));
  };

  const handleBudgetChange = (budget: number) => {
    setFilters((prev) => ({ ...prev, budget }));
  };

  // Modal handlers
  const openModal = (university: University) => {
    setSelectedUniversity(university);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUniversity(null);
  };

  // Filter universities based on selected filters
  const filteredUniversities = MOCK_UNIVERSITIES.filter((university) => {
    const matchesCountry =
      !filters.country || university.country === filters.country;
    const matchesProgram =
      !filters.program ||
      university.programs.some((prog) => prog === filters.program);
    const matchesBudget = university.costPerYear <= filters.budget;

    return matchesCountry && matchesProgram && matchesBudget;
  });

  return (
    <section className="py-16 px-4 md:px-8 bg-off-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Знайди університет, що підходить саме тобі
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          Обери країну, напрям і бюджет — ми покажемо відповідні програми та кампуси.
        </p>

        <div className="flex justify-center mb-8">
          <button
            onClick={() => setShowFinderForm(!showFinderForm)}
            className="bg-accent-purple text-white px-6 py-3 rounded-lg font-medium hover:bg-accent-purple/90 transition-colors"
          >
            🎓 Підібрати мені університет
          </button>
        </div>

        {showFinderForm ? (
          <div className="max-w-md mx-auto mb-12">
            <UniversityFinderForm />
          </div>
        ) : (
          <>
            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-6 mb-12">
              {/* Country filter */}
              <div className="flex-1">
                <label className="block text-sm font-medium mb-2">Країна</label>
                <select
                  className="w-full p-3 border rounded-lg bg-white"
                  value={filters.country}
                  onChange={(e) => handleCountryChange(e.target.value)}
                >
                  <option value="">Всі країни</option>
                  {COUNTRIES.map((country) => (
                    <option key={country.code} value={country.name}>
                      {country.flag} {country.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Program filter */}
              <div className="flex-1">
                <label className="block text-sm font-medium mb-2">Напрям</label>
                <select
                  className="w-full p-3 border rounded-lg bg-white"
                  value={filters.program}
                  onChange={(e) => handleProgramChange(e.target.value)}
                >
                  <option value="">Всі напрями</option>
                  {PROGRAMS.map((program) => (
                    <option key={program} value={program}>
                      {program}
                    </option>
                  ))}
                </select>
              </div>

              {/* Budget filter */}
              <div className="flex-1">
                <label className="block text-sm font-medium mb-2">
                  Бюджет (до {formatNumber(filters.budget)}$ в рік)
                </label>
                <input
                  type="range"
                  min="3000"
                  max="50000"
                  step="1000"
                  value={filters.budget}
                  onChange={(e) => handleBudgetChange(Number(e.target.value))}
                  className="w-full h-2 bg-accent-blue rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>

            {/* University Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredUniversities.map((university) => (
                <UniversityCard
                  key={university.id}
                  university={university}
                  onViewDetails={() => openModal(university)}
                />
              ))}
            </div>
          </>
        )}

        {/* Modal */}
        {isModalOpen && selectedUniversity && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <UniversityModal
              university={selectedUniversity}
              onClose={closeModal}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default UniversityFinder; 