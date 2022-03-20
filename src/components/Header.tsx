import data from "../data/data.json";
import { HeaderArea, Equilibrium, ViewContainer, View } from "../styles/Header";
import equilibrium from "../assets/images/equilibrium.jpg";
import view from "../assets/icons/view.svg";

const { equilibrium_alt, view_alt } = data;

export const Header: React.FC = () => {
  return (
    <HeaderArea>
      <Equilibrium alt={equilibrium_alt} src={equilibrium} />
      <ViewContainer>
        <View alt={view_alt} src={view} />
      </ViewContainer>
    </HeaderArea>
  );
};
