const MENU = document.getElementById('menu');



MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('li a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
    
})



// slider

const SLIDES = document.querySelectorAll('#slides .slide');
const ARROWS = document.querySelectorAll('.arrow');
const SLIDER_SECTION = document.querySelector('#slider-section')
let currentSlide = 0;

function slider(){
    SLIDES[currentSlide].classList.remove('showing');
    currentSlide = (currentSlide + 1) % SLIDES.length;
    SLIDES[currentSlide].classList.add('showing');
    if(SLIDES[currentSlide].classList.contains('slide-blue')){
        SLIDER_SECTION.style.borderBottomColor = '#5173cb';
    }
    else{
        SLIDER_SECTION.style.borderBottomColor = '#ea676b';
    }
}

// of/on screen

const PHONE_BTNS = document.querySelectorAll('.phone-btn');
const BLACK_SCREENS = document.querySelectorAll('.screen-black');

function offScreen1(){
    if(BLACK_SCREENS[0].classList.contains('show-black-screen'))
    BLACK_SCREENS[0].classList.remove('show-black-screen');
    else
    BLACK_SCREENS[0].classList.add('show-black-screen');
}
function offScreen2(){
    if(BLACK_SCREENS[1].classList.contains('show-black-screen'))
    BLACK_SCREENS[1].classList.remove('show-black-screen');
    else
    BLACK_SCREENS[1].classList.add('show-black-screen');
}