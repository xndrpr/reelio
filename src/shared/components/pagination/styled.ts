"use client";

import { fgColor } from "@/shared/variables";
import styled from "@emotion/styled";
import Link from "next/link";

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const Page = styled(Link)<{ $isActive: boolean }>`
  width: 32px;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${fgColor};
  border-radius: 8px;

  text-decoration: ${({ $isActive }) => ($isActive ? "underline" : "none")};
`;
