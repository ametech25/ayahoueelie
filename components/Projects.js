// components/Projects.js
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { projects } from "../data/portfolioData";
import { useRevealMotion } from "@/hooks/useRevealMotion";
import Link from "next/link";

// Définition de la base path pour GitHub Pages
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

function ProjectCard({ project, index, inView }) {
  const [hovered, setHovered] = useState(false);
  const hasLink = Boolean(project.link);
  const { visible: _v, ...cardMotion } = useRevealMotion(inView, {
    delay: 0.1 + index * 0.12,
    x: index % 2 === 0 ? -28 : 28,
    y: 0,
    duration: 0.7,
  });

  const card = (
    <motion.div
      {...cardMotion}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative border border-white/10 overflow-hidden bg-[#050505] h-full ${hasLink ? "cursor-pointer" : "cursor-default"}`}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#FF073A]" />
          <div className="w-2 h-2 rounded-full bg-[#0052FF] opacity-60" />
          <div className="w-2 h-2 rounded-full bg-white opacity-20" />
        </div>
        <span className="font-mono text-xs text-white/20">{project.id}</span>
        <span
          className="font-mono text-xs px-2 py-0.5 border"
          style={{ color: project.statusColor, borderColor: `${project.statusColor}40` }}
        >
          {project.status}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <div className="flex items-center justify-between mb-4 gap-2 flex-wrap">
          <span className="font-mono text-xs text-white/30">{project.year}</span>
          <div className="flex items-center gap-2 flex-wrap justify-end">
            {project.team && (
              <span className="font-mono text-xs text-white/50 border border-white/15 px-2 py-0.5">
                {project.team}
              </span>
            )}
            <span className="font-mono text-xs text-[#0052FF] border border-[#0052FF]/30 px-2 py-0.5">
              {project.highlight}
            </span>
          </div>
        </div>

        <h3 className="font-michroma text-xl md:text-2xl text-white mb-2 group-hover:text-[#0052FF] transition-colors duration-300">
          {project.title}
        </h3>
        <p className="font-mono text-xs text-white/40 tracking-wider mb-4">
          {project.subtitle}
        </p>

        <p className="text-white/50 text-sm leading-relaxed mb-6 group-hover:text-white/70 transition-colors duration-300">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs px-3 py-1 bg-white/5 border border-white/10 text-white/50 group-hover:border-[#0052FF]/30 transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {hasLink && (
          <motion.div
            animate={{ x: hovered ? 4 : 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2 font-mono text-xs text-[#0052FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <span>&gt;_ Voir le projet</span>
            <span>→</span>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(circle at 50% 50%, rgba(0,82,255,0.05) 0%, transparent 70%)",
            }}
          />
        )}
      </AnimatePresence>

      <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-[#0052FF] to-[#FF073A] transition-all duration-500" />
    </motion.div>
  );

  if (!hasLink) return card;

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
      aria-label={`Voir le projet : ${project.title}`}
    >
      {card}
    </a>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const { visible: _h, ...headerMotion } = useRevealMotion(inView, { delay: 0 });
  const { visible: _f, ...footerMotion } = useRevealMotion(inView, { delay: 0.45, y: 12 });

  const [galerieHovered, setGalerieHovered] = useState(false);

  const { visible: _g, ...galerieMotion } = useRevealMotion(inView, {
    delay: 0.1 + projects.length * 0.12,
    x: projects.length % 2 === 0 ? -28 : 28,
    y: 0,
    duration: 0.7,
  });

  return (
    <section id="projects" className="relative py-20 sm:py-28 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF073A]/20 to-transparent" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[#0052FF]/3 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>

        {/* Header */}
        <motion.div {...headerMotion} className="mb-10 sm:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs text-[#0052FF] tracking-widest">// 03</span>
            <span className="flex-1 h-px bg-[#0052FF]/20 max-w-[100px]" />
            <span className="font-mono text-xs text-white/30 tracking-widest">PORTFOLIO</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-michroma text-2xl sm:text-3xl md:text-5xl text-white">
              Mes <span className="text-[#FF073A]">réalisations</span>
            </h2>
            <span className="font-mono text-xs text-white/20 tracking-widest">
              {projects.length + 1} sections documentées
            </span>
          </div>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}

          {/* Troisième carte — Galerie Créations avec chemin adapté à GitHub Pages */}
          <Link href="/creations" className="block h-full">
            <motion.div
              {...galerieMotion}
              onMouseEnter={() => setGalerieHovered(true)}
              onMouseLeave={() => setGalerieHovered(false)}
              className="group relative border border-white/10 overflow-hidden bg-[#050505] h-full cursor-pointer flex flex-col justify-between"
            >
              {/* Image de fond corrigée avec la variable BASE */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-[0.12] group-hover:opacity-[0.20] transition-opacity duration-500 pointer-events-none mix-blend-luminosity"
                style={{ backgroundImage: `url('${BASE}/images/affiches/5.webp')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/40 to-[#050505] pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between px-6 py-3 border-b border-white/10 bg-[#050505]/80 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#0052FF]" />
                    <div className="w-2 h-2 rounded-full bg-[#FF073A] opacity-60" />
                    <div className="w-2 h-2 rounded-full bg-white opacity-20" />
                  </div>
                  <span className="font-mono text-xs text-white/20">PRJ-003</span>
                  <span className="font-mono text-xs px-2 py-0.5 border border-[#0052FF]/40 text-[#0052FF] bg-[#0052FF]/5">
                    Découvrir
                  </span>
                </div>

                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-4 gap-2 flex-wrap">
                    <span className="font-mono text-xs text-white/30">Continu</span>
                    <div className="flex items-center gap-2 flex-wrap justify-end">
                      <span className="font-mono text-xs text-white/50 border border-white/15 px-2 py-0.5">
                        Portfolio Visuel
                      </span>
                      <span className="font-mono text-xs text-[#FF073A] border border-[#FF073A]/30 px-2 py-0.5">
                        Design
                      </span>
                    </div>
                  </div>

                  <h3 className="font-michroma text-xl md:text-2xl text-white mb-2 group-hover:text-[#0052FF] transition-colors duration-300">
                    CRÉATIONS VISUELLES
                  </h3>
                  <p className="font-mono text-xs text-white/40 tracking-wider mb-4">
                    Design graphique, branding & concepts numériques
                  </p>

                  <p className="text-white/50 text-sm leading-relaxed mb-6 group-hover:text-white/70 transition-colors duration-300">
                    Un aperçu de mon travail créatif au-delà du code : logos, affiches, maquettes UI, et identités visuelles conçus pour divers projets et concepts.
                  </p>
                </div>
              </div>

              <div className="p-6 md:p-8 pt-0 relative z-10 mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Photoshop", "Illustrator", "Figma", "Canva"].map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-3 py-1 bg-white/5 border border-white/10 text-white/50 group-hover:border-[#0052FF]/30 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.div
                  animate={{ x: galerieHovered ? 4 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2 font-mono text-xs text-[#0052FF] opacity-100 transition-opacity duration-300"
                >
                  <span>&gt;_ Explorer la galerie</span>
                  <span>→</span>
                </motion.div>
              </div>

              <AnimatePresence>
                {galerieHovered && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 pointer-events-none z-0"
                    style={{
                      background: "radial-gradient(circle at 50% 50%, rgba(0,82,255,0.05) 0%, transparent 70%)",
                    }}
                  />
                )}
              </AnimatePresence>

              <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-[#0052FF] to-[#FF073A] transition-all duration-500 z-20" />
            </motion.div>
          </Link>

        </div>

        <motion.p
          {...footerMotion}
          className="mt-12 text-center font-mono text-xs text-white/20 tracking-widest"
        >
          &gt;_ Plus de projets en cours de développement...
        </motion.p>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0052FF]/10 to-transparent" />
    </section>
  );
}