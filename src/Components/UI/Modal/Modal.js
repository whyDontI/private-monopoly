import { useContext } from "react";
import { GameContext } from "../../../contexts/context";
import Backdrop from "../Backdrop/Backdrop";
import "./Modal.css";

const Modal = ({
  show,
  modalClosed,
  cardData,
  color
}) => {

  const { gameState, dispatch } = useContext(GameContext);

  const handleBuy = () => {
    let oldPlayerData = gameState[gameState.currentPlayerName]
    let gameData = {
      [gameState.currentPlayerName]: {
        ...oldPlayerData,
        balance: oldPlayerData.balance - cardData.price,
        cardsPurchased: [
          ...oldPlayerData.cardsPurchased,
          cardData
        ],
        turn: false
      }
    }
    dispatch({
      type: 'BUY',
      game: gameData
    })
    modalClosed()
  }

  return (
    <>
      <Backdrop show={show} clicked={() => { }} />
      <div
        className='Modal'
        style={{
          transform: show ? "translateY(0)" : "translateY(-100vh)",
          opacity: show ? "1" : "0",
        }}
      >
        <h1>${cardData.price}</h1>
        <button className="" onClick={handleBuy}>Buy</button>
        <button className="" onClick={modalClosed}>Pass</button>
      </div>
    </>
  );
}

export default Modal;
