"use client";

import { darkPurple, fgColor, radius } from "@/shared/variables";
import styled from "@emotion/styled";

export const SearchContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  height: 40px;
  width: 100%;

  background: ${darkPurple};
  color: ${fgColor};

  padding: 12px;

  border-radius: ${radius}px;
  cursor: text;

  user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;
`;

export const SearchInput = styled.input`
  outline: none;
  border: none;

  background: inherit;
  color: inherit;

  width: 100%;
  height: 100%;
`;

export const SearchIconSC = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

export const ClearButton = styled.button`
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: ${fgColor};

  cursor: pointer;
  transition: all 0.2s ease-in-out;

  @media (hover: hover) {
    &:hover {
      transform: scale(0.9);
    }
  }
`;
