import Menu from '../components/menu.js';

function Contact() {
  const template = `
  <div class="template">
  <header class="header"><img class="logo" src="./Imagens/logo.png"></header>
  <input type="checkbox" id="btn-menu"/>
  <label for="btn-back" class="btn-voltar" 
  onClick="window.location.hash = 'home';">&crarr;</label>
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
  <img src="./Imagens/handshake.png" class='handshake-icon'>
    <p class="alert-message">Para parcerias, sugestões ou feedbacks, entre em contato por email.</p>
    <a href='mailto:giovanna.olivelima@gmail.com'>uniteatro@gmail.com</a>
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
