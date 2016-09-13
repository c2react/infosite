
// Loads the tech team profiles
$("#teamWrapper").load("profiles/team.html");

$("#contact").click(function() {
    $('html,body').animate({
        scrollTop: $("footer").offset().top},
        'slow');
});

$("#meetTeam").click(function() {
    $('html,body').animate({
        scrollTop: $("body").offset().top},
        'slow');
});