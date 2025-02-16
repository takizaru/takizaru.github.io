const vazhno1 = document.querySelector('.vazhno1');
const vazhno2 = document.querySelector('.vazhno2');
const vazhno3 = document.querySelector('.vazhno3');
const vazhno4 = document.querySelector('.vazhno4');
const vazhno5 = document.querySelector('.vazhno5');
const vazhno1Text = document.querySelector('.vazhno1__text');
const vazhno2Text = document.querySelector('.vazhno2__text');
const vazhno3Text = document.querySelector('.vazhno3__text');
const vazhno4Text = document.querySelector('.vazhno4__text');
const vazhno5Text = document.querySelector('.vazhno5__text');

vazhno1.addEventListener('mouseenter', () => {
    vazhno1Text.style.display = 'block';
});

vazhno1.addEventListener('mouseleave', () => {
    vazhno1Text.style.display = 'none';
});

vazhno2.addEventListener('mouseenter', () => {
    vazhno2Text.style.display = 'block';
});

vazhno2.addEventListener('mouseleave', () => {
    vazhno2Text.style.display = 'none';
});
vazhno3.addEventListener('mouseenter', () => {
    vazhno3Text.style.display = 'block';
});

vazhno3.addEventListener('mouseleave', () => {
    vazhno3Text.style.display = 'none';
});

vazhno4.addEventListener('mouseenter', () => {
    vazhno4Text.style.display = 'block';
});

vazhno4.addEventListener('mouseleave', () => {
    vazhno4Text.style.display = 'none';
});

vazhno5.addEventListener('mouseenter', () => {
    vazhno5Text.style.display = 'block';
});

vazhno5.addEventListener('mouseleave', () => {
    vazhno5Text.style.display = 'none';
});



$('.urok1').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
       prevArrow: '<img  class="prev2" src="iconl.png">',
  nextArrow: '<img class="next2" src="iconr.png">'
  });