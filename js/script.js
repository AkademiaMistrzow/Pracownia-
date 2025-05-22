const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menuContact = document.querySelector('#menu-contact');
const menuOmnie = document.querySelector('#menu-omnie');
const menuOferta = document.querySelector('#menu-oferta');
const menuCennik = document.querySelector('#menu-cennik');
const menuOnline = document.querySelector('#menu-online');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

menuContact.addEventListener('click', () => {
    if (window.innerWidth < 800) {
        close();
    }
});

menuOmnie.addEventListener('click', () => {
    if (window.innerWidth < 800) {
        close();
    }
});

menuOferta.addEventListener('click', () => {
    if (window.innerWidth < 800) {
        close();
    }
});

menuCennik.addEventListener('click', () => {
    if (window.innerWidth < 800) {
        close();
    }
});

menuOnline.addEventListener('click', () => {
    if (window.innerWidth < 800) {
        close();
    }
});

function show() {
    mainMenu.style.display = 'flex';
}

function close() {
    mainMenu.style.display = 'none';
}
