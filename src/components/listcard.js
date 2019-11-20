import Button from '../components/button.js';

function ListCard(props) {
    const template = `
    <li data-id='${props.id}' class="${props.class}">
    <img class = "card-image" src="${props.img}">
    <div class="card-info">
    <p class = "card-name">${props.name}</p>
    <div class=info>
    <p class = "card-theatre"><i class="location-icon fas fa-map-marker-alt"></i>   ${props.theater}</p>
    <img class = "card-classification" src='../Imagens/parental-raiting-icons/${props.classification}.png'>
    <div class='footer-info'>
    <p class = "card-price">${props.price}</p>
    ${Button({
        id: props.id,
        class:'btn-buy',
        title: 'Comprar',
        onClick: Buy,
    })}
    </div>
    </div>
    </div>
    </li>
    `;  
    return template;
}

function Buy(e){
    const option = e.target.dataset.id;
    // window.location.href = `${option}`
    window.open(`${option}`,'_blank')
}

window.Card = ListCard;
export default  ListCard;