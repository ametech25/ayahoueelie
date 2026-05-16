 # AMÉ TECH – Portfolio Site

> **Advanced Modern Engineering** – Designing the Future of Technology  
> Portfolio personnel de **AYAHOUE MAWUFLIMI ELIE**

---

## 🚀 Stack Technique

- **Next.js 14** – React Framework
- **Tailwind CSS** – Utility-first styling
- **Framer Motion** – Animations fluides
- **Google Fonts** – Michroma, JetBrains Mono, Inter

---

## 📁 Structure du projet

```
ame-tech/
├── components/
│   ├── Navbar.js       → Navigation fixe avec scroll detection
│   ├── Hero.js         → Section principale avec typewriter + particules
│   ├── About.js        → Présentation + skill bars animées
│   ├── Domains.js      → Cards des domaines d'expertise
│   ├── Projects.js     → Portfolio projets
│   ├── Skills.js       → Compétences techniques
│   ├── Contact.js      → Formulaire + infos contact
│   └── Footer.js       → Pied de page
├── pages/
│   ├── _app.js         → Wrapper global
│   ├── _document.js    → Head HTML + fonts
│   └── index.js        → Page principale
├── styles/
│   └── globals.css     → Styles globaux + animations CSS
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

---

## ⚙️ Installation & Démarrage

### 1. Cloner / placer le projet

```bash
# Naviguer dans le dossier
cd ame-tech
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Lancer en développement

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur.

---

## 🌐 Déploiement sur Vercel

### Option A – Via Git (recommandé)

1. Pousser le projet sur GitHub
2. Aller sur [vercel.com](https://vercel.com)
3. Importer le repo → **Deploy**
4. Vercel détecte automatiquement Next.js ✓

### Option B – Via CLI Vercel

```bash
npm install -g vercel
vercel
```

---

## 🎨 Charte Graphique AMÉ TECH

| Élément | Valeur |
|---------|--------|
| Couleur principale | `#0052FF` – Bleu Cyber |
| Couleur accent | `#FF073A` – Rouge Cramoisi |
| Couleur succès | `#006837` – Vert Innovation |
| Fond | `#050505` – Noir Profond |
| Police titres | Michroma |
| Police code | JetBrains Mono |
| Police corps | Inter |

---

## ✏️ Personnalisation

### Modifier les projets
Éditer le tableau `projects` dans `components/Projects.js`

### Modifier les compétences
Éditer `skillCategories` et `allBadges` dans `components/Skills.js`

### Modifier les domaines
Éditer le tableau `domains` dans `components/Domains.js`

### Ajouter une photo de profil
Dans `components/About.js`, remplacer le SVG par :
```jsx
<Image src="/photo.jpg" alt="AMÉ TECH" fill className="rounded-full object-cover" />
```
Et placer `photo.jpg` dans le dossier `/public/`

---

## 📧 Contact

- Email : ametech06@gmail.com
- Marque : AMÉ TECH

---

© 2026 AMÉ TECH – AYAHOUE ELIE  
*Designing the Future of Technology*
