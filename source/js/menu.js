var navList = document.querySelector(".main-nav__list");
var openMenu = document.querySelector(".main-nav__menu-button");
var closeMenu = document.querySelector(".main-nav__cross-button");

navList.classList.remove("main-nav__list--no-js");

openMenu.addEventListener('click', function() {
    if (navList.classList.contains('main-nav__list--closed')) {
      navList.classList.remove('main-nav__list--closed');
    } else {
      navList.classList.add('main-nav__list--closed');
    }
  });

closeMenu.addEventListener('click', function() {
    if (navList.classList.contains('main-nav__list--closed')) {
      navList.classList.add('main-nav__list--closed');
    } else {
      navList.classList.add('main-nav__list--closed');
    }
  });
