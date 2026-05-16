/** Préfixe GitHub Pages — détecté au build ET dans le navigateur */
export function getBasePath() {
  if (typeof window !== "undefined") {
    const first = window.location.pathname.split("/").filter(Boolean)[0];
    if (first === "ayahoueelie") return "/ayahoueelie";
  }
  return process.env.NEXT_PUBLIC_BASE_PATH || "";
}

export function assetPath(path) {
  const base = getBasePath();
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

export const LOGO_PATH = "/images/favicon.svg";

export function logoPath() {
  return assetPath(LOGO_PATH);
}
