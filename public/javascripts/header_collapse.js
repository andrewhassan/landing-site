$(document).ready(function () {
  var $header = $('body > .header'),
    collapse_scroll_position = $("#about").offset().top;

  function setHeaderClass() {
    console.log("fired");
    var current_scroll_position = $(document).scrollTop();
    // If you're scrolled past the trigger position, collapse header
    if (current_scroll_position > collapse_scroll_position) {
      $header.addClass("collapsed");
    }
    else {
      $header.removeClass("collapsed");
    }
  }

  // Throttle the call so that it can be called every 100 ms at max
  var throttled_setHeaderClass = _.throttle(setHeaderClass, 100);

  $(document).on('scroll', function () {
    throttled_setHeaderClass();
  });
});
