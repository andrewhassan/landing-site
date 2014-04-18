function Tracker() {
  this.session_id = getSessionId();
  if (this.session_id === null) {
    this.session_id = generateSessionId();
  }
}

Tracker.prototype.sendTrackingEvent = function (event) {
  var _event = {};

  if (event === undefined || event === null) {
    return;
  }

  _event.s_id = this.session_id;
  _event.type = event.type || "unknown";
  _event.element = event.element || null;
  _event.scroll_position = event.scroll_position || null;
  _event.timestamp = (new Date()).getTime() / 1000;

  $.post({
    url: '/track',
    data: _event
  });
};

function getSessionId() {
  var regex = new RegExp("[\\?&]s_id=([^&#]*)"),
    results = regex.exec(location.search);
  if (results === null) {
    return null;
  }

  return decodeURIComponent(results[1].replace(/\+/g, " "));
}

function generateSessionId() {
  // Generate (weak) ID
  return Math.random().toString(18).substring(2);
}
