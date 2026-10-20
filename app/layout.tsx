import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Ferid Saad — Portfolio & CV DevSecOps | Professeur d'Éducation Technique",
  description: "CV et Portfolio interactif de Ferid Saad : Professeur d'éducation technique (24 ans d'expérience), diplômé en technologies de l'informatique (ISET Tozeur) et passionné DevSecOps (Docker, Jenkins, Kubernetes, CI/CD, Robotique).",
  keywords: [
    'Ferid Saad',
    'CV DevSecOps',
    'Portfolio Next.js',
    'Professeur Education Technique',
    'Docker',
    'Kubernetes',
    'Jenkins CI/CD',
    'Tozeur',
    'ISET Tozeur',
    'Robotique'
  ],
  authors: [{ name: 'Ferid Saad' }],
  creator: 'Ferid Saad',
  openGraph: {
    title: "Ferid Saad — CV & Portfolio DevSecOps",
    description: "Professeur d'Éducation Technique & Praticien DevSecOps",
    type: 'profile',
    locale: 'fr_FR'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var theme = saved || (prefersDark ? 'dark' : 'light');
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
