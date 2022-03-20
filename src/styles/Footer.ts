import styled from "styled-components";

export const FooterArea = styled.footer`
  align-items: center;
  border-top: 1px solid var(--line-color);
  display: flex;
  padding-top: 13px;
  font-size: 13px;
`;

export const Avatar = styled.img`
  border: 1px solid var(--border-avatar-color);
  border-radius: 50%;
  width: 30px;
  margin-right: 12px;
`;

export const Author = styled.span`
  color: var(--text-color);
  font-weight: 300;
  margin-right: 3px;
`;

export const AuthorName = styled.span`
  color: var(--name-color);
  cursor: pointer;

  &:hover {
    color: var(--name-hover-color);
  }
`;
