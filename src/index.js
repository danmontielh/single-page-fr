import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { header } from "./components/header.js";
import contact from "./components/contact.js";
import homePage from './components/home.js'
import { renderPage, menuListener } from "./components/helper.js";
import about from "./components/about.js";
import "./style.css";

// Set Header
header();


// get div's
const app = document.getElementById("body");
const menu = Array.from(document.getElementsByTagName("a"));


//render Home Page
renderPage(app, homePage);

// Navegation Handler Function.
//If you want add new tab, you just need create a file on componets folder, export the template function into this file and set into this function handler.
const handleNavegation = $event => {
  if ($event.target.innerText == "Contact") {
    renderPage(app, contact);
  } else if ($event.target.innerText == "About") {
    renderPage(app, about);
  } else {
    renderPage(app, homePage);;
  }
};

//Handler click user
menuListener(menu, handleNavegation);
