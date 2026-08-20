import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ["", "/contact", "/licensing", "/business-tracker"];
  // `trailingSlash: true` in next.config.mjs makes "/contact/" the canonical
  // form — "/contact" 308-redirects to it. Emitting the slashless URL here
  // would list a redirect in the sitemap and disagree with our own <link
  // rel="canonical">, so build every entry with the trailing slash.
  return routes.map((path) => ({
    url: `${site.url}${path}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
