import Head from "next/head";
import Link from "next/link";

const PDF_PATH = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/pdf/CV_AYAHOUE_ELIE_CYBERSECURITE.pdf`;

export default function CV() {
  return (
    <>
      <Head>
        <title>CV | AYAHOUE MAWUFLIMI ELIE - AMÉ TECH</title>
        <meta name="description" content="CV professionnel de AYAHOUE MAWUFLIMI ELIE - Étudiant Cybersécurité & IA à l'ESATIC, Abidjan." />
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/icone.svg`} type="image/svg+xml" />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Michroma&family=JetBrains+Mono:wght@400;700&family=Inter:wght@300;400;500;600;700&display=swap');
          * { margin: 0; padding: 0; box-sizing: border-box; }
          html, body {
            background: #050508;
            font-family: 'Inter', sans-serif;
            color: #fff;
            min-height: 100vh;
          }
          .pdf-frame {
            width: 100%;
            height: calc(100vh - 72px);
            border: none;
            display: block;
          }
          @media (max-width: 768px) {
            .pdf-frame { height: calc(100vh - 140px); }
          }
          @media print {
            .topbar { display: none !important; }
            .pdf-frame { height: 100vh; }
          }
        `}</style>
      </Head>

      {/* ── Top bar ── */}
      <div
        className="topbar"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: 72,
          background: "rgba(5,5,8,0.97)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(0,82,255,0.18)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 32px",
          gap: 16,
        }}
      >
        {/* Left: back + title */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <Link
            href="/"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              color: "rgba(255,255,255,0.4)",
              textDecoration: "none",
              letterSpacing: "0.08em",
              display: "flex",
              alignItems: "center",
              gap: 6,
              transition: "color 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.color = "#0052FF"}
            onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.4)"}
          >
            ← Retour au portfolio
          </Link>

          <div style={{ width: 1, height: 20, background: "rgba(255,255,255,0.08)" }} />

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 3, height: 16, background: "#0052FF", borderRadius: 1, boxShadow: "0 0 8px rgba(0,82,255,0.6)" }} />
            <span style={{ fontFamily: "'Michroma', sans-serif", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#fff" }}>
              Curriculum Vitæ
            </span>
          </div>
        </div>

      </div>

      {/* ── PDF Viewer ── */}
      <div style={{ paddingTop: 72 }}>
        <iframe
          className="pdf-frame"
          src={`${PDF_PATH}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
          title="CV AYAHOUE MAWUFLIMI ELIE"
        />
      </div>
    </>
  );
}
