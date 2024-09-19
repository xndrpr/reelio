"use client";

import React from "react";

import { BackArrow } from "@/assets/icons/tsx-icons/back-arrow";
import { Tab } from "@/shared/components/tabs";
import { usePathname, useRouter } from "next/navigation";
import {
  About,
  Container,
  Description,
  Info,
  Poster,
  PosterImage,
  SubTitle,
  Title,
  Wrapper,
} from "./styled";
import { Movie, MovieType } from "@/types/movie";
import { BackButton, StyledTabs, TabsContainer } from "../styled";

interface Props {
  movie: Movie;
  type: MovieType;
}

export const AboutMovie = ({ movie, type }: Props) => {
  const pathname = usePathname();

  const watchUrl = `/${type === MovieType.MOVIE ? "movie" : "tv"}/${
    movie.tmdbId
  }`;
  const aboutUrl = `/${type === MovieType.MOVIE ? "movie" : "tv"}/${
    movie.tmdbId
  }/about`;

  const tabs: Tab[] = [
    { title: "Смотреть", href: watchUrl },
    {
      title: type === MovieType.MOVIE ? "О фильме" : "О сериале",
      href: aboutUrl,
    },
  ];
  const router = useRouter();
  const [tab, setTab] = React.useState(1);

  const changeTab = async (tab: number) => {
    if (tab === 0) {
      setTab(0);
      await new Promise((resolve) => setTimeout(resolve, 200));
      router.replace(`${pathname.replace("about", "")}`);
    }
  };

  return (
    <Container $bg={movie?.backdrop}>
      <BackButton
        onClick={() => router.replace(`${pathname.replace("about", "")}`)}
      >
        <BackArrow />
      </BackButton>
      <About>
        <Wrapper>
          <Poster>
            <PosterImage
              src={movie?.poster}
              alt="poster"
              width={200}
              height={300}
            />
            <Title>{movie?.title}</Title>
            <SubTitle>{movie?.original_title}</SubTitle>
            <Info>
              {movie.year} {movie.end_year ? ` - ${movie.end_year}` : ""}
              {type === MovieType.TV && movie.seasons_count
                ? `∙ ${movie.seasons_count} `
                : null}
              {type === MovieType.TV && movie.seasons_count
                ? movie.seasons_count === 1
                  ? "сезон"
                  : movie.seasons_count || 0 < 5
                  ? "сезона"
                  : "сезонов"
                : null}
            </Info>
          </Poster>
          <Description>
            {movie.custom_description || movie?.description}
          </Description>
        </Wrapper>
      </About>
      <TabsContainer>
        <StyledTabs activeTab={tab} setActiveTab={changeTab} tabs={tabs} />
      </TabsContainer>
    </Container>
  );
};
