import Menu from '../components/menu.js';

function Contact() {
  const template = `
  <div class="template">
  <header class="header">
  <img class="logo" src="./Imagens/logo.png">

  <!--Navbar-->
  <nav class="navbar navbar-light amber lighten-4 mb-4">
  
    <!-- Collapse button -->
    <button class="navbar-toggler first-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent20"
      aria-controls="navbarSupportedContent20" aria-expanded="false" aria-label="Toggle navigation">
      <div class="animated-icon1"><span></span><span></span><span></span></div>
    </button>
  
    <!-- Collapsible content -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent20">
  
      <!-- Links -->
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link text-white" href="#home">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#indicate">Indique uma Peça</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#about">Sobre</a>
        </li>
      </ul>
      <!-- Links -->
  
    </div>
    <!-- Collapsible content -->
  
  </nav>
  <!--/.Navbar-->

</header>
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
