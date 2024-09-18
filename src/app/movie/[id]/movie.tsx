"use client";

import React from "react";
import {
  BackButton,
  Container,
  Player,
  StyledTabs,
  TabsContainer,
  Title,
} from "./styled";
import { BackArrow } from "@/assets/icons/tsx-icons/back-arrow";
import { Tab } from "@/shared/components/tabs";
import KinoboxPlayer from "@/shared/components/kino-box";
import { Movie as MovieType } from "@/types/api/get-movies-result";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  movie: MovieType;
}

const Movie = ({ movie }: Props) => {
  const [activeTab, setActiveTab] = React.useState(0);
  const tabs: Tab[] = [{ title: "Смотреть" }, { title: "О фильме" }];
  const router = useRouter();
  const pathname = usePathname();

  const changeTab = async (tab: number) => {
    if (tab === 1) {
      setActiveTab(1);
      await new Promise((resolve) => setTimeout(resolve, 200));
      router.replace(`${pathname}/about`);
    }
  };

  return (
    <Container $bg={movie?.backdrop}>
      <BackButton onClick={() => router.push("/movies")}>
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
        <StyledTabs
          activeTab={activeTab}
          setActiveTab={changeTab}
          tabs={tabs}
        />
      </TabsContainer>
    </Container>
  );
};

export default Movie;
