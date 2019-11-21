function Card(props) {
    const template = `
    <li data-id=${props.id} class="${props.class}">
    <img class = "card-image"  src="${props.img}">
      <p class = "card-name">${props.name}</p>
    </li>
    `;
    return template;
}
window.Card = Card;
export default Card;
