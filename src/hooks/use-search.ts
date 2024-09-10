import { Movie } from "@/types/api/get-movies-result";
import { useDebounce } from "@uidotdev/usehooks";
import React from "react";

export interface SearchState {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;

  debouncedQuery: string;

  result: Movie[];
  setResult: React.Dispatch<React.SetStateAction<Movie[]>>;

  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useSearch = (): SearchState => {
  const [value, setValue] = React.useState("");
  const debouncedQuery = useDebounce(value, 800);

  const [result, setResult] = React.useState<Movie[]>([]);

  const [isLoading, setIsLoading] = React.useState(false);

  return {
    value,
    setValue,
    debouncedQuery,
    result,
    setResult,
    isLoading,
    setIsLoading,
  };
};
