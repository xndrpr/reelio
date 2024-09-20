"use client";

import React from "react";
import { BackArrow } from "@/assets/icons/tsx-icons/back-arrow";
import { Tab } from "@/shared/components/tabs";
import KinoboxPlayer from "@/shared/components/kino-box";
import { useRouter } from "next/navigation";
import {
  BackButton,
  Container,
  Player,
  StyledTabs,
  TabsContainer,
  Title,
} from "./styled";
import { Movie, MovieType } from "@/types/movie";
import slug from "slug";

interface Props {
  movie: Movie;
  type: MovieType;
}

const MoviePage = ({ movie, type }: Props) => {
  const watchUrl = `/${type === MovieType.Movie ? "movie" : "tv"}/${
    movie.tmdb_id
  }-${slug(movie.title)}`;
  const aboutUrl = `/${type === MovieType.Movie ? "movie" : "tv"}/${
    movie.tmdb_id
  }-${slug(movie.title)}/about`;

  const tabs: Tab[] = [
    {
      title: "Смотреть",
      href: watchUrl,
    },
    {
      title: type === MovieType.Movie ? "О фильме" : "О сериале",
      href: aboutUrl,
    },
  ];
  const router = useRouter();
  const [tab, setTab] = React.useState(0);

  const changeTab = async (tab: number) => {
    if (tab === 1) {
      setTab(1);
      await new Promise((resolve) => setTimeout(resolve, 200));
      router.replace(aboutUrl);
    }
  };

  return (
    <Container $bg={movie?.backdrop}>
      <BackButton
        onClick={() =>
          router.push(`/${type === MovieType.Movie ? "movies" : "series"}`)
        }
      >
        <BackArrow />
      </BackButton>
      <Player>
        <Title>
          {movie?.title} ({movie?.year}
          {movie.end_year ? ` - ${movie.end_year}` : ""})
        </Title>
        {movie?.tmdb_id && <KinoboxPlayer movie={movie} />}
      </Player>
      <TabsContainer>
        <StyledTabs activeTab={tab} setActiveTab={changeTab} tabs={tabs} />
      </TabsContainer>
    </Container>
  );
};

export default MoviePage;
