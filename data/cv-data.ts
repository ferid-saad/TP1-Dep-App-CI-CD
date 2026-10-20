export interface Project {
  id: string;
  title: string;
  category: 'devsecops' | 'robotique' | 'systemes' | 'web';
  description: string;
  details: string;
  tags: string[];
  githubUrl?: string;
  highlights: string[];
}

export interface Experience {
  period: string;
  role: string;
  organization: string;
  location: string;
  description: string;
  badge?: string;
}

export interface Education {
  year: string;
  degree: string;
  institution?: string;
  description?: string;
  badge?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; level: number; note?: string }[];
}

export const cvData = {
  profile: {
    fullName: "Ferid Saad",
    firstName: "Ferid",
    lastName: "Saad",
    birthDate: "23 Juin 1976",
    role: "Professeur d'Éducation Technique",
    specialty: "Passionné DevSecOps, Cloud & Robotique",
    teachingStartYear: 2002,
    location: "79 Av 4 Août 1990 Echorfa, Tozeur, Tunisie",
    city: "Tozeur",
    country: "Tunisie",
    email: "fersd2018@gmail.com",
    phone: "+216 97 460 346",
    phoneRaw: "+21697460346",
    github: "https://github.com/ferid-saad",
    githubUsername: "ferid-saad",
    avatarUrl: "/images/photo.png",
    bio: "Professeur chevronné avec plus de 24 ans d'expérience dans l'enseignement technique et les technologies appliquées. Diplômé en informatique (ISET Tozeur) et en physique-électronique, spécialisé dans l'automatisation, la conteneurisation Docker, l'orchestration Kubernetes et les pratiques DevSecOps modernes.",
    interests: ["Sport", "Robotique éducative", "DevSecOps & Cloud", "Systèmes embarqués", "Permis B"],
    languages: [
      { name: "Arabe", level: "Langue maternelle", percent: 100 },
      { name: "Français", level: "Courant / Professionnel", percent: 90 },
      { name: "Anglais", level: "Technique & Informatique", percent: 75 }
    ]
  },

  skillsCategories: [
    {
      title: "DevSecOps & Cloud",
      iconName: "ShieldCheck",
      skills: [
        { name: "Docker & Docker Compose", level: 90, note: "Images multi-stage, non-root, compose" },
        { name: "Kubernetes (k8s)", level: 80, note: "Pods, déploiements, services, kubectl" },
        { name: "Jenkins & CI/CD", level: 85, note: "Pipelines automatisés, intégration continue" },
        { name: "Argo CD & GitOps", level: 75, note: "Déploiement déclaratif synchronisé" },
        { name: "Terraform", level: 75, note: "Infrastructure as Code (IaC)" },
        { name: "Ansible", level: 78, note: "Automatisation de configurations & playbooks" },
        { name: "Git & GitHub", level: 92, note: "Versionnement avancé, SSH, flux GitFlow" }
      ]
    },
    {
      title: "Systèmes, Réseaux & Sécurité",
      iconName: "Server",
      skills: [
        { name: "Linux Ubuntu / Debian", level: 90, note: "Administration système, scripts Bash, SSH, UFW" },
        { name: "Nginx Sécurisé", level: 85, note: "Reverse proxy, SSL/TLS, conteneurs non privilégiés" },
        { name: "Windows Server & Active Directory", level: 88, note: "Domaines AD, GPO, DNS, DHCP" },
        { name: "Administration Réseau", level: 85, note: "Network+, routage, sécurité des accès" },
        { name: "Virtualisation", level: 85, note: "VirtualBox, Vagrant, nested virtualization" }
      ]
    },
    {
      title: "Développement & Bases de Données",
      iconName: "Code",
      skills: [
        { name: "Next.js & React", level: 82, note: "SSR, App Router, composants modernes" },
        { name: "JavaScript / TypeScript", level: 85, note: "ES6+, logique frontend et backend" },
        { name: "SQL Server & T-SQL", level: 85, note: "Modélisation, requêtes optimisées, procédures" },
        { name: "C++ & Arduino", level: 88, note: "Systèmes embarqués, asservissement moteurs" },
        { name: "HTML5 & CSS3 Moderne", level: 92, note: "Design responsive, glassmorphism, flexbox/grid" }
      ]
    },
    {
      title: "Pédagogie & Électronique",
      iconName: "Cpu",
      skills: [
        { name: "Enseignement Technique", level: 95, note: "24 ans d'expertise didactique" },
        { name: "Robotique Pédagogique", level: 90, note: "Ateliers robotique, microcontrôleurs" },
        { name: "Électronique appliquée", level: 88, note: "Capteurs, circuits imprimés, mesures" }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "devsecops-portfolio",
      title: "Portfolio DevSecOps Conteneurisé",
      category: "devsecops",
      description: "Architecture moderne d'un portfolio Next.js conteneurisé avec image Nginx non-root, Docker Compose et intégration CI/CD.",
      details: "Mise en œuvre des bonnes pratiques de sécurité (moindre privilège, utilisateur non-root, healthcheck, conteneurs Alpine réduits). Déploiement automatisé via pipeline Jenkins et exposition sécurisée.",
      tags: ["Next.js", "Docker", "Nginx", "Jenkins", "DevSecOps", "Docker Compose"],
      githubUrl: "https://github.com/ferid-saad/TP1-Dep-App-CI-CD",
      highlights: [
        "Image Docker sécurisée avec utilisateur 'nextjs' non-root",
        "Pipeline Jenkins de test et build automatisé",
        "Orchestration avec Docker Compose et healthcheck actif",
        "Design réactif avec bascule sombre/clair instantanée"
      ]
    },
    {
      id: "robot-suiveur",
      title: "Robot Suiveur de Ligne Intelligent",
      category: "robotique",
      description: "Conception et programmation d'un robot autonome capable de suivre un tracé au sol à haute vitesse avec évitement d'obstacles.",
      details: "Développé pour les ateliers d'initiation et de robotique éducative. Utilisation de capteurs infrarouges haute précision, régulation PID en C++ sur microcontrôleur Arduino et pont en H L298N.",
      tags: ["Arduino", "C++", "Capteurs IR", "Pont en H", "Électronique"],
      highlights: [
        "Algorithme d'asservissement en C++ pour virages optimaux",
        "Architecture modulaire pour l'apprentissage des élèves",
        "Alimentation régulée et protection contre les surtensions"
      ]
    },
    {
      id: "active-directory-lab",
      title: "Infrastructure Domaine Windows Server",
      category: "systemes",
      description: "Mise en place d'un domaine Active Directory complet avec gestion centralisée des utilisateurs, ordinateurs et stratégies de groupe (GPO).",
      details: "Conception d'un environnement d'entreprise simulé avec serveur Windows, services DNS et DHCP intégrés, profils itinérants et partages sécurisés pour la formation.",
      tags: ["Windows Server", "Active Directory", "GPO", "DNS", "DHCP", "Réseau"],
      highlights: [
        "Structuration d'Unités d'Organisation (OU) et délégations",
        "Application de politiques de sécurité renforcées par GPO",
        "Gestion des quotas et contrôle d'accès granulaire"
      ]
    },
    {
      id: "gestion-notes-sql",
      title: "Application Web de Gestion de Notes",
      category: "web",
      description: "Plateforme web de suivi académique pour les enseignants, connectée à une base de données relationnelle SQL Server.",
      details: "Interface intuitive pour la saisie des évaluations, le calcul automatique des moyennes pondérées et la génération de synthèses imprimables pour les conseils de classe.",
      tags: ["SQL Server", "JavaScript", "HTML/CSS", "T-SQL", "Gestion Scolaire"],
      highlights: [
        "Modélisation relationnelle avec clés étrangères et contraintes",
        "Calcul temps réel des moyennes et classements",
        "Exportation et impression de bulletins de notes"
      ]
    },
    {
      id: "vagrant-ansible-cluster",
      title: "Automatisation d'Infrastructure Vagrant & Ansible",
      category: "devsecops",
      description: "Provisioning reproductible d'environnements virtuels multi-nœuds avec Vagrant, VirtualBox (nested) et playbooks Ansible.",
      details: "Permet de déployer en une seule commande un cluster complet de machines virtuelles Ubuntu pour tester des scénarios de haute disponibilité et de déploiement d'applications.",
      tags: ["Vagrant", "Ansible", "VirtualBox", "Ubuntu", "IaC"],
      highlights: [
        "Fichier Vagrantfile multi-machines automatisé",
        "Playbooks de configuration système et durcissement SSH",
        "Idempotence garantie des déploiements"
      ]
    }
  ] as Project[],

  experiences: [
    {
      period: "2012 - 2026",
      role: "Professeur d'Éducation Technique",
      organization: "Collège Ibn El Chabat",
      location: "Tozeur, Tunisie",
      badge: "Poste Actuel",
      description: "Enseignement des sciences et technologies industrielles, conception assistée par ordinateur, initiation aux microcontrôleurs et encadrement d'ateliers de robotique."
    },
    {
      period: "2008 - 2012",
      role: "Professeur d'Éducation Technique",
      organization: "Collège Zawiet El Arab",
      location: "Tozeur, Tunisie",
      badge: "4 ans",
      description: "Enseignement technique, mise en place d'activités pratiques sur maquettes automatisées et gestion des salles informatiques."
    },
    {
      period: "2006 - 2008",
      role: "Professeur d'Éducation Technique",
      organization: "Collège Ahd Jadid Deguech",
      location: "Tozeur, Tunisie",
      badge: "2 ans",
      description: "Transmission des compétences fondamentales en technologie et mécanique appliquée, réalisation de projets interdisciplinaires."
    },
    {
      period: "2002 - 2006",
      role: "Professeur d'Éducation Technique",
      organization: "Collège Ahd Jadid Hajeb Layoun",
      location: "Kairouan, Tunisie",
      badge: "4 ans",
      description: "Début de carrière pédagogique suite à l'obtention du CAPES, développement des supports de cours théoriques et pratiques."
    }
  ] as Experience[],

  educations: [
    {
      year: "2025",
      degree: "Licence Appliquée en Technologies de l'Informatique",
      institution: "ISET Tozeur",
      badge: "Informatique & Réseaux",
      description: "Spécialisation en développement logiciel, administration des systèmes d'information, conteneurisation et sécurité réseau."
    },
    {
      year: "2002",
      degree: "CAPES Éducation Technique",
      institution: "Ministère de l'Éducation, Tunisie",
      badge: "Concours National",
      description: "Certificat d'Aptitude au Professorat de l'Enseignement Secondaire et Technique."
    },
    {
      year: "2001",
      degree: "1re Année de DEA (Diplôme d'Études Approfondies)",
      institution: "Sup'Com - École Supérieure des Communications de Tunis",
      badge: "Télécommunications",
      description: "Études supérieures approfondies en réseaux, télécommunications et transmission de signaux numériques."
    },
    {
      year: "1999 - 2000",
      degree: "Maîtrise en Physique-Électronique",
      institution: "Faculté des Sciences de Monastir",
      badge: "Physique & Électronique",
      description: "Formation universitaire rigoureuse couvrant l'électronique analogique et numérique, le traitement du signal et les semi-conducteurs."
    },
    {
      year: "1995",
      degree: "Baccalauréat Technique",
      institution: "Lycée Technique Ibn El Jazzar, Kairouan",
      badge: "Technique",
      description: "Baccalauréat sciences et techniques avec mention."
    }
  ] as Education[],

  certifications: [
    {
      year: "2018",
      title: "Formation Certifiante en Robotique",
      institution: "Centre de Formation Technique",
      description: "Conception, programmation de robots autonomes, capteurs avancés et pilotage d'actionneurs."
    },
    {
      year: "2001",
      title: "Administration Systèmes & Messagerie",
      institution: "Formation Professionnelle Réseau",
      description: "Certification Network+, Windows NT 4 / Windows 2000 Server, Microsoft SQL Server 7, Exchange Server 5.5."
    }
  ]
};
