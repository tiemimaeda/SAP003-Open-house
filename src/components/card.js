function Card(props) {
    const template = `
    <li data-id=${props.id} class="${props.class}">
      <p class = "card-name">${props.name}</p>
      <img class = "card-image"  src="${props.img}"</img>
      <p class = "card-price">Preço: ${props.price}</p>
      <p class = "card-classification">Classificação: ${props.classification}</p>
      <p class = "card-date">Data: ${props.date}</p>
    </li>
    `;
    return template;
}
window.Card = Card;
export default Card;
