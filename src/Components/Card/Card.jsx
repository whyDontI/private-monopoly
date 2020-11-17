import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from '../UI/Modal/Modal';
import { GameContext } from '../../contexts/context';
import Icon from '../../assets/train_icon.png';
import ElectricIcon from '../../assets/electric_icon.png';
import WaterIcon from '../../assets/water_icon.png';
import ChanceIcon from '../../assets/chance_icon.png';
import CommunityIcon from '../../assets/community_chest_icon.png';

const gameBlocks = require('../../data/gameBlocks.json');
const chanceCards = require('../../data/chanceCards.json');
const communityCards = require('../../data/communityCards.json');

const Card = ({
  color, type, index,
}) => {
  const { gameState } = useContext(GameContext);
  const { name, pricetext } = gameBlocks[index - 1];

  const [showModal, setShowModal] = useState(false);

  const playerOnCard = () => {
    const {
      player1, player2, player3, player4,
    } = gameState;
    return (
      (player1.turn && player1.currentIndex === index)
      || (player2.turn && player2.currentIndex === index)
      || (player3.turn && player3.currentIndex === index)
      || (player4.turn && player4.currentIndex === index)
    );
  };

  const handleModalClosed = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (playerOnCard()) {
      setShowModal(true);
    }

    return () => {
      setShowModal(false);
    };
  }, [gameState.diceRolledFlag]);

  const randomChanceIndex = Math.floor(Math.random() * 16) + 1;
  const randomCommunityIndex = Math.floor(Math.random() * 16) + 1;
  let modalContent = '';

  if (type === 'chance') {
    modalContent = chanceCards[randomChanceIndex - 1];
  } else if (type === 'community') {
    modalContent = communityCards[randomCommunityIndex - 1];
  } else {
    modalContent = '';
  }

  return (
    <>
      {showModal && (
        <Modal
          show={showModal}
          modalClosed={handleModalClosed}
          cardData={gameBlocks[index - 1]}
          color={color}
          type={type}
        >
          {modalContent}
        </Modal>
      )}
      <div className={['space', type].join(' ')}>
        <div className="container">
          {color !== '' && (
            <div className={['color-bar', color].join(' ')} />
          )}
          <div className="name">{name}</div>
          {type === 'railroad' ? (
            <i>
              <img src={Icon} alt="railroad" />
            </i>
          ) : null}
          {type === 'utility electric' ? (
            <i>
              <img src={ElectricIcon} alt="electric" />
            </i>
          ) : null}
          {type === 'utility waterworks' ? (
            <i>
              <img src={WaterIcon} alt="waterWorks" />
            </i>
          ) : null}
          {type === 'chance' ? (
            <i>
              <img src={ChanceIcon} alt="chance" />
            </i>
          ) : null}
          {type === 'community' ? (
            <i>
              <img src={CommunityIcon} alt="community" />
            </i>
          ) : null}
          {pricetext !== '' && <div className="price">{pricetext}</div>}

          <div className="playerContainer">
            {gameState.player1.playing && gameState.player1.currentIndex === index && (
              <div className="player1">player1</div>
            )}
            {gameState.player2.playing && gameState.player2.currentIndex === index && (
              <div className="player2">player2</div>
            )}
            {gameState.player3.playing && gameState.player3.currentIndex === index && (
              <div className="player3">player3</div>
            )}
            {gameState.player4.playing && gameState.player4.currentIndex === index && (
              <div className="player4">player4</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

Card.defaultProps = {
};

Card.propTypes = {
  color: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Card;
