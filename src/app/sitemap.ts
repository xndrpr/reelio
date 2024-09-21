import type { MetadataRoute } from "next";
import { promises as fs } from "fs";
import path from "path";
import slug from "slug";
import { MovieType } from "@/types/movie";

const SITEMAP_SIZE = 50000; // Max number of URLs per sitemap

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (process.env.NODE_ENV === "development") {
    return [];
  }

  const pages: any[] = [];
  const sitemapIndex: any[] = [];
  const uniqueURLs = new Set();

  const fetchData = async (offset: number, type: MovieType) => {
    try {
      const res = await fetch(
        `${process.env.API_URL}/movies?offset=${offset}&type=${type}`,
        {
          headers: {
            "Content-Type": "application/json",
            secret: `${process.env.SECRET}`,
          },
          next: { revalidate: 60 * 30 },
        }
      );
      const data = await res.json();
      return data?.data || [];
    } catch (e) {
      return [];
    }
  };

  const addPages = (data: any[]) => {
    try {
      data.forEach((doc: any) => {
        if (doc?.tmdb_id) {
          const baseURL = `${process.env.NEXT_PUBLIC_BASE_URL}`;
          const mainURL = `${baseURL}/${doc.type}/${doc.tmdb_id}-${
            slug(doc.title) || ""
          }`;
          const aboutURL = `${mainURL}/about`;

          if (!uniqueURLs.has(mainURL)) {
            uniqueURLs.add(mainURL);
            pages.push({
              url: mainURL,
              lastModified: new Date(),
              changeFrequency: "daily",
              priority: 0.5,
            });
          }

          if (!uniqueURLs.has(aboutURL)) {
            uniqueURLs.add(aboutURL);
            pages.push({
              url: aboutURL,
              lastModified: new Date(),
              changeFrequency: "daily",
              priority: 0.5,
            });
          }
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  for (let i = 1; i <= 500; i++) {
    console.log(`${i} / 500`);
    const moviesType0 = await fetchData(i, MovieType.Movie);
    const moviesType1 = await fetchData(i, MovieType.TV);
    const moviesType2 = await fetchData(i, MovieType.Cartoon);
    const moviesType3 = i <= 100 ? await fetchData(i, MovieType.Anime) : [];

    addPages(moviesType0);
    addPages(moviesType1);
    addPages(moviesType2);
    if (i <= 100) addPages(moviesType3);
  }

  const totalPages = pages.length;
  let sitemapCount = 0;

  for (let i = 0; i < totalPages; i += SITEMAP_SIZE) {
    const sitemapPages = pages.slice(i, i + SITEMAP_SIZE);
    const sitemapFilename = `sitemap${sitemapCount}.xml`;
    const sitemapURL = `${process.env.NEXT_PUBLIC_BASE_URL}/${sitemapFilename}`;

    await fs.writeFile(
      path.join(process.cwd(), "public", sitemapFilename),
      generateSitemapXML(sitemapPages)
    );

    sitemapIndex.push({
      url: sitemapURL,
      lastModified: new Date(),
    });

    sitemapCount++;
  }

  const sitemapIndexFilename = "sitemap.xml";
  await fs.writeFile(
    path.join(process.cwd(), "public", sitemapIndexFilename),
    generateSitemapIndexXML(sitemapIndex)
  );

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...sitemapIndex,
  ];
}

const generateSitemapXML = (pages: any[]) => {
  const urlset = pages
    .map(
      (page) => `
        <url>
          <loc>${page.url}</loc>
          <lastmod>${page.lastModified.toISOString()}</lastmod>
          <changefreq>${page.changeFrequency}</changefreq>
          <priority>${page.priority}</priority>
        </url>`
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urlset}
  </urlset>`;
};

const generateSitemapIndexXML = (sitemaps: any[]) => {
  const sitemapindex = sitemaps
    .map(
      (sitemap) => `
        <sitemap>
          <loc>${sitemap.url}</loc>
          <lastmod>${sitemap.lastModified.toISOString()}</lastmod>
        </sitemap>`
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${sitemapindex}
  </sitemapindex>`;
};
