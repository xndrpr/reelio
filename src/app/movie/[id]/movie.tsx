"use client";

import { useGetMovie } from "@/hooks/api/use-get-movie";
import React from "react";
import { BackButton, Container } from "./styled";
import { BackArrow } from "@/assets/icons/tsx-icons/back-arrow";
import { Portal } from "@/shared/components/portal";

interface Props {
  id: number;
}

const Movie = ({ id }: Props) => {
  const { data: movie } = useGetMovie(id);

  return (
    <Container>
      <Portal>
        <BackButton href="/">
          <BackArrow />
        </BackButton>
      </Portal>
    </Container>
  );
};

export default Movie;
