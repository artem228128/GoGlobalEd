import React from 'react';
import Hero from '@/components/Hero';
import Audience from '@/components/Audience';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import UniversityFinder from '@/components/UniversityFinder';

export default function Home() {
  return (
    <main>
      <Hero />
      <Audience />
      <UniversityFinder />
      <Process />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
} 