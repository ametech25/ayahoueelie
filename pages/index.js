// pages/index.js
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Domains from "@/components/Domains";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>AMÉ TECH</title>
        <meta name="description" content="AYAHOUE MAWUFLIMI ELIE - Étudiant Cybersécurité & IA à l'ESATIC (Abidjan).
        Cybersécurité, Big Data & IA, Réseaux, Développement web et design." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="AYAHOUE MAWUFLIMI ELIE" />
        <meta name="keywords" content="Cybersécurité, Big Data & IA, Réseaux, Développement web et design à ESATIC, Abidjan, Côte d'Ivoire" />
        <meta property="og:title" content="AMÉ TECH - Portfolio" />
        <meta property="og:description" content="Cybersécurité, Big Data & IA, Réseaux, Développement web et design." />
        <meta property="og:type" content="website" />
      </Head>

      {/* Sticky Navbar */}
      <Navbar />

      {/* Page Sections */}
      <main>
        <Hero />
        <About />
        <Domains />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
