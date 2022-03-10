export default function dataReducer(state, action) {
  switch (action.type) {
    case "setPlayerID": {
      return {
        ...state,
        myPlayer: { ...state.myPlayer, id: action.data.id },
      };
    }
    case "setPlayerPos": {
      return {
        ...state,
        myPlayer: { ...state.myPlayer, x: action.data.x, y: action.data.y },
      };
    }
    case "setPlayers":
      return { ...state, players: action.data };
    default:
      return { ...state };
  }
}
