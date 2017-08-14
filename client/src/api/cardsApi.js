function getCards() {
  return fetch("http://localhost:8080/cards").then((response) => response.json());
}

export default {getCards};