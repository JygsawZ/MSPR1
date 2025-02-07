# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# CoreFeast Festival - Site Web React x WordPress

Bienvenue dans le projet du **CoreFeast Festival**, une plateforme web immersive dédiée aux amateurs de metalcore, deathcore et hardcore ! Ce site hybride combine **React.js** pour une interface dynamique et fluide, et **WordPress** comme backend pour la gestion du contenu.

## 🎸 À propos du festival
Plonge dans l'univers intense du **CoreFeast Festival** ! Prépare-toi à vivre des concerts explosifs avec les meilleurs groupes de la scène, des mosh pits déchaînés et une énergie brute à couper le souffle. Que tu viennes pour voir tes artistes préférés ou découvrir de nouvelles légendes, ce festival est une immersion totale dans la musique extrême.

🔥 **Un week-end de pure adrénaline, de passion et de chaos t'attend !**

## 🚀 Fonctionnalités du site
- 🎤 **Programme des concerts** : Accède à la liste des artistes et aux horaires des performances.
- 🎟 **Réservation de billets** : Intégration avec le système de billetterie.
- 📍 **Infos pratiques** : Localisation, hébergement, transports et règles du festival.

## 🛠 Technologies utilisées
- **Frontend** : React.js (Hooks: `useState`, `useContext`, `useEffect`)
- **Backend** : WordPress (REST API `wp-json`)
- **Base de données** : MySQL (via WordPress)
- **Environnement local** : Local by Flywheel
- **Styles** : Tailwind CSS / Styled Components
- **Gestion d'état** : Context API

## 📦 Installation et démarrage

### 1️⃣ Prérequis
- Node.js v22.9.0 et npm
- WordPress installé avec l’API REST activée
- Local (Flywheel) pour l’environnement de développement

### 2️⃣ Cloner le projet
```sh
git clone https://github.com/JygsawZ/MSPR1.git
cd corefeast-festival
```

### 3️⃣ Installer les dépendances
```sh
npm install
```

### 4️⃣ Configurer l’API WordPress
Créer un fichier `.env.local` à la racine du projet avec :
```sh
REACT_APP_API_URL=http://localhost/wp-json/wp/v2
```

### 5️⃣ Lancer l’application
```sh
npm start
```
Le site sera accessible sur `http://localhost:5173/
:`.

## 🤝 Contribuer
Les contributions sont les bienvenues ! Forke le projet, crée une branche et soumets une PR.

```sh
git checkout -b feature/ma-nouvelle-fonction
```

## 📜 Licence
Projet open-source sous licence MIT.

---
🚀 **CoreFeast Festival** - Vivez l'expérience ultime du metal extrême ! 🤘🔥

