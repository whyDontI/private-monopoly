import React, { createContext, useReducer } from 'react';
import { GameReducer } from '../reducers/gameReducer'

export const GameContext = createContext();

const GameContextProvider = (props) => {
  const [gameState, dispatch] = useReducer(GameReducer, {
    player1: {
      playing: false,
      name: '',
      balance: 1500,
      propertyCounts: {
        red: 0,
        yellow: 0,
        orange: 0,
        pink: 0,
        lightBlue: 0,
        darkBlue: 0,
        railRoads: 0,
        utilities: 0
      },
      cardsPurchased: [],
      currentIndex: 1,
    },
    player2: {
      playing: false,
      name: '',
      balance: 1500,
      propertyCounts: {
        red: 0,
        yellow: 0,
        orange: 0,
        pink: 0,
        lightBlue: 0,
        darkBlue: 0,
        railRoads: 0,
        utilities: 0
      },
      cardsPurchased: [],
      currentIndex: 1,
    },
    player3: {
      playing: false,
      name: '',
      balance: 1500,
      propertyCounts: {
        red: 0,
        yellow: 0,
        orange: 0,
        pink: 0,
        lightBlue: 0,
        darkBlue: 0,
        railRoads: 0,
        utilities: 0
      },
      cardsPurchased: [],
      currentIndex: 1,
    },
    player4: {
      playing: false,
      name: '',
      balance: 1500,
      propertyCounts: {
        red: 0,
        yellow: 0,
        orange: 0,
        pink: 0,
        lightBlue: 0,
        darkBlue: 0,
        railRoads: 0,
        utilities: 0
      },
      cardsPurchased: [],
      currentIndex: 1,
    },
    dice1: 0,
    dice2: 0,
    currentPlayer: 1,
    numberOfPlayers: 2
  });

  return (
    <GameContext.Provider value={{ gameState, dispatch }}>
      {props.children}
    </GameContext.Provider>
  );
}

export default GameContextProvider;