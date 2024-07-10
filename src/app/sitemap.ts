import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  return [
    {
      url: "/",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 1.0,
    }
  ]
}