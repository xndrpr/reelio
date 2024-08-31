import { darkPurple, fgColor, radius } from "@/shared/variables";
import styled from "@emotion/styled";

export const SearchContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  height: 40px;
  width: 100%;

  background: ${darkPurple};
  color: ${fgColor};
  /* background: #fff; */

  padding: 12px;

  border-radius: ${radius};
  cursor: text;
`;

export const SearchInput = styled.input`
  outline: none;
  border: none;

  background: inherit;
  color: inherit;

  width: 100%;
  height: 100%;
`;

export const SearchIconSC = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;