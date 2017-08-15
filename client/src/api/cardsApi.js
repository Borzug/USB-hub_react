function getCards() {
  return fetch("http://localhost:8080/cards")
  .then(response => {
    if (!response.ok) {      
      throw response.statusText;
    }
    return response.json();    
  })  
}

export default {getCards};