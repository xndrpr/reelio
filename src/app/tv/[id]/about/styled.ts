import {
  breakPoint2,
  darkGrey,
  darkPurple,
  darkPurple80Opcity,
  fgColor,
  lightGrey,
} from "@/shared/variables";
import styled from "@emotion/styled";
import Image from "next/image";

export const About = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px calc(100% / 4 / 2);
  z-index: 1;
`;

export const Wrapper = styled.div`
  height: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (max-width: ${breakPoint2}px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Poster = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100%;
`;

export const PosterImage = styled(Image)`
  width: 200px;
  height: 280px;
  border-radius: 16px;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;
`;

export const Title = styled.h1`
  font-size: 16px;
  color: ${fgColor};
`;

export const SubTitle = styled.h2`
  font-size: 14px;
  color: ${darkGrey};
`;
export const Info = styled.h3`
  font-size: 14px;
  color: ${lightGrey};
`;

export const Description = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${darkPurple80Opcity};
  color: ${fgColor};
  text-align: left;
  padding: 20px;

  height: 100%;
  border-radius: 24px;
`;
