import styled from "styled-components";

export const MainArea = styled.main`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

export const NameContainer = styled.h1`
  color: var(--white);
  cursor: pointer;
  display: flex;
  font-size: 18px;
  max-width: 100%;
`;

export const NameContent = styled.div`
  &:hover {
    color: var(--cyan);
  }
`;

export const Name = styled.span`
  margin-right: 5px;
`;

export const Code = styled.span``;

export const Description = styled.p`
  color: var(--text);
  font-size: 15px;
  font-weight: 300;
  line-height: 1.5em;
  margin: 15px 0;
`;

export const DataContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PriceContainer = styled.div`
  color: var(--cyan);
  display: flex;
  font-size: 13px;
`;

export const Ethereum = styled.img`
  width: 10px;
`;

export const Price = styled.span`
  margin: 0 2px 0 6px;
`;

export const CurrencyCode = styled.span``;

export const TimeContainer = styled.div`
  align-items: center;
  color: var(--text);
  display: flex;
  font-size: 13px;
`;

export const Clock = styled.img`
  width: 15px;
`;

export const Time = styled.span`
  margin: 0 2px 0 4px;
`;

export const TimeInfo = styled.span``;
