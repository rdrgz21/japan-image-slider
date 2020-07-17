const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// Counter

let counter =  1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' +(-size * counter) + 'px)';

// Button listeners

nextBtn.addEventListener('click', () => {
    if(counter >= carouselImages.length -1) return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX(' +(-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    // To avoid users clicking too fast and going beyond 0 (transitionend triggers after 0.4s)
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' +(-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone') {
        // To remove transition when resetting counter to last image (second to last)
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length -2;
        carouselSlide.style.transform = 'translateX(' +(-size * counter) + 'px)';
    }
    if (carouselImages[counter].id === 'firstClone') {
        // To remove transition when resetting counter to last image (second to last)
        carouselSlide.style.transition = 'none';
        // counter = carouselImages.length - counter;
        counter = 1;
        carouselSlide.style.transform = 'translateX(' +(-size * counter) + 'px)';
    }
});