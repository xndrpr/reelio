"use client";

import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";

export const Poster = styled(Image)<{ $isLoading: boolean }>`
  border-radius: 16px;

  width: ${({ $isLoading }) => ($isLoading ? "200px" : "100%")};
  height: ${({ $isLoading }) => ($isLoading ? "280px" : "auto")};
  aspect-ratio: 0.75;

  position: ${({ $isLoading }) => ($isLoading ? "fixed" : "relative")};
  opacity: ${({ $isLoading }) => ($isLoading ? 0 : 1)};

  user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;
`;

export const SkeletonPoster = styled.div`
  width: 100%;
  height: auto;
  aspect-ratio: 0.75;
  background: rgba(255, 255, 255, 0.05);

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 16px;
`;
