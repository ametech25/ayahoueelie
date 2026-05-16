import Head from "next/head";
import { logoPath } from "@/lib/sitePath";

export default function FaviconLinks() {
  const icon = logoPath();

  return (
    <Head>
      <link rel="icon" href={icon} type="image/svg+xml" />
      <link rel="shortcut icon" href={icon} />
      <link rel="apple-touch-icon" href={icon} />
    </Head>
  );
}
