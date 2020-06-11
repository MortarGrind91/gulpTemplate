const productSlider = new Swiper(".product-main__slider", {
  speed: 700,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  preventClicks: false,
  preventClicksPropagation: false,
});

const alertProductSliderThumbs = new Swiper(".alert-product__thumbs", {
  init: false,
  observer: true,
  slidesPerView: 3,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});

const alertProductSlider = new Swiper(".alert-product__container", {
  init: false,
  observer: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  preventClicks: false,
  preventClicksPropagation: false,
  thumbs: {
    swiper: alertProductSliderThumbs
  }

});



$(function () {
  productSlider.on("slideChange", function () {
    $(".product-main__thumbs-list .product-main__thumbs-item").removeClass("active-thumbs");
    let i = productSlider.activeIndex + 1;
    $(`.product-main__thumbs-list .product-main__thumbs-item:nth-child(${i})`).addClass("active-thumbs");
  });

  $(".product-main__thumbs-list .product-main__thumbs-item").on("click", function () {
    $(".product-main__thumbs-list .product-main__thumbs-item").removeClass("active-thumbs");
    $(this).addClass("active-thumbs");
    productSlider.slideTo($(this).index());
  });

  // Stars rating
  function showRatings() {
    $(".reviews-item").each(function () {
      const rating = $(this).find(".reviews-item__rating").data("rating");
      const stars = $(this).find(".star");
      stars.each(function (index) {
        if (index < rating) {
          $(this).addClass("selected");
        }
      });
    });
  }
  showRatings();

  $(".reviews-rating span").on("click", function (e) {
    $(".reviews-rating span").removeClass("current-star");
    let rate = $(e.target).attr("data-rate");
    $(e.target).addClass("current-star");
    $("#r-rating").val(rate);
  });

  //slow anchor
  let page = $('html, body');
  $('.anchor-btn').click(function () {
    page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top - 25
    }, 600);
    return false;
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

  //popup product
  $("#alert-product").fancybox({
    src: ".alert-product",
    baseClass: "product-alert",
    type: "inline",
    touch: false,
    autoFocus: false,
    beforeShow: function () {
      verticalScrollPresent() && $("[data-popup-compensate]").addClass("popup-compensate");
    },
    afterLoad: function () {
      alertProductSliderThumbs.init();
      alertProductSlider.init();
    },
    afterClose: function () {
      $("[data-popup-compensate]").removeClass("popup-compensate");
    }
  });

  $(".alert-product__btn").on("click", function () {
    $.fancybox.close();
  });

  //popup delivery dnepr
  $(".js-popup-delivery-dnepr").fancybox({
    src: ".delivery-popup__dnepr",
    baseClass: "delivery-popup__box",
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

  //popup delivery kiev
  $(".js-popup-delivery-kiev").fancybox({
    src: ".delivery-popup__kiev",
    baseClass: "delivery-popup__box",
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

  //popup delivery pickup
  $(".js-popup-delivery-pickup").fancybox({
    src: ".delivery-popup__pickup",
    baseClass: "delivery-popup__box",
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

});