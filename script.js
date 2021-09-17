'use strict'
/* Menu Burger*/
const btnBurger = document.body.querySelector('.burger-menu');
const menu = document.body.querySelector('.menu');
const menuList = document.body.querySelector('.menu__list');
const header = document.body.querySelector('.header');

let bgTime = getTime();

function getTime() {
  return new Date().getTime();
}

function showMenu() {
  if (!btnBurger.classList.contains('burger-menu--active')) {
    hideScroll();
  } else {
    showScroll();
  }

  btnBurger.classList.toggle('burger-menu_active');
  menu.classList.toggle('menu_active');
}

function hideScroll() {
  let marginSize = window.innerWidth - document.body.clientWidth;

  if (marginSize) {
    menu.style.paddingLeft = marginSize + 'px';
    document.body.style.marginRight = marginSize + 'px';
    document.body.classList.add('hidden-scroll');
  }
}

function showScroll() {
  menu.style.paddingLeft = '';
  document.body.style.marginRight = '';
  document.body.classList.remove('hidden-scroll');
}

btnBurger.addEventListener('click', function() {
  let fnTime = getTime();
  let timeAnimationBurger = window.getComputedStyle(menu)
                                  .getPropertyValue("transition")
                                  .match(/left ([0-9]+.[0-9]+)/)[1] * 1000;

  if (fnTime - bgTime > timeAnimationBurger) {
      bgTime = fnTime;
      showMenu();
  }
});

/* Section Experience - Slider */
const slider = document.body.querySelector('.slider');
const sliderContainer = document.body.querySelector('.slider__container');
const sliderContent = document.body.querySelector('.slider__content');
const sliderBtnLeft = document.body.querySelector('.slider__btn-left');
const sliderBtnRight = document.body.querySelector('.slider__btn-right');
const slides = document.body.querySelectorAll('.slider__slide');

const slidesCount = slides.length;
const slideMarginRight = +(window.getComputedStyle(slides[0]).marginRight.slice(0, -2));

let activeSlideIndex = 0;
let timeAnimation = 0.8;
let scrolling = true;

const scrollSlider = (event) => {
  event.preventDefault();

  if (scrolling) {
    scrolling = false;

    if (event.deltaY < 0) {
      changeSlide('left');
    } else {
      changeSlide('right');

    }
    setTimeout(() => {
      scrolling = true;
    }, timeAnimation * 1000);
  }
}

const loopSlider = (slides, direction) => {
  let firstSlide = slides.firstElementChild;

  slides.append(firstSlide);
  sliderContent.style.transition = 'none';

  if (direction === 'left') {
    activeSlideIndex = slidesCount - 1;
  } else if (direction === 'right') {
    activeSlideIndex = slidesCount - 2;
  }

  setTimeout(() => {
    changeSlide(direction);
    },100);
}

const changeSlide = (direction) => {
  sliderContent.style.transition = `transform ${timeAnimation}s ease`;

  if (direction === 'right') {
    activeSlideIndex++;
    if (activeSlideIndex > slidesCount - 1) {
      loopSlider(sliderContent, direction);
    }
  } else if (direction === 'left') {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      loopSlider(sliderContent, direction);
    }
  }

  let slideWidth = sliderContainer.offsetWidth + slideMarginRight;

  sliderContent.style.transform = `translateX(${-activeSlideIndex * slideWidth}px)`; 
}

const resizeSlider = () => {
  let slideWidth = sliderContainer.offsetWidth + slideMarginRight;

  sliderContent.style.transition = 'none'
  sliderContent.style.transform = `translateX(${-activeSlideIndex * slideWidth}px)`;
}

window.addEventListener('resize', resizeSlider);
sliderContent.addEventListener('wheel', (event) => scrollSlider(event));
sliderBtnLeft.addEventListener('click', () => {
  let fnTime = getTime();
  if (fnTime - bgTime > timeAnimation * 1000) {
    bgTime = fnTime;
    changeSlide('left');
  }
});
sliderBtnRight.addEventListener('click', () => {
  let fnTime = getTime();
  if (fnTime - bgTime > timeAnimation * 1000) {
    bgTime = fnTime;
    changeSlide('right');
  }
});