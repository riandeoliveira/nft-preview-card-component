import styled from "styled-components";

export const MainArea = styled.main`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
`;

export const NameContainer = styled.h1`
  color: var(--title-color);
  cursor: pointer;
  font-size: 18px;
  display: flex;

  &:hover {
    color: var(--title-hover-color);
  }
`;

export const Name = styled.span`
  margin-right: 5px;
`;

export const Code = styled.span``;

export const Description = styled.p`
  color: var(--text-color);
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
  align-items: center;
  display: flex;
  color: var(--price-color);
  font-size: 13px;
`;

export const Ethereum = styled.img`
  width: 10px;
`;

export const Price = styled.span`
  font-weight: 400;
  margin: 0 2px 0 6px;
`;

export const CurrencyCode = styled.span``;

export const TimeContainer = styled.div`
  align-items: center;
  display: flex;
  color: var(--text-color);
  font-size: 13px;
`;

export const Clock = styled.img`
  width: 15px;
`;

export const Time = styled.span`
  margin: 0 2px 0 4px;
  font-weight: 400;
`;

export const TimeInfo = styled.span``;
