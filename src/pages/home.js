import Button from '../components/button.js';
import Input from '../components/input.js';
import Menu from '../components/menu.js';
import ListCard from '../components/listcard.js';

const getTheaterApi = () => {
  fetch(`https://open-house-309f5.firebaseio.com/plays.json`)
    .then(response => response.json())
    .then((data) => {
      data.map((api) => {
        cards(api);
        return api;
      })
      getTheater();
    }).catch((err) => {
      console.log(err);
    });
}

function Home() {
  const template = `
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
            <a class="nav-link text-white" href="#about" >Sobre <span class="sr-only">(current)</span></a>
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

  <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="../Imagens/carousel/ballet.jpg" alt="First slide">
      <div class="carousel-caption d-none d-md-block">
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../Imagens/carousel/amigas.jpg" alt="Second slide">
    </div>
  </div>
</div>

  <section class='all-plays'>
  <h3 class="text-simple">Todas as peças</h3>
    <form class = 'search-by-name'>
      ${Input({
      class: 'input search-input',
      placeholder: 'Pesquise pelo nome',
      type: 'text',
      })}
      ${Button({
        id: 'search',
        class:'btn-search',
        title: '<i class="fas fa-search"></i>', 
        onClick: Search,
      })}
    </form>   
    <p class='or'> - ou - </p>
    <div class='select-filters'>
      <select class ="filter-location" id='location' onchange = "window.home.filterLocation()">
        <option value='1'>localização</option>
        <option value='zona sul'>zona sul</option>
        <option value='zona norte'>zona norte</option>
        <option value='zona oeste'>zona oeste</option>
        <option value='zona leste'>zona leste</option>
        <option value='centro'>centro</option>
      </select>
      <form class='filter-date' onchange="window.home.filterDate()">
      ${Input({
        class: 'date-input',
        placeholder: '',
        type: 'date',
        })}
      </form>
      <select id="price" class='filter-value' onchange="window.home.filterPrice()">
        <option value='Vai dar certo'>valor</option>
        <option value='Gratuito'>Gratuito</option>
        <option value='R$50,00'>Até R$50,00</option>
        <option value='R$100,00'>Até R$100,00</option>
        <option value='R$100,01'>Acima de R$100,00</option>
        </select>
    </div>
    <article class="all list-plays"></article>
  </section>
  <section class='partners'>
    <p class='partners-title'>Parceiros:</p>
    <article class='partners-container'>
      <img class='image-partner' src='https://www.macunaima.com.br/wp-content/themes/macunaima/images/logo-2015.png'>
      <img class='image-partner' src='https://www.teatrobradesco.com.br/img/logoTeatroBradescoRodape.png'> 
      <img class='image-partner' src='http://teatroprocopioferreira.com.br/wp-content/uploads/2017/06/logo-teatro-procopio-1.png'>
      <img class='image-partner' src='https://m.sescsp.org.br/Content/img/logo.png'>
      <img class='image-partner' src='https://logodownload.org/wp-content/uploads/2018/10/sympla-logo-3.png'>
      <img class='image-partner' src='https://logodownload.org/wp-content/uploads/2017/11/tv-cultura-logo-6.png'>
    </article>
  </section>
  <div id="myModal" class="modal">
    <div class="modal-content">
      <p class = "modal-name"></p>
      ${Button({
        id: 'close',
        class:'btn-close',
        title: '&times', 
        onClick: closeModal,
      })}
      <p class="card-sinopse"></p>
    </div>
  </div>
  `;
  location.hash = 'home';
  return template;
}

function sendClicksAnalitycs(){
  const analitycs = {}
  theater

  fetch('https://open-house-309f5.firebaseio.com/analitycs.json',{
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

function cards(allData) {
  document.querySelector('.all').innerHTML += `
    ${ListCard({
      id: allData.ticket_url, 
      class: 'listcard',
      img: allData.photo_url,
      name: allData.name,
      price: allData.price,
      classification: allData.parental_raiting,
      theater: allData.theater_name,
      synopsis: allData.synopsis
    })}
  `
}

function filterPrice() {
  document.querySelector('.all').innerHTML = '';
  const option = document.querySelector('#price').value;
  fetch('https://open-house-309f5.firebaseio.com/plays.json')
    .then(response => response.json())
    .then(data => {
      data.map((item) => {
        if (option == item.price ) {
          window.home.cards(item) ;
        }
        else if (option == "R$50,00" && 50 > parseInt(item.price.replace(/\D/g,''))/100) {
            window.home.cards(item);
        }
        else if (option == "R$100,00" && 100 >= parseInt(item.price.replace(/\D/g,''))/100){
          window.home.cards(item);
        }
        else if (option == "R$100,01" && 101 < parseInt(item.price.replace(/\D/g,''))/100) {
          window.home.cards(item);
        }
      })
    })

}

function filterLocation() {
  document.querySelector('.all').innerHTML = '';
  const options = document.querySelector('#location').value;
  fetch('https://open-house-309f5.firebaseio.com/plays.json')
    .then(response => response.json())
    .then(data => {
      data.map((locations) => {        
        if (options == locations.theater_zone) {
          window.home.cards(locations)
        } 
      }
    )
  })
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
  );
}

function filterDate() {
  document.querySelector('.date-input').innerHTML = '';
  document.querySelector('.all').innerHTML = '';
  const dateFilter = document.querySelector('.date-input').value;
  const d = new Date(dateFilter)
  const date = d.getDate()+1;
  const month = d.getMonth()+1;
  const year = d.getFullYear();
  const dateResult = date + "/" + month + "/" + year;

  fetch('https://open-house-309f5.firebaseio.com/plays.json')
  .then(response => response.json())
    .then(data => {
      data.map((item) => {
        if(item.date.includes(dateResult)){
          window.home.cards(item)
        }})
    })
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

function showModal(sinopse) {
  const modal = document.querySelector('#myModal');
  document.querySelector('.card-sinopse').innerHTML = sinopse;
  if (modal) {
      modal.style.display = 'block';
  }
}

function closeModal() {
  document.querySelector('#myModal').style.display = 'none';
}


window.home = {
  cards, 
  filterPrice,
  filterLocation,
  filterDate,
  showModal,
}

export {Home, getTheaterApi} ;


