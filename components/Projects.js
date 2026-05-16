// components/Projects.js
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { projects } from "../data/portfolioData";
import { useIsMobile } from "@/hooks/useIsMobile";

// Animated card component
function ProjectCard({ project, index, inView, isMobile }) {
  const [hovered, setHovered] = useState(false);
  const hasLink = Boolean(project.link);
  const shouldAnimate = isMobile || inView;

  const card = (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={shouldAnimate ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: isMobile ? 0 : index * 0.15 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative border border-white/10 overflow-hidden bg-[#050505] ${hasLink ? "cursor-pointer" : "cursor-default"}`}
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
        {/* Year & highlight */}
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

        {/* Title */}
        <h3 className="font-michroma text-xl md:text-2xl text-white mb-2 group-hover:text-[#0052FF] transition-colors duration-300">
          {project.title}
        </h3>
        <p className="font-mono text-xs text-white/40 tracking-wider mb-4">
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="text-white/50 text-sm leading-relaxed mb-6 group-hover:text-white/70 transition-colors duration-300">
          {project.desc}
        </p>

        {/* Tags */}
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

        {/* CTA */}
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

      {/* Hover glow */}
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

      {/* Bottom accent */}
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
  const isMobile = useIsMobile();
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const shouldAnimate = isMobile || inView;

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF073A]/20 to-transparent" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[#0052FF]/3 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs text-[#0052FF] tracking-widest">// 03</span>
            <span className="flex-1 h-px bg-[#0052FF]/20 max-w-[100px]" />
            <span className="font-mono text-xs text-white/30 tracking-widest">PROJETS</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-michroma text-3xl md:text-5xl text-white">
              Mes <span className="text-[#FF073A]">réalisations</span>
            </h2>
            <span className="font-mono text-xs text-white/20 tracking-widest">
              {projects.length} projets documentés
            </span>
          </div>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} isMobile={isMobile} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={shouldAnimate ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: isMobile ? 0 : 0.5 }}
          className="mt-10 text-center font-mono text-xs text-white/20 tracking-widest"
        >
          &gt;_ Plus de projets en cours de développement...
        </motion.p>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0052FF]/10 to-transparent" />
    </section>
  );
}
