import Head from "next/head";
import { assetPath } from "@/lib/sitePath";

export default function FaviconLinks() {
  const icon = assetPath("/images/icone.svg");

  return (
    <Head>
      <link rel="icon" href={icon} type="image/svg+xml" />
      <link rel="shortcut icon" href={icon} />
      <link rel="apple-touch-icon" href={icon} />
    </Head>
  );
}
