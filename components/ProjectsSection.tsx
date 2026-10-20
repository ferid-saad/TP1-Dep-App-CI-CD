'use client';

import React, { useState } from 'react';
import { FolderGit2, CheckCircle2, ExternalLink, Github, Layers } from 'lucide-react';
import { cvData, Project } from '@/data/cv-data';

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Tous les Projets' },
    { id: 'devsecops', label: 'DevSecOps & CI/CD' },
    { id: 'robotique', label: 'Robotique & IoT' },
    { id: 'systemes', label: 'Systèmes & Réseaux' },
    { id: 'web', label: 'Web & Bases de Données' }
  ];

  const filteredProjects = activeCategory === 'all'
    ? cvData.projects
    : cvData.projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-block">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Réalisations & Travaux Pratiques</span>
          <h2 className="section-title">
            <FolderGit2 size={24} color="var(--accent)" />
            Projets Réalisés
          </h2>
          <p className="section-desc">
            Sélection de projets techniques illustrant l&apos;automatisation, la conteneurisation sécurisée, l&apos;électronique programmable et les infrastructures réseau.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="projects-filter-bar no-print">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
              id={`filter-${cat.id}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="glass-panel project-card">
              <div className="project-top">
                <div className="project-header-row">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="badge" style={{ textTransform: 'capitalize' }}>
                    {project.category}
                  </span>
                </div>

                <p className="project-desc">{project.description}</p>

                {/* Highlights List */}
                <ul className="project-highlights">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={13} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-footer">
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                    Projet Documenté
                  </span>
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                      style={{ padding: '6px 12px', fontSize: '12px' }}
                      title="Consulter le code source"
                    >
                      <Github size={14} />
                      <span>Code Source</span>
                      <ExternalLink size={12} />
                    </a>
                  ) : (
                    <span className="badge" style={{ fontSize: '11px' }}>
                      Atelier Pédagogique
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
