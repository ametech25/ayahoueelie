// components/Footer.js
import { motion } from "framer-motion";

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
            <img src="/logo.svg" alt="Logo" className="w-50 h-20" />
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
          {/* Social links */}
          <div className="flex items-center justify-center gap-6 mb-6">
            <a href="https://www.facebook.com/profile.php?id=61578594366189" title="Facebook" target="_blank" rel="noopener noreferrer" className="text-[#0052FF] hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="https://whatsapp.com/channel/0029Vb5mIU9AzNbp95wc8C2a" title="WhatsApp Channel" target="_blank" rel="noopener noreferrer" className="text-[#0052FF] hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.533.821-2.966 2.033-4.157 3.591 1.119-.898 2.456-1.526 3.93-1.891 1.532-.385 3.21-.347 4.783.115 1.573.462 3.021 1.338 4.15 2.463 1.13 1.125 1.844 2.505 2.071 4.032.227 1.527.04 3.113-.535 4.56.896-1.165 1.547-2.573 1.818-4.113.271-1.54.135-3.159-.42-4.62-1.088-2.786-3.286-4.89-5.904-5.901" />
              </svg>
            </a>
            <a href="https://t.me/ame_tech25" title="Telegram" target="_blank" rel="noopener noreferrer" className="text-[#0052FF] hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.485-1.306.472-.429-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.155.201-.315.463-.495 1.782-1.228 4.444-3.038 5.093-3.694 1.086-1.18 2.221-2.080 3.919-2.080.236 0 .435.214.547.423z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/ame_tech25?igsh=aXJ5OW82MmtvODE=" title="Instagram" target="_blank" rel="noopener noreferrer" className="text-[#0052FF] hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.25a9.75 9.75 0 110 19.5 9.75 9.75 0 010-19.5z" /><circle cx="12" cy="12" r="3" fill="currentColor" /><circle cx="17.25" cy="6.75" r="1.15" fill="currentColor" />
              </svg>
            </a>
            <a href="https://www.threads.net/@ame_tech25" title="Threads" target="_blank" rel="noopener noreferrer" className="text-[#0052FF] hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.4 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm3.5-9c0-1.9-1.6-3.5-3.5-3.5s-3.5 1.6-3.5 3.5 1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5z" />
              </svg>
            </a>
            <a href="https://www.tiktok.com/@ame_tech25?is_from_webapp=1&sender_device=pc" title="TikTok" target="_blank" rel="noopener noreferrer" className="text-[#0052FF] hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.89 3.795c-1.433-1.043-3.361-1.043-4.795-.52-1.433.524-2.486 1.624-2.486 3.249v7.866c0 1.625-1.052 3.253-2.485 3.777-1.434.523-3.361.523-4.795-.52-.868-.627-1.433-1.625-1.433-2.712 0-1.088.565-2.086 1.433-2.712.87-.627 2.016-1.043 3.236-1.043v-1.898c-.565 0-1.13.087-1.695.174-2.866.436-5.352 2.08-6.804 4.508C-.306 13.944 0 15.828 0 17.973c0 4.82 3.646 8.596 8.094 8.596 4.448 0 8.094-3.776 8.094-8.596V9.541c.87.627 2.016 1.043 3.236 1.043 1.219 0 2.366-.416 3.236-1.043V3.795c-1.219.087-2.366-.087-3.78-.52z" />
              </svg>
            </a>
            <a href="https://x.com/ame_tech25?t=3HJYYcuFtigiyboHvzgCew&s=09" title="X (Twitter)" target="_blank" rel="noopener noreferrer" className="text-[#0052FF] hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.207-6.811-5.989 6.811h-3.308l7.734-8.835-8.17-10.665h6.588l4.753 6.276 5.574-6.276zM17.15 18.558h1.828L6.122 4.003H4.231l12.919 14.555z" />
              </svg>
            </a>
            <a href="https://youtube.com/@ame_tech25" title="YouTube" target="_blank" rel="noopener noreferrer" className="text-[#0052FF] hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>

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
