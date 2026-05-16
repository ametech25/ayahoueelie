// components/Domains.js
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { domains as domainsData } from "../data/portfolioData";
import { useIsMobile } from "@/hooks/useIsMobile";

const domainIcons = {
  "01": (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <path d="M24 4L8 10V24C8 33.6 15.2 42.4 24 44C32.8 42.4 40 33.6 40 24V10L24 4Z" stroke="#FF073A" strokeWidth="2" fill="none" />
      <path d="M16 24L21 29L32 18" stroke="#0052FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "02": (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <circle cx="24" cy="24" r="8" stroke="#0052FF" strokeWidth="2" />
      <circle cx="24" cy="8" r="3" stroke="#FF073A" strokeWidth="2" />
      <circle cx="24" cy="40" r="3" stroke="#FF073A" strokeWidth="2" />
      <circle cx="8" cy="24" r="3" stroke="#FF073A" strokeWidth="2" />
      <circle cx="40" cy="24" r="3" stroke="#FF073A" strokeWidth="2" />
      <line x1="24" y1="11" x2="24" y2="16" stroke="#0052FF" strokeWidth="1.5" />
      <line x1="24" y1="32" x2="24" y2="37" stroke="#0052FF" strokeWidth="1.5" />
      <line x1="11" y1="24" x2="16" y2="24" stroke="#0052FF" strokeWidth="1.5" />
      <line x1="32" y1="24" x2="37" y2="24" stroke="#0052FF" strokeWidth="1.5" />
    </svg>
  ),
  "03": (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <rect x="4" y="8" width="40" height="32" rx="2" stroke="#006837" strokeWidth="2" />
      <line x1="4" y1="18" x2="44" y2="18" stroke="#006837" strokeWidth="1.5" />
      <circle cx="10" cy="13" r="2" fill="#FF073A" />
      <circle cx="18" cy="13" r="2" fill="#FF073A" opacity="0.5" />
      <circle cx="26" cy="13" r="2" fill="#FF073A" opacity="0.3" />
      <polyline points="14,26 10,30 14,34" stroke="#006837" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="34,26 38,30 34,34" stroke="#006837" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="20" y1="34" x2="28" y2="26" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  "04": (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <circle cx="24" cy="24" r="16" stroke="#0052FF" strokeWidth="2" />
      <circle cx="24" cy="24" r="6" fill="#FF073A" opacity="0.8" />
      <path d="M24 8 L24 18" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M24 30 L24 40" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 24 L18 24" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M30 24 L40 24" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
};

export default function Domains() {
  const ref = useRef(null);
  const isMobile = useIsMobile();
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const shouldAnimate = isMobile || inView;

  return (
    <section id="domains" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0052FF]/20 to-transparent" />

      {/* Background glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#FF073A]/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs text-[#0052FF] tracking-widest">// 02</span>
            <span className="flex-1 h-px bg-[#0052FF]/20 max-w-[100px]" />
            <span className="font-mono text-xs text-white/30 tracking-widest">DOMAINES</span>
          </div>
          <h2 className="font-michroma text-3xl md:text-5xl text-white">
            Mes <span className="text-[#0052FF]">expertises</span>
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {domainsData.map((domain, i) => (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, y: 40 }}
              animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: isMobile ? 0 : i * 0.12 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative border border-white/10 p-8 cursor-default overflow-hidden bg-[#050505] card-line"
            >
              {/* Hover bg */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at 50% 0%, ${domain.color}10 0%, transparent 70%)` }}
              />

              {/* ID number */}
              <span className="absolute top-6 right-6 font-michroma text-4xl text-white/5 select-none">
                {domain.id}
              </span>

              {/* Left accent line */}
              <div
                className="absolute left-0 top-0 w-0.5 h-0 group-hover:h-full transition-all duration-500"
                style={{ background: domain.color }}
              />

              {/* Icon */}
              <div className="mb-6 relative z-10">
                {domainIcons[domain.id]}
              </div>

              {/* Title */}
              <h3 className="font-michroma text-lg text-white mb-3 relative z-10 group-hover:text-white transition-colors">
                {domain.title}
              </h3>

              {/* Desc */}
              <p className="text-white/50 text-sm leading-relaxed mb-6 relative z-10 group-hover:text-white/70 transition-colors">
                {domain.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 relative z-10">
                {domain.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-2 py-1 border border-white/10 text-white/40 group-hover:border-white/20 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0052FF]/10 to-transparent" />
    </section>
  );
}
