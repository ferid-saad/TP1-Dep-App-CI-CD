# Portfolio & CV DevSecOps — Ferid Saad (Next.js 15)

Ce projet est une réinterprétation moderne et interactive du CV de **Ferid Saad** (initialement réalisé en HTML/CSS/JS dans le cadre du TP1 Déploiement & CI/CD), entièrement reconstruite avec **Next.js 15**, **React 19**, **TypeScript** et un design system **Vanilla CSS** ultra-moderne avec mode sombre/clair, terminal interactif et conteneurisation Docker DevSecOps.

---

## 🌟 Points Forts & Fonctionnalités

- ⚡ **Next.js 15 & React 19 (App Router)** : Performance optimale, rendu hybride et architecture composable.
- 🎨 **Design Moderne & Glassmorphism** : Palette soignée inspirée du thème original (Cyan/Teal néon et ardoise sombre), typographies *Space Grotesk* et *Plus Jakarta Sans*.
- 🌓 **Mode Sombre / Clair Instantané** : Détection automatique des préférences système et mémorisation dans le `localStorage`.
- 💻 **Terminal DevSecOps Interactif** :
  - Simulation d'un shell Linux en ligne de commande.
  - Commandes disponibles : `whoami`, `skills`, `projects`, `docker run cv`, `contact`, `clear`.
  - Puces cliquables pour exécuter des commandes en un clic.
- 🗂️ **Filtrage Dynamique des Projets** : Catégories *DevSecOps & CI/CD*, *Robotique & IoT*, *Systèmes & Réseaux*, *Web & Bases de données*.
- ⏱️ **Parcours & Frise Chronologique** :
  - 24 ans d'expérience dans l'enseignement technique (2002 - 2026).
  - Diplômes (Licence ISET Tozeur 2025, CAPES 2002, Sup'Com 2001, Monastir 2000, Bac 1995).
  - Certifications (Robotique 2018, Windows Server & SQL Server 2001).
- 🖨️ **Impression & Export PDF Optimisé** : Feuilles de styles `@media print` dédiées pour générer un CV papier ou PDF net et épuré.
- 📬 **Formulaire de Contact & Copie Rapide** : Copie en un clic des coordonnées (téléphone, email) avec notification toast et animation de confettis.

---

## 🚀 Démarrage Rapide en Local

### Prérequis
- **Node.js** >= 18.x (testé sur v24.x)
- **npm** ou **yarn** / **pnpm**

### Installation et Lancement
```bash
# 1. Cloner la branche 'portfilio'
git clone -b portfilio https://github.com/ferid-saad/TP1-Dep-App-CI-CD.git
cd TP1-Dep-App-CI-CD

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

Accédez à l'application dans votre navigateur sur [http://localhost:3000](http://localhost:3000).

### Build de Production
```bash
npm run build
npm run start
```

---

## 🐳 Déploiement Conteneurisé avec Docker

Conformément à la philosophie DevSecOps du TP1, le projet comprend un `Dockerfile` multi-stage sécurisé et optimisé pour Next.js (sortie `standalone`) et un fichier `docker-compose.yml`.

### Caractéristiques de Sécurité :
- **Image de base minimale** : Alpine Linux (`node:20-alpine`) pour minimiser la surface d'attaque.
- **Utilisateur non-privilégié** : Exécution sous l'utilisateur système `nextjs` (UID 1001), sans aucun privilège root.
- **Healthcheck actif** : `wget -qO- http://localhost:8080/ || exit 1` testé toutes les 30 secondes.
- **Option no-new-privileges** activée dans Compose.

### 1. Lancement via Docker Compose
```bash
docker compose up -d --build
```

Vérifiez le statut du conteneur :
```bash
docker compose ps
```

L'application est accessible sur [http://localhost:8081](http://localhost:8081).

### 2. Lancement manuel avec Docker CLI
```bash
# Construction de l'image
docker build -t portfolio-nextjs .

# Lancement du conteneur en arrière-plan sur le port 8081
docker run -d --name cv-nextjs -p 8081:8080 --restart unless-stopped portfolio-nextjs
```

---

## 📁 Architecture du Projet

```
TP1-Dep-App-CI-CD/
├── app/
│   ├── globals.css          # Design system, variables CSS, glassmorphism, responsive & print
│   ├── layout.tsx           # Layout racine, métadonnées SEO, script anti-flicker thème
│   └── page.tsx             # Page principale assemblant les composants
├── components/
│   ├── Navbar.tsx           # Barre de navigation, bascule de thème, impression
│   ├── Hero.tsx             # Carte profil, statistiques, actions rapides, copie directe
│   ├── DevSecOpsTerminal.tsx# Terminal shell interactif (commandes Docker, whoami, etc.)
│   ├── SkillsMatrix.tsx     # Matrice des compétences avec barres de progression
│   ├── ProjectsSection.tsx  # Galerie de projets avec filtres interactifs
│   ├── TimelineSection.tsx  # Frise chronologique (Expériences, Diplômes, Certifications)
│   ├── ContactSection.tsx   # Canaux de contact, formulaire interactif & confettis
│   └── Footer.tsx           # Pied de page avec badges technologiques
├── data/
│   └── cv-data.ts           # Modèle de données typé et centralisé du CV
├── public/
│   └── images/              # Photo de profil, captures et logos
├── Dockerfile               # Multi-stage build sécurisé (non-root, healthcheck)
├── docker-compose.yml       # Orchestration locale sur le port 8081
├── next.config.mjs          # Configuration Next.js (output standalone)
├── package.json             # Dépendances et scripts du projet
└── tsconfig.json            # Configuration TypeScript stricte
```

---

## 🔄 Intégration CI/CD (Jenkins & GitHub)

Ce projet est prêt pour être intégré dans un pipeline Jenkins CI/CD :
1. **Étape 1 : Checkout** : Récupération du code sur la branche `portfilio`.
2. **Étape 2 : Lint & Build** : `npm ci && npm run build`.
3. **Étape 3 : Docker Build** : `docker build -t cv-nextjs:${BUILD_NUMBER} .`.
4. **Étape 4 : Test & Healthcheck** : Lancement en environnement de test et validation de la réponse HTTP 200.
5. **Étape 5 : Déploiement** : Mise à jour du conteneur sur le serveur cible.

---

## 👤 Auteur

**Ferid Saad**
- 📧 Email : [fersd2018@gmail.com](mailto:fersd2018@gmail.com)
- 📞 Téléphone : [+216 97 460 346](tel:+21697460346)
- 📍 Localisation : Tozeur, Tunisie
- 🐙 GitHub : [github.com/ferid-saad](https://github.com/ferid-saad)