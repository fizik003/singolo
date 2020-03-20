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
