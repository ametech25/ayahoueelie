// components/Footer.js
import { motion } from "framer-motion";
import { footerSocialLinks } from "../data/portfolioData";
import { SocialLinksRow } from "./SocialIcons";
import SiteLogo from "./SiteLogo";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function Footer() {
  const year = new Date().getFullYear();
  const isMobile = useIsMobile();

  return (
    <motion.footer
      initial={isMobile ? { opacity: 0, y: 24 } : false}
      whileInView={isMobile ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="relative border-t border-white/10 py-12 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />

      <motion.div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center gap-2"
          >
            <SiteLogo className="w-28 sm:w-32 h-auto max-h-16 object-contain" alt="AMÉ TECH" />
            <p className="font-mono text-xs text-white/20 tracking-wider text-center">
              Designing the Future of<br />Technology
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {[
              { label: "Accueil", href: "#hero" },
              { label: "Projets", href: "#projects" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                }}
                className="font-mono text-xs text-white/30 hover:text-[#0052FF] transition-colors tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="text-center md:text-right">
            <p className="font-mono text-xs text-white/20 tracking-widest">
              © {year} AMÉ TECH
            </p>
            <p className="font-mono text-xs text-white/10 tracking-wider">
              AYAHOUE ELIE
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5">
          <SocialLinksRow
            links={footerSocialLinks}
            size="lg"
            className="justify-center mb-6"
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-3 border-t border-white/5 pt-6"
          >
            <span className="font-mono text-xs text-white/15 tracking-widest text-center">
              &gt;_ system_status: <span className="text-[#006837]">ONLINE</span>
            </span>
            <span className="font-mono text-xs text-white/15 text-center">
              Designing the Future of Technology
            </span>
            <span className="font-mono text-xs text-white/15 tracking-widest text-center">
              Made with <span className="text-[#FF073A]">♥</span> in Côte d&apos;Ivoire
            </span>
          </motion.div>
        </div>
      </motion.div>
    </motion.footer>
  );
}
