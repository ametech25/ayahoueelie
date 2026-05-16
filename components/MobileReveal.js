import { motion, useReducedMotion } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";

/**
 * Révélation au scroll sur mobile (cartes, blocs internes).
 */
export default function MobileReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}) {
  const isMobile = useIsMobile();
  const reduceMotion = useReducedMotion();

  if (!isMobile || reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const offset = direction === "left" ? -28 : direction === "right" ? 28 : 32;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: direction === "left" || direction === "right" ? offset : 0, y: direction === "up" ? offset : 0 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -48px 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
