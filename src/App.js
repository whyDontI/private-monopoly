import Card from "./Components/Card/Card";
import GameContextProvider from "./contexts/context";
import "./App.css";
import Dice from "./Components/Bank/Dice/Dice";
import Chance from "./Components/Card/Chance/Chance";
import Community from "./Components/Card/Community/Community";

function App() {
  return (
    <div className='App'>
      <GameContextProvider>
        <div className='table'>
          <div className='board'>
            <div className='center'>
              <div className='community-chest-deck'>
                <h2 className='label'>Community Chest</h2>
                <div className='deck'></div>
              </div>
              <h1 className='game-title'>MONOPOLY</h1>
              <Dice />
              <div className='chance-deck'>
                <h2 className='label'>Chance</h2>
                <div className='deck'></div>
              </div>
            </div>
            {/* index 1 */}
            <div className='space corner go'>
              <div className='container'>
                <div className='instructions'>
                  Collect $200.00 salary as you pass
                </div>
                <div className='go-word'>go</div>
              </div>
              <div className='arrow fa fa-long-arrow-left'></div>
            </div>

            <div className='row horizontal-row bottom-row'>
              <Card
                name='Connecticut Avenue'
                index={10}
                pricetext='$120'
                color='light-blue'
                type='property'
              />
              <Card
                name='Vermont Avenue'
                index={9}
                pricetext='Price $100'
                color='light-blue'
                type='property'
              />
              {/* Index 8 */}
              <Chance index={8} />
              <Card
                name='Oriental Avenue'
                index={7}
                pricetext='$100'
                color='light-blue'
                type='property'
              />
              <Card
                name='Reading Railroad'
                index={6}
                pricetext='$200'
                color=''
                type='property'
              />

              {/* Index 5 */}
              <div className='space fee income-tax'>
                <div className='container'>
                  <div className='name'>Income Tax</div>
                  <div className='diamond'></div>
                  <div className='instructions'>
                    Pay 10%
                    <br />
                    or
                    <br />
                    $200
                  </div>
                </div>
              </div>
              <Card
                name='Baltic Avenue'
                index={4}
                pricetext='$60'
                color='brown'
                type='property'
              />
              {/* Index 3 */}
              <Community index={3} />
              <Card
                name='Mediterranean Avenue'
                index={2}
                pricetext='$60'
                color='brown'
                type='property'
              />
            </div>

            {/* Index 11 */}
            <div className='space corner jail'>
              <div className='just'>Just</div>
              <div className='drawing'>
                <div className='container'>
                  <div className='name'>In</div>
                  <div className='window'>
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <i className='person fa fa-frown-o'></i>
                  </div>
                  <div className='name'>Jail</div>
                </div>
              </div>
              <div className='visiting'>Visiting</div>
            </div>

            <div className='row vertical-row left-row'>
              {/* <Card name="City Tax" pricetext="Pay $200" color="" type="chance" />
            <Card name="Pacific Avenue" pricetext="$300" color="green" type="property" />
            <Card name="North Carolina Avenue" pricetext="$300" color="green" type="property" />
            <Card name="Pennsylvania Avenue" pricetext="$320" color="green" type="property" />
            <Card name="Short Line" pricetext="$200" color="" type="property" />
            <Card name="Park Place" pricetext="$350" color="light-blue" type="property" />
            <Card name="LUXURY TAX" pricetext="Pay $100" color="" type="chance" />
            <Card name="Boardwalk" pricetext="$400" color="light-blue" type="property" /> */}

              <Card
                name='New York Avenue'
                index={20}
                pricetext='$200'
                color='orange'
                type='property'
              />

              <Card
                name='Tennessee Avenue'
                index={19}
                pricetext='$180'
                color='orange'
                type='property'
              />

              {/* Index 18 */}
              <Community index={18} />
              <Card
                name='St. James Place'
                index={17}
                pricetext='$180'
                color='orange'
                type='property'
              />
              <Card
                name='Pennsylvania Railroad'
                index={16}
                pricetext='$200'
                color=''
                type='property'
              />

              <Card
                name='Virginia Avenue'
                index={15}
                pricetext='$160'
                color='pink'
                type='property'
              />

              <Card
                name='States Avenue'
                index={14}
                pricetext='$140'
                color='pink'
                type='property'
              />

              <Card
                name='Electric Company'
                index={13}
                pricetext='$150'
                color=''
                type='property'
              />

              <Card
                name='St. Charles Place'
                index={12}
                pricetext='$140'
                color='pink'
                type='property'
              />
            </div>

            {/* Index 21 */}
            <div className='space corner free-parking'>
              <div className='container'>
                <div className='name'>Free</div>
                <i className='drawing fa fa-car'></i>
                <div className='name'>Parking</div>
              </div>
            </div>

            <div className='row horizontal-row top-row'>
              <Card
                name='Kentucky Avenue'
                index={22}
                pricetext='$220'
                color='red'
                type='property'
              />

              {/* Index 23 */}
              <Chance index={23} />
              <Card
                name='Indiana Avenue'
                index={24}
                pricetext='$220'
                color='red'
                type='property'
              />
              <Card
                name='Illinois Avenue'
                index={25}
                pricetext='$240'
                color='red'
                type='property'
              />
              <Card
                name='B&O Railroad'
                index={26}
                pricetext='$200'
                color=''
                type='property'
              />
              <Card
                name='Atlantic Avenue'
                index={27}
                pricetext='$260'
                color='yellow'
                type='property'
              />

              <Card
                name='Ventnor Avenue'
                index={28}
                pricetext='$260'
                color='yellow'
                type='property'
              />

              <Card
                name='Water Works'
                index={29}
                pricetext='$150'
                color=''
                type='property'
              />

              <Card
                name='Marvin Gardens'
                index={30}
                pricetext='$280'
                color='yellow'
                type='property'
              />
            </div>

            {/* Index 31 */}
            <div className='space corner go-to-jail'>
              <div className='container'>
                <div className='name'>Go To</div>
                <i className='drawing fa fa-gavel'></i>
                <div className='name'>Jail</div>
              </div>
            </div>

            <div className='row vertical-row right-row'>
              <Card
                name='Pacific Avenue'
                index={32}
                pricetext='$300'
                color='green'
                type='property'
              />
              <Card
                name='North Carolina Avenue'
                index={33}
                pricetext='$300'
                color='green'
                type='property'
              />

              {/* Index 34 */}
              <Community index={34} />

              <Card
                name='Pennsylvania Railroad'
                index={35}
                pricetext='$200'
                color='green'
                type='property'
              />
              <Card
                name='Short Line'
                index={36}
                pricetext='$200'
                color=''
                type='railroad'
              />

              {/* Index 37 */}
              <Chance index={37} />

              <Card
                name='Park Place'
                index={38}
                pricetext='$360'
                color='dark-blue'
                type='property'
              />

              {/* Index 39 */}
              <div className='space fee luxury-tax'>
                <div className='container'>
                  <div className='name'>Luxury Tax</div>
                  <div className='drawing fa fa-diamond'></div>
                  <div className='instructions'>Pay $75.00</div>
                </div>
              </div>
              <Card
                name='Boardwalk'
                index={40}
                pricetext='$400'
                color='dark-blue'
                type='property'
              />
            </div>
          </div>
        </div>
      </GameContextProvider>
    </div>
  );
}

export default App;
