"use strict";

/* document.querySelectorAll('.accordion-item__trigger').forEach((item) => 
    item.addEventListener('click', () => {
        item.parentNode.classList.toggle('accordion-item--active'); 
    })
); */
window.addEventListener('DOMContentLoaded', function () {
  var menu = document.querySelector('.navigation-list'),
      home = document.querySelector('.home'),
      shop = document.querySelector('.shop'),
      about = document.querySelector('.about'),
      contact = document.querySelector('.contact'),
      hamburger = document.querySelector('.lines');
  hamburger.addEventListener('click', function () {
    menu.classList.toggle('navigation-list_active');
  });
  home.addEventListener('click', function () {
    menu.classList.toggle('navigation-list_active');
  });
  shop.addEventListener('click', function () {
    menu.classList.toggle('navigation-list_active');
  });
  about.addEventListener('click', function () {
    menu.classList.toggle('navigation-list_active');
  });
  contact.addEventListener('click', function () {
    menu.classList.toggle('navigation-list_active');
  });
});
$(document).ready(function () {
  $('.accordion-item__trigger').click(function () {
    $(this).next('accordion-item__content').slideToggle();
  });
});
$(document).ready(function () {
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        vertical: false,
        verticalSwiping: false
      }
    }]
  });
  $('#first').click(function (event) {
    $('.slider-nav').slick('goTo', 0);
  });
  $('#second').click(function (event) {
    $('.slider-nav').slick('goTo', 1);
  });
  $('#third').click(function (event) {
    $('.slider-nav').slick('goTo', 2);
  });
});