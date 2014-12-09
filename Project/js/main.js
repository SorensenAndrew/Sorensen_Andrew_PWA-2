/*  
	Your Project Title
	Author: You
*/


    $(function(){

        /* Modal */
        $('.modalClick').on('click', function (e) {  //when modalClick is clicked, run function
            e.preventDefault();                         // prevent page re-load
            $('#overlay')                               // target overlay
                .fadeIn()                               // fade in overlay
                .find('#modal')                         // find the id of modal
                .fadeIn();                              // fade in modal
        });

        $('.close').on('click', function (event) {      // when .close is clicked run function
            event.preventDefault();                     // prevent page reload
            $('#overlay')                               // target overlay
                .fadeOut()                              // fade out overlay
                .find('#modal')                         // target modal
                .fadeOut();                             // fade out modal
        });

        $('.mystatus').mouseover(function () {          //when mystatus is moused over run function
            $(this).fadeTo(100, .3);                    // fade the mystatus
        });

        $('.mystatus').mouseout(function () {           //when mystatus is moused out run function
            $(this).fadeTo(100, 1);                     //end fade
        });

        /* Accordian */

        $('#tabs p').hide().eq(0).show();               // hide all tabs, show first
        $('#tabs p:not(:first)').hide();                // hide all tabs paragraphs that are not first

        $('#tabs-nav li').click(function(e){            // when the li is clicked, run function
            e.preventDefault();                         // prevent page re-load
            $('#tabs p').hide();                        // hide #tabs p's

            $('#tabs-nav .current').removeClass("current");     //remove class of current from the tabs-nav
            $(this).addClass('current');                        // when tabs-nav is clicked add current class
            var clicked = $(this).find('a:first').attr('href');     //create variable that finds the first a tag and adds the atribute href

            $('#tabs ' + clicked).fadeIn('fast');                   // fade target tab in when clicked
        }).eq(0).addClass('current');

        /* Tooltip */

        $('.masterToolTip').hover(function () {


            var title = $(this).attr('title');                      //set 'title' to hold the title attribute
            $(this).data('tipText', title).removeAttr('title');      //save  'title' as data and remove attribute
            $('<p class = "toolTip"></p>')                          //create HTML <p> element
                .text(title)                                        //add 'title' as text in <p> element
                .appendTo('body')                                   //add <p> element to body
                .fadeIn('slow');                                    //fade in <p> element


        }, function () {
            $(this).attr('title', $(this).data('tipText'));          //add attribute title with "tipText data"
            $('.toolTip').remove();                                  //remove tooltip
        })

            .mousemove(function (e) {
                var mousex = e.pageX + 10;                          //create variable to hold x position
                var mousey = e.pageY + 5;                           //create variable to hold y position
                $('.toolTip').css({top: mousey, left: mousex});       //select toolTip ans change css
            });







    })(jQuery); // end private scope




