import { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Modal from '../UI/Modal/Modal'
import { GameContext } from "../../contexts/context";
const gameBlocks = require('../../data/gameBlocks.json')

const Card = ({ color, groupNumber, type, index }) => {
  const { gameState } = useContext(GameContext);
  const {
    name,
    pricetext
  } = gameBlocks[index - 1]

  const [showModal, setShowModal] = useState(false);

  const playerOnCard = () => {
    const {
      player1,
      player2,
      player3,
      player4
    } = gameState
    return (
      (player1.turn && player1.currentIndex === index) ||
      (player2.turn && player2.currentIndex === index) ||
      (player3.turn && player3.currentIndex === index) ||
      (player4.turn && player4.currentIndex === index)
    )
  }

  const handleModalClosed = () => {
    setShowModal(false)
  }

  useEffect(() => {
    if (playerOnCard()) {
      setShowModal(true)
    }

    return (() => {
      setShowModal(false)
    })
  }, [gameState.diceRolledFlag])

  return (
    <>
      { showModal && <Modal show={showModal} modalClosed={handleModalClosed} cardData={gameBlocks[index - 1]} color={color} />}
      <div className={["space", type].join(" ")}>
        <div className='container'>
          {color !== "" && <div className={["color-bar", color].join(" ")}></div>}
          <div className='name'>{name}</div>
          {pricetext !== "" && <div className='price'>{pricetext}</div>}

          <div className='playerContainer'>
            {gameState.player1.playing &&
              gameState.player1.currentIndex === index && (
                <div className='player1'>player1</div>
              )}
            {gameState.player2.playing &&
              gameState.player2.currentIndex === index && (
                <div className='player2'>player2</div>
              )}
            {gameState.player3.playing &&
              gameState.player3.currentIndex === index && (
                <div className='player3'>player3</div>
              )}
            {gameState.player4.playing &&
              gameState.player4.currentIndex === index && (
                <div className='player4'>player4</div>
              )}
          </div>
        </div>
      </div>
    </>
  );
};

Card.defaultProps = {
  pricetext: "",
  color: "",
  groupNumber: "",
  type: "",
  index: 1,
};

Card.propTypes = {
  pricetext: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  groupNumber: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Card;
