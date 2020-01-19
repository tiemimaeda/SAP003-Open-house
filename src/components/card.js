function Card(props) {
    const template = `
    <li data-id=${props.id} class="${props.class}"  onclick="window.home.showModal('<strong>Sinopse: </strong>${props.synopsis}')">
    <img class = "card-image"  src="${props.img}">
      <p class = "card-name">${props.name}</p>
    </li>
    `;

    
    return template;
}

window.Card = Card;
export default Card;
