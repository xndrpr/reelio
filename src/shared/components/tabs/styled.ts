'use client';

import { darkPurple, fgColor, lightPurple, mediumPurple, radius } from "@/shared/variables";
import styled from "@emotion/styled";

export const TabsSC = styled.div<{ $activeTab: number, $tabsCount: number }>`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  gap: 2px;
  background-color: ${darkPurple};
  border-radius: ${radius};
  box-sizing: border-box;
  isolation: isolate;

  &::after {
    z-index: -1;
    border-radius: inherit;
    content: "";
    position: absolute;
    inset: 2px;
    transform: translateX(${props => props.$activeTab === props.$tabsCount - 1 ? "-4px" : "0px"});
    width: calc(100% / ${props => props.$tabsCount});
    margin-left: ${props => props.$activeTab * 100 / props.$tabsCount}%;
    background: ${mediumPurple};

    transition: all 0.15s ease-in-out;
  }
`;

export const Tab = styled.div<{ $isActive: boolean }>`
  color: ${fgColor};
  border-radius: 6.91px;

  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 13px;
  font-weight: 440;

  cursor: pointer;
  -webkit-tap-highlight-color: transparent; /* removing blue highlight */

  user-select: none;
  -webkit-user-select: none;
`;