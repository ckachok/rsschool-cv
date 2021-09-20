'use strict'
/* Menu Burger*/
const btnBurger = document.body.querySelector('.burger-menu');
const menu = document.body.querySelector('.header__menu');
const menuList = document.body.querySelector('.menu__list');
const header = document.body.querySelector('.header');

const showMenu = () => {
  if (!btnBurger.classList.contains('burger-menu_active')) {
    hideScroll();
  } else {
    showScroll();
  }

  btnBurger.classList.toggle('burger-menu_active');
  menu.classList.toggle('menu_active');
}

const hideScroll = () => {
  let marginSize = window.innerWidth - document.body.clientWidth;

  if (marginSize) {
    menu.style.paddingLeft = marginSize + 'px';
    document.body.style.marginRight = marginSize + 'px';
    document.body.classList.add('hidden-scroll');
  } else {
    document.body.classList.add('hidden-scroll');
  }
}

const showScroll = () => {
  menu.style.paddingLeft = '';
  document.body.style.marginRight = '';
  document.body.classList.remove('hidden-scroll');
}

const getTime = () => {
  return new Date().getTime();
}

let bgTime = getTime();

const startAnimationBurger = () => {
  let fnTime = getTime();
  let timeAnimationBurger = window.getComputedStyle(menu)
                                  .getPropertyValue("transition")
                                  .match(/left ([0-9]+.[0-9]+)/)[1] * 1000;

  if (fnTime - bgTime > timeAnimationBurger) {
      bgTime = fnTime;
      showMenu();
  }
}

btnBurger.addEventListener('click', startAnimationBurger);
btnBurger.addEventListener('touchstart', startAnimationBurger);

/* Click on menu links */
const menuLinks = document.body.querySelectorAll('.menu__link');

const onMenuLinkCLick = (event) => {
  const menuLink = event.target;

  if (menuLink.dataset.link && document.body.querySelector(menuLink.dataset.link)) {
    const goToBlock = document.querySelector(menuLink.dataset.link);
    const goToBlockValue = goToBlock.getBoundingClientRect().top + scrollY - header.offsetHeight;
    
    window.scrollTo({
      top: goToBlockValue,
    });

    if (btnBurger.classList.contains('burger-menu_active')) {
      showMenu();
    }
  
    event.preventDefault();
  }
}

if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', onMenuLinkCLick);
  })
}

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

/* Interaction with the slider on touchscreen devices */
const slideLinks = document.body.querySelectorAll('.slide__link');

let clickTimer = null;

const touchStart = (event) => {
  if (clickTimer === null) {
    event.currentTarget.parentNode.classList.add('slider__slide_active')
    clickTimer = setTimeout(function () {
      clickTimer = null;
    }, 500);
    event.preventDefault();
  } else {
    clearTimeout(clickTimer);
    clickTimer = null;
  }
}

if (slideLinks.length > 0) {
  slideLinks.forEach(slideLink => {
    slideLink.addEventListener('touchstart', event => {
      touchStart(event);
    });
  })
};
document.body.addEventListener('touchstart', event => {
  if (!event.target.classList.contains('slide__image')) {
    slides.forEach(slide => {
      slide.classList.remove('slider__slide_active');
    })
  }
})

console.log('%cОценка своего проекта:', "color: red");
console.log ('%c - вёрстка валидная', 'color: green', '(10 баллов);');
console.log ('%c - вёрстка семантическая (присутствуют следующие теги h1-h4, header, nav, main, section, figure, figcaption, footer)', 'color: green', '(20 баллов);');
console.log ('%c - для оформления СV используются css-стили', 'color: green', '(10 баллов);');
console.log ('%c - контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы', 'color: green', '(10 баллов);');
console.log ('%c - вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется', 'color: green', '(10 баллов);');
console.log ('%c - есть адаптивное бургер-меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным.', 'color: green', '(10 баллов);');
console.log ('%c - на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым)', 'color: green', '(10 баллов);');
console.log ('%c - контакты для связи и перечень навыков оформлены в виде списка ul > li', 'color: green', '(10 баллов);');
console.log ('%c - CV содержит контакты, краткую информацию о себе, навыки, образование, уровень английского', 'color: green', '(10 баллов);');
console.log ('%c - CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода', 'color: green', '(10 баллов);');
console.log ('%c - CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий', 'color: green', '(10 баллов);');
console.log ('%c - CV выполнено на английском языке', 'color: green', '(10 баллов);');
console.log ('%c - выполнены требования к репозиторию: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, указана дата дедлайна, выполнена самооценка', 'color: green', '(10 баллов);');
console.log ('%c - дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию', 'color: green', '(10 баллов);');
console.log('%cИтого за задание - 150 баллов.', 'color: red');
console.log('%cВыражаю благодарность за проверку моей работы :)', 'color: purple');
