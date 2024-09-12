
export default class Menu {
    constructor(document) {
        this.document = document;
        this.i = false;
    }

    init() {
        this.events();
    }

    events() {
        if(!this.document) return;

        window.addEventListener('resize', e => {

            console.log(window.innerWidth);

            if (window.innerWidth <= 600) {

                const productsMenu = this.document.querySelector('.dropdown-menu');
                productsMenu.style.display = 'none';
            }
        })

        this.document.addEventListener('click', e => {
            const el = e.target;

            console.log(el);

            if (el.classList.contains('btn-menu')) {
                this.openMenu();
            }

            if (el.classList.contains('hidding-btn-close')) {
                this.closeMenu();
            }

            if(el.classList.contains('products-page') && window.innerWidth < 600){
                this.showProducts();
            }
        });
    }

    openMenu() {
        const optionsMenu = this.document.querySelector('.hidding-menu');
        const menuMobile = this.document.querySelector('.menu-mobile');
        const midBar = this.document.querySelector('.mid-bar');
        const topBar = this.document.querySelector('.top-bar')
        const main = this.document.querySelector('main')
        const footer = this.document.querySelector('footer')
        const lines = this.document.querySelectorAll('.lines')
        optionsMenu.style.display = 'flex';
        menuMobile.style.display = 'none';
        midBar.style.display = 'none';
        topBar.style.display = 'none';
        main.style.display = 'none';
        footer.style.display = 'none';
        for (let line of lines) {
            line.style.display = 'none';
        }
        return;
    }

    closeMenu() {
        const optionsMenu = document.querySelector('.hidding-menu');
        const menuMobile = document.querySelector('.menu-mobile');
        const midBar = document.querySelector('.mid-bar');
        const topBar = document.querySelector('.top-bar')
        const main = document.querySelector('main')
        const footer = document.querySelector('footer')
        const lines = document.querySelectorAll('.lines')
        optionsMenu.style.display = 'none';
        menuMobile.style.display = 'block';
        midBar.style.display = 'flex';
        topBar.style.display = 'flex';
        main.style.display = 'block';
        footer.style.display = 'block';
        for (let line of lines) {
            line.style.display = 'block';
        }
        return;
    }

    showProducts() {
        const productsList = this.document.querySelector('.products-list');
        const productsMenu = this.document.querySelector('.dropdown-menu');
        if (this.i == false) {
            productsList.style.display = 'block';
            productsMenu.style.display = 'block';
            this.i = true;
            return;
        }

        productsList.style.display = 'none';
        productsMenu.style.display = 'none';
        this.i = false;
        return
    }
}