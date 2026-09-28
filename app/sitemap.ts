import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Add routes here as each page is built.
const routes = ["/", "/commercial-security", "/event-security"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
