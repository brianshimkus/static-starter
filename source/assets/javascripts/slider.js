$(document).ready(function(){
  $('.iosslider').iosSlider({
    snapToChildren: true,
    infiniteSlider: true,
    keyboardControls: true,
    desktopClickDrag: true
  });

  $('.slider-container .goToSlide .go').each(function(i) {
    $(this).bind('click', function() {
      $('.iosslider').iosSlider('goToSlide', i+1);
    });
  });
});