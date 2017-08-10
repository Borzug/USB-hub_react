export default function cardReducer(state, action) {
  switch(action.type) {
    case 'CARD_UPDATED':
      var cards = state.cards.map((card) => {
        if (card.PortId === action.card.PortId) {
          return action.card;
        }
        return card;
      });
      return Object.assign(
        {},
        { cards }
      );            
    case 'GET_CARDS_SUCCESS':
      return {cards: action.cards};
    default:
      return state;
  }
}