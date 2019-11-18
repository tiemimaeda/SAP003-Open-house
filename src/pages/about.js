import Menu from '../components/menu.js';

function AboutUs() {
  const template = `
  <div class="template">
  <header class="header"><img class="logo" src="./Imagens/Logo.png"></header>
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
      <h1 class="name-network">Quem nós somos?</h1>
      <h3 class="text-simple">Missão</h3>
      <p class="alert-message">Facilitar a divulgação de peças e espetáculos gratuitos e pagos de diversas companhia teatrais, de forma simples e transparente</p>
      <h3 class="text-simple">Visão</h3>
      <p class="alert-message">Aumentar o número de pessoas que frequentam teatro</p>
      <h3 class="text-simple">Valores</h3>
      <p class="alert-message">Incentivar a cultura em todas as camadas sociais</p>
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