function startGame(state, game) {
  const newState = {
    ...state,
    playerName: game.playerName,
    difficulty: game.difficulty,
    difficultyFactor: game.difficultyFactor,
    gameStartTime: game.gameStartTime,
    score: 0,
    gameOver: false
  }

  return newState
}

function rollDice(state, game) {
  let dice1 = Math.floor(Math.random() * 6) + 1
  let dice2 = Math.floor(Math.random() * 6) + 1
  const newState = {
    ...state,
    dice1,
    dice2,
    [state.currentPlayerName]: {
      ...state[state.currentPlayerName],
      currentIndex: (state[state.currentPlayerName].currentIndex + dice1 + dice2) % 40
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
    default:
      return state
  }
}