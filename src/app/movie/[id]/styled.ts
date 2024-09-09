"use client";

import { Tabs } from "@/shared/components/tabs";
import { darkPurple } from "@/shared/variables";
import styled from "@emotion/styled";
import Link from "next/link";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 60px;
  height: 100%;
`;

export const BackButton = styled(Link)`
  position: fixed;
  inset: 50px;

  background: ${darkPurple};
  border-radius: 50%;
  height: 50px;
  width: 50px;
  padding: 6px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

export const Player = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TabsContainer = styled.div`
  position: fixed;
  bottom: 40px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledTabs = styled(Tabs)`
  width: 225px;
`;
