import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './assets/css/style.css';
import './assets/css/medium-size.css';
import './assets/css/large-size.css';

import Login from './modules/login';
import Contato from './modules/contato';
import Menu from './modules/menu.js';

const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');

const contato = new Contato();
const menu = new Menu(document);

login.init();
cadastro.init();
contato.init();
menu.init();

document.addEventListener('mousemove', e => {
    const el = e.target;

    if(el.classList.contains('alert-success') || el.classList.contains('alert-danger')) {
        setTimeout(() => {
            el.remove();
        }, 3000)};
});

// document.addEventListener('click', e => {
//     if (el.classList.contains('btn-menu')) menu.openMenu();
//     if (el.classList.conatins('close-menu')) menu.closeMenu();
// });