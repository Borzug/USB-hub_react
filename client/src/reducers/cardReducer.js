import initialState from '../store/initialState';

export default function cards(state = initialState.cards, action) {
  switch(action.type) {
    case 'CARD_UPDATED':    
      var cards = state.map((card) => {
        if (card.PortId === action.card.PortId) {
          return action.card;
        }
        return card;
      });
      return cards;
    case 'GET_CARDS_SUCCESS':    
      return action.cards;
    default:
      return state;
  }
}