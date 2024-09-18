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
import { useRouter } from "next/navigation";

interface Props {
  movie: MovieType;
}

const Tv = ({ movie }: Props) => {
  const [activeTab, setActiveTab] = React.useState(0);
  const tabs: Tab[] = [
    { title: "Смотреть" },
    { title: "О фильме", isDisabled: true },
  ];
  const router = useRouter();

  return (
    <Container>
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
        <StyledTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabs={tabs}
        />
      </TabsContainer>
    </Container>
  );
};

export default Tv;
