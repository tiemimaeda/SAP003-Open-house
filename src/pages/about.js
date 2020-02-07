import Menu from '../components/menu.js';

function AboutUs() {
  const template = `
  <div class="template">
  <header class="header">
  <img class="logo" src="./Imagens/logo.png">
  <!--Navbar-->
  <nav class="navbar navbar-light amber lighten-4 mb-4">
  
    <!-- Navbar brand -->
    
  
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
          <a class="nav-link text-white" href="#contact">Contato</a>
        </li>
      </ul>
      <!-- Links -->
  
    </div>
    <!-- Collapsible content -->
  
  </nav>
  <!--/.Navbar-->

</header> 
    <section class = "aboutUs">
      <div class='about-us-container'>
        <div class='about-us-info'>
          <h1 class="name-network">Quem somos?</h1>
          <h3 class="title-about-us">Missão</h3>
          <p class="alert-message">Facilitar a divulgação de peças e espetáculos gratuitos e pagos de diversas companhias teatrais, de forma simples e transparente</p>
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
  window.location.hash = 'contact'
};

export default AboutUs;