


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

function setSlideImage(){
    slides.forEach(slide => slide.classList.remove('active'));

    slides[activeSlide].classList.add('active');
}

// Swipe to right
rightBtn.addEventListener('click', () => {

    if(activeSlide >= slides.length - 1){
        activeSlide = 0;
    }

    activeSlide++;
    setBGToBody();
    setSlideImage();
});

// Swipe to left
leftBtn.addEventListener('click', () => {
    if(activeSlide <= 0){
        activeSlide = slides.length - 1;
    }

    activeSlide--;
    setBGToBody();

});

