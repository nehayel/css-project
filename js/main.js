$(document).ready(function () {
  $(".slick-slider").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
  });

  $(".slider-courses").slick({
    dots: false,
    prevArrow:
      '<button type="button" class="slick-prev custom-prev"><i class="fa-solid fa-chevron-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next custom-next"><i class="fa-solid fa-chevron-right"></i></i></button>',
  });
});
