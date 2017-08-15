import api from '../api/cardsApi';

export function update(card) {    
  return {type: 'CARD_UPDATED', card}
}

export function getCards() {
  return function(dispatch) {    
    return api.getCards().then(cards => {
      dispatch(getCardsSuccess(cards));
    }).catch(error => {
      dispatch(getCardsFailed(error));
    });
  }
}

export function getCardsFailed(error) {
  return {type: "GET_CARDS_ERROR", error}
}

export function getCardsSuccess(cards) {
  return {type: 'GET_CARDS_SUCCESS', cards}
}