import { useRouter } from "next/router";
import { useAssetPath } from "@/hooks/useAssetPath";

export default function SiteLogo({ className = "w-12 h-12 object-contain", alt = "AMÉ TECH" }) {
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
