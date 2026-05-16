// components/Navbar.js
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import SiteLogo from "@/components/SiteLogo";

const navLinks = [
  { label: "Accueil", href: "/#hero" },
  { label: "À propos", href: "/#about" },
  { label: "Domaines", href: "/#domains" },
  { label: "Projets", href: "/#projects" },
  { label: "Compétences", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Detect scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Determine active section
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const router = useRouter();

  const handleNavClick = (href) => {
    setMenuOpen(false);
    if (href.startsWith("/#")) {
      const targetId = href.replace("/", "");

      // Si on est déjà sur la page d'accueil, faire un scroll smooth
      if (router.pathname === "/") {
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Sinon, forcer la navigation vers la page d'accueil avec l'ancre
        router.push(href);
      }
    } else {
      router.push(href);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-[#050505]/95 backdrop-blur-md border-b border-[#0052FF]/20"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={(e) => {
              if (router.pathname === "/") {
                e.preventDefault(); handleNavClick("/#hero");
              }
            }}
            className="flex items-center gap-3 group"
          >
            <motion.div whileHover={{ scale: 1.05 }}>
              <SiteLogo className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className={`font-mono text-sm tracking-wider transition-all duration-300 relative group ${isActive ? "text-[#0052FF]" : "text-white/60 hover:text-white"
                      }`}
                  >
                    {link.label}
                    {/* Active/hover underline */}
                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-[#0052FF] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/cv"
              className="px-5 py-2 border border-[#FF073A] text-[#FF073A] font-mono text-sm tracking-wider hover:bg-[#FF073A] hover:text-white transition-all duration-300"
            >
              Mon CV
            </Link>
            <motion.a
              href="/#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("/#contact"); }}
              className="flex items-center gap-2 px-5 py-2 border border-[#0052FF] text-[#0052FF] font-mono text-sm tracking-wider hover:bg-[#0052FF] hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-[#FF073A]">&gt;_</span> Contact
            </motion.a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 group"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-4 h-px bg-[#0052FF] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#050505]/98 backdrop-blur-md flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="font-michroma text-2xl text-white hover:text-[#0052FF] transition-colors tracking-widest"
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  {link.label}
                </motion.span>
              </a>
            ))}

            <Link
              href="/cv"
              onClick={() => setMenuOpen(false)}
              className="font-michroma text-2xl text-[#FF073A] hover:text-white transition-colors tracking-widest mt-4"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.07 }}
              >
                MON CV
              </motion.span>
            </Link>

            {/* Decorative element */}
            <div className="absolute bottom-10 font-mono text-xs text-white/20 tracking-widest">
              © 2026 AMÉ TECH
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
