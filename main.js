$(".navbar-item").click(function(){
  $(".list").hide();
  $(this).children().show();
  console.log($(this).children());
})
