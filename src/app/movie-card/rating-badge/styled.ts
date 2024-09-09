import styled from "@emotion/styled";

export const Container = styled.div<{
  $backgroundColor: string;
  $color: string;
}>`
  width: 60px;
  height: 20px;
  border-radius: 4px;

  background: ${(props) => props.$backgroundColor};
  color: ${(props) => props.$color};

  font-size: 10px;
  font-weight: 800;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;

  user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;
`;
