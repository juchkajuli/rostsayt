$(document).ready(function(){
 $('.owl-carousel').owlCarousel();
});

$('#js-carousel-1').owlCarousel({
 loop: true,
 autoplay: true,
 autoplayTimeout: 2000,
 autoplaySpeed: 3000,
 autoplayHoverPause: true,
 slideTransition: 'linear',
 items: 2,
 nav: false,
 dots: false,
 responsive: {
   0: {
     items: 2
   },
   600: {
     items: 2
   }, 
   1200: {
     items: 4
   }
 }
});

$(document).ready(function(){
  $('.owl-carousel-1').owlCarousel();
 });
 
 $('#js-carousel-2').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplaySpeed: 2000,
  autoplayHoverPause: true,
  slideTransition: 'ease',
  items: 2,
  nav: false,
  dots: true,
 
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
 });

 $(document).ready(function(){
  $('.owl-carousel').owlCarousel();
 });
 
 $('#js-carousel-3').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplaySpeed: 4000,
  autoplayHoverPause: true,
  slideTransition: 'ease',
  items: 1,
  nav: true,
  dots: true,
 
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
 });

 $(document).ready(function(){
  $('.owl-carousel').owlCarousel();
 });
 
 $('#js-carousel-4').owlCarousel({
  loop: true,
  autoplay: false,
  autoplayTimeout: false,
  autoplaySpeed: false,
  autoplayHoverPause: false,
  slideTransition: 'ease',
  items: 1,
  nav: true,
  dots: true,
 
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    900: {
      items: 2
    },
    1440: {
      items: 2
    }
  }
 });