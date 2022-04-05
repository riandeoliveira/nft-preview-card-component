import styled from "styled-components";
import theme from "./theme/theme.json";

export const FooterArea = styled.footer`
  align-items: center;
  animation: fade-in 1s;
  border-top: 1px solid ${theme.colors.rhino};
  display: flex;
  font-size: 13px;
  padding-top: 13px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  border: 1px solid ${theme.colors.white};
  margin-right: 12px;
  width: 30px;
`;

export const Author = styled.span`
  color: ${theme.colors.polo_blue};
  font-weight: 300;
  margin-right: 3px;
`;

export const AuthorName = styled.span`
  color: ${theme.colors.white};
  cursor: pointer;
  font-weight: 300;

  &:hover {
    color: ${theme.colors.aquamarine};
    transition: all 0.5s;
  }
`;
