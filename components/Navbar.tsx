'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Sun, Moon, Printer, Terminal, Send, Sparkles } from 'lucide-react';
import { cvData } from '@/data/cv-data';

interface NavbarProps {
  onPrintCV: () => void;
  onOpenTerminal?: () => void;
}

export default function Navbar({ onPrintCV, onOpenTerminal }: NavbarProps) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // Check saved theme or system preference
    const saved = localStorage.getItem('theme') as 'dark' | 'light' | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute('data-theme', saved);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initial = prefersDark ? 'dark' : 'light';
      setTheme(initial);
      document.documentElement.setAttribute('data-theme', initial);
    }

    const handleScroll = () => {
      const sections = ['hero', 'skills', 'projects', 'parcours', 'terminal', 'contact'];
      const scrollPos = window.scrollY + 120;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  return (
    <header className="navbar no-print">
      <div className="container nav-container">
        <a href="#hero" className="nav-brand" id="brand-link">
          <Image
            src={cvData.profile.avatarUrl}
            alt={cvData.profile.fullName}
            width={38}
            height={38}
            className="brand-avatar"
            unoptimized
          />
          <div>
            <span>{cvData.profile.fullName}</span>
            <span style={{ fontSize: '11px', color: 'var(--accent)', display: 'block', fontWeight: 500 }}>
              Portfolio DevSecOps
            </span>
          </div>
        </a>

        <nav>
          <ul className="nav-links">
            <li>
              <a
                href="#hero"
                className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`}
                id="nav-hero"
              >
                À Propos
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
                id="nav-skills"
              >
                Compétences
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                id="nav-projects"
              >
                Projets
              </a>
            </li>
            <li>
              <a
                href="#parcours"
                className={`nav-link ${activeSection === 'parcours' ? 'active' : ''}`}
                id="nav-parcours"
              >
                Parcours
              </a>
            </li>
            <li>
              <a
                href="#terminal"
                className={`nav-link ${activeSection === 'terminal' ? 'active' : ''}`}
                id="nav-terminal"
              >
                Terminal
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                id="nav-contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
            aria-label="Changer de thème"
            id="theme-toggle"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            type="button"
            className="btn btn-secondary no-print"
            onClick={onPrintCV}
            title="Imprimer ou enregistrer en PDF le CV"
            id="print-cv-btn"
          >
            <Printer size={16} />
            <span style={{ display: 'none', md: 'inline' } as any}>Imprimer CV</span>
          </button>
        </div>
      </div>
    </header>
  );
}
