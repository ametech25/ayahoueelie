// components/Contact.js
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  buildGmailUrl,
  buildMailtoUrl,
  getWhatsAppNumber,
  personalInfo,
  socialLinks,
} from "../data/portfolioData";
import { SocialLinksRow } from "./SocialIcons";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [showSendHelp, setShowSendHelp] = useState(false);
  const [copied, setCopied] = useState(false);
  const [focused, setFocused] = useState(null);

  const isFormValid =
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.message.trim() !== "";

  const mailtoUrl = isFormValid ? buildMailtoUrl(formData) : "";
  const gmailUrl = isFormValid ? buildGmailUrl(formData) : "";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const whatsappChatUrl = `https://wa.me/${getWhatsAppNumber()}`;

  const inputClass = (field) =>
    `w-full bg-transparent border px-4 py-3 font-mono text-sm text-white placeholder-white/20 outline-none transition-all duration-300 ${
      focused === field
        ? "border-[#0052FF] bg-[#0052FF]/5"
        : "border-white/10 hover:border-white/20"
    }`;

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <motion.div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF073A]/20 to-transparent" />
      <motion.div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-[#0052FF]/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs text-[#0052FF] tracking-widest">// 05</span>
            <span className="flex-1 h-px bg-[#0052FF]/20 max-w-[100px]" />
            <span className="font-mono text-xs text-white/30 tracking-widest">CONTACT</span>
          </div>
          <h2 className="font-michroma text-3xl md:text-5xl text-white mb-4">
            Travaillons <span className="text-[#FF073A]">ensemble</span>
          </h2>
          <p className="font-mono text-sm text-white/40 tracking-wider">
            Disponible pour projets, collaborations et opportunités
          </p>
        </motion.div>

        <motion.div className="grid md:grid-cols-2 gap-16">

          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            {/* Email card */}
            <motion.div className="relative border border-white/10 p-6 mb-8 group hover:border-[#0052FF]/30 transition-colors duration-300">
              <motion.div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#0052FF]" />
              <motion.div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#FF073A]" />

              <p className="font-mono text-xs text-white/30 tracking-widest mb-3">EMAIL</p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="font-michroma text-lg text-white hover:text-[#0052FF] transition-colors"
              >
                {personalInfo.email}
              </a>
              <motion.div className="mt-3 font-mono text-xs text-white/20">
                Réponse sous 24–48h
              </motion.div>
            </motion.div>

            {/* Status */}
            <motion.div className="border border-white/10 p-6 mb-8">
              <p className="font-mono text-xs text-white/30 tracking-widest mb-4">STATUT ACTUEL</p>
              <motion.div className="space-y-3">
                {[
                  { label: "Projets freelance", available: true },
                  { label: "Collaborations", available: true },
                  { label: "Stage / Emploi", available: true },
                  { label: "Open source", available: true },
                ].map((item) => (
                  <motion.div key={item.label} className="flex items-center justify-between">
                    <span className="font-mono text-xs text-white/50">{item.label}</span>
                    <motion.div className="flex items-center gap-2">
                      <motion.div className={`w-1.5 h-1.5 rounded-full ${item.available ? "bg-[#006837] animate-pulse" : "bg-[#FF073A]"}`} />
                      <span className={`font-mono text-xs ${item.available ? "text-[#006837]" : "text-[#FF073A]"}`}>
                        {item.available ? "OPEN" : "FERMÉ"}
                      </span>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Social links */}
            <motion.div className="border border-white/10 p-6">
              <p className="font-mono text-xs text-white/30 tracking-widest mb-4">RÉSEAUX</p>
              <SocialLinksRow links={socialLinks} size="md" />
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="space-y-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {/* Name */}
              <motion.div>
                <label className="font-mono text-xs text-white/30 tracking-widest mb-2 block">
                  NOM COMPLET
                </label>
                <input
                  type="text"
                  placeholder="Votre nom..."
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  className={inputClass("name")}
                  required
                />
              </motion.div>

              {/* Email */}
              <motion.div>
                <label className="font-mono text-xs text-white/30 tracking-widest mb-2 block">
                  EMAIL
                </label>
                <input
                  type="email"
                  placeholder="votre@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  className={inputClass("email")}
                  required
                />
              </motion.div>

              {/* Message */}
              <motion.div>
                <label className="font-mono text-xs text-white/30 tracking-widest mb-2 block">
                  MESSAGE
                </label>
                <textarea
                  placeholder="Décrivez votre projet ou opportunité..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  rows={6}
                  className={`${inputClass("message")} resize-none`}
                  required
                />
              </motion.div>

              {/* Submit — lien mailto natif (pas de preventDefault) */}
              <motion.a
                href={isFormValid ? mailtoUrl : undefined}
                onClick={() => {
                  if (isFormValid) setShowSendHelp(true);
                }}
                whileHover={isFormValid ? { scale: 1.02 } : {}}
                whileTap={isFormValid ? { scale: 0.98 } : {}}
                aria-disabled={!isFormValid}
                className={`w-full relative py-4 font-mono text-sm tracking-wider overflow-hidden group block text-center transition-opacity ${
                  isFormValid
                    ? "bg-[#0052FF] text-white cursor-pointer"
                    : "bg-[#0052FF]/40 text-white/50 pointer-events-none cursor-not-allowed"
                }`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span className="text-white/60">&gt;_</span>
                  Envoyer le message
                </span>
                <motion.div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
              </motion.a>

              <AnimatePresence>
                {showSendHelp && isFormValid && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="border border-[#0052FF]/30 bg-[#0052FF]/5 p-4 space-y-3"
                  >
                    <p className="font-mono text-xs text-white/50">
                      Rien ne s&apos;ouvre ? Essayez une de ces options :
                    </p>
                    <a
                      href={mailtoUrl}
                      className="block w-full py-2.5 text-center font-mono text-xs bg-[#0052FF] text-white hover:bg-[#0046d9] transition-colors"
                    >
                      Ouvrir ma messagerie (Outlook, Mail…)
                    </a>
                    <a
                      href={gmailUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-2.5 text-center font-mono text-xs border border-white/20 text-white hover:border-[#0052FF]/50 transition-colors"
                    >
                      Envoyer via Gmail (navigateur)
                    </a>
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="block w-full py-2.5 font-mono text-xs text-white/60 hover:text-white transition-colors"
                    >
                      {copied ? "Adresse copiée !" : `Copier ${personalInfo.email}`}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <p className="font-mono text-xs text-white/20 text-center">
                Une conversation rapide ?{" "}
                <a
                  href={whatsappChatUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#006837] hover:underline"
                >
                  Ouvrir WhatsApp
                </a>
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0052FF]/10 to-transparent" />
    </section>
  );
}
