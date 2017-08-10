function getCards() {
  return fetch("http://localhost:8080/").then((response) => response.json());
}

export default {getCards};