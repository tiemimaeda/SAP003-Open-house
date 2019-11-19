import Button from '../components/button.js';
import Input from '../components/input.js';
import Card from '../components/card.js';
import Menu from '../components/menu.js';
import ListCard from '../components/listcard.js';

window.onload = () => {
  getTheaterApi();
/*   Home();
  cards(); */

  
  }
  const getTheaterApi = () => {
    fetch(`https://open-house-309f5.firebaseio.com/plays.json`)
    .then(response => response.json())
    .then((data) => {
      data.map(api => {
        let allData = api;
        cards(allData)
      })
    })
  }



function Home() {
  const template = `
  <div class="template">
  <header class="header"><img class="logo" src="./Imagens/logo.png"></header>
  <input type="checkbox" id="btn-menu" />
  <label for="btn-menu" class="hamburguer-menu">&#9776;</label>
  <nav class="menu">
  <ul>
  ${Menu({
    name: 'Sobre',
    link: About,
  })}
  ${Menu({
    name: 'Indique uma peça',
    link: Indicate,
  })}
  ${Menu({
    name: 'Contato',
    link: Contact,
  })}
  </ul> 
  </nav>
  <div class = 'main'>
  <section>
    <div class='destaque'>
      <h3 class="text-simple"> ⭐ Peças em destaque ⭐</h3>
      <div class='caroussel'></div>
    </div>
  </section>
  <div class='all-plays'>
  <section>
    <h3 class="text-simple">Todas as peças</h3>
      <div class="search">
      <div class = 'search-by-name'>
        ${Input({
        class: 'input search-input',
        placeholder: 'Pesquise pelo nome',
        type: 'text',
        })}
        ${Button({
          id: 'search',
          class:'btn-search',
          title: '🔎', 
          onClick: Search,
        })}
      </div>
      <p class='or'> -ou- </p>
      <div class='select-filters'>
      <select class='filter-location'>
      <option value=''>localização</option>
      <option value='zs'>zona sul</option>
      <option value='zn'>zona norte</option>
      <option value='zo'>zona oeste</option>
      <option value='zl'>zona leste</option>
      <option value='center'>centro</option>
      </select>
      <div class='filter-date'>
      ${Input({
        class: 'date-input',
        placeholder: '',
        type: 'date',
        })}
        </div>
        <select class='filter-value'>
      <option value=''>valor</option>
      <option value='free'>Gratuito</option>
      <option value='50'>Até R$50,00</option>
      <option value='100'>R$50,00 - R$ 100,00</option>
      <option value='+100'>Acima de R$100,00</option>
      </select>
      </div>
      <div class='list-plays'>
        <div class='teste'></div>
      </div>
      </div>
    </section>
  </div>
  </div>
  </div>
  `;
  location.hash = 'home';
  return template;
}

function cards(allData) {
  document.querySelector('.teste').innerHTML += `
  
  ${ListCard({
    class: 'listcard',
    img: allData.photo_url,
    name: allData.name,
    price: allData.price,
    classification: allData.parental_raiting,
    theater: allData.theater_name,
  })}
  `
}

function Search() {
  console.log('pesquisar ok')
}

function About() {
  window.location.hash = 'about'
};

function Indicate() {
  window.location.hash = 'indicate'
};

function Contact() {
  window.location.hash = 'contact'
};

window.home = {
  cards,
}

export default Home;
