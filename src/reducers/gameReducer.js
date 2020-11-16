function startGame(state, game) {
  const newState = {
    ...state,
    numberOfPlayers: parseInt(game.numberOfPlayers),
    player1: {
      ...state.player1,
      name: game.player1,
      playing: (game.player1 !== '')
    },
    player2: {
      ...state.player2,
      name: game.player2,
      playing: (game.player2 !== '')
    },
    player3: {
      ...state.player3,
      name: game.player3,
      playing: (game.player3 !== '')
    },
    player4: {
      ...state.player4,
      name: game.player4,
      playing: (game.player4 !== '')
    }
  }

  return newState
}

function rollDice(state) {
  let dice1 = Math.floor(Math.random() * 6) + 1
  let dice2 = Math.floor(Math.random() * 6) + 1
  const newState = {
    ...state,
    dice1,
    dice2,
    diceRolledFlag: !state.diceRolledFlag,
    [state.currentPlayerName]: {
      ...state[state.currentPlayerName],
      currentIndex: (state[state.currentPlayerName].currentIndex + dice1 + dice2) % 40
    }
  }
  return newState
}

function incrementPlayerNumber(currentPlayerNumber, maxPlayersAllowed) {
  if (currentPlayerNumber + 1 > maxPlayersAllowed) {
    return 1
  }
  return currentPlayerNumber + 1
}

function buyProperty(state, game) {
  let currentPlayerNumber = incrementPlayerNumber(state.currentPlayerNumber, state.numberOfPlayers)
  let currentPlayerName = `player${currentPlayerNumber}`
  const newState = {
    ...state,
    ...game,
    currentPlayerNumber,
    currentPlayerName,
    [currentPlayerName]: {
      ...state[currentPlayerName],
      turn: true
    }
  }

  return newState
}

export const GameReducer = (state, action) => {
  switch (action.type) {
    case 'START_GAME':
      return startGame(state, action.game)
    case 'ROLL_DICE':
      return rollDice(state)
    case 'BUY':
      return buyProperty(state, action.game)
    default:
      return state
  }
}