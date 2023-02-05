
//создание массива объектов с инфой о карточках
const cardsInfo = [
    {
        id:     0,
        city:   'Canandaigua, NY',
        phone:  '+1 585 393 0001',
        adress: '151 Charlotte Street',
    },
    {
        id:     1,
        city:   'New York City',
        phone:  '+1 212 456 0002',
        adress: '9 East 91st Street',
    },
    {
        id:     2,
        city:   'Yonkers, NY',
        phone:  '+1 914 678 0003',
        adress: '511 Warburton Ave',
    },
    {
        id:     3,
        city:   'Sherrill, NY',
        phone:  '+1 315 908 0004',
        adress: '14 WEST Noyes BLVD',
    }
]

//генерация карточек по известным данным
function generateCard(card){
    const content = `
        <div class="info-card">
            <div class="info-card__string">
                <div class="info-card__param">City:</div>
                <div class="info-card__value">${card.city}</div>
            </div>
            <div class="info-card__string">
                <div class="info-card__param">Phone:</div>
                <div class="info-card__value">${card.phone}</div>
            </div>
            <div class="info-card__string">
                <div class="info-card__param">Office adress:</div>
                <div class="info-card__value">${card.adress}</div>
            </div>
            <div class="info-card__btn-block">
                <a href="tel:${card.phone}" class="info-card__btn-block__link">Call us</a>
            </div>
        </div>
    `;
    return content;
}

// function generateCard(card){
//     const content = `

//     `;
//     return content;
// }

let infoCardBlock = document.querySelector(".info-card-block");

// function makeSomethingWithCardInfo(cardInfo){
//     infoCardBlock.innerHTML = generateCard(cardInfo);
// }

// for (cardInfo in cardsInfo){
//     makeSomethingWithCardInfo(cardInfo);
// }

// function forEach(arrowFunction){
//     for (item in data){
//         arrowFunction(item);
//     }
// }


//заполнение массива карточек
let cardsArray = [];

cardsInfo.forEach((cardInfo) => {
    cardsArray.push(generateCard(cardInfo));
})

function cardDraw(id) {
    infoCardBlock.innerHTML = cardsArray[id];
    document.querySelector(".currCity").innerHTML = cardsInfo[id].city;
}

//отрисовка необходимой карточки

const popupItem = document.querySelectorAll('.contacts__select__popup__item');

const canandaigua = document.querySelector('#canandaigua');
const nyc = document.querySelector('#nyc');
const yonkers = document.querySelector('#yonkers');
const sherrill = document.querySelector('#sherrill');

let selectBlock = document.querySelector(".contacts__select-block");

const tyanBlock = document.querySelector('.contacts__img-block');


function closeCurrCard(cardName, i) {
        popupItem[i].classList.remove('active');
        infoCardBlock.classList.remove('active');

}
function closeAllCards() {
    infoCardBlock.classList.add('active');
    canandaigua.classList.remove('active');
    nyc.classList.remove('active');
    yonkers.classList.remove('active');
    sherrill.classList.remove('active');
    
}
if (selectBlock) {
    canandaigua.addEventListener('click', e => {
        //проверка, активна ли текущая карточка
        if(canandaigua.classList.contains('active')) {
            closeCurrCard(canandaigua, 0);
            tyanBlock.classList.remove('active');
            document.querySelector(".currCity").innerHTML = "City";
        } else {
            tyanBlock.classList.add('active');
            //удалить все активные карточки
            closeAllCards();
            //отрисовать текущую карточку
            cardDraw(0);
            popupItem[0].classList.add('active');
        }
    })
    nyc.addEventListener('click', e => {
        if(nyc.classList.contains('active')) {
            closeCurrCard(nyc, 1);
            document.querySelector(".currCity").innerHTML = "City"
        } else {
            tyanBlock.classList.add('active');
            closeAllCards();
            cardDraw(1); 
            popupItem[1].classList.add('active');
        }
    })
    yonkers.addEventListener('click', e => {
        if(yonkers.classList.contains('active')) {
            closeCurrCard(yonkers, 2);
            document.querySelector(".currCity").innerHTML = "City"
        } else {
            tyanBlock.classList.add('active');
            closeAllCards();
            cardDraw(2);
            popupItem[2].classList.add('active');
        }
    })
    sherrill.addEventListener('click', e => {
        if(sherrill.classList.contains('active')) {
            closeCurrCard(sherrill, 3);
            document.querySelector(".currCity").innerHTML = "City"
        } else {
            tyanBlock.classList.add('active');
            closeAllCards();
            cardDraw(3);
            popupItem[3].classList.add('active');
        }
    })

}


