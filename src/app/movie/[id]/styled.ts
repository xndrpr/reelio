"use client";

import { Tabs } from "@/shared/components/tabs";
import {
  breakPoint1,
  breakPoint2,
  breakPoint3,
  darkPurple,
} from "@/shared/variables";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

export const Container = styled.div`
  --content-padding: 40px;

  display: flex;
  flex-direction: column;
  gap: 12px;
  height: calc(100dvh - var(--content-padding) * 2);

  @media (max-width: ${breakPoint2}px) {
    --content-padding: 16px;
  }

  @media (max-width: ${breakPoint3}px) {
    --content-padding: 12px;
  }
`;

export const BackButton = styled.button`
  background: ${darkPurple};
  border: none;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  padding: 6px;
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 1rem;

  cursor: pointer;

  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(0.9);
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  text-align: center;
`;

export const Player = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

export const TabsContainer = styled.div`
  margin-top: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledTabs = styled(Tabs)`
  width: 225px;
`;

export const Backdrop = styled(Image)`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
