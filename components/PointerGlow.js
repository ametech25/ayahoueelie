import { useEffect, useRef } from "react";

export default function PointerGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const node = glowRef.current;
    if (!node) return;

    const onMove = (x, y) => {
      node.style.left = `${x}px`;
      node.style.top = `${y}px`;
    };

    const handleMouseMove = (e) => onMove(e.clientX, e.clientY);
    const handleTouch = (e) => {
      const touch = e.touches[0] || e.changedTouches[0];
      if (touch) onMove(touch.clientX, touch.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchstart", handleTouch, { passive: true });
    window.addEventListener("touchmove", handleTouch, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", handleTouch);
      window.removeEventListener("touchmove", handleTouch);
    };
  }, []);

  return (
    <>
      <div
        ref={glowRef}
        className="pointer-glow fixed w-40 h-40 md:w-48 md:h-48 pointer-events-none z-[1] mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle, rgba(0,82,255,0.35) 0%, rgba(0,82,255,0.12) 35%, transparent 70%)",
          transform: "translate(-50%, -50%)",
          filter: "blur(50px)",
        }}
        aria-hidden="true"
      />
      <div className="mobile-ambient-layer" aria-hidden="true" />
    </>
  );
}
