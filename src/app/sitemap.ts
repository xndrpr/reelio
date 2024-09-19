import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (process.env.NODE_ENV === "development") {
    return [];
  }
  const pages = [];

  for (let i = 1; i <= 500; i++) {
    console.log(`${i} / 500`);
    const res = await fetch(
      `${process.env.API_URL}/movies?offset=${i}&type=${0}`,
      {
        headers: {
          "Content-Type": "application/json",
          secret: `${process.env.SECRET}`,
        },
        next: { revalidate: 60 * 30 },
      }
    );
    const data = await res.json();

    pages.push(
      ...data?.data?.map(
        (doc: any) =>
          doc?.id && {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/movie/${doc?.id}`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.5,
          }
      )
    );
    pages.push(
      ...data?.data?.map(
        (doc: any) =>
          doc?.id && {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/movie/${doc?.id}/about`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.5,
          }
      )
    );
  }

  for (let i = 1; i <= 500; i++) {
    console.log(`${i} / 500`);

    const res = await fetch(
      `${process.env.API_URL}/movies?offset=${i}&type=${1}`,
      {
        headers: {
          "Content-Type": "application/json",
          secret: `${process.env.SECRET}`,
        },
        next: { revalidate: 60 * 30 },
      }
    );
    const data = await res.json();

    pages.push(
      ...data?.data?.map(
        (doc: any) =>
          doc?.id && {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/tv/${doc?.id}`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.5,
          }
      )
    );
    pages.push(
      ...data?.data?.map(
        (doc: any) =>
          doc?.id && {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/tv/${doc?.id}/about`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.5,
          }
      )
    );
  }

  for (let i = 1; i <= 500; i++) {
    console.log(`${i} / 500`);
    const res = await fetch(
      `${process.env.API_URL}/movies?offset=${i}&type=${2}`,
      {
        headers: {
          "Content-Type": "application/json",
          secret: `${process.env.SECRET}`,
        },
        next: { revalidate: 60 * 30 },
      }
    );
    const data = await res.json();

    pages.push(
      ...data?.data?.map(
        (doc: any) =>
          doc?.id && {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/${
              doc.seasons_count && doc.seasons_count > 0 ? "tv" : "movie"
            }/${doc?.id}`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.5,
          }
      )
    );
    pages.push(
      ...data?.data?.map(
        (doc: any) =>
          doc?.id && {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/${
              doc.seasons_count && doc.seasons_count > 0 ? "tv" : "movie"
            }/${doc?.id}/about`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.5,
          }
      )
    );
  }

  for (let i = 1; i <= 500; i++) {
    console.log(`${i} / 500`);
    const res = await fetch(
      `${process.env.API_URL}/movies?offset=${i}&type=${3}`,
      {
        headers: {
          "Content-Type": "application/json",
          secret: `${process.env.SECRET}`,
        },
        next: { revalidate: 60 * 30 },
      }
    );
    const data = await res.json();

    pages.push(
      ...data?.data?.map(
        (doc: any) =>
          doc?.id && {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/${
              doc.seasons_count && doc.seasons_count > 0 ? "tv" : "movie"
            }/${doc?.id}`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.5,
          }
      )
    );
    pages.push(
      ...data?.data?.map(
        (doc: any) =>
          doc?.id && {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/${
              doc.seasons_count && doc.seasons_count > 0 ? "tv" : "movie"
            }/${doc?.id}/about`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.5,
          }
      )
    );
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
