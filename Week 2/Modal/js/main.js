/*  
	Your Project Title
	Author: You
*/
$(function(){

    $('.modalClick').on('click', function (e) {
        e.preventDefault();
        $('#overlay')
            .fadeIn()
            .find('#modal')
            .fadeIn();
    });

    $('.close').on('click', function (event) {
        event.preventDefault();
        $('#overlay')
            .fadeOut()
            .find('#modal')
            .fadeOut();
    });

    $('.mystatus').mouseover(function () {
        $(this).fadeTo(100, .3);
    });

    $('.mystatus').mouseout(function () {
        $(this).fadeTo(100, 1);
    });

});






