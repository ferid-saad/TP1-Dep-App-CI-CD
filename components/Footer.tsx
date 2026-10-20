'use client';

import React from 'react';
import { ArrowUp, Github, Heart, ShieldCheck } from 'lucide-react';
import { cvData } from '@/data/cv-data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer no-print">
      <div className="container footer-inner">
        <div className="footer-badges">
          <span className="badge">Next.js 15 (App Router)</span>
          <span className="badge">Docker Non-Root</span>
          <span className="badge">Jenkins CI/CD Pipeline</span>
          <span className="badge">Vanilla CSS</span>
        </div>

        <p>
          © {new Date().getFullYear()} <strong>{cvData.profile.fullName}</strong> — Professeur d&apos;Éducation Technique & DevSecOps.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '6px' }}>
          <a
            href={cvData.profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
            style={{ padding: '6px 12px', fontSize: '13px' }}
          >
            <Github size={15} />
            <span>GitHub Profile</span>
          </a>

          <button
            type="button"
            className="btn btn-ghost"
            onClick={scrollToTop}
            style={{ padding: '6px 12px', fontSize: '13px' }}
            id="back-to-top-btn"
          >
            <ArrowUp size={15} />
            <span>Haut de page</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
