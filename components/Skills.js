// components/Skills.js
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skillCategories, allBadges } from "../data/portfolioData";
import { useIsMobile } from "@/hooks/useIsMobile";

function SkillBar({ name, level, color, index, inView, isMobile }) {
  const shouldAnimate = isMobile || inView;
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={shouldAnimate ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: isMobile ? 0 : index * 0.08 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-mono text-xs text-white/60 group-hover:text-white transition-colors">
          {name}
        </span>
        <span className="font-mono text-xs" style={{ color }}>
          {level}%
        </span>
      </div>
      <div className="h-px bg-white/10 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={shouldAnimate ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay: isMobile ? 0 : 0.3 + index * 0.08, ease: "easeOut" }}
          style={{ background: color }}
          className="h-full relative"
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-white/30 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isMobile = useIsMobile();
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const shouldAnimate = isMobile || inView;

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0052FF]/20 to-transparent" />
      <div className="absolute -left-20 bottom-1/3 w-80 h-80 rounded-full bg-[#0052FF]/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs text-[#0052FF] tracking-widest">// 04</span>
            <span className="flex-1 h-px bg-[#0052FF]/20 max-w-[100px]" />
            <span className="font-mono text-xs text-white/30 tracking-widest">COMPÉTENCES</span>
          </div>
          <h2 className="font-michroma text-3xl md:text-5xl text-white">
            Stack <span className="text-[#0052FF]">technique</span>
          </h2>
        </motion.div>

        {/* Skill categories with bars */}
        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: isMobile ? 0 : catIndex * 0.15 }}
              className="relative border border-white/10 p-6"
            >
              {/* Corner accent */}
              <div
                className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2"
                style={{ borderColor: cat.color }}
              />

              {/* Category header */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: cat.color }} />
                <span className="font-mono text-xs tracking-widest" style={{ color: cat.color }}>
                  {cat.category.toUpperCase()}
                </span>
              </div>

              {/* Skill bars */}
              <div className="space-y-4">
                {cat.skills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={cat.color}
                    index={i}
                    inView={inView}
                    isMobile={isMobile}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Badges section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: isMobile ? 0 : 0.5 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-xs text-white/30 tracking-widest">TECHNOLOGIES</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <div className="flex flex-wrap gap-3">
            {allBadges.map((badge, i) => (
              <motion.span
                key={badge}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={shouldAnimate ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: isMobile ? 0 : 0.6 + i * 0.04 }}
                whileHover={{ scale: 1.1, borderColor: "rgba(0,82,255,0.5)" }}
                className="font-mono text-xs text-white/50 border border-white/10 px-3 py-1.5 cursor-default transition-colors hover:text-[#0052FF]"
              >
                {badge}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF073A]/10 to-transparent" />
    </section>
  );
}
