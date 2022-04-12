import styled from "styled-components";
import theme from "./theme/theme.json";

export const AppBox = styled.div`
  background-color: ${theme.colors.big_stone};
  border-radius: 15px;
  box-shadow: 0 10px 30px ${theme.colors.cod_gray};
  margin: 20px;
  max-width: 296px;
  padding: 22px;

  header {
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    height: 252px;
    justify-content: center;
    width: 252px;

    &:hover {
      div {
        display: flex;
      }
    }

    img {
      border-radius: inherit;
      width: inherit;
    }

    div {
      align-items: center;
      animation: fade-in 0.5s;
      background-color: ${theme.colors.spray};
      border-radius: inherit;
      display: none;
      height: inherit;
      justify-content: center;
      position: absolute;
      width: inherit;

      img {
        height: 40px;
        width: 40px;
      }
    }
  }

  main {
    animation: fade-in 1s;
    display: flex;
    flex-direction: column;
    margin: 20px 0;

    h1 {
      color: ${theme.colors.white};
      cursor: pointer;
      font-size: 18px;
      font-weight: 400;

      &:hover {
        color: ${theme.colors.aquamarine};
        transition: all 0.5s;
      }
    }

    p {
      color: ${theme.colors.polo_blue};
      font-size: 15px;
      font-weight: 300;
      line-height: 1.5em;
      margin: 15px 0;
    }

    div {
      display: flex;
      font-size: 13px;
      justify-content: space-between;
    }
  }

  footer {
    align-items: center;
    animation: fade-in 1s;
    border-top: 1px solid ${theme.colors.rhino};
    display: flex;
    font-size: 13px;
    padding-top: 13px;

    img {
      border-radius: 50%;
      border: 1px solid ${theme.colors.white};
      margin-right: 12px;
      width: 30px;
    }

    span {
      color: ${theme.colors.polo_blue};
      font-weight: 300;

      span {
        color: ${theme.colors.white};
        cursor: pointer;

        &:hover {
          color: ${theme.colors.aquamarine};
          transition: all 0.5s;
        }
      }
    }
  }
`;

export const PriceBox = styled.div`
  color: ${theme.colors.aquamarine};
  display: flex;

  img {
    margin-right: 5px;
  }
`;

export const TimeBox = styled.div`
  align-items: center;
  color: ${theme.colors.polo_blue};
  display: flex;

  img {
    margin-right: 5px;
  }
`;
