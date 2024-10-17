"use client";

import { fgColor } from "@/shared/variables";
import styled from "@emotion/styled";
import Image from "next/image";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
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
`;

export const HoverContainer = styled.a`
  color: ${fgColor};
  text-decoration: none;

  cursor: pointer;
  transition: opacity 0.15s ease-in-out;

  @media (hover: hover) {
    &:hover {
      opacity: 0.7;
    }
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
`;

export const ImdbIcon = styled.span`
  font-weight: bold;
  font-size: 11px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
