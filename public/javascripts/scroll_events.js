$(document).ready(function () {
  var $header = $('body > .header'),
    collapse_scroll_position = $("#about").offset().top,
    $sections = $(".content > section"),
    current_scroll_position;

  function setHeaderClass() {
    // If you're scrolled past the trigger position, collapse header
    if (current_scroll_position > collapse_scroll_position) {
      $header.addClass("collapsed");
    }
    else {
      $header.removeClass("collapsed");
    }
  }

  function setActiveNav() {
    if (current_scroll_position < collapse_scroll_position) {
      $("nav .active").removeClass("active");
      $("nav a").first().addClass("active");
    }
    else {
      $sections.each(function(section) {
        if ($(this).position().top <= current_scroll_position + 60) {
          $("nav .active").removeClass("active");
          $("nav a").eq(section).addClass("active");
        }
      });
    }
  }

  // Throttle the call so that it can be called every 100 ms at max
  var throttled_setHeaderClass = _.throttle(setHeaderClass, 100),
    throttled_setActiveNav = _.throttle(setActiveNav, 100);

  $(document).on('scroll', function (s) {
    current_scroll_position = $(document).scrollTop();
    throttled_setHeaderClass();
    throttled_setActiveNav();
  });

  // Call these on page load
  throttled_setHeaderClass();
  throttled_setActiveNav();

  $("nav a").on('click', function (e) {
    e.preventDefault();
    var offset = $($(e.currentTarget).attr('href')).offset().top;
    var scrollTo = offset > collapse_scroll_position ? offset - 40 : offset - 100;
    $('html, body').animate({
      scrollTop: scrollTo
    }, 1000);
  });
});
