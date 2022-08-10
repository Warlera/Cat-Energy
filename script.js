const slider = document.querySelector('.slider');
const before = slider.querySelector('.before');
const beforeImage = before.querySelector('img');
const change = slider.querySelector('.change');
const body = document.body;

let isActive = false;

document.addEventListener('DOMContentLoaded', () => {
  let width = slider.offsetWidth;
  beforeImage.style.width = width + 'px';
});

const beforeAfterSlider = (x) => {
  let shift = Math.max(0, Math.min(x, slider.offsetWidth));
  before.style.width = shift +'px'; 
  change.style.left = shift + 'px';
  
};


body.addEventListener('mousedown', () => {
  isActive = true;
});

body.addEventListener('mouseup', () => {
  isActive = false;
});

body.addEventListener('mouseleave', () => {
  isActive = false;
});

body.addEventListener('mousemove', (e) =>{
  if (!isActive) {
   return;
  }

  let x = e.pageX;

  x -= slider.getBoundingClientRect().left;
  beforeAfterSlider(x);
});

let cross = document.querySelector('.cross');
let logo = document.querySelector('.mob_logo');
let nav = document.querySelector('.nav_mob');
let sliderMob = document.querySelector('.slider_mob');
let fat = document.querySelector('.fat');
let skinny = document.querySelector('.skinny');
let mobBefore = document.querySelector('.mob_before');
let mobAfter= document.querySelector('.mob_after');

logo.onclick = function () {
  nav.classList.toggle('active');
  cross.classList.toggle('cross_active');
};
sliderMob.onclick = function () {
  fat.classList.toggle('active');
  skinny.classList.toggle('active');
  mobBefore.classList.toggle('slider_back');
  mobAfter.classList.toggle('slider_back');
};
mobBefore.onclick = function () {
  mobBefore.classList.add('slider_back');
  mobAfter.classList.remove('slider_back');
  fat.classList.remove('active');
  skinny.classList.add('active');
}
mobAfter.onclick = function () {
  mobAfter.classList.add('slider_back');
  mobBefore.classList.remove('slider_back');
  fat.classList.add('active');
  skinny.classList.remove('active');
}