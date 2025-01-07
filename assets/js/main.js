$(document).ready(function () {
  setTimeout(() => {
    $("#screen-1").addClass("active");
  }, 500);

  $("#screen-1 button").click(function () {
    $("#screen-1").addClass("inactive");
    setTimeout(() => {
      $("#screen-2").addClass("active");
    }, 200);
  });

  $("#screen-2 button").click(function () {
    $("#screen-2").addClass("inactive");
    setTimeout(() => {
      $("#screen-3").addClass("active");
    }, 200);
  });
});
