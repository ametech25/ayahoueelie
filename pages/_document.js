// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(window.matchMedia('(max-width:767px)').matches)document.documentElement.classList.add('is-mobile')}catch(e){}})();`,
          }}
        />
        <link rel="icon" href={`${BASE}/images/logo.svg`} type="image/svg+xml" />
        <link rel="shortcut icon" href={`${BASE}/images/logo.svg`} />
        <link rel="apple-touch-icon" href={`${BASE}/images/logo.svg`} />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Michroma&family=JetBrains+Mono:wght@300;400;500;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* SEO Meta */}
        <meta name="description" content="AYAHOUE MAWUFLIMI ELIE dans le monde numérique sous la casquette de AMÉ TECH" />
        <meta property="og:title" content="AMÉ TECH : Designing the Future of Technology" />
        <meta property="og:description" content="AYAHOUE MAWUFLIMI ELIE dans le monde numérique sous la casquette de AMÉ TECH" />
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
