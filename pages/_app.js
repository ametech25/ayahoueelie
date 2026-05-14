// pages/_app.js
import "@/styles/globals.css";
import MouseTracker from "@/components/MouseTracker";

export default function App({ Component, pageProps }) {
  return (
    <>
      <MouseTracker />
      <Component {...pageProps} />
    </>
  );
}
