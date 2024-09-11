"use client";

import { useHeader } from "@/hooks/use-header";
import { useSearch } from "@/hooks/use-search";
import React from "react";
import { Header } from "@/shared/components/header";
import Movies from "@/components/movies";
import { CardsContainer } from "./styled";
import { MovieCard } from "./movie-card";

export const Home = () => {
  const header = useHeader();
  const search = useSearch();

  return (
    <main>
      <Header searchState={search} headerState={header} />
      {search.result && search.result.length > 0 ? (
        <CardsContainer>
          {search.result.map(
            (movie) =>
              movie.id &&
              (movie.poster || movie.preview_poster) && (
                <MovieCard key={movie.id} movie={movie} />
              )
          )}
        </CardsContainer>
      ) : null}
      {search?.result?.length <= 0 &&
        !search?.isLoading &&
        header.activeTab === 0 && <Movies type={0} />}
      {search?.result?.length <= 0 &&
        !search?.isLoading &&
        header.activeTab === 1 && <Movies type={1} />}
      {search?.result?.length <= 0 &&
        !search?.isLoading &&
        header.activeTab === 2 && <Movies type={2} />}
      {search?.result?.length <= 0 &&
        !search?.isLoading &&
        header.activeTab === 3 && <Movies type={3} />}
    </main>
  );
};
