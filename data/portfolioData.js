// data/portfolioData.js

// ─── SOURCE UNIQUE DE DONNÉES — SYNCHRONISÉE AVEC LE CV ───────────────────────
export const personalInfo = {
  name: "AYAHOUE MAWUFLIMI ELIE",
  brand: "AYAHOUE MAWUFLIMI ELIE",
  profileImage: "/images/profil.svg",
  title: "AYAHOUE MAWUFLIMI ELIE",
  tagline: "Étudiant Cybersécurité & IA | ESATIC à Abidjan",
  description:
    "Étudiant en Licence 2 Cybersécurité et Intelligence Artificielle à l'ESATIC (Abidjan) et surnommé AMÉ TECH, je suis animé par une passion profonde pour l'architecture des réseaux et la sécurisation des systèmes. À l'intersection des infrastructures réseaux, de la cybersécurité, du développement web et du design graphique, je vois chaque projet comme un terrain d'exploration et une opportunité d'apporter des solutions concrètes à des problèmes réels. Pour moi, la tech ne se limite pas aux lignes de code ou aux routeurs ; c'est un levier puissant pour impacter positivement notre environnement, protéger les écosystèmes critiques et concevoir des expériences à la fois hautement sécurisées et visuellement impactantes.",
  motto: ">_ Chaque ligne de code, chaque design, chaque projet est une réponse à un problème réel.",
  email: "ametech06@gmail.com",
  phone: "+225 07 07 61 20 92",
  whatsapp: "2250707612092",
  location: "Abidjan, Côte d'Ivoire",
  nationality: "Ivoirienne",
  age: "20 ans",
  maritalStatus: "Célibataire",
  portfolio: "ametech.com",
  stats: [
    { value: "3+", label: "Projets" },
    { value: "4", label: "Domaines" },
    { value: "2026", label: "Vision" },
  ],
  aboutStats: [
    { label: "Cyber & Réseaux", pct: 75 },
    { label: "Big Data & IA", pct: 65 },
    { label: "Développement", pct: 80 },
    { label: "Design", pct: 85 },
  ],
};

// ─── DONNÉES BRUTES DU CV (utilisées par la page /cv) ─────────────────────────
export const cvData = {
  savoirFaire: [
    "Résolution de problèmes complexes",
    "Adaptabilité & apprentissage rapide",
    "Collaboration en équipe distribuée",
    "Gestion de projet & autonomie",
    "Communication technique & pédagogique",
  ],
  interests: "Design - football - recherches",
  formations: [
    "BEPC 2021 — Collège La Fayette",
    "BAC C 2024 — Lycée Municipal Yakassé-Attobrou",
    "Licence 2 Cybersécurité & IA 2026 — ESATIC",
    "Certificat CISCO CCNA 1&2 — en cours",
  ],
  logiciels: [
    "HTML / CSS / JS / PHP / Python",
    "Django / Laravel",
    "Packet Tracer",
    "Kali Linux",
    "Photoshop / Illustrator / Canva",
  ],
  experiences: [
    "APP1 — Lutter contre la pollution (2025, en groupe)",
    "APP2 — Application linguistique (2026, en groupe)",
    "Stage en maintenance informatique — 2 mois (2025) chez Perfect Group",
    "Membre de la com. du conseil estudiantin de l'ESATIC (2025–2026)",
    "Délégué Licence 2 — ESATIC",
  ],
  langues: ["Français", "Anglais"],
};

// ─── FORMATION (timeline sur le site) ─────────────────────────────────────────
export const education = [
  {
    period: "En cours",
    degree: "Certificat CISCO CCNA 1 & 2",
    school: "CISCO Networking Academy",
    location: "En ligne",
    description: "Formation aux fondamentaux des réseaux informatiques, routage et commutation.",
    color: "#0052FF",
  },
  {
    period: "2026",
    degree: "Licence 2 — Cybersécurité & IA",
    school: "ESATIC",
    location: "Abidjan, Côte d'Ivoire",
    description: "Formation en réseaux, sécurité informatique, intelligence artificielle et développement logiciel.",
    color: "#0052FF",
  },
  {
    period: "2024",
    degree: "Baccalauréat Série C",
    school: "Lycée Municipal Yakassé-Attobrou",
    location: "Côte d'Ivoire",
    description: "Série scientifique — Mathématiques, physique-chimie. Mention obtenue.",
    color: "#006837",
  },
  {
    period: "2021",
    degree: "BEPC",
    school: "Collège La Fayette",
    location: "Côte d'Ivoire",
    description: "Brevet d'études du premier cycle — fin de collège.",
    color: "#006837",
  },
];

