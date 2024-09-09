"use client";

import { useGetMovie } from "@/hooks/api/use-get-movie";
import React, { useCallback, useEffect, useMemo } from "react";
import {
  BackButton,
  Container,
  Player,
  StyledTabs,
  TabsContainer,
} from "./styled";
import { BackArrow } from "@/assets/icons/tsx-icons/back-arrow";
import { Portal } from "@/shared/components/portal";
import { Tab } from "@/shared/components/tabs";

const MoviePage = ({ params }: { params: { id: string } }) => {
  const { data: movie, isPending } = useGetMovie(parseInt(params.id));
  const [activeTab, setActiveTab] = React.useState(0);
  const tabs: Tab[] = [
    { title: "Смотреть" },
    { title: "О фильме", isDisabled: true },
  ];

  const [isMobile, setIsMobile] = React.useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile)
    return (
      <>
        <Portal>
          <BackButton $isRotate={false} href="/">
            <BackArrow />
          </BackButton>
        </Portal>

        <Player>Rotate your screen please</Player>
      </>
    );

  return (
    <Container>
      <Portal>
        <BackButton href="/">
          <BackArrow />
        </BackButton>
      </Portal>
      <Player>{isPending ? "Загрузка..." : movie?.title}</Player>
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
