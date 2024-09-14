"use client";

import { breakPoint1, breakPoint2, breakPoint3 } from "@/shared/variables";
import styled from "@emotion/styled";

export const ContentWrapper = styled.main`
  padding: 40px 80px;

  @media (max-width: ${breakPoint1}px) {
    padding: 40px 60px;
  }

  @media (max-width: ${breakPoint2}px) {
    padding: 16px;
  }

  @media (max-width: ${breakPoint3}px) {
    padding: 12px;
  }
`;
