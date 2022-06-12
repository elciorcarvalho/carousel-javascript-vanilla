const slides = document.querySelectorAll('.slide');
let curSlide = 0;
const nextSlide = document.querySelector('.btn--next');
const prevSlide = document.querySelector('.btn--prev');
let maxSlide = slides.length - 1;

slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${index * 100}%)`;
});

nextSlide.addEventListener('click', () => {
    
    if (curSlide === maxSlide) {
        curSlide = 0;
    } else {
        curSlide++;
    }

    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${ 100 * (index - curSlide) }%)`;
    });
});

prevSlide.addEventListener('click', () => {

    if (curSlide === 0) {
        curSlide = maxSlide;
    } else {
        curSlide--;
    }

    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${ 100 * (index - curSlide) }%)`;
    });
});