import styled from "styled-components";

export const FooterArea = styled.footer`
  align-items: center;
  animation: fade-in 1s;
  border-top: 1px solid var(--rhino-color);
  display: flex;
  font-size: 13px;
  padding-top: 13px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  border: 1px solid var(--white-color);
  margin-right: 12px;
  width: 30px;
`;

export const Author = styled.span`
  color: var(--polo-blue-color);
  font-weight: 300;
  margin-right: 3px;
`;

export const AuthorName = styled.span`
  color: var(--white-color);
  cursor: pointer;
  font-weight: 300;

  &:hover {
    color: var(--aquamarine-color);
    transition: all 0.5s;
  }
`;
