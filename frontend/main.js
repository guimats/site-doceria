import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './assets/css/style.css';
import './assets/css/medium-size.css';
import './assets/css/large-size.css';
import './assets/css/nav-social.css';
import './assets/css/nav-side.css';
import './assets/css/nav-scroll.css';
import './assets/css/background-menu.css';
import './assets/css/about-us/style.css';
// import './assets/css/swiper.css';

import Menu from './modules/menu.js';
// import './modules/swiper.js';

const menu = new Menu(document);

menu.init();

// document.addEventListener('mousemove', (e) => {
//   const el = e.target;

//   if (
//     el.classList.contains('alert-success') ||
//     el.classList.contains('alert-danger')
//   ) {
//     setTimeout(() => {
//       el.remove();
//     }, 3000);
//   }
// });

// document.addEventListener('click', e => {
//     if (el.classList.contains('btn-menu')) menu.openMenu();
//     if (el.classList.conatins('close-menu')) menu.closeMenu();
// });
