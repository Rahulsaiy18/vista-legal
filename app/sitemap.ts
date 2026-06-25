import type { MetadataRoute } from "next"

export const dynamic = "force-static"

const SITE_URL = "https://www.vistalegalfirm.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/what-we-do",
    "/partners",
    "/services",
    "/contact",
    "/disclaimer",
  ]
  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }))
}
