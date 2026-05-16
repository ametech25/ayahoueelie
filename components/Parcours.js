// components/Parcours.js
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { education, experience } from "../data/portfolioData";

function TimelineItem({ item, index, inView, side }) {
  const isEdu = side === "edu";
  const accentColor = item.color || (isEdu ? "#006837" : item.badgeColor || "#0052FF");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      className="relative pl-8 pb-8 last:pb-0 group"
    >
      {/* Vertical line */}
      {index < (isEdu ? education.length - 1 : experience.length - 1) && (
        <div
          className="absolute left-[11px] top-5 bottom-0 w-px"
          style={{ background: `linear-gradient(to bottom, ${accentColor}40, transparent)` }}
        />
      )}

      {/* Dot */}
      <div
        className="absolute left-0 top-1 w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center"
        style={{ borderColor: accentColor, background: "#050508" }}
      >
        <div
          className="w-2 h-2 rounded-full"
          style={{ background: accentColor, boxShadow: `0 0 6px ${accentColor}` }}
        />
      </div>

      {/* Card */}
      <div
        className="border border-white/8 p-5 relative overflow-hidden group-hover:border-white/15 transition-colors duration-300"
        style={{ background: "rgba(255,255,255,0.015)" }}
      >
        {/* Top accent line on hover */}
        <div
          className="absolute top-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
          style={{ background: `linear-gradient(to right, ${accentColor}, transparent)` }}
        />

        {/* Period badge */}
        <div className="flex items-center justify-between mb-2 gap-2 flex-wrap">
          <span
            className="font-mono text-xs px-2 py-0.5 border tracking-wider"
            style={{ color: accentColor, borderColor: `${accentColor}40`, fontSize: 10 }}
          >
            {item.period}
          </span>
          {item.badge && (
            <span
              className="font-mono text-xs px-2 py-0.5 border tracking-wider"
              style={{ color: "rgba(255,255,255,0.35)", borderColor: "rgba(255,255,255,0.08)", fontSize: 10 }}
            >
              {item.badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h4 className="font-michroma text-sm text-white mb-1 leading-snug">
          {item.degree || item.title}
        </h4>

        {/* School / Company */}
        <p className="font-mono text-xs mb-2" style={{ color: accentColor }}>
          {item.school || item.company}
          {item.location && (
            <span className="text-white/30 ml-2">— {item.location}</span>
          )}
        </p>

        {/* Description */}
        <p className="text-white/45 text-xs leading-relaxed">
          {item.description || item.desc}
        </p>

        {/* Tasks (experience only) */}
        {item.tasks && item.tasks.length > 0 && (
          <ul className="mt-3 space-y-1">
            {item.tasks.map((t, i) => (
              <li key={i} className="flex items-start gap-2">
                <span style={{ color: accentColor }} className="text-xs mt-0.5 flex-shrink-0">▸</span>
                <span className="font-mono text-xs text-white/35 leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}

export default function Parcours() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="parcours" className="relative py-32 overflow-hidden">
      {/* Top separator */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#006837]/20 to-transparent" />

      {/* BG glow */}
      <div className="absolute right-0 top-1/3 w-96 h-96 rounded-full bg-[#006837]/4 blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-1/3 w-80 h-80 rounded-full bg-[#0052FF]/4 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs text-[#0052FF] tracking-widest">// 02</span>
            <span className="flex-1 h-px bg-[#0052FF]/20 max-w-[100px]" />
            <span className="font-mono text-xs text-white/30 tracking-widest">PARCOURS</span>
          </div>
          <h2 className="font-michroma text-3xl md:text-5xl text-white">
            Formation &amp; <span className="text-[#006837]">expérience</span>
          </h2>
        </motion.div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">

          {/* Left — Formation */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#006837]" />
              <span className="font-mono text-xs text-[#006837] tracking-widest uppercase">Formation</span>
              <div className="flex-1 h-px bg-[#006837]/20" />
            </motion.div>

            {education.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} inView={inView} side="edu" />
            ))}
          </div>

          {/* Right — Expériences */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#0052FF]" />
              <span className="font-mono text-xs text-[#0052FF] tracking-widest uppercase">Expérience</span>
              <div className="flex-1 h-px bg-[#0052FF]/20" />
            </motion.div>

            {experience.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} inView={inView} side="exp" />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0052FF]/10 to-transparent" />
    </section>
  );
}
