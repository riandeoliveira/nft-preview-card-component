import data from "../data/data.json";
import {
  MainArea,
  NameContainer,
  NameContent,
  Name,
  Code,
  Description,
  DataContainer,
  PriceContainer,
  Ethereum,
  Price,
  CurrencyCode,
  TimeContainer,
  Clock,
  Time,
  TimeInfo,
} from "../styles/Main";
import ethereum from "../assets/icons/ethereum.svg";
import clock from "../assets/icons/clock.svg";

const {
  name,
  code,
  description,
  ethereum_alt,
  price,
  currency_code,
  clock_alt,
  time,
  time_info,
} = data;

export const Main: React.FC = () => {
  return (
    <MainArea>
      <NameContainer>
        <NameContent>
          <Name>{name}</Name>
          <Code>#{code}</Code>
        </NameContent>
      </NameContainer>
      <Description>{description}</Description>
      <DataContainer>
        <PriceContainer>
          <Ethereum alt={ethereum_alt} src={ethereum} />
          <Price>{price}</Price>
          <CurrencyCode>{currency_code}</CurrencyCode>
        </PriceContainer>
        <TimeContainer>
          <Clock alt={clock_alt} src={clock} />
          <Time>{time}</Time>
          <TimeInfo>{time_info}</TimeInfo>
        </TimeContainer>
      </DataContainer>
    </MainArea>
  );
};
