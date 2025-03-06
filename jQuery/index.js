$("h1").addClass("big-title")

$("h1").text("Bye")

$("button").html("<em>Don't click me</em>")

console.log($("img").attr("src"))

$("h1").on("mouseover",function(){
    $("h1").css("color", "pink")
})

$(document).keypress(function(event){
    $("h1").text(event.key)
})

$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5})
})