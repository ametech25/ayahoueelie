export const personalInfo = {
  name: "AYAHOUE MAWUFLIMI ELIE",
  title: "AMÉ TECH",
  tagline: "Etudiant Cybersecurité et IA",
  description: "Etudiant venant de valider sa licence 2, je cherche un stage pour gagner en expérience et en compétence en sécurité informatique pendant les vacances prochaines, pour me développer et apporter un plus à votre entreprise.",
  motto: ">_ Chaque ligne de code, chaque design, chaque projet — une réponse à un problème réel.",
  email: "email@gmail.com",
  phone: "+33 00000000",
  location: "Abidjan",
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
    { label: "Cybersécurité", pct: 75 },
    { label: "Développement", pct: 80 },
    { label: "IA & Data", pct: 65 },
    { label: "Design", pct: 85 },
  ],
};

export const cvData = {
  savoirFaire: [
    "Résolution de problèmes complexes",
    "Adaptabilité & apprentissage rapide",
    "Collaboration en équipe distribuée",
    "Gestion de projet & autonomie",
    "Communication technique & pédagogique"
  ],
  interests: "Design - football - recherches",
  formations: [
    "BEPC 2021 collège la fayette",
    "BAC C 2024 lycée municipal Yakassé-Attobrou",
    "Licence2 cybersecurité et IA 2026 à ESATIC",
    "certificat CISCO CCNA 1&2 en cours"
  ],
  logiciels: [
    "HTML/CSS/JS/PHP/PYTHON",
    "Django/Laravel",
    "Packet Tracer",
    "Kali Linux",
    "Photoshop/illustrator/canva"
  ],
  experiences: [
    "APP1 - lutter contre la pollution 2025",
    "APP2 : application linguistique 2026",
    "2 mois stage en maintenance informatique 2025 chez Perfect Group",
    "membre de la com du conseil estudiantin de l'ESATIC 2025-2026",
    "Délégué licence2"
  ],
  langues: [
    "Français",
    "Anglais"
  ]
};

// Structures utilisées par les autres sections du site
export const education = [
  {
    period: "2026",
    degree: "Licence 2 Cybersécurité et IA",
    school: "ESATIC",
    location: "Abidjan",
    description: "Formation approfondie en réseaux, intelligence artificielle et sécurité informatique."
  },
  {
    period: "2024",
    degree: "BAC C",
    school: "Lycée Municipal Yakassé-Attobrou",
    location: "Côte d'Ivoire",
    description: "Série scientifique. Mathématiques et physique-chimie."
  }
];

export const skillCategories = [
  {
    category: "Développement & Programmation",
    color: "#0052FF",
    skills: [
      { name: "HTML/CSS/JS/PHP/PYTHON", level: 85 },
      { name: "Django/Laravel", level: 75 }
    ],
  },
  {
    category: "Cybersécurité & Réseaux",
    color: "#FF073A",
    skills: [
      { name: "Packet Tracer", level: 70 },
      { name: "Kali Linux", level: 75 },
      { name: "CISCO CCNA 1&2", level: 65 }
    ],
  },
  {
    category: "Design & Outils Créatifs",
    color: "#006837",
    skills: [
      { name: "Photoshop/Illustrator/Canva", level: 85 }
    ],
  },
];

export const experience = [
  {
    id: "EXP-001",
    title: "Stage en maintenance informatique",
    company: "Perfect Group",
    location: "Abidjan",
    period: "2025 (2 mois)",
    badge: "Stage",
    desc: "Maintenance et gestion de parc informatique.",
    tasks: [],
  },
  {
    id: "EXP-002",
    title: "Membre de la com. conseil estudiantin",
    company: "ESATIC",
    location: "Abidjan",
    period: "2025 – 2026",
    badge: "Associatif",
    desc: "Participation active à la vie étudiante et organisation d'événements.",
    tasks: [],
  },
];

export const keyProjects = [
  {
    id: "PRJ-001",
    title: "APP1 - Lutter contre la pollution",
    subtitle: "Application web de sensibilisation écologique",
    year: "2025",
    highlight: "Environnement",
    desc: "Application de sensibilisation et d'action écologique permettant aux utilisateurs de suivre et réduire leur impact environnemental.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    tech: ["Web"],
    impact: "Application de sensibilisation et d'action écologique.",
    status: "En développement",
    statusColor: "#006837",
    link: null,
  },
  {
    id: "PRJ-002",
    title: "APP2 - Application linguistique",
    subtitle: "Outil d'apprentissage et de traduction intelligent",
    year: "2026",
    highlight: "IA & Langues",
    desc: "Outil d'apprentissage ou de traduction linguistique utilisant l'IA pour offrir une expérience d'apprentissage personnalisée.",
    tags: ["Python", "React", "IA", "NLP"],
    tech: ["Web", "IA"],
    impact: "Outil d'apprentissage ou de traduction linguistique.",
    status: "Planifié",
    statusColor: "#0052FF",
    link: null,
  },
];

export const domains = [
  {
    id: "01",
    title: "Développement Web",
    desc: "Création d'applications web modernes, responsives et performantes avec les dernières technologies.",
    color: "#0052FF",
    tags: ["React", "Next.js", "Tailwind", "Node.js"]
  },
  {
    id: "02",
    title: "Cybersécurité",
    desc: "Audit de sécurité, tests d'intrusion et sécurisation d'infrastructures informatiques.",
    color: "#FF073A",
    tags: ["Pentest", "Réseaux", "Wireshark", "Linux"]
  },
  {
    id: "03",
    title: "Intelligence Artificielle",
    desc: "Intégration de solutions d'IA, traitement de données et modèles de machine learning.",
    color: "#006837",
    tags: ["Python", "Data", "ML", "IA"]
  },
  {
    id: "04",
    title: "Design Visuel",
    desc: "Conception d'identités visuelles, UI/UX design et création de chartes graphiques percutantes.",
    color: "#0052FF",
    tags: ["UI/UX", "Figma", "Photoshop", "Illustrator"]
  }
];

export const allBadges = [
  "React", "Next.js", "Tailwind", "Node.js", "JavaScript", "Python",
  "Django", "Laravel", "HTML/CSS", "PHP", "MongoDB", "PostgreSQL",
  "Git", "Docker", "REST APIs", "Figma", "UI/UX", "Photoshop",
  "Illustrator", "Canva", "Kali Linux", "Wireshark", "Pentest",
  "Cybersécurité", "Machine Learning", "Data Science", "NLP", "IA",
  "Packet Tracer", "CISCO CCNA"
];

export const projects = keyProjects;

