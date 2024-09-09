"use client";

import { useGetMovie } from "@/hooks/api/use-get-movie";
import React from "react";
import {
  BackButton,
  Container,
  Player,
  StyledTabs,
  TabsContainer,
} from "./styled";
import { BackArrow } from "@/assets/icons/tsx-icons/back-arrow";
import { Portal } from "@/shared/components/portal";

const MoviePage = ({ params }: { params: { id: string } }) => {
  const { data: movie } = useGetMovie(parseInt(params.id));
  const [activeTab, setActiveTab] = React.useState(0);
  const tabs = ["Смотреть", "О фильме"];

  return (
    <Container>
      <Portal>
        <BackButton href="/">
          <BackArrow />
        </BackButton>
      </Portal>
      <Player></Player>
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

export default MoviePage;
