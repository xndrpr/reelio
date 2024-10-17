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

export const FiltersSC = styled(animated.div)`
  border-bottom: 1px solid ${lightPurple};
  border-top: 1px solid ${lightPurple};
  margin-top: 12px;
  padding: 8px;
`;
