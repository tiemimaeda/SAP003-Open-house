import Button from '../components/button.js';
import Input from '../components/input.js';
import Menu from '../components/menu.js';

function Indicate() {
  const template = `
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
          <a class="nav-link text-white" href="#about">Sobre</a>
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
    <section class = "register-section">
    <div class='text-description-indicate'>
      <h3 class="text-indicate">Conhece ou participa de um espetáculo que ainda não está no site?</h3>
      <h4 class="text-indicate send-message">Envie para nós!</h4>
    </div>
      <form class="forms">
        <label class='title-indicate'>Nome da peça :</label>      
        ${Input({
        class: 'name-input input-indicate',
        placeholder: 'Peça 1',
        value:'',
        type: 'text',
        })}
        <label class='title-indicate'>Nome da companhia:</label> 
        ${Input({
        class: 'job-input input-indicate',
        placeholder: 'Teatro 1',
        value:'',
        type: 'text',
        })}
        <label class='title-indicate'>Contato :</label> 
        ${Input({
        class: 'email-input input-indicate',
        placeholder:'exemplo@seudomínio.com',
        value:'',
        type: 'text',
        })}
        <label class='title-indicate'>Data da peça :</label> 
        ${Input({
        class: 'birth-date-input input-indicate',
        placeholder: '',
        value:'',
        type: 'date',
        })}
      <p class="alert-message"></p>
          ${Button({
        id: 'btncreate-count',
        class:' button-send-green',
        title: 'Enviar',
        onClick: sendIndicate,
      })}
    </form>
  </section>
  `;
  return template;
}

function sendIndicate() {
  const form = {}
  form.name = document.querySelector('.name-input').value;
  form.cia = document.querySelector('.job-input').value;
  form.contact = document.querySelector('.email-input').value;
  form.date = document.querySelector('.birth-date-input').value;
  fetch('https://open-house-309f5.firebaseio.com/referrals.json',{
    method: 'POST',
    body: JSON.stringify(form)
  })
    .then(res => res.json())
    .then(() => { Swal.fire(
      'Formulário enviado',
      'obrigada!',
      'success'
    )})

}

function About() {
  window.location.hash = 'about'
};

function Contact() {
  window.location.hash = 'contact'
};

function Home() {
  window.location.hash = 'home'
}

export default Indicate;
