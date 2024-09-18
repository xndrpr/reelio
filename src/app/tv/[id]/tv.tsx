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

const Tv = ({ movie }: Props) => {
  const tabs: Tab[] = [{ title: "Смотреть" }, { title: "О сериале" }];
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
        onClick={() => {
          router.back();
          router.back();
        }}
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

export default Tv;
