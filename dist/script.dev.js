"use strict";

/* document.querySelectorAll('.accordion-item__trigger').forEach((item) => 
    item.addEventListener('click', () => {
        item.parentNode.classList.toggle('accordion-item--active'); 
    })
); */
$(document).ready(function () {
  $('.accordion-item__trigger').click(function () {
    $(this).next('accordion-item__content').slideToggle();
  });
});