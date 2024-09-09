"use client";

import {
  bgColor,
  breakPoint1,
  breakPoint2,
  breakPoint3,
  fgColor,
} from "@/shared/variables";
import styled from "@emotion/styled";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body,
  html {
    font-family: 'Montserrat', sans-serif;
    background-color: ${bgColor};
    color: ${fgColor};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-tap-highlight-color: transparent;
  }
`;

export const ContentWrapper = styled.main`
  padding: 40px 120px;

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
