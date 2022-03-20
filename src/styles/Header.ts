import styled from "styled-components";

export const HeaderArea = styled.header`
  border-radius: 10px;
  cursor: pointer;
  height: 252px;
  width: 252px;

  &:hover {
    div {
      display: flex;
    }
  }
`;

export const Equilibrium = styled.img`
  border-radius: inherit;
  position: absolute;
  width: inherit;
`;

export const ViewContainer = styled.div`
  align-items: center;
  background-color: var(--bg-view);
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
