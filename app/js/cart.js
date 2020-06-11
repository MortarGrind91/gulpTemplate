$(function () {

  //delete product
  function removeFromDOM(elem) {
    elem.remove();
  }

  $('.cart-products__item-close').click(function () {
    let elem = $(this).closest('.cart-products__item');
    removeFromDOM(elem);
    $.notify({
      title: `товар успешно удален из корзины`
    });
  })

  //resize textarea
  $('.container-textarea').on('keydown', 'textarea', function (e) {
    $(this).css('height', 'auto');
    $(this).height(this.scrollHeight);
  });
  $('.container-textarea').find('textarea').keydown();


});