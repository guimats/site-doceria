
export default class Menu {
    constructor(document) {
        this.document = document
    }

    init() {
        this.events();
    }

    events() {
        if(!this.document) return;
        this.document.addEventListener('click', e => {
            const el = e.target;
            if (el.classList.contains('btn-menu')) {
                this.openMenu();
            }

            if (el.classList.contains('hidding-btn-close')) {
                this.closeMenu();
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
    }
}