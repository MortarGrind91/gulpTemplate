$(function() {
  const itemTabsControl = $(".payment-tabs__control-item--link");
  
  itemTabsControl.on("click", function(e){
    e.preventDefault();
    const id = $(this).attr("href");
    $(this).parent().addClass("active-payment-tabs").siblings().removeClass("active-payment-tabs");
    $(id).removeClass("hide-payment-tabs").siblings().addClass("hide-payment-tabs");
  });

})
