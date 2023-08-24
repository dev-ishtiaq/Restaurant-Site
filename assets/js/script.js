// // -------------> jQuery
jQuery(function($) {
  "use strict";
  
  /*-------------------
  Preloder area here js
  --------------------*/
  $(window).on("load", function() {
      $(".preloader").fadeOut(5000);  
      $(".preloader2").fadeOut(1000);
      $(".preloader3").fadeOut(1000);       
  });

  // -----------------------
  // Goto top button area js
  // -----------------------
  $(window).on('scroll', function() {
    if($(this).scrollTop() > 80){
      $(".topUp-btn").fadeIn(1000);
    } else {
      $(".topUp-btn").fadeOut(1000)
    }
  });
  $('topUp-btn').on('click', function(e) {
    var anchor =$(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top - 50
    }, 1000);
    e.preventDefault();
  })

  // ====================
  // Header area start js
  // ====================
  // mobile menu bar ====
  $(".mobile-menu").on('click', function() {
    $(".off-canvas-menu").toggleClass("off-canvas-menu-active");
    $(".body-overlay").addClass("body-overlay-active");
  });
  //=== Off close menu bar ===
  $(".off-close-menu").on('click', function() {
    $(".off-canvas-menu").removeClass("off-canvas-menu-active");
    $(".body-overlay").removeClass("body-overlay-active");
  });
  //=== Body Overlay ===
  $(".body-overlay").on('click', function() {
    $(".off-canvas-menu").removeClass("off-canvas-menu-active");
    $(".body-overlay").removeClass("body-overlay-active");
  });
  //=== off-canvas-menu-link ===
  $(".off-menu-link1").on('click', function() {
    $(".off-sub-menu1").toggleClass("active");
    $(".off-sub-menu2").removeClass("active");
    $(".off-sub-menu3").removeClass("active");
    $(".off-sub-menu4").removeClass("active");
    $(".off-sub-menu5").removeClass("active");
  });
  $(".off-menu-link2").on('click', function() {
    $(".off-sub-menu2").toggleClass("active");
    $(".off-sub-menu1").removeClass("active");
    $(".off-sub-menu3").removeClass("active");
    $(".off-sub-menu4").removeClass("active");
    $(".off-sub-menu5").removeClass("active");
  });
  $(".off-menu-link3").on('click', function() {
    $(".off-sub-menu3").toggleClass("active");
    $(".off-sub-menu1").removeClass("active");
    $(".off-sub-menu2").removeClass("active");
    $(".off-sub-menu4").removeClass("active");
    $(".off-sub-menu5").removeClass("active");
  });
  $(".off-menu-link4").on('click', function() {
    $(".off-sub-menu4").toggleClass("active");
    $(".off-sub-menu1").removeClass("active");
    $(".off-sub-menu2").removeClass("active");
    $(".off-sub-menu3").removeClass("active");
    $(".off-sub-menu5").removeClass("active");
  });
  $(".off-menu-link5").on('click', function() {
    $(".off-sub-menu5").toggleClass("active");
    $(".off-sub-menu1").removeClass("active");
    $(".off-sub-menu2").removeClass("active");
    $(".off-sub-menu3").removeClass("active");
    $(".off-sub-menu4").removeClass("active");
  });

  // -----------------
  // create sticky js
  // -----------------
  $(window).on('scroll', function() {
    var scroll = $(window).scrollTop();
    if (scroll < 30) {
      $(".header-area").removeClass("sticky");
    } else {
      $(".header-area").addClass("sticky");
    }
  });

  // -------------------
  // creating conter up js
  // -------------------
  $(".counter span").counterUp({
    delay: 10,
    time: 1000
  });

  // -----------------------------
  // There will create owlCarousel
  // Logo carousel area here js
  // -----------------------------
  $('.carousel-items').owlCarousel({
    loop: true,
    items: 5,
    margin: 130,
    nav: false,
    dots: false,
    autoplay: true,
    smartSpeed: 2000,
    autoplayTimeout: 4000,
    responsive: {
      0: {
        items: 2,
        margin: 40,
      },
      500: {
        items: 4,
        margin: 60
      },
      800: {
        items: 4,
        margin: 60
      },
      992: {
        items: 5,
        margin: 80
      }
    }
  });

  // ------------------------------
  // There creating a video gallery
  // ------------------------------
  $('expand-video').magnificPopup({
      type: 'iframe'
  });

  // --------------------
  // countdown js
  // --------------------
  $('#rc-box').countdown('2022/08/12', function(event) {
    $(this).html(event.strftime('<span class="countdown-wrap"><span class="single-count">%D<br><span>days</span></span><span class="single-count">%H<br><span>Hours</span></span><span class="single-count">%M<br><span>Minutes</span></span><span class="single-count">%S<br><span>Seconds</span></span></span>'));
  });


// ----------------
// AOS animate js
// ----------------
  AOS.init({
    duration: 1000,
    once: true
  });



}(jQuery));

console.log("hello");