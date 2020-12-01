$(".navbar-item").hover(function(){
  // nascondo tutte le liste menu ad ogni hover, così che
  // se faccio hover su un nuovo elemento il menu di quello prima scompare.
  $(".list").hide();
  // vado a selezionare l'elemento dentro i navbar-item con .children
  // e con .show lo mostro.
  $(this).children().show();
})

// questa funzione invece serve per togliere il menu
// quando si esce con l'hover.
$(".navbar-item").mouseleave(function(){
  $(".list").hide();
})
