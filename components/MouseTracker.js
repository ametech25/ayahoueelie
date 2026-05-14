import { useEffect, useRef } from "react";

export default function MouseTracker() {
    const glowRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (glowRef.current) {
                const x = e.clientX;
                const y = e.clientY;

                glowRef.current.style.left = `${x}px`;
                glowRef.current.style.top = `${y}px`;
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            ref={glowRef}
            className="fixed w-48 h-48 pointer-events-none z-0 mix-blend-screen"
            style={{
                background:
                    "radial-gradient(circle, rgba(0,82,255,0.3) 0%, rgba(0,82,255,0.1) 30%, transparent 70%)",
                transform: "translate(-50%, -50%)",
                filter: "blur(60px)",
            }}
        />
    );
}
