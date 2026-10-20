'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Copy,
  Check,
  FileDown,
  Terminal,
  Calendar,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Award
} from 'lucide-react';
import { cvData } from '@/data/cv-data';

interface HeroProps {
  onPrintCV: () => void;
  onShowToast: (msg: string) => void;
}

export default function Hero({ onPrintCV, onShowToast }: HeroProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const currentYear = new Date().getFullYear();
  const teachingYears = currentYear - cvData.profile.teachingStartYear;

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    onShowToast(`${label} copié dans le presse-papier !`);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Profile Card */}
          <div className="glass-panel profile-card">
            <div className="avatar-wrapper">
              <Image
                src={cvData.profile.avatarUrl}
                alt={`Photo de profil de ${cvData.profile.fullName}`}
                width={130}
                height={130}
                className="avatar-img"
                priority
                unoptimized
              />
              <span className="avatar-badge-online" title="Disponible pour projets & opportunités" />
            </div>

            <h1 className="profile-name">{cvData.profile.fullName}</h1>
            <p className="profile-role">{cvData.profile.role}</p>
            <p className="profile-specialty">{cvData.profile.specialty}</p>

            <div className="badge badge-live" style={{ marginBottom: '16px' }}>
              <span className="pulse-dot" />
              <span>Disponible DevSecOps & Pédagogie</span>
            </div>

            <div className="years-exp-banner">
              <Calendar size={20} color="var(--accent)" />
              <div>
                <strong>{teachingYears} ans</strong>
                <span style={{ fontSize: '12px', display: 'block', color: 'var(--text-secondary)' }}>
                  d&apos;expérience dans l&apos;enseignement
                </span>
              </div>
            </div>

            {/* Quick Contact Items with Instant Copy */}
            <ul className="contact-meta-list">
              <li className="contact-meta-item">
                <div className="contact-meta-info">
                  <Mail size={15} color="var(--accent)" />
                  <span>{cvData.profile.email}</span>
                </div>
                <button
                  type="button"
                  className="copy-icon-btn"
                  onClick={() => copyToClipboard(cvData.profile.email, 'Email')}
                  title="Copier l'email"
                  aria-label="Copier l'email"
                >
                  {copiedField === 'Email' ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                </button>
              </li>

              <li className="contact-meta-item">
                <div className="contact-meta-info">
                  <Phone size={15} color="var(--accent)" />
                  <span>{cvData.profile.phone}</span>
                </div>
                <button
                  type="button"
                  className="copy-icon-btn"
                  onClick={() => copyToClipboard(cvData.profile.phoneRaw, 'Téléphone')}
                  title="Copier le numéro"
                  aria-label="Copier le téléphone"
                >
                  {copiedField === 'Téléphone' ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                </button>
              </li>

              <li className="contact-meta-item">
                <div className="contact-meta-info">
                  <MapPin size={15} color="var(--accent)" />
                  <span>Tozeur, Tunisie</span>
                </div>
              </li>

              <li className="contact-meta-item">
                <div className="contact-meta-info">
                  <Github size={15} color="var(--accent)" />
                  <span>github.com/{cvData.profile.githubUsername}</span>
                </div>
                <a
                  href={cvData.profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="copy-icon-btn"
                  title="Voir profil GitHub"
                >
                  <ExternalLink size={14} />
                </a>
              </li>
            </ul>

            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={onPrintCV}
                style={{ width: '100%' }}
                id="hero-print-btn"
              >
                <FileDown size={16} />
                <span>Télécharger / Imprimer CV</span>
              </button>
              <a href="#contact" className="btn btn-secondary" style={{ width: '100%' }} id="hero-contact-btn">
                <span>Prendre Contact</span>
              </a>
            </div>
          </div>

          {/* Right Column: Narrative Intro & Key Metrics */}
          <div className="hero-content">
            <div className="glass-panel hero-intro-card">
              <div className="badge" style={{ marginBottom: '12px' }}>
                <Sparkles size={13} />
                <span>Profil & Vision Technique</span>
              </div>
              <h2>Enseignant Passionné & Praticien DevSecOps</h2>
              <p className="hero-bio">{cvData.profile.bio}</p>

              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '24px' }}>
                <a href="#projects" className="btn btn-primary">
                  <span>Explorer les Projets</span>
                </a>
                <a href="#terminal" className="btn btn-secondary">
                  <Terminal size={15} />
                  <span>Lancer le Terminal DevSecOps</span>
                </a>
              </div>

              {/* Stats Grid */}
              <div className="stats-grid">
                <div className="stat-box">
                  <span className="stat-number">24+</span>
                  <span className="stat-label">Ans d&apos;Enseignement</span>
                </div>
                <div className="stat-box">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Outils DevSecOps</span>
                </div>
                <div className="stat-box">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Projets Concrets</span>
                </div>
                <div className="stat-box">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Conteneurisé Docker</span>
                </div>
              </div>
            </div>

            {/* Quick Highlight Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div className="glass-panel" style={{ padding: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent)', marginBottom: '8px' }}>
                  <ShieldCheck size={18} />
                  <h3 style={{ fontSize: '15px' }}>DevSecOps & Sécurité</h3>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                  Intégration continue sécurisée (Jenkins), conteneurisation non-privilégiée (Docker, Nginx unprivileged) et infrastructure as code (Terraform, Ansible).
                </p>
              </div>

              <div className="glass-panel" style={{ padding: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent)', marginBottom: '8px' }}>
                  <Award size={18} />
                  <h3 style={{ fontSize: '15px' }}>Double Compétence</h3>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                  Alliance unique entre une longue expertise pédagogique (animation d&apos;ateliers, robotique) et des compétences logicielles modernes (Licence informatique 2025).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
