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

   let isMobile = {
      Android: function () { return navigator.userAgent.match(/Android/i); },
      BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
      iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
      Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
      Windows: function () { return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i); },
      any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
   };
   let body = document.querySelector('body');
   if (isMobile.any()) {
      body.classList.add('touch');
   } else {
      body.classList.add('mouse');
   }


});