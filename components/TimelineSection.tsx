'use client';

import React from 'react';
import { Briefcase, GraduationCap, Award, Globe, Heart } from 'lucide-react';
import { cvData } from '@/data/cv-data';

export default function TimelineSection() {
  return (
    <section id="parcours" className="section-block">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Carrière & Formation</span>
          <h2 className="section-title">
            <GraduationCap size={24} color="var(--accent)" />
            Parcours Professionnel & Académique
          </h2>
          <p className="section-desc">
            Une trajectoire exemplaire de 24 ans consacrée à l&apos;enseignement technique, enrichie d&apos;une veille continue et d&apos;une montée en compétences en technologies de l&apos;information.
          </p>
        </div>

        <div className="timeline-section-grid">
          {/* Column 1: Expérience Professionnelle */}
          <div className="timeline-column">
            <div className="timeline-column-header">
              <Briefcase size={20} color="var(--accent)" />
              <h3>Expérience Professionnelle</h3>
            </div>

            <ol className="timeline-list">
              {cvData.experiences.map((exp, idx) => (
                <li key={idx} className="timeline-item">
                  <div className="timeline-marker" />
                  <div className="glass-panel timeline-card">
                    <div className="timeline-meta-row">
                      <span className="timeline-year">{exp.period}</span>
                      {exp.badge && (
                        <span className="badge" style={{ fontSize: '11px' }}>
                          {exp.badge}
                        </span>
                      )}
                    </div>
                    <h4 className="timeline-degree">{exp.role}</h4>
                    <div className="timeline-inst">
                      {exp.organization} — <em>{exp.location}</em>
                    </div>
                    <p className="timeline-desc">{exp.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Column 2: Études, Diplômes & Formations */}
          <div className="timeline-column">
            <div className="timeline-column-header">
              <GraduationCap size={20} color="var(--accent)" />
              <h3>Diplômes Universitaires</h3>
            </div>

            <ol className="timeline-list">
              {cvData.educations.map((edu, idx) => (
                <li key={idx} className="timeline-item">
                  <div className="timeline-marker" />
                  <div className="glass-panel timeline-card">
                    <div className="timeline-meta-row">
                      <span className="timeline-year">{edu.year}</span>
                      {edu.badge && (
                        <span className="badge" style={{ fontSize: '11px' }}>
                          {edu.badge}
                        </span>
                      )}
                    </div>
                    <h4 className="timeline-degree">{edu.degree}</h4>
                    {edu.institution && (
                      <div className="timeline-inst">{edu.institution}</div>
                    )}
                    {edu.description && (
                      <p className="timeline-desc">{edu.description}</p>
                    )}
                  </div>
                </li>
              ))}
            </ol>

            {/* Certifications Block */}
            <div style={{ marginTop: '24px' }}>
              <div className="timeline-column-header" style={{ marginBottom: '16px' }}>
                <Award size={20} color="var(--accent)" />
                <h3>Certifications & Formations Spécialisées</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {cvData.certifications.map((cert, idx) => (
                  <div key={idx} className="glass-panel" style={{ padding: '16px 20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <strong style={{ fontSize: '14.5px', color: 'var(--text-primary)' }}>{cert.title}</strong>
                      <span className="timeline-year">{cert.year}</span>
                    </div>
                    <div style={{ fontSize: '12.5px', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                      {cert.institution}
                    </div>
                    <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{cert.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Languages & Interests Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '36px' }}>
          <div className="glass-panel" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', color: 'var(--accent)' }}>
              <Globe size={18} />
              <h3 style={{ fontSize: '16px' }}>Langues Pratiquées</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {cvData.profile.languages.map((lang) => (
                <div key={lang.name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '4px' }}>
                    <strong>{lang.name}</strong>
                    <span style={{ color: 'var(--text-secondary)' }}>{lang.level}</span>
                  </div>
                  <div className="skill-bar-track">
                    <div className="skill-bar-fill" style={{ width: `${lang.percent}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', color: 'var(--accent)' }}>
              <Heart size={18} />
              <h3 style={{ fontSize: '16px' }}>Centres d&apos;Intérêt</h3>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {cvData.profile.interests.map((interest) => (
                <span key={interest} className="badge" style={{ fontSize: '12.5px', padding: '6px 14px' }}>
                  {interest}
                </span>
              ))}
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '16px', lineHeight: 1.6 }}>
              Actif dans la promotion des technologies auprès des jeunes générations et engagé dans la communauté open source pour les outils DevOps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
