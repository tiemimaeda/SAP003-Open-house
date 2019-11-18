import Home from './pages/home.js';
import AboutUs from './pages/about.js';
import Contact from './pages/contact.js';
import Indicate from './pages/indicate.js';

function routesPage() {
  const main = document.querySelector('main')
  switch (location.hash) {
    case "#home":
      main.innerHTML = Home();
      break;
    case "#about":
      main.innerHTML = AboutUs();
      break;
    case "#contact":
      main.innerHTML = Contact();
      break;
    case "#indicate":
      main.innerHTML = Indicate();
      break;
    default:
      main.innerHTML = Home();
  }
}

window.addEventListener('hashchange', routesPage, false);
window.addEventListener('load', routesPage, false);