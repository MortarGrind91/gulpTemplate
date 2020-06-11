const topProductSlider = new Swiper(".top-products__wrap", {
  speed: 500,
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  simulateTouch: false,
  breakpoints: {
    1024: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    600: {
      slidesPerView: 1,
    }
  }
});

function verticalScrollPresent() {
  return (
    document.documentElement.scrollHeight !==
    document.documentElement.clientHeight
  );
}

//popup buy onclick
$(".js-popup-onclick").fancybox({
  src: ".buy-onclick",
  baseClass: "popup-onClick",
  type: "inline",
  touch: false,
  autoFocus: false,
  afterClose: function () {
    $("[data-popup-compensate]").removeClass("popup-compensate");
  },
  beforeShow: function () {
    verticalScrollPresent() && $("[data-popup-compensate]").addClass("popup-compensate");
  },
});