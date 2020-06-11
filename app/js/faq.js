$(function() {
  const itemTabsControl = $(".faq-tabs__control-item--link");
  
  itemTabsControl.on("click", function(e){
    e.preventDefault();
    const id = $(this).attr("href");
    $(this).parent().addClass("active-faq-tabs").siblings().removeClass("active-faq-tabs");
    $(id).removeClass("hide-faq-tabs").siblings().addClass("hide-faq-tabs");
  });

})
