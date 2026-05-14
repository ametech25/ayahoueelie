// components/Contact.js
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    // Simulate send
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", message: "" });
  };

  const inputClass = (field) =>
    `w-full bg-transparent border px-4 py-3 font-mono text-sm text-white placeholder-white/20 outline-none transition-all duration-300 ${
      focused === field
        ? "border-[#0052FF] bg-[#0052FF]/5"
        : "border-white/10 hover:border-white/20"
    }`;

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF073A]/20 to-transparent" />
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-[#0052FF]/5 blur-3xl pointer-events-none" />

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

        <div className="grid md:grid-cols-2 gap-16">

          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            {/* Email card */}
            <div className="relative border border-white/10 p-6 mb-8 group hover:border-[#0052FF]/30 transition-colors duration-300">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#0052FF]" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#FF073A]" />

              <p className="font-mono text-xs text-white/30 tracking-widest mb-3">EMAIL</p>
              <a
                href="mailto:ametech06@gmail.com"
                className="font-michroma text-lg text-white hover:text-[#0052FF] transition-colors"
              >
                ametech06@gmail.com
              </a>
              <div className="mt-3 font-mono text-xs text-white/20">
                Réponse sous 24–48h
              </div>
            </div>

            {/* Status */}
            <div className="border border-white/10 p-6 mb-8">
              <p className="font-mono text-xs text-white/30 tracking-widest mb-4">STATUT ACTUEL</p>
              <div className="space-y-3">
                {[
                  { label: "Projets freelance", available: true },
                  { label: "Collaborations", available: true },
                  { label: "Stage / Emploi", available: true },
                  { label: "Open source", available: true },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between">
                    <span className="font-mono text-xs text-white/50">{item.label}</span>
                    <div className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${item.available ? "bg-[#006837] animate-pulse" : "bg-[#FF073A]"}`} />
                      <span className={`font-mono text-xs ${item.available ? "text-[#006837]" : "text-[#FF073A]"}`}>
                        {item.available ? "OPEN" : "FERMÉ"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social links placeholder */}
            <div className="border border-white/10 p-6">
              <p className="font-mono text-xs text-white/30 tracking-widest mb-4">RÉSEAUX</p>
              <div className="flex gap-3">
                {["LinkedIn", "GitHub", "Twitter"].map((net) => (
                  <motion.a
                    key={net}
                    href="#"
                    className="font-mono text-xs px-3 py-2 border border-white/10 text-white/40 hover:border-[#0052FF]/50 hover:text-[#0052FF] transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {net}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="border border-[#006837]/30 bg-[#006837]/10 p-10 h-full flex flex-col items-center justify-center text-center"
                >
                  <div className="w-16 h-16 border-2 border-[#006837] rounded-full flex items-center justify-center mb-6">
                    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
                      <polyline points="20 6 9 17 4 12" stroke="#006837" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="font-michroma text-xl text-[#006837] mb-2">MESSAGE ENVOYÉ</p>
                  <p className="font-mono text-xs text-white/30">Je vous répondrai dans les plus brefs délais.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Name */}
                  <div>
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
                  </div>

                  {/* Email */}
                  <div>
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
                  </div>

                  {/* Message */}
                  <div>
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
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full relative py-4 bg-[#0052FF] text-white font-mono text-sm tracking-wider overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <span className="text-white/60">&gt;_</span>
                      Envoyer le message
                    </span>
                    {/* Shine */}
                    <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
                  </motion.button>

                  <p className="font-mono text-xs text-white/20 text-center">
                    Ou écrivez directement à{" "}
                    <a href="mailto:ametech06@gmail.com" className="text-[#0052FF] hover:underline">
                      ametech06@gmail.com
                    </a>
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0052FF]/10 to-transparent" />
    </section>
  );
}
