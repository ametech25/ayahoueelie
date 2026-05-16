import { useLayoutEffect, useState } from "react";

const MOBILE_QUERY = "(max-width: 767px)";

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    const update = () => {
      const mobile = mq.matches;
      setIsMobile(mobile);
      document.documentElement.classList.toggle("is-mobile", mobile);
    };
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isMobile;
}
