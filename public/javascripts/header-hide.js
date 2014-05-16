$(document).ready(function () {
  var $header = $('body > .header'),
    $content = $('body > .content'),
    header_open = true,
    header_height = 100,
    animation_speed = 300;

  function hideHeader() {
    $header.velocity({top: -header_height}, animation_speed);
    $content.velocity({'margin-top': 0}, animation_speed);
  }

  function showHeader() {
    $header.velocity({top: 0}, animation_speed);
    $content.velocity({'margin-top': header_height}, animation_speed);
  }

  // TODO: Attach scroll listener here
});
