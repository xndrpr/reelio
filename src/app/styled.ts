import { breakPoint3 } from "@/shared/variables";
import styled from "@emotion/styled";

export const CardsContainer = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;

  @media (max-width: ${breakPoint3}px) {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  }
`;
