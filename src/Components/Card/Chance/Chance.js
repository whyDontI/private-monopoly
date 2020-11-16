import React, { useContext } from "react";
import Icon from "../../../assets/chance_icon.png";
import { GameContext } from '../../../contexts/context';

const Chance = ({ index }) => {
  const { gameState } = useContext(GameContext);
  return (
    <div className='space chance'>
      <div className='container'>
        <div className='name'>Chance</div>
        <i className='drawing'>
          <img src={Icon} alt='Chance' />
        </i>
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

export default Chance;
