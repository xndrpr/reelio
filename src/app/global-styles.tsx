"use client";

import { MontserratFonts, RobotoFonts } from "@/assets/fonts";
import { css, Global } from "@emotion/react";

export const GlobalStyles = () => (
  <Global
    styles={css`
      ${RobotoFonts};
      ${MontserratFonts};
      body {
        background: #0e1017;
      }

      body,
      html {
        font-family: "Montserrat", sans-serif;
        background-color: #0e1017;
        color: #dbdbdb;
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        -webkit-tap-highlight-color: transparent;
      }
    `}
  />
);
