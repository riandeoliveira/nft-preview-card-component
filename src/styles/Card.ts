import styled from "styled-components";
import theme from "./theme/theme.json";

export const CardContainer = styled.div`
  background-color: ${theme.colors["big_stone"]};
  border-radius: 15px;
  box-shadow: 0 10px 30px ${theme.colors["cod_gray"]};
  margin: 20px;
  max-width: 296px;
  padding: 22px;
`;
