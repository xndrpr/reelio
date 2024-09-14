import {
  breakPoint1,
  breakPoint2,
  breakPoint3,
  darkPurple,
} from "@/shared/variables";
import styled from "@emotion/styled";

export const Container = styled.div`
  width: 75%;
  aspect-ratio: 16/9;

  border: 4px solid ${darkPurple};
  border-radius: 4px;

  @media (max-width: ${breakPoint1}px) {
    width: 80%;
  }

  @media (max-width: ${breakPoint2}px) {
    width: 85%;
  }

  @media (max-width: ${breakPoint3}px) {
    width: 90%;
  }
`;
