$(document).ready(function () {

   $(".owl-carousel").owlCarousel({
      items: 1,
      loop: true,
      nav: true,
      dots: true,
      navText: ["<i class='opinia__arrow opinia__arrow--l icon-arrows-left'></i>", "<i class='opinia__arrow opinia__arrow--r icon-arrows-right'></i>"]
   });

   $("#menu").on("click", "a", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
         top = $(id).offset().top;
      $('body,html').animate({ scrollTop: top }, 1000);
   });


});