import Button from '../components/button.js';
import Input from '../components/input.js';
import Card from '../components/card.js';
import Menu from '../components/menu.js';
import ListCard from '../components/listcard.js';


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
  <div class = main>
  <div class="template">
    <header class="header"><img class="logo" src="./Imagens/Logo.png"></header>
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
    <section>
    <div class='destaque'>
      <h3 class="text-simple">Peças em destaque</h3>
      <div class="highlight"></div>
    </section>
    </div>
    <section>
    <h3 class="text-simple">Todas as peças</h3>
      <div class="search">
      ${Input({
      class: 'input ',
      placeholder: 'Pesquise aqui',
      type: 'text',
      })}
      ${Button({
        id: 'search',
        class:'btnsearch',
        title: '🔎',
        onClick: Search,
      })}
      <select>
      <option value=''>localização</option>
      <option value='zs'>zona sul</option>
      <option value='zn'>zona norte</option>
      <option value='zo'>zona oeste</option>
      <option value='zl'>zona leste</option>
      <option value='center'>centro</option>
      </select>
      ${Input({
        class: 'data ',
        placeholder: '',
        type: 'date',
        })}
      <select>
      <option value=''>valor</option>
      <option value='free'>Gratuito</option>
      <option value='50'>Até R$50,00</option>
      <option value='100'>R$50,00 - R$ 100,00</option>
      <option value='+100'>Acima de R$100,00</option>
      </select>
      </div>
      <div class="all"></div>
    </section>
  </div>
  </div>
  `;
  location.hash = 'home';
  return template;
}

function cards(allData) {
  document.querySelector('.all').innerHTML += `

  ${ListCard({
    name: allData.name,
    img: allData.photo_url,
    price: allData.price,
    classification: allData.parental_raiting,
    date: allData.date .join(', '),
    class: 'listcard',
  })}
  `
}

function Search() {
  const keyWord  = document.querySelector('.input').value;
  fetch('https://open-house-309f5.firebaseio.com/plays.json')
  .then(response => response.json())
  .then(data => {
    const filter  = data.filter((item) => item.name.includes(keyWord)); 
    document.querySelector('.all').innerHTML = '';
    filter.forEach((item) => window.home.cards(item) );
    }
  )
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
  cards
}

export {Home, getTheaterApi} ;

