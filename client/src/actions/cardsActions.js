import api from '../api/cardsApi';

export function update(card) {    
  return {type: 'CARD_UPDATED', card}
}

export function getCards() {
  return function(dispatch) {    
    return api.getCards().then(cards => {
      dispatch(getCardsSuccess(cards));
    }).catch(error => {
      throw(error);
    });
  }
}

export function getCardsSuccess(cards) {
  return {type: 'GET_CARDS_SUCCESS', cards}
}