// ─── EXPÉRIENCE PROFESSIONNELLE & ASSOCIATIVE ─────────────────────────────────
export const experience = [
  {
    id: "EXP-001",
    title: "Stage en maintenance informatique",
    company: "Perfect Group",
    location: "Abidjan",
    period: "2025 — 2 mois",
    badge: "Stage",
    badgeColor: "#0052FF",
    desc: "Maintenance préventive et corrective, gestion de parc informatique et support technique aux utilisateurs.",
    tasks: [
      "Diagnostic et réparation de matériel informatique",
      "Installation et configuration de systèmes d'exploitation",
      "Support utilisateurs et résolution d'incidents",
    ],
  },
  {
    id: "EXP-002",
    title: "Délégué de CLASSE",
    company: "CSIA Licence 2",
    location: "Abidjan",
    period: "2025 – 2026",
    badge: "Représentation",
    badgeColor: "#006837",
    desc: "Représentant officiel de la filière CSIA Licence 2 auprès de l'administration de l'ESATIC.",
    tasks: [
      "Liaison entre étudiants et administration",
      "Organisation et coordination de réunions de promotion",
      "Défense des intérêts et droits des étudiants",
    ],
  },
  {
    id: "EXP-003",
    title: "Membre du conseil estudiantin",
    company: "ESATIC",
    location: "Abidjan",
    period: "2025 – 2026",
    badge: "Associatif",
    badgeColor: "#FF073A",
    desc: "Membre actif de la commission du conseil estudiantin, participation à l'organisation de la vie étudiante.",
    tasks: [
      "Organisation d'événements étudiants",
      "Gestion de la communication interne",
      "Coordination des activités parascolaires",
    ],
  },
];

// ─── PROJETS ──────────────────────────────────────────────────────────────────
export const keyProjects = [
  {
    id: "PRJ-001",
    title: "APP1 : Sensibilisation au développement durable",
    subtitle: "Application web de sensibilisation écologique — travail en groupe",
    year: "2025",
    highlight: "Environnement",
    team: "Travail en groupe",
    desc: "Projet collectif ESATIC : application web permettant aux utilisateurs de mesurer, suivre et réduire leur empreinte écologique. Interface intuitive avec tableaux de bord personnalisés et conseils d'action.",
    tags: ["HTML/CSS", "JavaScript", "PHP", "Python"],
    tech: ["Web"],
    impact: "Sensibilisation et action écologique via le numérique.",
    status: "Terminé",
    statusColor: "#006837",
    link: "http://ange-maker533.github.io/",
  },
  {
    id: "PRJ-002",
    title: "APP2 : Application linguistique",
    subtitle: "Outil d'apprentissage et de traduction intelligent — travail en groupe",
    year: "2026",
    highlight: "IA & Langues",
    team: "Travail en groupe",
    desc: "Projet collectif ESATIC : application d'apprentissage des langues et de traduction utilisant l'IA pour offrir une expérience personnalisée, avec analyse des progrès et exercices adaptatifs.",
    tags: ["Python", "Django", "IA", "NLP"],
    tech: ["Web", "IA"],
    impact: "Apprentissage linguistique personnalisé par l'IA.",
    status: "En cours",
    statusColor: "#0052FF",
    link: null,
  },
];

// ─── DOMAINES D'EXPERTISE ─────────────────────────────────────────────────────
export const domains = [
  {
    id: "01",
    title: "Cybersécurité & Réseaux",
    desc: "Analyse de vulnérabilités, sécurisation d'infrastructures, architecture et configuration de réseaux avec Packet Tracer, CISCO CCNA et environnements Kali Linux.",
    color: "#FF073A",
    tags: ["Kali Linux", "Réseaux", "CISCO CCNA", "Packet Tracer"],
  },
  {
    id: "02",
    title: "Big Data & IA",
    desc: "Traitement et analyse de données massives avec l'écosystème Hadoop, authentification Kerberos, et intégration de solutions d'IA (machine learning, NLP) en Python.",
    color: "#006837",
    tags: ["Hadoop", "Kerberos", "Machine Learning", "NLP", "Python"],
  },
  {
    id: "03",
    title: "Développement Web",
    desc: "Conception et développement d'applications web modernes, responsives et performantes avec HTML, CSS, JavaScript, PHP, Python et les frameworks Django & Laravel.",
    color: "#0052FF",
    tags: ["HTML/CSS", "JavaScript", "PHP", "Django", "Laravel"],
  },
  {
    id: "04",
    title: "Design Visuel",
    desc: "Création d'identités visuelles, UI/UX design et production graphique avec Photoshop, Illustrator et Canva pour des rendus professionnels et impactants.",
    color: "#0052FF",
    tags: ["Photoshop", "Illustrator", "Canva", "UI/UX"],
  },
];

// ─── COMPÉTENCES TECHNIQUES ───────────────────────────────────────────────────
export const skillCategories = [
  {
    category: "Cybersécurité & Réseaux",
    color: "#FF073A",
    skills: [
      { name: "Kali Linux", level: 75 },
      { name: "Packet Tracer", level: 70 },
      { name: "CISCO CCNA 1", level: 100 },
    ],
  },
  {
    category: "Big Data & IA",
    color: "#006837",
    skills: [
      { name: "Hadoop", level: 65 },
      { name: "Kerberos", level: 60 }
    ],
  },
  {
    category: "Développement & Programmation",
    color: "#0052FF",
    skills: [
      { name: "HTML / CSS / JavaScript", level: 85 },
      { name: "Python", level: 80 },
      { name: "PHP", level: 75 },
      { name: "Django / Laravel", level: 70 },
    ],
  },
  {
    category: "Design & Outils Créatifs",
    color: "#0052FF",
    skills: [
      { name: "Photoshop / Illustrator", level: 85 },
      { name: "Canva", level: 90 },
    ],
  },
];

