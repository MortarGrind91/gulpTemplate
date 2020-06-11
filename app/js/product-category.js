$(function () {
  let overlay = $(".overlay-filters"),
    bntCloseFilter = $(".cat-filters__fixed-close"),
    filter = $(".cat-filters");
  titleFilter = $(".cat-filters__panel-title");
  btnOpenFilter = $(".cat-open-filters__btn");

  btnOpenFilter.on("click", openFilter);
  bntCloseFilter.on("click", closeFilter);
  overlay.on("click", closeFilter);

  titleFilter.on("click", function () {
    $(this)
      .siblings(".cat-filters__panel-content")
      .slideToggle();
    $(this).toggleClass("open-panel");
  });

  function closeFilter() {
    overlay.removeClass("open-filter");
    filter.removeClass("open-filter");
    $("html, body").removeClass("noscroll");
  }

  function openFilter() {
    overlay.addClass("open-filter");
    filter.addClass("open-filter");
    $("html, body").addClass("noscroll");
  }

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
});