
export default class Menu {
    constructor(document) {
        this.document = document;
        this.i = false;
        this.active = false;
        this.large = window.innerWidth > 600 ? true : false;
        this.scrollBefore = 0;
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
                if (this.active) this.active = false;
                this.document.querySelector('.scroll-menu').classList.remove('open-scroll-menu');
                this.large = true;
                productsMenu.style.display = 'none';
            } else {
                if (this.active) this.active = false;
                this.document.querySelector('.scroll-menu-large-size').classList.remove('open-scroll-menu');
                this.large = false;
                productsMenu.style.display = '';
            }
        })
        
        window.addEventListener("scroll", e => {
            const posicaoy = window.scrollY;
            const scrollUp = this.scrollBefore > posicaoy ? true : false;

            // console.log(window.innerWidth, scrollUp);

            this.scrollBefore = posicaoy; 
            
            // mobile devices
            if (window.innerWidth < 600) {
                if (scrollUp && posicaoy >= 200 && !this.active) {
                    this.document.querySelector('.scroll-menu').classList.add('open-scroll-menu');
                    this.active = true;
                    return;
                } else if (!scrollUp && this.active || posicaoy < 200) {
                    this.document.querySelector('.scroll-menu').classList.remove('open-scroll-menu');
                    this.active = false;
                    return;
                }
                return;
            }
            
            // lerges devices
            if (posicaoy >= 200 && !this.active) {
                this.document.querySelector('.scroll-menu-large-size').classList.add('open-scroll-menu');
                this.active = true;
            } else if (posicaoy < 200 && this.active) {
                this.document.querySelector('.scroll-menu-large-size').classList.remove('open-scroll-menu');
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