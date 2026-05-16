import { Children } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";

const sectionVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function MobilePage({ children }) {
  const isMobile = useIsMobile();
  const reduceMotion = useReducedMotion();

  if (!isMobile || reduceMotion) {
    return <main className="relative z-[2] mobile-stagger-root">{children}</main>;
  }

  return (
    <motion.main
      key="mobile-animated"
      className="relative z-[2] mobile-stagger-root"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.14, delayChildren: 0.05 },
        },
      }}
    >
      {Children.toArray(children).map((child, index) => (
        <motion.div key={child.key ?? `section-${index}`} variants={sectionVariants}>
          {child}
        </motion.div>
      ))}
    </motion.main>
  );
}
