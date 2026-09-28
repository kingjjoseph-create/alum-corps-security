import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Add routes here as each page is built.
const routes = [
  "/",
  "/services",
  "/commercial-security",
  "/residential-security",
  "/event-security",
  "/about",
  "/careers",
  "/contact",
  "/request-a-quote",
  "/privacy",
  "/terms",
  "/accessibility",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : ["/privacy", "/terms", "/accessibility"].includes(route) ? 0.3 : 0.8,
  }));
}
