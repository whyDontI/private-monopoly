import Card from './Components/Card/Card'
import GameContextProvider from './contexts/context';
import logo from './logo.svg';
import './App.css';
import Dice from './Components/Bank/Dice/Dice';

function App() {
  return (
    <div className="App">
      <GameContextProvider>
        <div className="table">
          <div className="board">
            <div className="center">
              <div className="community-chest-deck">
                <h2 className="label">Community Chest</h2>
                <div className="deck"></div>
              </div>
              <h1 className="game-title">MONOPOLY</h1>
              <Dice />
              <div className="chance-deck">
                <h2 className="label">Chance</h2>
                <div className="deck"></div>
              </div>
            </div>
            <div className="space corner go">
              <div className="container">
                <div className="instructions">Collect $200.00 salary as you pass</div>
                <div className="go-word">go</div>
              </div>
              <div className="arrow fa fa-long-arrow-left"></div>
            </div>

            <div className="row horizontal-row bottom-row">
              <Card name="Connecticut Avenue" pricetext="$120" color="" type="property" />
              <Card name="Vermont Avenue" pricetext="Price $100" color="light-blue" type="property" />
              <div className="space chance">
                <div className="container">
                  <div className="name">Chance</div>
                  <i className="drawing fa fa-question"></i>
                </div>
              </div>
              <Card name="Oriental Avenue" pricetext="$100" color="light-blue" type="property" />
              <Card name="Reading Railroad" pricetext="$200" color="" type="property" />

              <div className="space fee income-tax">
                <div className="container">
                  <div className="name">Income Tax</div>
                  <div className="diamond"></div>
                  <div className="instructions">Pay 10%<br />or<br />$200</div>
                </div>
              </div>
              <Card name="Baltic Avenue" pricetext="$60" color="brown" type="property" />
              <div className="space community-chest">
                <div className="container">
                  <div className="name">Community Chest</div>
                  <i className="drawing fa fa-cube"></i>
                  <div className="instructions">Follow instructions on top card</div>
                </div>
              </div>
              <Card name="Mediterranean Avenue" pricetext="$60" color="brown" type="property" />
            </div>

            <div className="space corner jail">
              <div className="just">Just</div>
              <div className="drawing">
                <div className="container">
                  <div className="name">In</div>
                  <div className="window">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <i className="person fa fa-frown-o"></i>
                  </div>
                  <div className="name">Jail</div>
                </div>
              </div>
              <div className="visiting">Visiting</div>
            </div>

            <div className="row vertical-row left-row">

              {/* <Card name="City Tax" pricetext="Pay $200" color="" type="chance" />
            <Card name="Pacific Avenue" pricetext="$300" color="green" type="property" />
            <Card name="North Carolina Avenue" pricetext="$300" color="green" type="property" />
            <Card name="Pennsylvania Avenue" pricetext="$320" color="green" type="property" />
            <Card name="Short Line" pricetext="$200" color="" type="property" />
            <Card name="Park Place" pricetext="$350" color="light-blue" type="property" />
            <Card name="LUXURY TAX" pricetext="Pay $100" color="" type="chance" />
            <Card name="Boardwalk" pricetext="$400" color="light-blue" type="property" /> */}

              <Card name="New York Avenue" pricetext="$200" color="orange" type="property" />

              <Card name="Tennessee Avenue" pricetext="$180" color="orange" type="property" />

              <div className="space community-chest">
                <div className="container">
                  <div className="name">Community Chest</div>
                  <i className="drawing fa fa-cube"></i>
                  <div className="instructions">Follow instructions on top card</div>
                </div>
              </div>
              <Card name="St. James Place" pricetext="$180" color="orange" type="property" />
              <Card name="Pennsylvania Railroad" pricetext="$200" color="" type="property" />

              <Card name="Virginia Avenue" pricetext="$160" color="pink" type="property" />

              <Card name="States Avenue" pricetext="$140" color="pink" type="property" />

              <Card name="Electric Company" pricetext="$150" color="" type="property" />

              <Card name="St. Charles Place" pricetext="$140" color="pink" type="property" />

            </div>

            <div className="space corner free-parking">
              <div className="container">
                <div className="name">Free</div>
                <i className="drawing fa fa-car"></i>
                <div className="name">Parking</div>
              </div>
            </div>

            <div className="row horizontal-row top-row">
              <Card name="Kentucky Avenue" pricetext="$220" color="red" type="property" />

              <div className="space chance">
                <div className="container">
                  <div className="name">Chance</div>
                  <i className="drawing fa fa-question blue"></i>
                </div>
              </div>
              <Card name="Indiana Avenue" pricetext="$220" color="red" type="property" />
              <Card name="Illinois Avenue" pricetext="$240" color="red" type="property" />
              <Card name="B&O Railroad" pricetext="$200" color="" type="property" />
              <Card name="Atlantic Avenue" pricetext="$260" color="yellow" type="property" />

              <Card name="Ventnor Avenue" pricetext="$260" color="yellow" type="property" />

              <Card name="Water Works" pricetext="$150" color="" type="property" />

              <Card name="Marvin Gardens" pricetext="$280" color="" type="property" />

            </div>

            <div className="space corner go-to-jail">
              <div className="container">
                <div className="name">Go To</div>
                <i className="drawing fa fa-gavel"></i>
                <div className="name">Jail</div>
              </div>
            </div>

            <div className="row vertical-row right-row">
              <Card name="Pacific Avenue" pricetext="$300" color="green" type="property" />
              <Card name="North Carolina Avenue" pricetext="$300" color="green" type="property" />
              <div className="space community-chest">
                <div className="container">
                  <div className="name">Community Chest</div>
                  <i className="drawing fa fa-cube"></i>
                  <div className="instructions">Follow instructions on top card</div>
                </div>
              </div>
              <Card name="Pennsylvania Railroad" pricetext="$200" color="green" type="property" />
              <Card name="Short Line" pricetext="$200" color="" type="railroad" />
              <div className="space chance">
                <div className="container">
                  <div className="name">Chance</div>
                  <i className="drawing fa fa-question"></i>
                </div>
              </div>
              <Card name="Park Place" pricetext="$360" color="dark-blue" type="property" />
              <div className="space fee luxury-tax">
                <div className="container">
                  <div className="name">Luxury Tax</div>
                  <div className="drawing fa fa-diamond"></div>
                  <div className="instructions">Pay $75.00</div>
                </div>
              </div>
              <Card name="Boardwalk" pricetext="$400" color="dark-blue" type="property" />
            </div>

          </div>
        </div>
      </GameContextProvider>
    </div>
  );
}

export default App;
