import {
  breakPoint1,
  breakPoint2,
  breakPoint3,
  darkPurple,
} from "@/shared/variables";
import styled from "@emotion/styled";

export const Container = styled.div`
  --content-padding: 80px;

  width: 100%;
  max-width: calc(100% - (var(--content-padding) * 4));
  aspect-ratio: 16/9;

  border: 4px solid ${darkPurple};
  border-radius: 4px;

  @media (max-width: ${breakPoint1}px) {
    --content-padding: 60px;
  }

  @media (max-width: ${breakPoint2}px) {
    --content-padding: 16px;
  }

  @media (max-width: ${breakPoint3}px) {
    --content-padding: 12px;
    max-width: unset;
  }
`;

export const Player = styled.iframe`
  --content-padding: 80px;

  width: 100%;
  max-width: calc(100% - (var(--content-padding) * 4));
  aspect-ratio: 16/9;

  border: 4px solid ${darkPurple};
  border-radius: 4px;

  @media (max-width: ${breakPoint1}px) {
    --content-padding: 60px;
  }

  @media (max-width: ${breakPoint2}px) {
    --content-padding: 16px;
  }

  @media (max-width: ${breakPoint3}px) {
    --content-padding: 12px;
    max-width: unset;
  }
`;
