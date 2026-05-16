const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "out");
const indexPath = path.join(outDir, "index.html");

if (!fs.existsSync(indexPath)) {
  console.error("postbuild-gh-pages: out/index.html introuvable. Lancez npm run build.");
  process.exit(1);
}

const indexHtml = fs.readFileSync(indexPath, "utf8");
fs.writeFileSync(path.join(outDir, "404.html"), indexHtml);
console.log("postbuild-gh-pages: 404.html synchronisé avec index.html");
