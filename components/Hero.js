// components/Hero.js
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

// Typewriter hook
function useTypewriter(text, speed = 80, delay = 0) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    setDisplayed("");
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, started]);

  return displayed;
}

// Particle component for background effect
function ParticleField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
      color: Math.random() > 0.7 ? "#FF073A" : "#0052FF",
      alpha: Math.random() * 0.5 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach((q) => {
          const dist = Math.hypot(p.x - q.x, p.y - q.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(0,82,255,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      // Draw particles
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color.replace(")", `,${p.alpha})`).replace("rgb(", "rgba(") || p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
}

export default function Hero() {
  const systemText = useTypewriter("> system_initialized // AMÉ TECH v2.6", 50, 200);
  const nameText = useTypewriter("AYAHOUE MAWUFLIMI ELIE", 60, 1200);
  const [showDesc, setShowDesc] = useState(false);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowDesc(true), 2800);
    const t2 = setTimeout(() => setShowBtn(true), 3400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const handleScroll = () => {
    const target = document.getElementById("projects");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Particle background */}
      <ParticleField />

      {/* Radial glow center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-[#0052FF]/5 blur-3xl" />
        <div className="absolute w-[300px] h-[300px] rounded-full bg-[#FF073A]/5 blur-3xl" />
      </div>

      {/* Scan line */}
      <div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0052FF]/30 to-transparent pointer-events-none"
        style={{ animation: "scanline 6s linear infinite", top: "0" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Status line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-8 inline-block"
        >
          <span className="font-mono text-xs text-[#006837] bg-[#006837]/10 border border-[#006837]/30 px-4 py-1.5 tracking-widest">
            {systemText}
            <span className="animate-pulse">█</span>
          </span>
        </motion.div>

        {/* Small logo above slogan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mb-6"
        >
          <img src="/icone.svg" alt="AMÉ TECH Logo" className="w-20 h-20 md:w-24 md:h-24 mx-auto" />
        </motion.div>

        {/* Slogan */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="font-mono text-xs md:text-sm text-white/30 tracking-[0.4em] mb-10"
        >
          DESIGNING THE FUTURE OF TECHNOLOGY
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="w-32 h-px bg-gradient-to-r from-[#0052FF] to-[#FF073A] mx-auto mb-10"
        />

        {/* Full name with typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.2 }}
          className="mb-6"
        >
          <h1 className="font-michroma text-xl md:text-3xl text-white/80 tracking-widest min-h-[1.5em]">
            {nameText}
            {nameText.length < 22 && (
              <span className="text-[#0052FF] animate-pulse">|</span>
            )}
          </h1>
        </motion.div>

        {/* Description tags */}
        {showDesc && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {["Cybersécurité", "Intelligence Artificielle", "Développement", "Design"].map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="font-mono text-xs md:text-sm text-white/60 border border-white/10 px-4 py-1.5 hover:border-[#0052FF]/50 hover:text-[#0052FF] transition-all duration-300 cursor-default"
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
        )}

        {/* CTA Buttons */}
        {showBtn && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              onClick={handleScroll}
              className="relative px-8 py-3 bg-[#0052FF] text-white font-mono text-sm tracking-wider overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2 justify-center">
                <span className="text-white/70">&gt;_</span> Voir mes projets
              </span>
              {/* Shine effect */}
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
            </motion.button>

            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="px-8 py-3 border border-white/20 text-white/70 font-mono text-sm tracking-wider hover:border-[#FF073A]/50 hover:text-[#FF073A] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Me contacter
            </motion.a>
          </motion.div>
        )}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-white/20 tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[#0052FF] to-transparent"
        />
      </motion.div>

      {/* Corner decorations */}
      <div className="absolute top-24 left-6 w-16 h-16 border-t border-l border-[#0052FF]/20 hidden md:block" />
      <div className="absolute top-24 right-6 w-16 h-16 border-t border-r border-[#0052FF]/20 hidden md:block" />
      <div className="absolute bottom-24 left-6 w-16 h-16 border-b border-l border-[#FF073A]/20 hidden md:block" />
      <div className="absolute bottom-24 right-6 w-16 h-16 border-b border-r border-[#FF073A]/20 hidden md:block" />
    </section>
  );
}
