'use strict'
const btnBurger = document.body.querySelector('.burger-menu');
const menu = document.body.querySelector('.menu');
const menuList = document.body.querySelector('.menu__list');
const header = document.body.querySelector('.header');

let bgTime = getTime();

function getTime() {
  return new Date().getTime();
}

function showMenu() {
  if (!btnBurger.classList.contains('burger-menu_active')) {
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