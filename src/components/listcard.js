import Button from '../components/button.js';

function ListCard(props) {
    const template = `
    <li data-id='${props.id}' class="${props.class}" onclick="window.home.showModal('${props.synopsis}')">
    <img class = "card-image"  src="${props.img}">
    <div class="card-info">
    <p class = "card-name">${props.name}</p>
    <p class = "card-price">Preço: ${props.price}</p>
    <p class = "card-classification">Classificação: ${props.classification}</p>
    <p class = "card-theatre">Teatro: ${props.theater}</p>
    </div>
    <div class='buy'>
    ${Button({
        id: props.id,
        class:'btn-buy',
        title: 'Comprar',
        onClick: Buy,
      })}
    </div>
    </li>
    `;
    return template;
}

function Buy(e) {
    const option = e.target.dataset.id;
    window.location.href = `${option}`
}

window.Card = ListCard;
export default ListCard;