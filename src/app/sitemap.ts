import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (process.env.NODE_ENV === "development") {
    return [];
  }
  const pages: any[] = [];

  const fetchData = async (offset: number, type: number) => {
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
  };

  const addPages = (data: any[], type: string) => {
    data.forEach((doc: any) => {
      if (doc?.id) {
        const baseURL = `${process.env.NEXT_PUBLIC_BASE_URL}`;
        const basePath =
          doc.seasons_count && doc.seasons_count > 0 ? "tv" : "movie";
        pages.push({
          url: `${baseURL}/${basePath}/${doc.id}`,
          lastModified: new Date(),
          changeFrequency: "daily",
          priority: 0.5,
        });
        pages.push({
          url: `${baseURL}/${basePath}/${doc.id}/about`,
          lastModified: new Date(),
          changeFrequency: "daily",
          priority: 0.5,
        });
      }
    });
  };

  for (let i = 1; i <= 500; i++) {
    console.log(`${i} / 500`);
    const moviesType0 = await fetchData(i, 0);
    const moviesType1 = await fetchData(i, 1);
    const moviesType2 = await fetchData(i, 2);
    const moviesType3 = i <= 100 ? await fetchData(i, 3) : [];

    addPages(moviesType0, "movie");
    addPages(moviesType1, "tv");
    addPages(moviesType2, "mixed");
    if (i <= 100) addPages(moviesType3, "movie");
  }

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/tv`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/movies`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/cartoons`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/anime`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...pages.filter(Boolean),
  ];
}
