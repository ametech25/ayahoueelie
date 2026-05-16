import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo } from "../data/portfolioData";

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

function SkillBar({ label, pct, inView, delay }) {
  return (
    <div>
      <div className="flex justify-between font-mono text-xs text-white/40 mb-1.5">
        <span>{label}</span>
        <span className="text-[#0052FF] tabular-nums">{pct}%</span>
      </div>
      <div className="h-[3px] bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-[#0052FF] to-[#FF073A]"
        />
      </div>
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0052FF]/20 to-transparent" />
      <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#0052FF]/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Colonne gauche — carte profil */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative border border-[#0052FF]/25 bg-[#050505] px-6 py-8 sm:px-8 sm:py-10">
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#0052FF]" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#0052FF]" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#FF073A]" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#FF073A]" />

              {/* Photo */}
              <div className="relative mx-auto w-36 h-36 sm:w-40 sm:h-40 mb-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-2 rounded-full border border-dashed border-[#0052FF]/25"
                />
                <div className="relative w-full h-full rounded-full border-2 border-[#0052FF]/40 bg-[#050505] overflow-hidden">
                  <img
                    src={personalInfo.profileImage}
                    alt={`Photo de profil — ${personalInfo.name}`}
                    className="w-full h-full object-cover scale-[1.35]"
                    style={{ objectPosition: "50% 8%" }}
                  />
                </div>
                <div className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-[#006837] border-2 border-[#050505]" />
              </div>

              {/* Identité */}
              <div className="text-center mb-8">
                <p className="font-michroma text-sm sm:text-base text-white tracking-[0.2em] mb-2">
                  {personalInfo.brand}
                </p>
                <p className="font-mono text-[11px] sm:text-xs text-white/45 tracking-wider leading-relaxed max-w-[260px] mx-auto">
                  {personalInfo.tagline}
                </p>
              </div>

              {/* Compétences */}
              <div className="space-y-4 mb-8">
                {personalInfo.aboutStats.map((item, i) => (
                  <SkillBar
                    key={item.label}
                    label={item.label}
                    pct={item.pct}
                    inView={inView}
                    delay={0.4 + i * 0.1}
                  />
                ))}
              </div>

              {/* Badge disponible — intégré au flux */}
              <div className="flex justify-end">
                <motion.span
                  animate={{ y: [-2, 2, -2] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-block bg-[#FF073A] px-4 py-2 font-mono text-[11px] text-white tracking-widest shadow-[0_4px_24px_rgba(255,7,58,0.35)]"
                >
                  DISPONIBLE ▸
                </motion.span>
              </div>
            </div>
          </motion.div>

          {/* Colonne droite — texte */}
          <div className="lg:pl-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="font-mono text-xs text-[#0052FF] tracking-widest">// 01</span>
              <span className="flex-1 h-px bg-[#0052FF]/20 max-w-[80px]" />
              <span className="font-mono text-xs text-white/30 tracking-widest">À PROPOS</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="font-michroma text-3xl md:text-4xl lg:text-[2.75rem] text-white mb-6 leading-tight"
            >
              Construire l&apos;avenir
              <br />
              <span className="text-[#0052FF]">numérique</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-white/60 leading-relaxed mb-6 text-sm sm:text-base max-w-xl"
              dangerouslySetInnerHTML={{
                __html: personalInfo.description.replace(
                  /(cybersécurité|intelligence artificielle|AMÉ TECH)/gi,
                  '<span class="text-white font-medium">$&</span>'
                ),
              }}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="text-white/40 leading-relaxed mb-10 text-sm font-mono border-l-2 border-[#0052FF]/30 pl-4"
            >
              {personalInfo.motto}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="grid grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-white/10"
            >
              {personalInfo.stats.map((stat) => (
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
