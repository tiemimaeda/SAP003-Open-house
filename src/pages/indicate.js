import Button from '../components/button.js';
import Input from '../components/input.js';
import Menu from '../components/menu.js';

function Indicate() {
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
      name: 'Contato',
      link: Contact,
    })}
    </ul> 
  </nav>  
    <section class = "register-section">
    <div class='text-description-indicate'>
      <h3 class="text-indicate">Conhece ou participa de um expetáculo que ainda não está no site?</h3>
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
        <label class='title-indicate'> nome da companhia:</label> 
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
</div>
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
