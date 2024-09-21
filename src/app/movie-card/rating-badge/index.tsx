import React from "react";
import { Container, Rating } from "./styled";

interface Props {
  backgroundColor: string;
  color: string;
  rating: number;
  icon: JSX.Element;
}

export const RatingBadge = ({
  backgroundColor,
  color,
  rating,
  icon,
}: Props) => {
  return (
    <Container $backgroundColor={backgroundColor} $color={color}>
      {icon}
      <Rating>{rating.toFixed(1)}</Rating>
    </Container>
  );
};
