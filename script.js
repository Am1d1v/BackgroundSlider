


const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');

let activeSlide = 0;

function setBGToBody(){
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}
// Set initial background
setBGToBody();

// Swipe to right
rightBtn.addEventListener('click', () => {

    if(activeSlide >= slides.length - 1){
        activeSlide = 0;
    }

    activeSlide++;
    console.log(activeSlide);
    setBGToBody();
});

// Swipe to left
leftBtn.addEventListener('click', () => {
    if(activeSlide <= 0){
        activeSlide = slides.length - 1;
    }

    activeSlide--;
    console.log(activeSlide);
    setBGToBody();

});

