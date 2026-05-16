/** Enveloppe mobile — les animations sont dans chaque section (useRevealMotion) + CSS */
export default function MobilePage({ children }) {
  return <main className="relative z-[2] mobile-stagger-root">{children}</main>;
}
