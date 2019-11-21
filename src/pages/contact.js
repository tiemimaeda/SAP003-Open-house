import Menu from '../components/menu.js';

function Contact() {
  const template = `
  <div class="template">
  <header class="header"><label for="btn-back" class="return btn-voltar" 
  onClick="window.location.hash = 'home';" ><i class="far fa-arrow-alt-circle-left"></i></label><img class="logo" src="./Imagens/logo.png"></header>
  <input type="checkbox" id="btn-menu" class='menu-desktop'/>
  <label for="btn-menu" class="hamburguer-menu menu-desktop"><i class="fas fa-bars"></i></label>
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
    <p class="alert-message text-contact">Para parcerias, sugestões ou feedbacks, entre em contato por email.</p>
    <a href='mailto:giovanna.olivelima@gmail.com' class='email-link'>uniteatro@gmail.com</a>
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
