import { useIsMobile } from "./useIsMobile";

function hasMobileClass() {
  if (typeof document === "undefined") return false;
  return document.documentElement.classList.contains("is-mobile");
}

/**
 * Sur mobile : animation auto au chargement (classe html.is-mobile posée avant React).
 * Sur desktop : animation au scroll (inView).
 */
export function useRevealMotion(inView, options = {}) {
  const isMobile = useIsMobile();
  const visible = isMobile || hasMobileClass() || inView;
  const {
    delay = 0,
    y = 28,
    x = 0,
    duration = 0.65,
  } = options;

  return {
    visible,
    initial: { opacity: 0, x, y },
    animate: visible ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y },
    transition: {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  };
}
