'use client';

import React from 'react';
import { ShieldCheck, Server, Code, Cpu, Wrench } from 'lucide-react';
import { cvData } from '@/data/cv-data';

export default function SkillsMatrix() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck size={18} />;
      case 'Server':
        return <Server size={18} />;
      case 'Code':
        return <Code size={18} />;
      case 'Cpu':
        return <Cpu size={18} />;
      default:
        return <Wrench size={18} />;
    }
  };

  return (
    <section id="skills" className="section-block">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Expertises Techniques</span>
          <h2 className="section-title">
            <ShieldCheck size={24} color="var(--accent)" />
            Compétences & Technologies
          </h2>
          <p className="section-desc">
            Un socle technique combinant administration système, pratiques DevSecOps modernes, conteneurisation et savoir-faire pédagogique.
          </p>
        </div>

        <div className="skills-categories-grid">
          {cvData.skillsCategories.map((category) => (
            <div key={category.title} className="glass-panel skill-category-card">
              <div className="category-header">
                <div className="category-icon">{getIcon(category.iconName)}</div>
                <h3>{category.title}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-meta">
                      <span>{skill.name}</span>
                      <span style={{ color: 'var(--accent)', fontWeight: 600 }}>{skill.level}%</span>
                    </div>

                    <div className="skill-bar-track">
                      <div
                        className="skill-bar-fill"
                        style={{ width: `${skill.level}%` }}
                        title={`${skill.name} : ${skill.level}%`}
                      />
                    </div>

                    {skill.note && <span className="skill-meta-note">{skill.note}</span>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
