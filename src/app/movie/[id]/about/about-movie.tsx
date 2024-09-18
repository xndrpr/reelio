"use client";

import React from "react";
import { BackButton, StyledTabs, TabsContainer } from "../styled";
import { BackArrow } from "@/assets/icons/tsx-icons/back-arrow";
import { Tab } from "@/shared/components/tabs";
import { Movie as MovieType } from "@/types/api/get-movies-result";
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

interface Props {
  movie: MovieType;
}

export const AboutMovie = ({ movie }: Props) => {
  const tabs: Tab[] = [{ title: "Смотреть" }, { title: "О фильме" }];
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
