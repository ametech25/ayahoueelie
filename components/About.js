import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo } from "../data/portfolioData";

// Animated stat counter
function Stat({ value, label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="font-michroma text-3xl md:text-4xl text-[#0052FF] mb-1">
        {value}
      </div>
      <div className="font-mono text-xs text-white/40 tracking-widest uppercase">{label}</div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Bg decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0052FF]/20 to-transparent" />
      <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#0052FF]/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left: Visual element */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            ref={ref}
            className="relative"
          >
            {/* Main card */}
            <div className="relative border border-[#0052FF]/20 p-8 bg-[#050505]">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#0052FF]" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#0052FF]" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#FF073A]" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#FF073A]" />

              {/* Profile placeholder */}
              <div className="relative mx-auto w-40 h-40 mb-8">
                <div className="w-full h-full rounded-full border-2 border-[#0052FF]/40 bg-gradient-to-br from-[#0052FF]/20 to-[#FF073A]/10 flex items-center justify-center">
                  {/* Logo */}
                  <img src="/ayahoueelie/logo.svg" alt="AMÉ TECH Logo" className="w-20 h-20" />
                </div>
                {/* Rotating ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-3 rounded-full border border-dashed border-[#0052FF]/20"
                />
                {/* Status dot */}
                <div className="absolute bottom-2 right-2 w-3 h-3 rounded-full bg-[#006837] border-2 border-[#050505]" />
              </div>

              <div className="text-center">
                <p className="font-michroma text-sm text-white tracking-widest mb-1">{personalInfo.title}</p>
                <p className="font-mono text-xs text-white/40 tracking-wider mb-6">
                  {personalInfo.tagline}
                </p>

                {/* Status bars */}
                {personalInfo.aboutStats.map((item) => (
                  <div key={item.label} className="mb-3 text-left">
                    <div className="flex justify-between font-mono text-xs text-white/40 mb-1">
                      <span>{item.label}</span>
                      <span className="text-[#0052FF]">{item.pct}%</span>
                    </div>
                    <div className="h-px bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${item.pct}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-px bg-gradient-to-r from-[#0052FF] to-[#FF073A]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 -right-5 bg-[#FF073A] px-4 py-2 font-mono text-xs text-white tracking-wider"
            >
              DISPONIBLE ▸
            </motion.div>
          </motion.div>

          {/* Right: Text content */}
          <div>
            {/* Section label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="font-mono text-xs text-[#0052FF] tracking-widest">// 01</span>
              <span className="flex-1 h-px bg-[#0052FF]/20" />
              <span className="font-mono text-xs text-white/30 tracking-widest">À PROPOS</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-michroma text-3xl md:text-4xl text-white mb-6 leading-tight"
            >
              Construire l'avenir{" "}
              <span className="text-[#0052FF]">numérique</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-white/60 leading-relaxed mb-6 text-base"
              dangerouslySetInnerHTML={{ __html: personalInfo.description.replace(/(cybersécurité|intelligence artificielle|AMÉ TECH)/ig, '<span class="text-white font-medium">$&</span>') }}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-white/40 leading-relaxed mb-10 text-sm font-mono"
            >
              {personalInfo.motto}
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10"
            >
              {personalInfo.stats.map(stat => (
                <Stat key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF073A]/10 to-transparent" />
    </section>
  );
}
