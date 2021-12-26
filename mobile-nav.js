let menuHamburgue = document.querySelector('.hamburgue')
let menu = document.querySelector('.mobile-nav')
let closeHamburgue = document.querySelector('.close-mobile')

menuHamburgue.addEventListener('click', function(){
    menu.classList.add('animation-nav')
    menu.classList.remove('close-animation-nav')
})
closeHamburgue.addEventListener('click', function(){
    menu.classList.add('close-animation-nav')
    menu.classList.remove('animation-nav')
})
