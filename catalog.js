let cross = document.querySelector('.cross');
let logo = document.querySelector('.mob_logo');
let nav = document.querySelector('.nav_mob');

logo.onclick = function () {
  nav.classList.toggle('active');
  cross.classList.toggle('cross_active');
};