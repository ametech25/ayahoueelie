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
