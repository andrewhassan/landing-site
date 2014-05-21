$(document).ready(function() {
  $(".horizontal-line").addClass("show");

  // Clear the modal cache on close
  $('body').on('hidden.bs.modal', function () {
    $('#project_modal').removeData('bs.modal');
  });
});
