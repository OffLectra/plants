const menu = document.querySelector('.burger-block');
const menuBtn = document.querySelector('.menu-icon');
const fade = document.querySelector('.burger-bg');

const span = document.querySelector('span');

const one = document.querySelector('span.one');
const two = document.querySelector('span.two');
const three = document.querySelector('span.three');
const four = document.querySelector('span.four');

const body = document.body;

if (menu && menuBtn) { // если на странице будет и меню, и кнопка меню, то скрипт сработает
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active')
        menuBtn.classList.toggle('active')
        fade.classList.toggle('active')
        body.classList.toggle('lock')

        one.classList.toggle('active')
        two.classList.toggle('active')
        three.classList.toggle('active')
        four.classList.toggle('active')
    })

    fade.addEventListener('click', () => {
        menu.classList.remove('active')
        menuBtn.classList.remove('active')
        fade.classList.remove('active')
        body.classList.remove('lock')

        one.classList.remove('active')
        two.classList.remove('active')
        three.classList.remove('active')
        four.classList. remove('active')
    })
}

