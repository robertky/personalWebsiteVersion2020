(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#sideNav",
  });
})(jQuery); // End of use strict

$(function () {
  $.ajax({
    type: "GET",
    dataType: "json",
    url:
      "https://836qlfun65.execute-api.us-east-1.amazonaws.com/Prod/viewcounter",
    crossDomain: true,
    success: function (data) {
      //console.log("success", data);
      $("#lbl").html(data["Count"]["Attributes"]["CountTracker"]);
    },
    error: function (data) {
      console.log("Error", data);
    },
  });
});

document.getElementById("current_year").innerHTML = new Date().getFullYear();
