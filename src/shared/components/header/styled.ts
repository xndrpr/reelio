"use client";

import { Tabs } from "@/shared/components/tabs";
import { breakPoint2, breakPoint3 } from "@/shared/variables";
import styled from "@emotion/styled";

export const CustomTabs = styled(Tabs)`
  min-width: 500px;
  height: 40px;

  @media (max-width: 100%) {
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
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;

  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 8px;
  }
`;
