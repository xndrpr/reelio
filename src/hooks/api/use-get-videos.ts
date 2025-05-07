import { ErrorModelActionResultModel } from "@/types/api/common-api-types";
import { MovieType } from "@/types/movie";
import { QueryOptions, useQuery } from "@tanstack/react-query";

export const VIDEOS_QUERY_KEY = "getVideos";

export interface Video {
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  d: string;
}

export interface VideosResponse {
  id: number;
  results: Video[];
}

export const getVideos = (
  id: number,
  type: MovieType
): (() => Promise<VideosResponse | null>) => {
  return async (): Promise<VideosResponse | null> => {
    try {
      const url = `${process.env.API_URL}/${type}/${id}/videos?language=ru-RU`;
      const res = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.API_KEY}`,
        },
      });

      const data = await res.json();
      console.log(data);
      return data;
    } catch (err) {
      console.log("ERROR: ", err);
      return null;
    }
  };
};

export const useGetVideos = (
  id: number,
  type: MovieType,
  queryOptions?: QueryOptions<
    VideosResponse | null,
    ErrorModelActionResultModel
  >
) => {
  return useQuery({
    queryKey: [VIDEOS_QUERY_KEY],
    queryFn: () => getVideos(id, type)(),
    staleTime: 0,
    ...queryOptions,
  });
};
