import { CardContainer } from "../styles/Card";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";

export const Card: React.FC = () => {
  return (
    <CardContainer>
      <Header />
      <Main />
      <Footer />
    </CardContainer>
  );
};
