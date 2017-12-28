$(document).ready(function() {

  function triggerAnimation(dot, spin) {
    dot.on('mouseover', function() {
      $('.cube').addClass(spin);
      $('.direction').fadeOut();
      setTimeout(function() {
        $('.cube').removeClass(spin);
        $('.direction').fadeIn();
      }, 2000);
    });
  }

  triggerAnimation( $('.north'), 'spinUp');
  triggerAnimation( $('.west'), 'spinLeft');
  triggerAnimation( $('.east'), 'spinRight');
  triggerAnimation( $('.south'), 'spinDown');

  $('.cube').on('click', function() {
    $(this).addClass('spinDiagonal');
    $('.direction').fadeOut();
    setTimeout(function() {
      $('.cube').removeClass('spinDiagonal');
      $('.direction').fadeIn();
    }, 2000);
  });

});
