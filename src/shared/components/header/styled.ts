"use client";

import { Tabs } from "@/shared/components/tabs";
import { breakPoint3, lightPurple } from "@/shared/variables";
import styled from "@emotion/styled";
import { animated } from "@react-spring/web";

export const CustomTabs = styled(Tabs)`
  min-width: 500px;
  height: 40px;

  @media (max-width: 1100px) {
    width: 100%;
    min-width: unset;
  }

  @media (max-width: ${breakPoint3}px) {
    & > div {
      font-size: 10px;
    }
  }
`;

export const HeaderSC = styled.div`
  width: 100%;
`;

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;

  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const Search = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
`;

export const HiddenVersion = styled.div`
  display: none;
`;

export const FiltersSC = styled(animated.div)<{ $isOpen: boolean }>`
  border-bottom: ${({ $isOpen }) => ($isOpen ? "1px" : 0)} solid ${lightPurple};
  border-top: ${({ $isOpen }) => ($isOpen ? "1px" : 0)} solid ${lightPurple};

  margin-top: ${({ $isOpen }) => ($isOpen ? "12px" : "0px")};
  padding: ${({ $isOpen }) => ($isOpen ? "8px" : "0px")};

  overflow: hidden;
  height: ${({ $isOpen }) => ($isOpen ? "120px" : "0px")};

  transition: all 0.2s ease-in-out;
`;
