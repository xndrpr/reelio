"use client";

import React from "react";
import { BackArrow } from "@/assets/icons/tsx-icons/back-arrow";
import { Tab } from "@/shared/components/tabs";
import KinoboxPlayer from "@/shared/components/kino-box";
import { usePathname, useRouter } from "next/navigation";
import {
  BackButton,
  Container,
  Player,
  StyledTabs,
  TabsContainer,
  Title,
} from "./styled";
import { Movie, MovieType } from "@/types/movie";

interface Props {
  movie: Movie;
  type: MovieType;
}

const MoviePage = ({ movie, type }: Props) => {
  const tabs: Tab[] = [
    { title: "Смотреть", isLink: true },
    {
      title: type === MovieType.MOVIE ? "О фильме" : "О сериале",
      isLink: true,
    },
  ];
  const router = useRouter();
  const pathname = usePathname();
  const [tab, setTab] = React.useState(0);

  const changeTab = async (tab: number) => {
    if (tab === 1) {
      setTab(1);
      await new Promise((resolve) => setTimeout(resolve, 200));
      router.replace(`${pathname}/about`);
    }
  };

  return (
    <Container $bg={movie?.backdrop}>
      <BackButton
        onClick={() =>
          router.push(`/${type === MovieType.MOVIE ? "movies" : "series"}`)
        }
      >
        <BackArrow />
      </BackButton>
      <Player>
        <Title>
          {movie?.title} ({movie?.year}
          {movie.end_year ? ` - ${movie.end_year}` : ""})
        </Title>
        {movie?.id && <KinoboxPlayer movie={movie} />}
      </Player>
      <TabsContainer>
        <StyledTabs activeTab={tab} setActiveTab={changeTab} tabs={tabs} />
      </TabsContainer>
    </Container>
  );
};

export default MoviePage;
