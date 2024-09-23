
export default class Menu {
    constructor(document) {
        this.document = document;
        this.i = false;
        this.active = false;
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

            // console.log(posicaoy, this.active);
            
            if (posicaoy >= 500 && !this.active) {
                this.document.querySelector('.scroll-menu').classList.toggle('open-scroll-menu');
                this.active = true;
            } else if (posicaoy < 500 && this.active) {
                this.document.querySelector('.scroll-menu').classList.toggle('open-scroll-menu');
                this.active = false;
            }
          });

        this.document.addEventListener('click', e => {
            const el = e.target;
            
            // Products menu
            if(el.classList.contains('products-page') && window.innerWidth < 600){
                this.document.querySelector('.side-products-list').classList.toggle('open-dropdown-menu');
                this.document.querySelector('.dropdown-menu').classList.toggle('open-dropdown-menu');
                this.document.querySelector('.products-arrow').classList.toggle('up-arrow');
            }

            // Open/close menu
            if(el.classList.contains('btn-menu') || el.classList.contains('close-symbol')) {
                this.document.querySelector('.side-bar').classList.toggle('open-side-bar');
            }
        });
    }
}