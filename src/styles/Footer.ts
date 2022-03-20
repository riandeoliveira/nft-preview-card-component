import styled from "styled-components";

export const FooterArea = styled.footer`
  align-items: center;
  border-top: 1px solid var(--line);
  display: flex;
  font-size: 13px;
  padding-top: 13px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  border: 1px solid var(--white);
  margin-right: 12px;
  width: 30px;
`;

export const Author = styled.span`
  color: var(--text);
  font-weight: 300;
  margin-right: 3px;
`;

export const AuthorName = styled.span`
  color: var(--white);
  cursor: pointer;
  font-weight: 300;

  &:hover {
    color: var(--cyan);
  }
`;
