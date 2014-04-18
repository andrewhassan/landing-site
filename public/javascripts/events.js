// Set up tracking events
$(document).ready(function() {
  var tracker = new Tracker();
  var last_scroll_position = null;

  tracker.sendTrackingEvent({type: 'pageload'});

  $(window).scroll(function () {
    last_scroll_position = $(window).scrollTop();

    tracker.sendTrackingEvent({
      type: 'scroll',
      scroll_position: last_scroll_position
    });
  });

  $(window).click(function (event) {
    tracker.sendTrackingEvent({
      type: 'click',
      element: getElementNameWithId(event.target),
      scroll_position: last_scroll_position
    });
  });

  function getElementNameWithId(target) {
    var result = target.localName;
    if (target.id !== '') {
      result += '#' + target.id;
    }

    return result;
  }
});