// ─── BADGES TECHNOS (section compétences) ─────────────────────────────────────
export const allBadges = [
  // Cybersécurité & Réseaux
  "Kali Linux", "Packet Tracer", "CISCO CCNA", "Réseaux",
  // Big Data & IA
  "Hadoop", "Kerberos",
  // Développement
  "HTML/CSS", "JavaScript", "PHP", "MySQL", "Python", "Django", "Laravel",
  // Design
  "Photoshop", "Illustrator", "Canva", "UI/UX",
  // Outils
  "Git", "VS Code",
];

export const projects = keyProjects;

/** Numéro WhatsApp au format international (ex. 2250701020304) */
export function getWhatsAppNumber() {
  const source = personalInfo.whatsapp || personalInfo.phone;
  let digits = source.replace(/\D/g, "");
  if (digits.startsWith("0") && digits.length === 10) {
    digits = `225${digits.slice(1)}`;
  }
  return digits;
}

export function buildMailBody({ name, email, message }) {
  return `Nom : ${name}\nEmail : ${email}\n\n${message}`;
}

export function buildMailtoUrl({ name, email, message }) {
  const subject = encodeURIComponent(`Message de ${name} via AMÉ TECH Portfolio`);
  const body = encodeURIComponent(buildMailBody({ name, email, message }));
  return `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
}

export function buildGmailUrl({ name, email, message }) {
  const subject = encodeURIComponent(`Message de ${name} via AMÉ TECH Portfolio`);
  const body = encodeURIComponent(buildMailBody({ name, email, message }));
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}&su=${subject}&body=${body}`;
}

export const WHATSAPP_CHANNEL_URL =
  "https://whatsapp.com/channel/0029Vb5mIU9AzNbp95wc8C2a";

export const socialLinks = [
  {
    id: "whatsapp",
    label: "Chaîne WhatsApp",
    href: WHATSAPP_CHANNEL_URL,
    color: "#25D366",
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61578594366189",
    color: "#1877F2",
  },
  {
    id: "telegram",
    label: "Telegram",
    href: "https://t.me/ame_tech25",
    color: "#26A5E4",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/ame_tech25",
    color: "#E4405F",
  },
  {
    id: "youtube",
    label: "YouTube",
    href: "https://youtube.com/@ame_tech25",
    color: "#FF0000",
  },
];

export const footerSocialLinks = [
  ...socialLinks,
  {
    id: "x",
    label: "X",
    href: "https://x.com/ame_tech25",
    color: "#ffffff",
  },
  {
    id: "tiktok",
    label: "TikTok",
    href: "https://www.tiktok.com/@ame_tech25",
    color: "#00f2ea",
  },
  {
    id: "threads",
    label: "Threads",
    href: "https://www.threads.net/@ame_tech25",
    color: "#ffffff",
  },
];

// ─── RÉALISATIONS VISUELLES (Extensions synchronisées en .webp) ─────────────────
export const visualCreations = [
  { id: "CREA-001", title: "TAG de photo", image: "/images/affiches/1.webp", category: "Institutionnel" },
  { id: "CREA-002", title: "Offre Service Impression", image: "/images/affiches/2.webp", category: "Commercial" },
  { id: "CREA-003", title: "Theme événementielles", image: "/images/affiches/3.webp", category: "Institutionnel" },
  { id: "CREA-004", title: "Affiche de priere", image: "/images/affiches/4.webp", category: "Événementiel" },
  { id: "CREA-005", title: "Teasing Jour J-02", image: "/images/affiches/5.webp", category: "Teasing" },
  { id: "CREA-006", title: "Affiche Évangélisation", image: "/images/affiches/6.webp", category: "Événementiel" },
  { id: "CREA-007", title: "Dépliant Journée carrière Face A", image: "/images/affiches/7.webp", category: "Édition" },
  { id: "CREA-008", title: "Dépliant Journée carrière Face B", image: "/images/affiches/8.webp", category: "Édition" },
  { id: "CREA-009", title: "Affiche d'Eglise 'Allons en Galilée'", image: "/images/affiches/9.webp", category: "Événementiel" },
  { id: "CREA-010", title: "Au revoir de nos parrains", image: "/images/affiches/10.webp", category: "Événementiel" },
  { id: "CREA-011", title: "Teasing Jour J-31", image: "/images/affiches/11.webp", category: "Teasing" },
  { id: "CREA-012", title: "Affiche La Nuit de l'Apothéose", image: "/images/affiches/12.webp", category: "Événementiel" },
  { id: "CREA-013", title: "Affiche Panel Professionnel", image: "/images/affiches/13.webp", category: "Conférence" },
  { id: "CREA-014", title: "Affiche de prière GEEAD", image: "/images/affiches/14.webp", category: "Événementiel" },
  { id: "CREA-015", title: "Affiche Célébration Pâques", image: "/images/affiches/15.webp", category: "Événementiel" },
];