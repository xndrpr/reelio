"use client";

import {
  darkPurple,
  fgColor,
  lightPurple,
  mediumPurple,
} from "@/shared/variables";
import styled from "@emotion/styled";
import Link from "next/link";

export const Container = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Page = styled(Link)<{ $isActive: boolean }>`
  width: 32px;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${fgColor};
  border-radius: 8px;

  text-decoration: none;
  background: ${(props) => (props.$isActive ? lightPurple : "none")};
  margin: 8px;

  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${mediumPurple};
  }

  @media (max-width: 450px) {
    width: 24px;
    height: 24px;

    margin: 6px;
    border-radius: 4px;
  }
`;
