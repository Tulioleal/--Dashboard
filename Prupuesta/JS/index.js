//Selectors
const boton = document.querySelector('button')
const body = document.querySelector('body')
const card = document.querySelectorAll('section')

//Listener
boton.addEventListener('click', function(){

    bodyDark()
    btnDark()
    cardDark()
})

//Funciones
function bodyDark(){
    if (body.classList.contains('darkBody')) {
        body.classList.remove('darkBody')
    }else{
        body.classList.add('darkBody')
    }
}
function btnDark(){
    if (boton.classList.contains('darkbtn')) {
        boton.classList.remove('darkbtn')
    }else{
        boton.classList.add('darkbtn')
    }
}
function cardDark(){

    for (let i = 0; i < card.length; i++) {
        if (card[i].classList.contains('darkCard')) {
            card[i].classList.remove('darkCard')
        }else{
            card[i].classList.add('darkCard')
        }
    }
}