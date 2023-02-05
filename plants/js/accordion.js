const basicsBtn = document.querySelector('#basics');
const standardBtn = document.querySelector('#standard');
const proBtn = document.querySelector('#pro');

const pricesBtn = document.querySelectorAll('.prices__form-btn');
const pricesForm = document.querySelector('.prices__form-block');

const pricesFormItemBlock = document.querySelectorAll('.prices__form-item-block');

const arrowBlock = document.querySelectorAll('.arrow-block');
const arrow = document.querySelectorAll('.arrow');

function checkAcc() {
    if ((basicsBtn.classList.contains('active')) ||
        (standardBtn.classList.contains('active')) ||
        (proBtn.classList.contains('active'))) {
            pricesForm.classList.add('active');
            for (i = 0; i < 3; i++) {
                pricesFormItemBlock[i].classList.add('active');
            }
    } else {
        pricesForm.classList.remove('active');
        for (i = 0; i < 3; i++) {
            pricesFormItemBlock[i].classList.remove('active');
        }
    }
}

function activateArrow(i) {
    arrowBlock[i].classList.toggle('active');
    arrow[i].classList.toggle('active');
}
function removeArrow(i) {
    arrowBlock[i].classList.remove('active');
    arrow[i].classList.remove('active');
}
function openAcc(btn) {
    btn.classList.toggle('active');
    btn.nextElementSibling.classList.toggle('active');
}
function closeAcc(btn) {
    btn.classList.remove('active');
    btn.nextElementSibling.classList.remove('active');
}
if (basicsBtn && standardBtn && proBtn) {
    basicsBtn.addEventListener('click', e => {

        openAcc(basicsBtn)
        checkAcc()
        activateArrow(0)

        closeAcc(standardBtn)
        removeArrow(1)

        closeAcc(proBtn)
        removeArrow(2)
    })

    standardBtn.addEventListener('click', e => {
        openAcc(standardBtn)
        checkAcc()
        activateArrow(1)

        closeAcc(basicsBtn)
        removeArrow(0)

        closeAcc(proBtn)
        removeArrow(2)
    })

    proBtn.addEventListener('click', e => {
        openAcc(proBtn)
        checkAcc()
        activateArrow(2)

        closeAcc(basicsBtn)
        removeArrow(0)
        
        closeAcc(standardBtn)
        removeArrow(1)
    })

}