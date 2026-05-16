import { useRouter } from "next/router";

export function useAssetPath(path) {
  const router = useRouter();
  const base = router.basePath || "";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
