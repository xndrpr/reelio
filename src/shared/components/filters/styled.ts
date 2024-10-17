import { darkPurple } from "@/shared/variables";
import styled from "@emotion/styled";

export const FiltersSC = styled.div<{ $isOpen: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${darkPurple};
  transform: rotate(${({ $isOpen }) => ($isOpen ? "180deg" : "0deg")});

  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;
