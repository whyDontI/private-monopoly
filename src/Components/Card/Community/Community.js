import React, { useContext } from "react";
import Icon from "../../../assets/community_chest_icon.png";
import { GameContext } from "../../../contexts/context";

const Community = ({ index }) => {
  const { gameState } = useContext(GameContext);
  return (
    <div className='space community-chest'>
      <div className='container'>
        <div className='name'>Community Chest</div>
        <img src={Icon} alt='Community Chest' />
        <div className='instructions'>Follow instructions on top card</div>
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

export default Community;
