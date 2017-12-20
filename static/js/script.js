// window.onload = function() {
//     alert('oi');
//     // ação pra quando o site abrir
// }



// // função abstrata = descartável
// // onde? quando? o que?


// var imprimiTeste = function() {
//     alert('oi');
// }

$('.rectangleover').hover(function() {
    $(this).children().show();
  }, function() {
        $(this).children().hide();
  });

$(window).scroll(function() {
    $('.navbar').addClass();
  }, function() {
        $('.navbar').removeClass();
  });
  
