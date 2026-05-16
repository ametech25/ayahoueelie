import { useRouter } from "next/router";
import { useAssetPath } from "@/hooks/useAssetPath";

export default function SiteLogo({
  className = "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain",
  alt = "AMÉ TECH",
}) {
  const router = useRouter();
  const src = useAssetPath("/images/logo.svg");

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={48}
      height={48}
      decoding="async"
      key={router.basePath}
    />
  );
}
