// Blur

const gardensBtn = document.querySelector('#gardens');
const lawnBtn = document.querySelector('#lawn');
const plantingBtn = document.querySelector('#planting');


const cards = document.querySelectorAll('.service__card-box');

const card1 = document.querySelector('#card_1');
const card2 = document.querySelector('#card_2');
const card3 = document.querySelector('#card_3');
const card4 = document.querySelector('#card_4');
const card5 = document.querySelector('#card_5');
const card6 = document.querySelector('#card_6');

function setBlur() {
    // console.log('gardensBtn = '+ gardensBtn.classList.contains('active'))
    // console.log('lawnBtn = '+ lawnBtn.classList.contains('active'))
    // console.log('plantingBtn = '+ plantingBtn.classList.contains('active'))

    if(gardensBtn.classList.contains('active') ||
        lawnBtn.classList.contains('active') ||
        plantingBtn.classList.contains('active')){
            cards.forEach(card => {
                card.classList.add('blur');
            })
    } else {
        cards.forEach(card => {
            card.classList.remove('blur');
        })
    } 


    if(gardensBtn.classList.contains('active')) {
        card1.classList.remove('blur');
        card5.classList.remove('blur');
    }
    if(lawnBtn.classList.contains('active')) {
        card3.classList.remove('blur');
    }
    if(plantingBtn.classList.contains('active')) {
        card2.classList.remove('blur');
        card4.classList.remove('blur');
        card6.classList.remove('blur');
    }
    

    if(gardensBtn.classList.contains('active') &&
        lawnBtn.classList.contains('active') ) {
        // третья кнопка становится неактивной 'Нельзя нажать'
        plantingBtn.disabled = true;
        plantingBtn.classList.add('nonactive');
    } else if(lawnBtn.classList.contains('active') &&
        plantingBtn.classList.contains('active')){
        gardensBtn.disabled = true;
        gardensBtn.classList.add('nonactive');

    } else if(gardensBtn.classList.contains('active') &&
        plantingBtn.classList.contains('active')) {
        lawnBtn.disabled = true;
        lawnBtn.classList.add('nonactive');

    } else {
        //У всех кнопок убрать состояние 'Нельзя нажать'
        gardensBtn.disabled = false;
        lawnBtn.disabled = false;
        plantingBtn.disabled = false;

        gardensBtn.classList.remove('nonactive');
        lawnBtn.classList.remove('nonactive');
        plantingBtn.classList.remove('nonactive');
    }

}


if (gardensBtn && lawnBtn && plantingBtn) { // если на странице будет и меню, и кнопка меню, то скрипт сработает
    gardensBtn.addEventListener('click', e => {
       // если состояние != 'Нельзя нажать', то изменяем нажатие на кликд, сейчас эктив
        gardensBtn.classList.toggle('active');
        setBlur()
    })

    lawnBtn.addEventListener('click', e => {
        lawnBtn.classList.toggle('active');
        setBlur()
    })

    plantingBtn.addEventListener('click', e => {
        plantingBtn.classList.toggle('active');
        setBlur()
    })
}
