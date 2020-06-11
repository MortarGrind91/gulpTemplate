$(function () {
  //cart popup
  $(".js-popup-cart").fancybox({
    src: ".cart-popup",
    baseClass: "popup-cart",
    type: "inline",
    touch: false,
    afterClose: function () {
      $("[data-popup-compensate]").removeClass("popup-compensate");
    },
    beforeShow: function () {
      verticalScrollPresent() && $("[data-popup-compensate]").addClass("popup-compensate");
    },
  });

  //show more products
  $(".products-more__mob ").on("click", function (e) {
    e.preventDefault();
    $(this).siblings(".products-box").find(".product-more").slideToggle();
  });

  function verticalScrollPresent() {
    return (
      document.documentElement.scrollHeight !==
      document.documentElement.clientHeight
    );
  }

});