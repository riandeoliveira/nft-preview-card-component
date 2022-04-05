import content from "../content/header.json";
import { HeaderArea, Equilibrium, ViewContainer, View } from "../styles/Header";
import { equilibrium, view } from "../assets/media";

const { equilibrium_alt, view_alt } = content;

const Header: React.FC = () => {
  return (
    <HeaderArea>
      <Equilibrium alt={equilibrium_alt} src={equilibrium} />
      <ViewContainer>
        <View alt={view_alt} src={view} />
      </ViewContainer>
    </HeaderArea>
  );
};

export default Header;
