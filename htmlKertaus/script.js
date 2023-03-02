$(function () {
  console.log("Hello World");
  $(".daily-btn").toggleClass("opacity-40 opacity-100");

  $(".daily-btn").on("click", function () {
    if ($(".daily-btn").hasClass("opacity-40")) {
      $(".daily-btn").toggleClass("opacity-40 opacity-100");
      if ($(".weekly-btn").hasClass("opacity-100")) {
        $(".weekly-btn").toggleClass("opacity-40 opacity-100");
      }
      if ($(".monthly-btn").hasClass("opacity-100")) {
        $(".monthly-btn").toggleClass("opacity-40 opacity-100");
      }

      if ($(".daily").hasClass("hidden")) {
        $(".daily").toggleClass("hidden");
      }
      if (!$(".weekly").hasClass("hidden")) {
        $(".weekly").toggleClass("hidden");
      }
      if (!$(".monthly").hasClass("hidden")) {
        $(".monthly").toggleClass("hidden");
      }
    }
  });
  $(".weekly-btn").on("click", function () {
    if ($(".weekly-btn").hasClass("opacity-40")) {
      $(".weekly-btn").toggleClass("opacity-40 opacity-100");
      if ($(".daily-btn").hasClass("opacity-100")) {
        $(".daily-btn").toggleClass("opacity-40 opacity-100");
      }
      if ($(".monthly-btn").hasClass("opacity-100")) {
        $(".monthly-btn").toggleClass("opacity-40 opacity-100");
      }

      if (!$(".daily").hasClass("hidden")) {
        $(".daily").toggleClass("hidden");
      }
      if ($(".weekly").hasClass("hidden")) {
        $(".weekly").toggleClass("hidden");
      }
      if (!$(".monthly").hasClass("hidden")) {
        $(".monthly").toggleClass("hidden");
      }
    }
  });
  $(".monthly-btn").on("click", function () {
    if ($(".monthly-btn").hasClass("opacity-40")) {
      $(".monthly-btn").toggleClass("opacity-40 opacity-100");
      if ($(".daily-btn").hasClass("opacity-100")) {
        $(".daily-btn").toggleClass("opacity-40 opacity-100");
      }
      if ($(".weekly-btn").hasClass("opacity-100")) {
        $(".weekly-btn").toggleClass("opacity-40 opacity-100");
      }

      if (!$(".daily").hasClass("hidden")) {
        $(".daily").toggleClass("hidden");
      }
      if (!$(".weekly").hasClass("hidden")) {
        $(".weekly").toggleClass("hidden");
      }
      if ($(".monthly").hasClass("hidden")) {
        $(".monthly").toggleClass("hidden");
      }
    }
  });
})();
