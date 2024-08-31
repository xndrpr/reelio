"use client";

import { Tabs } from "@/shared/components/tabs";
import styled from "@emotion/styled";

export const CustomTabs = styled(Tabs)`
  width: 432px;
  min-width: 432px;
  height: 40px;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
`;