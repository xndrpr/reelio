import type { MetadataRoute } from "next";
import { promises as fs } from "fs";
import path from "path";

const SITEMAP_SIZE = 50000;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [];
  if (process.env.NODE_ENV === "development") {
    return [];
  }

  console.log("Generating sitemap...");
  const pages = await fetch(`${process.env.API_URL}/movies/sitemap`, {
    headers: {
      secret: `${process.env.SECRET}`,
    },
    cache: "no-cache",
  })
    .then((res) => {
      console.log(res);
      return res;
    })
    .then((res) => res.json())
    .then((data) =>
      data.map((doc: any) => ({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}${doc}`,
        lastModified: new Date(),
        priority: 0.5,
      }))
    );
  const sitemapIndex: any[] = [];

  const totalPages = pages.length;
  let sitemapCount = 0;

  for (let i = 0; i < totalPages; i += SITEMAP_SIZE) {
    console.log(i);
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
  pages.push({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/movies`,
    lastModified: new Date(),
    priority: 0.7,
  });

  pages.push({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/series`,
    lastModified: new Date(),
    priority: 0.7,
  });

  pages.push({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/cartoons`,
    lastModified: new Date(),
    priority: 0.7,
  });

  pages.push({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/anime`,
    lastModified: new Date(),
    priority: 0.7,
  });
  pages.push({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
    lastModified: new Date(),
    priority: 1,
  });

  pages = pages.reverse();

  const urlset = pages
    .map((page) => {
      return `
        <url>
          <loc>${page.url}</loc>
          <lastmod>${page.lastModified.toISOString().split("T")[0]}</lastmod>
          <priority>${page.priority}</priority>
        </url>`;
    })
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
          <lastmod>${sitemap.lastModified.toISOString().split("T")[0]}</lastmod>
        </sitemap>`
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${sitemapindex}
  </sitemapindex>`;
};
