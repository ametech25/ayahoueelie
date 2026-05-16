// components/Skills.js
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skillCategories, allBadges } from "../data/portfolioData";
import { useRevealMotion } from "@/hooks/useRevealMotion";
import { useIsMobile } from "@/hooks/useIsMobile";

function SkillBar({ name, level, color, index, inView }) {
  const { visible, ...barMotion } = useRevealMotion(inView, { delay: index * 0.07, x: -16, y: 0, duration: 0.5 });
  const isMobile = useIsMobile();

  return (
    <motion.div {...barMotion} className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-mono text-xs text-white/60 group-hover:text-white transition-colors">
          {name}
        </span>
        <span className="font-mono text-xs" style={{ color }}>
          {level}%
        </span>
      </div>
      <motion.div className="h-px bg-white/10 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={visible ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: isMobile ? 0.15 + index * 0.07 : 0.3 + index * 0.08, ease: "easeOut" }}
          style={{ background: color }}
          className="h-full relative"
        >
          <div className="absolute inset-0 bg-white/30 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function SkillCategory({ cat, catIndex, inView }) {
  const { visible: _c, ...catMotion } = useRevealMotion(inView, { delay: 0.08 + catIndex * 0.1, y: 24 });

  return (
    <motion.div {...catMotion} className="relative border border-white/10 p-5 sm:p-6">
      <div
        className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2"
        style={{ borderColor: cat.color }}
      />

      <div className="flex items-center gap-2 mb-6">
        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: cat.color }} />
        <span className="font-mono text-xs tracking-widest" style={{ color: cat.color }}>
          {cat.category.toUpperCase()}
        </span>
      </div>

      <motion.div className="space-y-4">
        {cat.skills.map((skill, i) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            color={cat.color}
            index={i}
            inView={inView}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const { visible: _h, ...headerMotion } = useRevealMotion(inView, { delay: 0 });
  const { visible: _b, ...badgesMotion } = useRevealMotion(inView, { delay: 0.35, y: 16 });

  return (
    <section id="skills" className="relative py-20 sm:py-28 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0052FF]/20 to-transparent" />
      <div className="absolute -left-20 bottom-1/3 w-80 h-80 rounded-full bg-[#0052FF]/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div {...headerMotion} className="mb-10 sm:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs text-[#0052FF] tracking-widest">// 04</span>
            <span className="flex-1 h-px bg-[#0052FF]/20 max-w-[100px]" />
            <span className="font-mono text-xs text-white/30 tracking-widest">COMPÉTENCES</span>
          </div>
          <h2 className="font-michroma text-2xl sm:text-3xl md:text-5xl text-white">
            Stack <span className="text-[#0052FF]">technique</span>
          </h2>
        </motion.div>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {skillCategories.map((cat, catIndex) => (
            <SkillCategory key={cat.category} cat={cat} catIndex={catIndex} inView={inView} />
          ))}
        </motion.div>

        <motion.div {...badgesMotion}>
          <motion.div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-xs text-white/30 tracking-widest">TECHNOLOGIES</span>
            <div className="flex-1 h-px bg-white/10" />
          </motion.div>

          <motion.div className="flex flex-wrap gap-2 sm:gap-3">
            {allBadges.map((badge) => (
              <span
                key={badge}
                className="font-mono text-xs text-white/50 border border-white/10 px-3 py-1.5 cursor-default transition-colors hover:text-[#0052FF] hover:border-[#0052FF]/30"
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF073A]/10 to-transparent" />
    </section>
  );
}
