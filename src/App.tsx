import { AppBox, PriceBox, TimeBox } from "./styles/App";
import { equilibrium, view, ethereum, clock, avatar } from "./assets/media";

const App: React.FC = (): JSX.Element => {
  return (
    <AppBox>
      <header>
        <img
          alt="Blue background with a cube that reflects a red light"
          src={equilibrium}
        />
        <div>
          <img
            alt="Icon of a small gray eye that appears in the middle of the NFT when the mouse cursor hovers over it"
            src={view}
          />
        </div>
      </header>
      <main>
        <h1>Equilibrium #3429</h1>
        <p>Our Equilibrium collection promotes balance and calm</p>
        <div>
          <PriceBox>
            <div>
              <img alt="Small Ethereum cyan color icon" src={ethereum} />
              <span>0.041 ETH</span>
            </div>
          </PriceBox>
          <TimeBox>
            <div>
              <img alt="Gray small clock icon" src={clock} />
              <span>3 days left</span>
            </div>
          </TimeBox>
        </div>
      </main>
      <footer>
        <img alt="Author avatar" src={avatar} />
        <span>
          Creation of <span>Jules Wyvern</span>
        </span>
      </footer>
    </AppBox>
  );
};

export default App;
