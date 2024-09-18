"use client";

import React from "react";
import {
  BackButton,
  Container,
  Player,
  StyledTabs,
  TabsContainer,
} from "../styled";
import { BackArrow } from "@/assets/icons/tsx-icons/back-arrow";
import { Tab } from "@/shared/components/tabs";
import KinoboxPlayer from "@/shared/components/kino-box";
import { Movie as MovieType } from "@/types/api/get-movies-result";
import { usePathname, useRouter } from "next/navigation";
import {
  About,
  Description,
  Info,
  Poster,
  PosterImage,
  SubTitle,
  Title,
  Wrapper,
} from "./styled";
import Image from "next/image";

interface Props {
  movie: MovieType;
}

export const AboutTv = ({ movie }: Props) => {
  const tabs: Tab[] = [{ title: "Смотреть" }, { title: "О сериале" }];
  const router = useRouter();
  const pathname = usePathname();
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
        onClick={() => {
          router.back();
          router.back();
        }}
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
              {movie.year} {movie.end_year ? ` - ${movie.end_year}` : ""} ∙{" "}
              {movie.seasons_count}{" "}
              {movie.seasons_count === 1
                ? "сезон"
                : movie.seasons_count || 0 < 5
                ? "сезона"
                : "сезонов"}
            </Info>
          </Poster>
          <Description>{movie?.description}</Description>
        </Wrapper>
      </About>
      <TabsContainer>
        <StyledTabs activeTab={tab} setActiveTab={changeTab} tabs={tabs} />
      </TabsContainer>
    </Container>
  );
};
