// active nav
const MENU = document.getElementById('menu');



MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('li a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
    
})

// scroll 

document.addEventListener('scroll', onScroll);
function onScroll(event){
    const curPos =  window.scrollY;
    const sec = document.querySelectorAll('#main section');
    const links = document.querySelectorAll('#menu a');

    sec.forEach((el) =>{
        if (el.offsetTop <= curPos + 95 && (el.offsetTop + el.offsetHeight) > curPos ){
            links.forEach((a) => {
                a.classList.remove('active');
                if(el.getAttribute('id') === a.getAttribute('href').substring(1)){
                    a.classList.add('active');
                }
            })

        }
    })

}




// slider
let items = document.querySelectorAll('.slide');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n){
    currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('showing', direction)
    })
}

function showItem(direction) {
    isEnabled = false;
    items[currentItem].classList.add('next', direction);
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('next', direction);
        this.classList.add('showing');
        isEnabled = true;

    })
}

function previousItem(n) {
    hideItem('to-right')
    changeCurrentItem(n - 1);
    showItem('from-left');

}

document.querySelector('.button-l').addEventListener('click', function() {
    if(isEnabled) {
        previousItem(currentItem);
    }
    if(document.querySelector('.showing').classList.contains('slide-blue')) {
        
        document.querySelector('.slider-content').style.borderBottomColor = '#ea676b';
    }
    else {
        document.querySelector('.slider-content').style.borderBottomColor = '#5173cb';

    }
});

function nextItem(n) {
    hideItem('to-left')
    changeCurrentItem(n + 1);
    showItem('from-right');
}

document.querySelector('.button-r').addEventListener('click', function() {
    if(isEnabled) {
        nextItem(currentItem);
    }
    if(document.querySelector('.showing').classList.contains('slide-blue')) {
        
        document.querySelector('.slider-content').style.borderBottomColor = '#ea676b';
    }
    else {
        document.querySelector('.slider-content').style.borderBottomColor = '#5173cb';

    }
});


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



// modal

const MODAL_WINDOW = document.getElementById('modal-window');
const MODAL_BUTTON = document.getElementById('modal-button');
const MODAL_SUBMIT = document.getElementById('modal-submit');

const FORM = document.getElementById('form');
const NAME_INPUT = document.getElementById('name');
const EMAIL_INPUT = document.getElementById('email');
const TEXT_INPUT = document.getElementById('text');
const DESCR_INPUT = document.getElementById('descr');

const closeModal = (event) => {
    if (event.target.tagName == "SECTION" || event.target.tagName == "BUTTON") {
        MODAL_WINDOW.classList.add('display-none');
        MODAL_SUBMIT.querySelectorAll(".added").forEach(item => {
            MODAL_SUBMIT.removeChild(item);
        })
        FORM.reset();
    }
}

FORM.addEventListener('submit', event => {
    if (event.keyCode == 13) {
        event.preventDefault();
    }
    event.preventDefault();
    if (NAME_INPUT.checkValidity() && EMAIL_INPUT.checkValidity()) {
        MODAL_SUBMIT.innerHTML += "<div class='added'>The letter was sent</div>";
        if (TEXT_INPUT.value.length == 0)
            MODAL_SUBMIT.innerHTML += "<div class='added'>Without subject</div>";
        else {
            let VALUE = TEXT_INPUT.value.split('').map(item => { if (item == '<') item = '&lt;'; if (item == '>') item = '&gt;'; return item }).join('');
            MODAL_SUBMIT.innerHTML += `<div class='added'>Subject:<span class='bold'> ${VALUE} </span></div>`;
        }
        if (DESCR_INPUT.value.length == 0)
            MODAL_SUBMIT.innerHTML += "<div class='added'>Without description</div>";
        else {
            let VALUE = DESCR_INPUT.value.split('').map(item => { if (item == '<') item = '&lt;'; if (item == '>') item = '&gt;'; return item }).join('');
            MODAL_SUBMIT.innerHTML += `<div class='added'>Description:<span class='bold'> ${VALUE} </span></div>`;
        }
        MODAL_SUBMIT.innerHTML += `<div style="text-align: center;" class="modal-button added" id='modal-button'><button>ok</button></div>`;
        MODAL_WINDOW.classList.remove('display-none');
    }
})

FORM.addEventListener('keydown', function(event) {
    if (event.keyCode == 13) {
        event.preventDefault();
    }
});

const HAMBURGER = document.querySelector('.hamburger')
const LOGO = document.querySelector('.logo')
const HEADER_WRAP = document.querySelector('.header-wrapper')
const MENU_LINKS = document.querySelector('.menu')
const SHADOW = document.getElementById('content-burger')
const HOME_SECTION = document.querySelector('header');

function closeBurg() {
    if (HAMBURGER.classList.contains('hamburger-transform')) {
        HEADER_WRAP.classList.remove('navigation__content-burger');
        MENU_LINKS.classList.remove('burger-active');
        MENU_LINKS.querySelectorAll('a').forEach(el => el.classList.remove('link-burger'))
        HAMBURGER.classList.remove('hamburger-transform');
        HEADER_WRAP.removeAttribute('id')
        LOGO.classList.remove('navigation__logo-burger');
        SHADOW.classList.remove('content-burger');
    } else {
        HEADER_WRAP.classList.add('navigation__content-burger');
        MENU_LINKS.classList.add('burger-active');
        MENU_LINKS.querySelectorAll('a').forEach(el => el.classList.add('link-burger'))
        HAMBURGER.classList.add('hamburger-transform');
        HEADER_WRAP.id = 'navigation-burger';
        LOGO.classList.add('navigation__logo-burger');
        SHADOW.classList.add('content-burger');
    }
}
    
