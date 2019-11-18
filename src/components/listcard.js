function ListCard(props) {
    const template = `
    <li data-id=${props.id} class="${props.class}">
    <img class = "card-image"  src="${props.img}"</img>
    <p class = "card-name">${props.name}</p>
    <p class = "card-price">Preço: ${props.price}</p>
    <p class = "card-classification">Classificação: ${props.classification}</p>
    <p class = "card-date">Data: ${props.date}</p>
    </li>
    `;
    return template;
}
window.Card = ListCard;
export default ListCard;
