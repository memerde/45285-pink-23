var header = document.querySelector('.page-header');
var navToggle = document.querySelector('.page-header__close');
var navigation = document.querySelector('.navigation');
var menuButton = document.querySelector('.page-header__close');
var cta = document.querySelector('.container--cta-reset-tablet');

header.classList.remove('page-header--nojs');
header.classList.remove('page-header--no-opacity');
navigation.classList.add('navigation--toggle');
menuButton.classList.remove('page-header__close--nojs');
if (cta) {cta.classList.remove('container--cta-reset-tablet--nojs');}

navToggle.addEventListener('click', function () {
  navigation.classList.toggle('navigation--toggle');
  header.classList.toggle('page-header--no-opacity');
});
