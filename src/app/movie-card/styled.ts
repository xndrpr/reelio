import styled from "@emotion/styled";
import Image from "next/image";

export const Container = styled.div`
  width: 200px;
`;

export const Poster = styled(Image)`
  border-radius: 16px;

  width: 200px;
  height: 280px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  max-width: 200px;
  width: 100%;
`;

export const Title = styled.h3`
  font-size: 14px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Year = styled.p`
  font-size: 13px;
  font-weight: 300;
  text-overflow: ellipsis;
`