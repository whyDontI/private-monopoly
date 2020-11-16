import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { GameContext } from "../../contexts/context";

const Card = ({ name, pricetext, color, groupNumber, type, index }) => {
  const { gameState } = useContext(GameContext);

  const [state, setState] = useState({ showModal: false });

  return (
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
  );
};

Card.defaultProps = {
  name: "",
  pricetext: "",
  color: "",
  groupNumber: "",
  type: "",
  index: 1,
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  pricetext: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  groupNumber: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Card;
