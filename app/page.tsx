'use client';

import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import ThermalSimulator from '../components/ThermalSimulator';
import ConstraintSection from '../components/ConstraintSection';
import MarketsSection from '../components/MarketsSection';
import ApproachSection from '../components/ApproachSection';
import CareersSection from '../components/CareersSection';
import Footer from '../components/Footer';

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-up').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0E1013] text-[#F3F1EC]">
      <Navbar />

      {/* Hero Section with Simulator */}
      <section id="hero" className="pt-36 md:pt-48 pb-20 md:pb-[140px] border-b border-[#C7CDD6]/12">
        <div className="max-w-[1200px] mx-auto px-6 fade-up">
          <ThermalSimulator />
        </div>
      </section>

      {/* The Constraint Section */}
      <div className="fade-up">
        <ConstraintSection />
      </div>

      {/* Three Markets Section */}
      <div className="fade-up">
        <MarketsSection />
      </div>

      {/* Approach Section */}
      <div className="fade-up">
        <ApproachSection />
      </div>

      {/* Careers Section */}
      <div className="fade-up">
        <CareersSection />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
