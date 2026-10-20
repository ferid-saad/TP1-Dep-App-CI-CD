'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles } from 'lucide-react';
import { cvData } from '@/data/cv-data';

interface CommandOutput {
  id: string;
  command: string;
  response: string;
}

export default function DevSecOpsTerminal() {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      id: 'init-1',
      command: 'whoami',
      response: `User: ferid@devsecops-node
Nom: Ferid Saad
Rôle: Professeur d'Éducation Technique & Praticien DevSecOps
Localisation: Tozeur, Tunisie
Expérience: 24 ans d'enseignement pédagogique`
    },
    {
      id: 'init-2',
      command: 'help',
      response: `Commandes disponibles :
  whoami          - Présentation du profil
  skills          - Matrice des compétences DevSecOps & Systèmes
  projects        - Liste des réalisations techniques
  docker run cv   - Simule le déploiement conteneurisé du portfolio
  contact         - Coordonnées de contact direct
  clear           - Effacer l'écran du terminal`
    }
  ]);

  const terminalBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    let response = '';

    switch (trimmed) {
      case 'help':
        response = `Commandes disponibles :
  whoami          - Présentation du profil
  skills          - Matrice des compétences DevSecOps & Systèmes
  projects        - Liste des réalisations techniques
  docker run cv   - Simule le déploiement conteneurisé du portfolio
  contact         - Coordonnées de contact direct
  clear           - Effacer l'écran du terminal`;
        break;

      case 'whoami':
        response = `Ferid Saad
Professeur d'éducation technique (depuis 2002, 24 ans de service)
Diplômes : Licence appliquée en technologies de l'informatique (ISET Tozeur, 2025), CAPES (2002), Maîtrise Physique-Électronique (2000).
Spécialités : Docker, Kubernetes, Jenkins, CI/CD, Robotique, Active Directory.`;
        break;

      case 'skills':
        response = `[DEVSECOPS & CLOUD]
  - Docker & Compose   : 90% (Multi-stage, Alpine, non-root)
  - Kubernetes (k8s)   : 80% (Pods, Deployments, Services)
  - Jenkins CI/CD      : 85% (Pipelines automatisés, Webhooks)
  - Terraform / Ansible: 78% (Infrastructure as Code)
  - GitOps & Argo CD   : 75% (Déploiement déclaratif)

[SYSTÈMES & RÉSEAU]
  - Linux Ubuntu       : 90% (Bash scripting, SSH, UFW)
  - Windows Server     : 88% (Active Directory, GPO, DNS)
  - Nginx unprivileged : 85% (Reverse proxy sécurisé)

[LANGAGES & BASES]
  - Next.js / React, JS/TS, SQL Server, C++, Arduino`;
        break;

      case 'projects':
        response = `1. Portfolio DevSecOps Conteneurisé (Next.js, Docker non-root, CI/CD Jenkins)
2. Robot Suiveur de Ligne Autonome (Arduino, C++, Électronique)
3. Infrastructure Active Directory (Windows Server, GPO, DNS, DHCP)
4. Gestion de Notes Web (SQL Server, JavaScript, T-SQL)
5. Cluster d'Automatisation (Vagrant, VirtualBox nested, Ansible)`;
        break;

      case 'docker run cv':
      case 'docker run':
        response = `[INFO] Pulling cv-docker:latest...
[INFO] Verifying non-root user 'nextjs' (UID 1001)... OK
[INFO] Applying read_only filesystem with tmpfs /tmp... OK
[INFO] Starting container 'cv' on port 0.0.0.0:8081 -> 8080/tcp...
[HEALTHCHECK] wget -qO- http://localhost:8080/ || exit 1 -> HTTP 200 OK
Status: UP (healthy) - En écoute sur http://localhost:8081 !`;
        break;

      case 'docker ps':
        response = `CONTAINER ID   IMAGE        COMMAND                  STATUS                    PORTS
a7f3b8901c23   cv-docker    "node server.js"         Up 2 minutes (healthy)    0.0.0.0:8081->8080/tcp`;
        break;

      case 'contact':
        response = `Téléphone : +216 97 460 346
Email     : fersd2018@gmail.com
Adresse   : 79 Av 4 Août 1990 Echorfa, Tozeur, Tunisie
GitHub    : https://github.com/ferid-saad`;
        break;

      default:
        response = `bash: commande non reconnue: "${trimmed}". Tapez 'help' pour afficher les commandes disponibles.`;
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(36).substring(7),
        command: cmdText,
        response
      }
    ]);
    setInputVal('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  return (
    <section id="terminal" className="section-block no-print">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Console Interactive</span>
          <h2 className="section-title">
            <TerminalIcon size={24} color="var(--accent)" />
            Terminal DevSecOps
          </h2>
          <p className="section-desc">
            Explorez le profil, les compétences et les commandes de déploiement en simulant un environnement shell Linux.
          </p>
        </div>

        <div className="terminal-wrapper">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
            </div>
            <div className="terminal-title">ferid@devsecops-node: ~/portfolio (portfilio)</div>
            <div style={{ fontSize: '11px', color: 'var(--accent)' }}>Next.js v15.1</div>
          </div>

          <div className="terminal-body" ref={terminalBodyRef}>
            <div className="terminal-history">
              {history.map((item) => (
                <div key={item.id}>
                  <div className="terminal-line">
                    <span className="terminal-prompt">ferid@devsecops:~$</span>
                    <span>{item.command}</span>
                  </div>
                  <pre className="terminal-output">{item.response}</pre>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="terminal-input-row">
              <span className="terminal-prompt">ferid@devsecops:~$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Tapez une commande (ex: help, docker run cv, skills)..."
                className="terminal-input"
                id="terminal-input-cmd"
                autoComplete="off"
                spellCheck="false"
              />
            </form>
          </div>

          {/* Quick Command Chips */}
          <div className="terminal-chips">
            <span className="chip-label">Commandes rapides :</span>
            {['help', 'whoami', 'skills', 'projects', 'docker run cv', 'contact', 'clear'].map((cmd) => (
              <button
                key={cmd}
                type="button"
                className="cmd-chip"
                onClick={() => executeCommand(cmd)}
                title={`Exécuter '${cmd}'`}
              >
                {cmd}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
