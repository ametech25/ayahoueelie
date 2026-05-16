// pages/creations.js
import { visualCreations } from "../data/portfolioData";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GalerieCreations() {
    const [filter, setFilter] = useState("Tous");
    const [selectedCrea, setSelectedCrea] = useState(null);

    const list = visualCreations || [];
    const categories = ["Tous", ...new Set(list.map((c) => c.category))];

    const filteredCreations = filter === "Tous"
        ? list
        : list.filter((c) => c.category === filter);

    return (
        <div className="noise min-h-screen bg-[#050505] text-white px-4 py-16 sm:px-6 md:py-24">
            <div className="max-w-6xl mx-auto">

                {/* En-tête */}
                <header className="mb-12 md:mb-16">
                    <Link
                        href="/"
                        className="font-mono text-xs text-[#0052FF] hover:text-white tracking-widest uppercase inline-block mb-6 transition-colors duration-300"
                    >
                        {"// Retour à l'accueil"}
                    </Link>

                    <h1 className="font-michroma text-2xl sm:text-3xl md:text-5xl text-white tracking-tight mb-4">
                        GALERIE DE <span className="text-[#FF073A]">CRÉATIONS</span>
                    </h1>
                    <p className="font-mono text-xs md:text-sm text-white/40 tracking-wider max-w-2xl">
                        Explorez mes réalisations graphiques, affiches événementielles et identités visuelles. Cliquez sur un visuel pour l'afficher en entier.
                    </p>
                </header>

                {/* Barre de Filtres */}
                <div className="flex gap-2 overflow-x-auto pb-4 mb-10 border-b border-white/5 scrollbar-none snap-x">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`snap-start font-mono text-xs px-4 py-2 border transition-all duration-300 cursor-pointer whitespace-nowrap ${filter === cat
                                    ? "bg-[#0052FF] text-white border-[#0052FF] shadow-[0_4px_12px_rgba(0,82,255,0.2)]"
                                    : "bg-[#0d0d0d] text-white/40 border-white/10 hover:text-white hover:border-white/25"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grille */}
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredCreations.map((crea) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={crea.id}
                                onClick={() => setSelectedCrea(crea)}
                                className="group relative bg-[#0d0d0d] border border-white/10 overflow-hidden flex flex-col h-full cursor-pointer"
                            >
                                {/* Image — UTILISATION DU CHEMIN DE DONNÉES SÉCURISÉ */}
                                <div className="relative w-full pt-[100%] bg-[#151515] overflow-hidden">
                                    <img
                                        src={crea.image} // <-- CORRIGÉ : Sans variable BASE pour éviter les bugs
                                        alt={crea.title}
                                        className="absolute top-0 left-0 w-full h-full object-cover block transition-transform duration-500 group-hover:scale-105"
                                    />
                                    {/* Overlay au survol - Sans flou */}
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="font-mono text-xs text-white bg-[#0052FF] px-3 py-1.5 tracking-wider shadow-lg">
                                            &gt;_ VOIR EN ENTIER
                                        </span>
                                    </div>
                                </div>

                                {/* Infos */}
                                <div className="p-5 border-t border-white/10 flex-1 flex flex-col justify-between bg-[#050505] relative">
                                    <div>
                                        <span className="font-mono text-[10px] text-[#0052FF] font-bold tracking-widest uppercase block mb-2">
                                            {crea.category}
                                        </span>
                                        <h3 className="font-sans text-base text-white/80 group-hover:text-white transition-colors duration-300 font-medium tracking-tight leading-snug">
                                            {crea.title}
                                        </h3>
                                    </div>
                                    <span className="absolute bottom-3 right-4 font-mono text-[9px] text-white/10 select-none">
                                        {crea.id}
                                    </span>
                                </div>

                                <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-[#0052FF] to-[#FF073A] transition-all duration-500" />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>

            {/* VISIONNEUSE PLEIN ÉCRAN - TOTALEMENT SANS FLOU */}
            <AnimatePresence>
                {selectedCrea && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCrea(null)}
                        className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4 sm:p-6 md:p-10 cursor-zoom-out"
                    >
                        <button
                            onClick={() => setSelectedCrea(null)}
                            className="absolute top-6 right-6 font-mono text-xs text-white/40 hover:text-white border border-white/10 hover:border-white/40 px-3 py-1.5 transition-all duration-300 bg-[#0d0d0d] cursor-pointer"
                        >
              // FERMER [ESC]
                        </button>

                        <motion.div
                            initial={{ scale: 0.95, y: 15 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 15 }}
                            transition={{ type: "spring", damping: 25, stiffness: 180 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-full max-h-[80vh] flex flex-col items-center"
                        >
                            <img
                                src={selectedCrea.image} // <-- CORRIGÉ : Sans variable BASE pour éviter les bugs
                                alt={selectedCrea.title}
                                className="max-w-full max-h-[75vh] object-contain border border-white/10 shadow-2xl bg-[#090909]"
                            />

                            <div className="mt-4 text-center">
                                <span className="font-mono text-[10px] text-[#0052FF] font-bold tracking-widest uppercase block mb-1">
                                    {selectedCrea.category}
                                </span>
                                <h2 className="font-michroma text-sm sm:text-base text-white tracking-tight">
                                    {selectedCrea.title}
                                </h2>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}