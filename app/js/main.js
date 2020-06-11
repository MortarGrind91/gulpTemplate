$(function () {
  //hover menu
  let menuItem = $(".header-perent__menu, .header-menu__list-item");
  let overlay = $(".overlay");

  menuItem.hover(function () {
    $(this).toggleClass("active-parent");
    overlay.toggleClass("show");
    $(".header").toggleClass("is-hover")
  });

  $(".header-bottom__btn").on("click", function () {
    $(".header-menu").toggleClass("open-menu");
    $(this).toggleClass("open-menu");
   
  });

  //checked home, 404 page
  if (window.location.pathname.indexOf("/index.html") >= 0 || window.location.pathname.indexOf("/404.html") >= 0) {
    $(".header-bottom__btn, .header-menu").addClass("open-menu");
    $(window).scroll(function (e) {
      if ($(this).scrollTop() == 0) {
        $(".header-bottom__btn, .header-menu").addClass("open-menu");
      }
    });
  }

  //mobile menu 
  let burgerMenu = $(".header-burger");
  let closeBtn = $(".mobile-top__close");

  burgerMenu.on("click", openMobileMenu);
  closeBtn.on("click", closeMobileMenu);

  //open mobile menu
  function openMobileMenu() {
    overlay.addClass("show");
    $("#mobile-menu").addClass("open");
    $("html, body").addClass("noscroll");
    $(".header").addClass("open-menu");
    $(".fake-header").addClass("show-fake-header");
    $(".fixed-header__overlay").show();
  }
  //close mobile menu
  function closeMobileMenu() {
    $("#mobile-menu").removeClass("open");
    overlay.removeClass("show");
    $("html, body").removeClass("noscroll");
    $(".header").removeClass("open-menu");
    $(".fake-header").removeClass("show-fake-header");
    $(".fixed-header__overlay").hide();
  }

  overlay.on("click", function () {
    closeMobileMenu();
    closeSearch();
    closeSearchDesktop();
  });

  //toggle slide mobile menu
  $(".mobile-menu__title").on("click", function () {
    $(".mobile-menu__list").slideToggle();
  });
  //toggle slide mobile menu
  $(".mobile-menu__parent").on("click", function (e) {
    e.preventDefault();
    $(this).find(".mobile-submenu__list").slideToggle();
    $(this).toggleClass("active-menu-parent");
  });

  //show mobile search
  $(".icon-search").on("click", function () {
    openSearch();
  });

  function openSearch() {
    $(".icon-search").addClass("open-search");
    $(".mobile-search").addClass("open-search");
    overlay.addClass("show is-search");
    $("html, body").addClass("noscroll");
  }

  function closeSearch() {
    $(".icon-search").removeClass("open-search");
    $(".mobile-search").removeClass("open-search");
    $(".overlay").removeClass("is-search");
  }

  //desktop search
  $(".header-bottom__search").on("click", function(){
      $(".overlay").addClass("show");
      $(".header").addClass("is-show-search");
      $(this).addClass("is-show-search");
      // $("html, body").addClass("noscroll");
  });
  $(".fixed-header__overlay").on("click", function(){
    closeSearchDesktop();
    closeMobileMenu();
  });
  function closeSearchDesktop(){
    $(".header, .header-bottom__search").removeClass("is-show-search");
    // $("html, body").removeClass("noscroll");
  }

  //masked input
  $(".mask-phone").mask("+38 099 999-99-99");

  // Notify customisation
  $.notify.defaults({
    style: 'notify',
    autoHide: true,
    autoHideDelay: 3000,
    clickToHide: true,
    hideDuration: 400
  });

  $.notify.addStyle('notify', {
    html: `<div class="notify-content">
            <div class="notify-title" data-notify-html="title"></div>
            <span class="icon-cross notify-close"><svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="12.8427" height="1.31815" transform="matrix(0.71863 0.695393 -0.584787 0.811187 0.770874 0)"></rect>
            <rect width="12.8427" height="1.31815" transform="matrix(-0.71863 0.695393 0.584787 0.811187 9.22913 0)"></rect>
          </svg></span>
        </div>`
  });

  //add basket 
  let count = 1;
  $(".add-basket").on("click", function () {
    $(".basket").addClass("full");
    $(".count-item").text(count++);
    $.notify({
      title: `Товар добавлен в корзину`
    });
  });

  // Hide Header on on scroll down
  let scrollTop = $(window).scrollTop();
  fixMenu();
  $(window).on("scroll", fixMenu);

  function fixMenu() {
    scrollTop = $(window).scrollTop();
    if (scrollTop > 20) {
      $(".header").addClass("fixed-header");
      $(".fake-header").addClass("show-fake-header");
      $(".header-bottom__btn, .header-menu").removeClass("open-menu");
      $(".overlay").addClass("is-fixed-header");
      $(".header-bottom__search").addClass("fixed-search");
    } else {
      $(".fake-header").removeClass("show-fake-header");
      $(".header").removeClass("fixed-header");
      $(".overlay").removeClass("is-fixed-header");
      $(".header-bottom__search").removeClass("fixed-search");
    }
  }

  // Cookies-alert
  $('.cookies-alert__close, .cookies-alert__accept').click(e => {
    localStorage.cookiesAccept = true;
    $(e.target).closest('.cookies-alert').fadeOut(400);
  })
  //

  $(window).on('load', function () {
    //Cookies-alert
    if (!localStorage.cookiesAccept) $('.cookies-alert').show();
  });

});