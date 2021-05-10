new WOW().init();

const swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.projects-pagination',
    type: 'bullets',
    bulletClass: 'projects-bullet',
    bulletActiveClass: 'projects-bullet-active',
    clickable: true
  },
});