import Head from "next/head";
import { personalInfo, cvData } from "@/data/portfolioData";

/* ─────────────────── COMPOSANTS UI ─────────────────── */

function SectionTitle({ children, accent = "#0052FF" }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
      <div style={{
        width: 4, height: 16, background: accent, borderRadius: 1,
        flexShrink: 0, boxShadow: `0 0 8px ${accent}80`
      }} />
      <h2 style={{
        fontFamily: "'Michroma', sans-serif",
        fontSize: 9.5,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "#ffffff",
        margin: 0,
      }}>
        {children}
      </h2>
    </div>
  );
}

function Divider({ color = "rgba(0, 82, 255, 0.15)" }) {
  return <div style={{ height: 1, background: color, margin: "14px 0", width: "100%", flexShrink: 0 }} />;
}

export default function CV() {
  return (
    <>
      <Head>
        <title>{`CV | ${personalInfo.name} — AMÉ TECH`}</title>
        <meta name="description" content={`CV professionnel de ${personalInfo.name} — Étudiant Cybersécurité & IA`} />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Michroma&family=JetBrains+Mono:wght@400;700&family=Inter:wght@300;400;500;600;700&display=swap');
          * { margin: 0; padding: 0; box-sizing: border-box; }
          html { background: #050508; }
          body {
            background: #050508;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            padding: 40px 16px 80px;
            font-family: 'Inter', sans-serif;
          }
          .print-btn {
            position: fixed;
            bottom: 32px;
            right: 32px;
            background: #0052FF;
            color: #fff;
            border: none;
            border-radius: 50px;
            padding: 14px 28px;
            font-family: 'Michroma', sans-serif;
            font-size: 11px;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            cursor: pointer;
            z-index: 100;
            display: flex;
            align-items: center;
            gap: 10px;
            box-shadow: 0 8px 30px rgba(0,82,255,0.45), 0 0 0 1px rgba(0,82,255,0.3);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }
          .print-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 40px rgba(0,82,255,0.6), 0 0 0 1px rgba(0,82,255,0.5);
          }
          .print-btn:active { transform: translateY(0); }
          @media print {
            html, body {
              background: #0a0a0f !important;
              padding: 0 !important;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            .cv-wrapper { box-shadow: none !important; }
            .print-btn { display: none !important; }
          }
          @page { size: A4 portrait; margin: 0; }
        `}</style>
      </Head>

      {/* ── Floating Print Button ── */}
      <button className="print-btn" onClick={() => window.print()}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 6 2 18 2 18 9" /><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
          <rect x="6" y="14" width="12" height="8" />
        </svg>
        Imprimer / PDF
      </button>

      {/* ── A4 Card ── */}
      <div
        className="cv-wrapper"
        style={{
          width: "210mm",
          height: "297mm",
          maxHeight: "297mm",
          background: "#0a0a0f",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 30px 100px rgba(0,0,0,0.85), 0 0 0 1px rgba(0,82,255,0.12)",
          display: "flex",
          flexDirection: "column",
          color: "#fff",
        }}
      >
        {/* SVG Background Decorations */}
        <svg
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }}
          viewBox="0 0 595 842" fill="none"
        >
          <path d="M-40 180 Q80 80 200 160 Q300 230 180 320" stroke="rgba(0,82,255,0.07)" strokeWidth="1.5" />
          <path d="M635 660 Q520 740 400 680 Q300 620 420 540" stroke="rgba(255,7,58,0.05)" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="100" stroke="rgba(255,255,255,0.015)" strokeWidth="1" />
          <circle cx="545" cy="792" r="80" stroke="rgba(0,82,255,0.04)" strokeWidth="1" />
        </svg>

        {/* ══════════ HEADER ══════════ */}
        <header style={{
          background: "linear-gradient(135deg, rgba(8,8,16,1) 0%, rgba(13,20,51,0.6) 100%)",
          borderBottom: "1px solid rgba(0,82,255,0.2)",
          padding: "32px 44px",
          display: "flex",
          alignItems: "center",
          gap: 24,
          zIndex: 1,
          position: "relative",
          flexShrink: 0,
        }}>
          {/* Photo */}
          <div style={{
            width: 100, height: 100, borderRadius: "50%",
            border: "2px solid rgba(0,82,255,0.5)",
            background: "rgba(0,82,255,0.08)",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
            boxShadow: "0 0 20px rgba(0,82,255,0.12), inset 0 0 15px rgba(0,82,255,0.1)",
          }}>
            <span style={{ fontFamily: "'Michroma', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.5)", letterSpacing: "0.05em" }}>PHOTO</span>
          </div>

          {/* Infos */}
          <div style={{ flex: 1 }}>
            <h1 style={{ fontFamily: "'Michroma', sans-serif", fontSize: 21, letterSpacing: "0.04em", color: "#ffffff", marginBottom: 6, lineHeight: 1.2 }}>
              <span style={{ color: "#4d8bff" }}>AYAHOUE</span>{" "}
              MAWUFLIMI ELIE
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              <div style={{ width: 14, height: 2, background: "#FF073A", borderRadius: 1, boxShadow: "0 0 5px rgba(255,7,58,0.5)" }} />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "rgba(255,255,255,0.7)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                {personalInfo.tagline}
              </span>
            </div>
            <p style={{
              fontSize: 9,
              color: "rgba(255,255,255,0.58)",
              lineHeight: 1.65,
              borderLeft: "2px solid rgba(0,82,255,0.3)",
              paddingLeft: 11,
              textAlign: "justify"
            }}>
              {personalInfo.description}
            </p>
          </div>
        </header>

        {/* ══════════ MAIN BODY ══════════ */}
        <div style={{ display: "flex", flex: 1, padding: "22px 38px", gap: 32, zIndex: 1, position: "relative", overflow: "hidden" }}>

          {/* ── LEFT COLUMN (38%) ── */}
          <div style={{ width: "38%", display: "flex", flexDirection: "column", gap: 0, flexShrink: 0 }}>

            {/* Contacts */}
            <section style={{ marginBottom: 14 }}>
              <SectionTitle accent="#0052FF">Contacts</SectionTitle>
              <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                {[
                  { icon: "☎", val: personalInfo.phone },
                  { icon: "✉", val: personalInfo.email },
                  { icon: "⊙", val: personalInfo.location },
                  { icon: "♦", val: `${personalInfo.age} • ${personalInfo.nationality}` },
                  { icon: "◈", val: personalInfo.portfolio, highlight: true },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 9 }}>
                    <div style={{
                      width: 20, height: 20, borderRadius: 4,
                      background: "rgba(255,255,255,0.03)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: item.highlight ? "#0052FF" : "#FF073A", fontSize: 9.5,
                      border: "1px solid rgba(255,255,255,0.05)",
                      flexShrink: 0,
                    }}>{item.icon}</div>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 8.5, color: item.highlight ? "#4d8bff" : "rgba(255,255,255,0.68)" }}>
                      {item.val}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <Divider color="rgba(255,255,255,0.05)" />

            {/* Langues */}
            <section style={{ marginBottom: 14 }}>
              <SectionTitle accent="#006837">Langues</SectionTitle>
              <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                {cvData.langues.map((l, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#006837", flexShrink: 0 }} />
                    <span style={{ fontSize: 10, fontWeight: 500, color: "rgba(255,255,255,0.82)" }}>{l}</span>
                  </div>
                ))}
              </div>
            </section>

            <Divider color="rgba(255,255,255,0.05)" />

            {/* Savoir-Faire */}
            <section style={{ marginBottom: 14 }}>
              <SectionTitle accent="#0052FF">Savoir-Faire</SectionTitle>
              <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                {cvData.savoirFaire.map((s, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                    <span style={{ color: "#0052FF", fontSize: 10, marginTop: 1, flexShrink: 0 }}>▸</span>
                    <span style={{ fontSize: 9.5, color: "rgba(255,255,255,0.68)", lineHeight: 1.45 }}>{s}</span>
                  </div>
                ))}
              </div>
            </section>

            <Divider color="rgba(255,255,255,0.05)" />

            {/* Centres d'intérêt */}
            <section>
              <SectionTitle accent="#FF073A">Centres d&apos;intérêt</SectionTitle>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                {cvData.interests.split("-").map(s => s.trim()).filter(Boolean).map((interest, i) => (
                  <span key={i} style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 8,
                    color: "rgba(255,255,255,0.72)",
                    background: "rgba(255,7,58,0.07)",
                    border: "1px solid rgba(255,7,58,0.18)",
                    padding: "3px 8px",
                    borderRadius: 2,
                    textTransform: "capitalize",
                  }}>{interest}</span>
                ))}
              </div>
            </section>

          </div>

          {/* ── Central Separator ── */}
          <div style={{ width: 1, background: "linear-gradient(to bottom, rgba(0,82,255,0.25) 0%, rgba(255,255,255,0.04) 60%, transparent 100%)", flexShrink: 0 }} />

          {/* ── RIGHT COLUMN ── */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 0 }}>

            {/* Formations */}
            <section style={{ marginBottom: 14 }}>
              <SectionTitle accent="#006837">Formations</SectionTitle>
              <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
                {cvData.formations.map((f, i) => {
                  const yearMatch = f.match(/\d{4}/);
                  const year = yearMatch ? yearMatch[0] : "•";
                  const text = yearMatch ? f.replace(yearMatch[0], "").replace(/^[\s\-–]+/, "").trim() : f;
                  return (
                    <div key={i} style={{ display: "flex", gap: 10, position: "relative" }}>
                      <div style={{ width: 32, flexShrink: 0, textAlign: "right", paddingTop: 1 }}>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: "#006837", fontWeight: 700 }}>{year}</span>
                      </div>
                      <div style={{ position: "relative", width: 12, flexShrink: 0 }}>
                        <div style={{ position: "absolute", left: 3, top: 5, width: 6, height: 6, borderRadius: "50%", background: "#006837", boxShadow: "0 0 6px rgba(0,104,55,0.7)" }} />
                        {i !== cvData.formations.length - 1 && (
                          <div style={{ position: "absolute", left: 5.5, top: 13, bottom: -13, width: 1, background: "rgba(0,104,55,0.25)" }} />
                        )}
                      </div>
                      <div style={{ fontSize: 9.5, color: "rgba(255,255,255,0.82)", lineHeight: 1.5, paddingBottom: 4 }}>{text}</div>
                    </div>
                  );
                })}
              </div>
            </section>

            <Divider color="rgba(255,255,255,0.05)" />

            {/* Compétences & Logiciels */}
            <section style={{ marginBottom: 14 }}>
              <SectionTitle accent="#0052FF">Compétences &amp; Logiciels</SectionTitle>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {cvData.logiciels.map((l, i) => (
                  <div key={i} style={{
                    background: "rgba(0,82,255,0.05)",
                    border: "1px solid rgba(0,82,255,0.15)",
                    padding: "5px 11px",
                    borderRadius: 4,
                    display: "flex",
                    alignItems: "center",
                    gap: 7,
                  }}>
                    <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#0052FF", boxShadow: "0 0 5px #0052FF", flexShrink: 0 }} />
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 8.5, color: "rgba(255,255,255,0.82)" }}>{l}</span>
                  </div>
                ))}
              </div>
            </section>

            <Divider color="rgba(255,255,255,0.05)" />

            {/* Expérience Pro & Projets */}
            <section>
              <SectionTitle accent="#FF073A">Expérience Pro &amp; Projets</SectionTitle>
              <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
                {cvData.experiences.map((exp, i) => {
                  const yearMatch = exp.match(/\d{4}(\-\d{4})?/);
                  const year = yearMatch ? yearMatch[0] : "";
                  const text = yearMatch ? exp.replace(yearMatch[0], "").replace(/^[\s\-–:]+/, "").trim() : exp;
                  return (
                    <div key={i} style={{
                      paddingLeft: 12,
                      borderLeft: "2px solid rgba(255,7,58,0.35)",
                      position: "relative",
                    }}>
                      <div style={{ position: "absolute", left: -5, top: 5, width: 8, height: 8, background: "#FF073A", borderRadius: 1, boxShadow: "0 0 5px rgba(255,7,58,0.5)" }} />
                      <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                        {year && (
                          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 8, color: "#FF073A", letterSpacing: "0.05em" }}>[ {year} ]</div>
                        )}
                        <span style={{ fontSize: 9.5, fontWeight: 500, color: "rgba(255,255,255,0.78)", lineHeight: 1.5 }}>{text}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

          </div>
        </div>

        {/* ══════════ FOOTER ══════════ */}
        <footer style={{
          borderTop: "1px solid rgba(0,82,255,0.12)",
          padding: "9px 44px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 1,
          position: "relative",
          flexShrink: 0,
          background: "rgba(5,5,8,0.6)",
        }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 7.5, color: "rgba(255,255,255,0.25)", letterSpacing: "0.1em" }}>
            AMÉ TECH — AYAHOUE MAWUFLIMI ELIE
          </span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 7.5, color: "rgba(0,82,255,0.5)", letterSpacing: "0.1em" }}>
            {personalInfo.portfolio} • Page 1/1
          </span>
        </footer>

      </div>
    </>
  );
}
