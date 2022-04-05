import styled from "styled-components";
import theme from "./theme/theme.json";

export const HeaderArea = styled.header`
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  height: 252px;
  justify-content: center;
  width: 252px;

  &:hover {
    div {
      display: flex;
    }
  }
`;

export const Equilibrium = styled.img`
  border-radius: inherit;
  height: inherit;
  position: absolute;
  width: inherit;
`;

export const ViewContainer = styled.div`
  align-items: center;
  animation: fade-in 0.5s;
  background-color: ${theme.colors.spray};
  border-radius: inherit;
  display: none;
  height: inherit;
  justify-content: center;
  position: absolute;
  width: inherit;
`;

export const View = styled.img`
  height: 40px;
  width: 40px;
`;
