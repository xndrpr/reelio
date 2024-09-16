"use client";

import { breakPoint3 } from "@/shared/variables";
import styled from "@emotion/styled";

export const CardsContainer = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;

  @media (max-width: ${breakPoint3}px) {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    margin-top: 18px;
  }
`;

export const LoadMoreButtonContainer = styled.div`
  position: static;
  bottom: 0;
  left: 0;

  width: 100%;
  height: auto;
  aspect-ratio: 0.75;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;

  cursor: pointer;
`;
