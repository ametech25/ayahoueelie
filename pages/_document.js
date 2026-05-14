// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/icone.svg" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Michroma&family=JetBrains+Mono:wght@300;400;500;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* SEO Meta */}
        <meta name="description" content="AMÉ TECH, Portfolio de AYAHOUE MAWUFLIMI ELIE dans le monde numérique" />
        <meta property="og:title" content="AMÉ TECH : Designing the Future of Technology" />
        <meta property="og:description" content="Portfolio de AYAHOUE MAWUFLIMI ELIE dans le monde numérique" />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#050505" />
      </Head>
      <Body>
        <Main />
        <NextScript />
      </Body>
    </Html>
  );
}

function Body({ children }) {
  return <body className="noise">{children}</body>;
}
