"use client";

import React from "react";

import { BackArrow } from "@/assets/icons/tsx-icons/back-arrow";
import { Tab } from "@/shared/components/tabs";
import { usePathname, useRouter } from "next/navigation";
import {
  About,
  Container,
  Description,
  Detail,
  DetailContent,
  Details,
  DetailTitle,
  HomePageLink,
  Info,
  MovieCard,
  PosterImage,
  SubTitle,
  Title,
  Wrapper,
} from "./styled";
import { Movie, MovieType } from "@/types/movie";
import { BackButton, StyledTabs, TabsContainer } from "../styled";
import slug from "slug";
import {
  getCountryByISO,
  getLangByISO,
  normalizeNumber,
  normalizeRuntime,
} from "@/utils";

interface Props {
  movie: Movie;
  type: MovieType;
}

export const AboutMovie = ({ movie, type }: Props) => {
  const pathname = usePathname();

  const watchUrl = `/${type === MovieType.Movie ? "movie" : "tv"}/${
    movie.tmdb_id
  }-${slug(movie.title)}`;
  const aboutUrl = `/${type === MovieType.Movie ? "movie" : "tv"}/${
    movie.tmdb_id
  }-${slug(movie.title)}/about`;

  const tabs: Tab[] = [
    { title: "Смотреть", href: watchUrl },
    {
      title: type === MovieType.Movie ? "О фильме" : "О сериале",
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

  const originalLanguage = getLangByISO(movie.original_language);
  const runtime =
    movie.runtime && movie.runtime > 0 ? normalizeRuntime(movie.runtime) : null;

  return (
    <Container $bg={movie?.backdrop}>
      <BackButton
        onClick={() => router.replace(`${pathname.replace("about", "")}`)}
      >
        <BackArrow />
      </BackButton>
      <About>
        <Wrapper>
          <MovieCard>
            <PosterImage
              src={movie?.poster}
              alt="poster"
              width={200}
              height={300}
            />

            <Title>{movie?.title}</Title>
            <SubTitle>{movie?.original_title}</SubTitle>
            <Details>
              <Detail>
                <DetailTitle>Год: </DetailTitle>
                <DetailContent>
                  {movie?.start_year}
                  {movie?.end_year ? `-${movie?.end_year}` : ""}
                </DetailContent>
              </Detail>
              {runtime ? (
                <Detail>
                  <DetailTitle>Продолжительность: </DetailTitle>
                  <DetailContent>{runtime}</DetailContent>
                </Detail>
              ) : null}
              {movie?.number_of_seasons ? (
                <Detail>
                  <DetailTitle>Сезонов: </DetailTitle>
                  <DetailContent>
                    {movie?.number_of_seasons}
                    {movie.number_of_episodes
                      ? ` (${movie.number_of_episodes} серий)`
                      : ""}
                  </DetailContent>
                </Detail>
              ) : null}
              <Detail>
                <DetailTitle>Рейтинг: </DetailTitle>
                <DetailContent>{movie?.vote_average.toFixed(1)}</DetailContent>
              </Detail>
              {movie.origin_country ? (
                <Detail>
                  <DetailTitle>Страны происхождения: </DetailTitle>
                  <DetailContent>
                    {movie.origin_country
                      .map((country: any) => getCountryByISO(country))
                      .join(", ")}
                  </DetailContent>
                </Detail>
              ) : null}
              {movie.production_countries ? (
                <Detail>
                  <DetailTitle>Страны производства: </DetailTitle>
                  <DetailContent>
                    {movie.production_countries
                      .map((country: any) =>
                        getCountryByISO(country.iso_3166_1)
                      )
                      .join(", ")}
                  </DetailContent>
                </Detail>
              ) : null}
              {originalLanguage ? (
                <Detail>
                  <DetailTitle>Оригинальный язык: </DetailTitle>
                  <DetailContent>{originalLanguage}</DetailContent>
                </Detail>
              ) : null}
              {movie.tagline ? (
                <Detail>
                  <DetailTitle>Слоган: </DetailTitle>
                  <DetailContent>{movie.tagline}</DetailContent>
                </Detail>
              ) : null}
              {movie.budget ? (
                <Detail>
                  <DetailTitle>Бюджет: </DetailTitle>
                  <DetailContent>
                    ${normalizeNumber(movie.budget)}
                  </DetailContent>
                </Detail>
              ) : null}
              {movie.revenue ? (
                <Detail>
                  <DetailTitle>Выручка: </DetailTitle>
                  <DetailContent>
                    ${normalizeNumber(movie.revenue)}
                  </DetailContent>
                </Detail>
              ) : null}
              {movie.homepage ? (
                <Detail>
                  <DetailTitle>Сайт: </DetailTitle>
                  <DetailContent>
                    <HomePageLink
                      href={movie.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {movie.homepage}
                    </HomePageLink>
                  </DetailContent>
                </Detail>
              ) : null}
              {movie.imdb_id ? (
                <Detail>
                  <DetailTitle>IMDb: </DetailTitle>
                  <DetailContent>
                    <HomePageLink
                      href={`https://www.imdb.com/title/${movie.imdb_id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {movie.imdb_id}
                    </HomePageLink>
                  </DetailContent>
                </Detail>
              ) : null}
            </Details>
          </MovieCard>

          <Description>
            {movie.custom_description || movie?.overview}
          </Description>
        </Wrapper>
      </About>
      <TabsContainer>
        <StyledTabs activeTab={tab} setActiveTab={changeTab} tabs={tabs} />
      </TabsContainer>
    </Container>
  );
};
