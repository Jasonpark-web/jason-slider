const container = document.querySelector('.jason-slider__container');
const wrapper = document.querySelector('.jason-slider__wrapper');
const slides = document.querySelectorAll('.jason-slider__slide');
const pagination = document.querySelector('.jason-slider__pagination');
const prevBtn = document.querySelector('.jason-slider__btn.prev');
const nextBtn = document.querySelector('.jason-slider__btn.next');

const CONTAINER_WIDTH_SIZE = container.offsetWidth;
const SLIDE_LAST_INDEX = slides.length - 1;

let curLocation = 0;
let curIndex = 0;

const movedSlide = {
    toLeft: () => {
        if (curIndex === 0) {
            curIndex = SLIDE_LAST_INDEX;
            curLocation = -(CONTAINER_WIDTH_SIZE * SLIDE_LAST_INDEX);
            wrapper.style.transform = `translateX(${curLocation}px)`;
        } else {
            curIndex--;
            curLocation += CONTAINER_WIDTH_SIZE;
            wrapper.style.transform = `translateX(${curLocation}px)`;
        }
    },
    toRight: () => {
        if (curIndex === SLIDE_LAST_INDEX) {
            curIndex = 0;
            curLocation = 0;
            wrapper.style.transform = `translateX(${curLocation}px)`;
        } else {
            curIndex++;
            curLocation -= CONTAINER_WIDTH_SIZE;
            wrapper.style.transform = `translateX(${curLocation}px)`;
        }
    }
}

prevBtn.addEventListener('click', movedSlide.toLeft);
nextBtn.addEventListener('click', movedSlide.toRight);