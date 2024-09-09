import React from "react";
import { Container } from "./styled";

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
      {rating}
    </Container>
  );
};
