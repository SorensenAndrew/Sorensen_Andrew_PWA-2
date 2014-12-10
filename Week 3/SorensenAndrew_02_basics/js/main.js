/**
 * Created by Andrew Sorensen
 * 02_basics
 */
 $("h1:first-of-type").css("color", "#8B4513");

$("h2:first").css("color","#696969");
$("h2:last").css("color","#8B4513");

$("#spock").hover(function() {
        $("p:first").removeClass("hidden");
        $("h2").addClass("big");
    }
);

$("#james").hover(function() {
        $("p:last").removeClass("hidden");
        $("h2").addClass("big");
    }
);

$(".cat").hover(function(){
    $(this).width(400).height(350);
});

$("#title").one('mouseenter', function(){
    $(this).append("<span> ... and what they do</span>");
});





