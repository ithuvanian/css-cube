$(document).ready(function() {

  function triggerAnimation(dot, spin) {
    dot.on('mouseover', function() {
      $('.cube').addClass(spin);
      $('.direction').fadeOut();
      setTimeout(function() {
        $('.cube').removeClass(spin);
        $('.direction').fadeIn();
      }, 2500);
    });
  }

  triggerAnimation( $('.north'), 'spinUp');
  triggerAnimation( $('.west'), 'spinLeft');
  triggerAnimation( $('.east'), 'spinRight');
  triggerAnimation( $('.south'), 'spinDown');

});
