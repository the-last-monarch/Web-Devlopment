$("h1").addClass("big-title margin-50");

$("h1").text("Bye");

$("button").html("<em>Hey</em>");

console.log($("img").attr("src"));
$("a").attr("href", "https://bing.com");

$("h1").click(function () {
  $("h1").css("color", "red");
});

// $("button").click(function () {
//   $("h1").css("font-family", "Times New Roman", "Times", "serif");
// });

$("input").keydown(function (event) {
  console.log(event.key);
});

$(document).keydown(function (event) {
  $("h1").text(event.key);
});

$("h1").on("mouseover", function () {
  $("h1").css("color", "darkgreen");
});

// $("button").on("click", function () {
//   $("h1").fadeToggle();
// });

// $("button").on("click", function () {
//   $("h1").animate({ opacity: 0.4 });
// });

$("button").on("click", function () {
  $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
});
