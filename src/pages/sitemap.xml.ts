import type { APIRoute } from "astro";
import { caseStudies } from "../data/case-studies";

// Built from the same data that generates the pages, so a new case study
// appears here automatically.
export const GET: APIRoute = ({ site }) => {
  const paths = ["/", "/about", ...caseStudies.map((cs) => `/case-studies/${cs.slug}`)];
  const urls = paths.map((p) => `  <url><loc>${new URL(p, site).href}</loc></url>`).join("\n");
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
};
