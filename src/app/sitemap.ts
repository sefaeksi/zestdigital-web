import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/hizmetler", "/paketler", "/portfolyo", "/hakkimizda", "/iletisim"].map((p) => ({
    url: `${SITE.url}${p}`,
    lastModified: new Date(),
  }));
}
