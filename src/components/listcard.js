import Button from '../components/button.js';

function ListCard(props) {
    const template = `
    <li data-id='${props.id}' class="${props.class}" onclick="window.home.showModal('${props.synopsis}')">
    <img class = "card-image"  src="${props.img}">
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

function Buy(e) {
    const option = e.target.dataset.id;
    fetch(`https://open-house-309f5.firebaseio.com/plays.json`)
    .then(response => response.json())
    .then((data) => {
      return data.filter(play => play.ticket_url === option)
    })
    .then((play) => {
        const analytic = {
            theater: play[0].theater_name,
            play_name: play[0].name,
            date: new Date()
        }
        fetch(`https://open-house-309f5.firebaseio.com/analytics.json`, {
            method: 'POST',
            body: JSON.stringify(analytic)
        });
    });
    window.open(`${option}`,'_blank')
}

window.Card = ListCard;
export default ListCard;