import Menu from '../components/menu.js';

function Contact() {
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
      name: 'Sobre',
      link: About,
    })}
    ${Menu({
      name: 'Indique uma peça',
      link: Indicate,
    })}
    </ul> 
  </nav>  
  <section class = "profile-section">
    <h1 class="name-network">Contato</h1>
    <p class="alert-message">Para parcerias, sugestões ou feedbacks, entre em contato por email.</p>
  </section>
</div>
  `;
  return template;
}

function About() {
  window.location.hash = 'about'
};

function Indicate() {
  window.location.hash = 'indicate'
};

function Home() {
  window.location.hash = 'home'
}

export default Contact;
