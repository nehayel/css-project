$(document).ready(function () {
  $(".slick-slider").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    slidesToShow: 1,
  });

  $(".slider-courses").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    prevArrow:
      '<button type="button" class="slick-prev custom-prev"><i class="fa-solid fa-chevron-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next custom-next"><i class="fa-solid fa-chevron-right"></i></button>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  // mean menu
  jQuery("#mobile-menu").meanmenu({
    meanScreenWidth: "767",
    meanMenuContainer: ".mobile-menu",
  });
});
