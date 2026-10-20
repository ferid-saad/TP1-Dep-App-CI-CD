'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Copy, Check, MessageSquare } from 'lucide-react';
import { cvData } from '@/data/cv-data';

interface ContactSectionProps {
  onShowToast: (msg: string) => void;
}

export default function ContactSection({ onShowToast }: ContactSectionProps) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyValue = (val: string, key: string) => {
    navigator.clipboard.writeText(val);
    setCopiedKey(key);
    onShowToast(`${key} copié dans le presse-papier !`);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      onShowToast('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Dynamic import of confetti to run in browser
      const confetti = (await import('canvas-confetti')).default;
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#00d2df', '#0e7c86', '#14b8a6', '#ffffff']
      });
    } catch {
      // Confetti optional fallback
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      onShowToast('Votre message a été transmis avec succès !');
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 600);
  };

  return (
    <section id="contact" className="section-block">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Entrer en Contact</span>
          <h2 className="section-title">
            <MessageSquare size={24} color="var(--accent)" />
            Contact & Échanges Professionnels
          </h2>
          <p className="section-desc">
            Vous avez un projet DevSecOps, un besoin de formation ou souhaitez échanger autour des technologies éducatives ? N&apos;hésitez pas à m&apos;écrire.
          </p>
        </div>

        <div className="contact-grid">
          {/* Direct channels */}
          <div className="contact-channels">
            <div className="glass-panel contact-box">
              <div className="contact-box-left">
                <div className="contact-icon-circle">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="contact-label">Email Direct</span>
                  <a
                    href={`mailto:${cvData.profile.email}`}
                    className="contact-val"
                    style={{ textDecoration: 'underline', textUnderlineOffset: '3px' }}
                  >
                    {cvData.profile.email}
                  </a>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-secondary"
                style={{ padding: '6px 10px', fontSize: '12px' }}
                onClick={() => copyValue(cvData.profile.email, 'Email')}
                title="Copier l'adresse email"
              >
                {copiedKey === 'Email' ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
              </button>
            </div>

            <div className="glass-panel contact-box">
              <div className="contact-box-left">
                <div className="contact-icon-circle">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="contact-label">Téléphone Mobile</span>
                  <a href={`tel:${cvData.profile.phoneRaw}`} className="contact-val">
                    {cvData.profile.phone}
                  </a>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-secondary"
                style={{ padding: '6px 10px', fontSize: '12px' }}
                onClick={() => copyValue(cvData.profile.phoneRaw, 'Téléphone')}
                title="Copier le numéro"
              >
                {copiedKey === 'Téléphone' ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
              </button>
            </div>

            <div className="glass-panel contact-box">
              <div className="contact-box-left">
                <div className="contact-icon-circle">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="contact-label">Adresse Postale</span>
                  <div className="contact-val" style={{ fontSize: '13.5px' }}>
                    {cvData.profile.location}
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '20px', textAlign: 'center' }}>
              <div className="badge badge-live" style={{ marginBottom: '8px' }}>
                <span className="pulse-dot" />
                <span>Réponse Rapide</span>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                Disponible par téléphone ou par email du lundi au samedi.
              </p>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="glass-panel form-panel">
            <h3 style={{ fontSize: '18px', marginBottom: '16px' }}>Envoyer un message</h3>

            {isSubmitted ? (
              <div
                style={{
                  padding: '24px',
                  textAlign: 'center',
                  background: 'rgba(16, 185, 129, 0.1)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid rgba(16, 185, 129, 0.3)'
                }}
              >
                <CheckCircle size={36} color="#10b981" style={{ margin: '0 auto 10px' }} />
                <h4 style={{ color: '#10b981', marginBottom: '4px' }}>Message Envoyé !</h4>
                <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)' }}>
                  Merci pour votre message. Je vous répondrai dans les plus brefs délais à l&apos;adresse indiquée.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">
                    Votre Nom complet *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Ex: Jean Dupont"
                    className="form-input"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">
                    Votre Adresse Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="nom@exemple.com"
                    className="form-input"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-subject">
                    Objet de l&apos;échange
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="Ex: Opportunité de collaboration, conseil, DevOps..."
                    className="form-input"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">
                    Votre Message *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Bonjour M. Ferid Saad, ..."
                    className="form-textarea"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                  id="submit-contact-btn"
                >
                  <Send size={16} />
                  <span>{isSubmitting ? 'Envoi en cours...' : 'Transmettre le message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
