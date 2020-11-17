import { useContext } from "react";
import { GameContext } from "../../../contexts/context";
import Backdrop from "../Backdrop/Backdrop";
import "./Modal.css";

const Modal = ({ show, modalClosed, cardData, type, children }) => {
  const { gameState, dispatch } = useContext(GameContext);

  const handleBuy = () => {
    let oldPlayerData = gameState[gameState.currentPlayerName];
    let gameData = {
      [gameState.currentPlayerName]: {
        ...oldPlayerData,
        balance: oldPlayerData.balance - cardData.price,
        cardsPurchased: [...oldPlayerData.cardsPurchased, cardData],
        turn: false,
      },
    };
    dispatch({
      type: "BUY",
      game: gameData,
    });
    modalClosed();
  };

  const handlePass = () => {
    let oldPlayerData = gameState[gameState.currentPlayerName];
    let gameData = {
      [gameState.currentPlayerName]: {
        ...oldPlayerData,
        turn: false,
      },
    };
    dispatch({
      type: "BUY",
      game: gameData,
    });
    modalClosed();
  };

  let buttonContent = "";

  if (type === "chance" || type === "community") {
    buttonContent = (
      <button className='' onClick={handlePass}>
        End Turn
      </button>
    );
  } else {
    buttonContent = (
      <>
        <h1>${cardData.price}</h1>
        <button className='' onClick={handleBuy}>
          Buy
        </button>
        <button className='' onClick={handlePass}>
          Pass
        </button>
      </>
    );
  }

  return (
    <>
      <Backdrop show={show} clicked={() => {}} />
      <div
        className='Modal'
        style={{
          transform: show ? "translateY(0)" : "translateY(-100vh)",
          opacity: show ? "1" : "0",
        }}
      >
        {children}
        {buttonContent}
      </div>
    </>
  );
};

export default Modal;
