import { useState, useContext } from 'react'
import { GameContext } from '../../../contexts/context';

import diceNumber1 from '../../../assets/Die_1.png';
import diceNumber2 from '../../../assets/Die_2.png';
import diceNumber3 from '../../../assets/Die_3.png';
import diceNumber4 from '../../../assets/Die_4.png';
import diceNumber5 from '../../../assets/Die_5.png';
import diceNumber6 from '../../../assets/Die_6.png';
import './Dice.css'

const Dice = () => {
  const { dispatch, gameState } = useContext(GameContext)
  // const [state, setState] = useState({
  //   showDice: false
  // })

  const randomDice = (value) => {
    let result
    switch (value) {
      case (1):
        result = (<img src={diceNumber1} alt="" className="" />)
        break;

      case (2):
        result = (<img src={diceNumber2} alt="" className="" />)
        break;

      case (3):
        result = (<img src={diceNumber3} alt="" className="" />)
        break;

      case (4):
        result = (<img src={diceNumber4} alt="" className="" />)
        break;

      case (5):
        result = (<img src={diceNumber5} alt="" className="" />)
        break;

      case (6):
        result = (<img src={diceNumber6} alt="" className="" />)
        break;

      default:
        result = ''
        break;
    }
    return result
  }

  function handleRandomDice() {
    dispatch({
      type: 'ROLL_DICE'
    })
  }

  function showDice() {
    const dice1 = gameState.dice1
    const dice2 = gameState.dice2

    return (
      <div className="dice">
        {randomDice(dice1)}
        {randomDice(dice2)}
      </div>
    )
  }

  return (
    <div className="diceContainer">
      {showDice()}
      <button onClick={handleRandomDice}>Roll Dice</button>
    </div>
  )
}

export default Dice