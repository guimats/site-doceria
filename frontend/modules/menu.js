
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

        // window listeners
        window.addEventListener('resize', e => {
            const productsMenu = this.document.querySelector('.dropdown-menu');

            if (window.innerWidth >= 600) {
                productsMenu.style.display = 'none';
            } else {
                productsMenu.style.display = '';
            }
        })
        
        window.addEventListener("scroll", e => {
            const posicaoy = window.scrollY;
            console.log(posicaoy);
            if (posicaoy === 500) console.log('AQUI');
          });

        // Open/close menu
        this.document.querySelector('.btn-menu').addEventListener('click', () => {
            this.document.querySelector('.side-bar').classList.toggle('open-side-bar');
            // this.document.body.classList.toggle('opacity-body');
        })

        this.document.querySelector('.close-symbol').addEventListener('click', () => {
            this.document.querySelector('.side-bar').classList.toggle('open-side-bar');
            // this.document.body.classList.toggle('opacity-body');
        })


        /// Products menu
        this.document.addEventListener('click', e => {
            const el = e.target;
            if(el.classList.contains('products-page') && window.innerWidth < 600){
                this.document.querySelector('.side-products-list').classList.toggle('open-dropdown-menu');
                this.document.querySelector('.dropdown-menu').classList.toggle('open-dropdown-menu');

                this.document.querySelector('.products-arrow').classList.toggle('up-arrow');
            }
        });
    }
}