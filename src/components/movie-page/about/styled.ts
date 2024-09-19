import {
  breakPoint2,
  breakPoint3,
  darkGrey,
  darkPurple,
  darkPurple80Opcity,
  fgColor,
  lightGrey,
} from "@/shared/variables";
import styled from "@emotion/styled";
import Image from "next/image";

export const Container = styled.div<{ $bg: string }>`
  --content-padding: 40px;

  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: calc(100dvh - var(--content-padding) * 2);

  @media (max-width: ${breakPoint2}px) {
    --content-padding: 16px;
  }

  @media (max-width: ${breakPoint3}px) {
    --content-padding: 12px;
  }

  &:after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.$bg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.1;
  }
`;

export const About = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px calc(100% / 4 / 2);
  z-index: 1;

  flex-grow: 1;
  margin-bottom: auto;
`;

export const Wrapper = styled.div`
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  gap: 20px;
`;

export const Poster = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
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
  background: ${darkPurple80Opcity};
  color: ${fgColor};
  text-align: left;
  padding: 20px;

  border-radius: 24px;
`;
