// components/Footer.js
import { motion } from "framer-motion";
import { footerSocialLinks } from "../data/portfolioData";
import { SocialLinksRow } from "./SocialIcons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 py-12 overflow-hidden">
      {/* Background grid fade */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center gap-2"
          >
            {/* Mini logo */}
            <img src="/images/logo.svg" alt="Logo" className="w-50 h-20" />
            <p className="font-mono text-xs text-white/20 tracking-wider text-center">
              Designing the Future of<br />Technology
            </p>
          </motion.div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-6">
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

          {/* Copyright */}
          <div className="text-right">
            <p className="font-mono text-xs text-white/20 tracking-widest">
              © {year} AMÉ TECH
            </p>
            <p className="font-mono text-xs text-white/10 tracking-wider">
              AYAHOUE ELIE
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-white/5">
          <SocialLinksRow
            links={footerSocialLinks}
            size="lg"
            className="justify-center mb-6"
          />

          {/* Status line */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 border-t border-white/5 pt-6">
            <span className="font-mono text-xs text-white/15 tracking-widest">
              &gt;_ system_status: <span className="text-[#006837]">ONLINE</span>
            </span>
            <span className="font-mono text-xs text-white/15">
              Designing the Future of Technology
            </span>
            <span className="font-mono text-xs text-white/15 tracking-widest">
              Made with <span className="text-[#FF073A]">♥</span> in Côte d&apos;Ivoire
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
