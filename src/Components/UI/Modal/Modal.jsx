import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Aux/Aux';
import { GameContext } from '../../../contexts/context';
import Backdrop from '../Backdrop/Backdrop';

import './Modal.css';

const Modal = ({
  show, modalClosed, cardData, type, children, index,
}) => {
  const { gameState, dispatch } = useContext(GameContext);

  let isCardPurchased = false;
  let receiverName = '';
  let cardPurchasedByPlayerIndex = -1;

  if (gameState.cardsPurchasedBy.length > 0) {
    cardPurchasedByPlayerIndex = gameState.cardsPurchasedBy.findIndex(
      (element) => element.cardIndex === index,
    );
  }

  const handleBuy = () => {
    const oldPlayerData = gameState[gameState.currentPlayerName];
    const gameData = {
      [gameState.currentPlayerName]: {
        ...oldPlayerData,
        balance: oldPlayerData.balance - cardData.price,
        cardsPurchased: [...oldPlayerData.cardsPurchased, cardData],
        turn: false,
      },
      cardsPurchasedBy: [
        ...gameState.cardsPurchasedBy,
        { cardIndex: index, purchasedByPlayer: gameState.currentPlayerName },
      ],
    };
    dispatch({
      type: 'BUY',
      game: gameData,
    });
    modalClosed();
  };

  const payRent = () => {
    const oldPlayerData = gameState[gameState.currentPlayerName];
    const ownerName = gameState.cardsPurchasedBy[cardPurchasedByPlayerIndex].purchasedByPlayer;
    const ownerData = gameState[ownerName];
    const gameData = {
      [gameState.currentPlayerName]: {
        ...oldPlayerData,
        balance: oldPlayerData.balance - cardData.rent1,
        turn: false,
      },
      [ownerName]: {
        ...ownerData,
        balance: ownerData.balance + cardData.rent1,
      },
    };
    dispatch({
      type: 'PAY_RENT',
      game: gameData,
    });
    modalClosed();
  };

  const handlePass = () => {
    const oldPlayerData = gameState[gameState.currentPlayerName];
    const gameData = {
      [gameState.currentPlayerName]: {
        ...oldPlayerData,
        turn: false,
      },
    };
    dispatch({
      type: 'BUY',
      game: gameData,
    });
    modalClosed();
  };

  let modalContent = '';

  if (type === 'chance' || type === 'community') {
    modalContent = (
      <div className="Modal_Content">
        {children}
        <div classNam="Modal_buttons">
          <button type="button" className="" onClick={handlePass}>
            End Turn
          </button>
        </div>
      </div>
    );
  } else {
    modalContent = (
      <div className="Modal_Content">
        <h1>
          $
          {cardData.price}
        </h1>
        <div className="Modal_buttons">
          <button type="button" className="" onClick={handleBuy}>
            Buy
          </button>
          <button type="button" className="" onClick={handlePass}>
            Pass
          </button>
        </div>
      </div>
    );
  }

  if (cardPurchasedByPlayerIndex !== -1 && receiverName !== gameState.currentPlayerName) {
    receiverName = gameState.cardsPurchasedBy[cardPurchasedByPlayerIndex].purchasedByPlayer;
    isCardPurchased = true;
  }

  if (isCardPurchased) {
    modalContent = (
      <div className="Modal_Content">
        <p>
          you have to pay
          {cardData.rent1}
          {' '}
          to
          {gameState.cardsPurchasedBy[cardPurchasedByPlayerIndex].purchasedByPlayer}
        </p>
        <div classNam="Modal_buttons">
          <button type="button" onClick={payRent}>Pay</button>
        </div>
      </div>
    );
  }

  return (
    <Aux>
      <Backdrop show={show} clicked={() => { }} />
      <div
        className="Modal"
        style={{
          transform: show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0',
        }}
      >
        {modalContent}
      </div>
    </Aux>
  );
};

Modal.defaultProps = {
  cardData: {},
  type: 'property',
};

Modal.propTypes = {
  show: PropTypes.string.isRequired,
  cardData: PropTypes.shape({
    price: PropTypes.number,
    rent1: PropTypes.number,
  }),
  type: PropTypes.string,
  children: PropTypes.string.isRequired,
  modalClosed: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default Modal;
