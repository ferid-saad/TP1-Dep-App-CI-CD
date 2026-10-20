'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import DevSecOpsTerminal from '@/components/DevSecOpsTerminal';
import SkillsMatrix from '@/components/SkillsMatrix';
import ProjectsSection from '@/components/ProjectsSection';
import TimelineSection from '@/components/TimelineSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { CheckCircle2 } from 'lucide-react';

export default function HomePage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handlePrintCV = () => {
    window.print();
  };

  return (
    <>
      <Navbar onPrintCV={handlePrintCV} />

      <main>
        <Hero onPrintCV={handlePrintCV} onShowToast={showToast} />
        <DevSecOpsTerminal />
        <SkillsMatrix />
        <ProjectsSection />
        <TimelineSection />
        <ContactSection onShowToast={showToast} />
      </main>

      <Footer />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="toast-notice no-print" role="alert">
          <CheckCircle2 size={18} color="var(--accent)" />
          <span>{toastMessage}</span>
        </div>
      )}
    </>
  );
}
