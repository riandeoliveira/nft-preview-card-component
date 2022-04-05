import styled from "styled-components";
import theme from "./theme/theme.json";

export const MainArea = styled.main`
  animation: fade-in 1s;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

export const NameContainer = styled.div`
  display: flex;
`;

export const NameContent = styled.h1`
  color: ${theme.colors.white};
  cursor: pointer;
  font-size: 18px;

  &:hover {
    color: ${theme.colors.aquamarine};
    transition: all 0.5s;
  }
`;

export const Name = styled.span`
  margin-right: 5px;
`;

export const Code = styled.span``;

export const Description = styled.p`
  color: ${theme.colors["polo_blue"]};
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
  color: ${theme.colors.aquamarine};
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
  color: ${theme.colors.polo_blue};
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
