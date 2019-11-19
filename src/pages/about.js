import Menu from '../components/menu.js';

function AboutUs() {
  const template = `
  <div class="template">
  <header class="header"><img class="logo" src="./Imagens/logo.png"></header>
  <input type="checkbox" id="btn-menu"/>
  <label for="btn-menu">&#9776;</label>
  <nav class="menu">
    <ul>
    ${Menu({
      name: 'Home',
      link: Home,
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
    <section class = "aboutUs">
    <div class='about-us-container'>
    <div class='about-us-info'>
      <h1 class="name-network">Quem somos?</h1>
      <h3 class="title-about-us">Missão</h3>
      <p class="alert-message">Facilitar a divulgação de peças e espetáculos gratuitos e pagos de diversas companhia teatrais, de forma simples e transparente</p>
      <h3 class="title-about-us">Visão</h3>
      <p class="alert-message">Aumentar o número de pessoas que frequentam teatro</p>
      <h3 class="title-about-us">Valores</h3>
      <p class="alert-message">Incentivar a cultura em todas as camadas sociais</p>
    </div>
    </div>
      </section>
  </div>
  `;
  return template;
}

function Home() {
  window.location.hash = 'home'
}

function Indicate() {
  window.location.hash = 'indicate'
};

function Contact() {
  window.location.hash = 'home'
};

export default AboutUs;