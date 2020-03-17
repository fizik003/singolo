// active nav
const MENU = document.getElementById('menu');



MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('li a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
    
})

// scroll 

document.addEventListener('scroll', onScroll);




// slider

const SLIDES = document.querySelectorAll('#slides .slide');
const ARROWS = document.querySelectorAll('.arrow');
const SLIDER_SECTION = document.querySelector('#slides')
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



//select tag  and sort images
const TAGS_PORTFOLIO = document.getElementById('tags');
const PORTFOLIO = document.getElementById('images');
TAGS_PORTFOLIO.addEventListener('click', sortImage);
PORTFOLIO.addEventListener('click',activeImg)

function sortImage(event){
    if (event.target.tagName === 'A'){
        imgs = [];
        TAGS_PORTFOLIO.querySelectorAll('div .text-tag').forEach(el => el.classList.remove('tag-active'));
        event.target.classList.add('tag-active');
        PORTFOLIO.querySelectorAll('img').forEach(el => imgs.push(el));
        imgs.sort(function(){
            return Math.random() - 0.5;
        })
        PORTFOLIO.innerHTML = '';
        imgs.forEach(el => PORTFOLIO.appendChild(el));
    }


}

function activeImg(event){
    PORTFOLIO.querySelectorAll('img').forEach(el => el.classList.remove('active-image'));
    event.target.classList.add('active-image');
}
