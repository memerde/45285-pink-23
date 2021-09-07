var header = document.querySelector('.page-header');
var navToggle = document.querySelector('.page-header__close');
var navigation = document.querySelector('.navigation');

header.classList.remove('page-header--nojs');
header.classList.remove('page-header--no-opacity');
navigation.classList.add('navigation--toggle')


navToggle.addEventListener('click', function () {
  navigation.classList.toggle('navigation--toggle')
  header.classList.toggle('page-header--no-opacity')
});
