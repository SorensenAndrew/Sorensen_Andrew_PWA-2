/*  
	Your Project Title
	Author: You
*/


    $(function(){
        /*=================================== Log In ===================================*/
        $('#signinButton').click(function(){
            var user = $('#username').val();
            var pass = $('#password').val();

            $.ajax({
                url:'xhr/login.php',
                type: 'post',
                dataType: 'json',
                data: {
                    username: user,
                    password: pass
                },
                success: function(response) {
                    console.log("Test User");
                    if(response.error){
                        alert(response.error);
                    }else{
                        window.location.assign('dashboard.html');
                    };
                }
            });
        });

        /*=================================== Modal ===================================*/
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
        /*=================================== Add Projects to Page===================================*/
        var projects = function(){

            console.log('projects');

            $.ajax({
                url: 'xhr/get_projects.php',
                type: 'get',
                dataType: 'json',
                success: function (response) {
                    if (response.error) {
                        console.log(response.error);
                    } else {

                        $(".projects").empty();

                        for(var i= 0, j=response.projects.length; i < j;i++){
                            var result = response.projects[i];

                            $(".projects").append(
                                    '<div style = "border:1px solid black">' +
                                    "<input class='projectid' type='hidden' value='" + result.id + "'>" +
                                    "Project Name: " + result.projectName + "<br>" +
                                    "Project Description: " + result.projectDescription + "<br>" +
                                    "Project Status: " + result.status + "<br>" +
                                    '<button class="deletebtn">Delete</button>' +
                                    '<button class="editbtn">Edit</button>' +
                                    '</div> <br>'
                            );
                        };
                        $('.deletebtn').on('click', function(e){
                            var pid = $(this).parent().find(".projectid").val();

                            $.ajax({
                                url: 'xhr/delete_project.php',
                                data: {
                                    projectID: pid
                                },
                                type: 'POST',
                                dataType: 'json',
                                success: function(response){
                                    console.log('test success');

                                    if(response.error){
                                        alert(response.error);

                                    }else{
                                        console.log('delete_project');
                                        //console.log(result.id);
//                                        window.location.assign('projects.html');
                                        $( "#dialog" ).dialog();
                                        projects();

                                    }
                                }
                            });
                        });//end delete
                    }

                }
            })
        };
        projects();

        /*=================================== To Profile Page Button ===================================*/

        $('.projectsbtn').on('click', function(e) {
            e.preventDefault();
            window.location.assign("projects.html");
        });
        /*=================================== Add Project ===================================*/

        $('#addButton').on('click', function(e) {
            e.preventDefault();
            var projName = $('#projectName').val(),
                projDesc = $('#projectDescription').val(),
                projDue = $('#projectDueDate').val(),
                status = $('input[name = "status"]:checked').prop("id");
                console.log(projName, projDesc, projDue);

            $.ajax({
                url: "xhr/new_project.php",
                type: 'post',
                dataType: "json",
                data: {
                    projectName: projName,
                    projectDescription: projDesc,
                    dueDate: projDue,
                    status: status
                },
                success: function(response) {
                    console.log('Testing for success');

                    if(response.error) {
                        alert(response.error);
                    }else{
                        window.location.assign("projects.html");
                    };
                }
            });
        });


        /*=================================== Register ===================================*/

/*        $('#register').on('click', function(){
            var firstname= $('#first').val(),
                lastname= $('#last').val(),
                username= $('#username').val(),
                email= $('#email').val(),
                password= $('#password').val;

            $.ajax({
                url:'xhr/register.php',
                type: 'post',
                dataType: 'json',
                data: {
                    firstname: firstname,
                    lastname: lastname,
                    username: username,
                    email: email,
                    password: password
                },

                success: function(response){
                    if (response.error){
                        alert(response.error);
                    }else{
                        window.location.assign('dashboard.html')
                    }
                }
            });
        }); */


        $('#register').on('click', function(){
            console.log("hey");
            var firstname = $('#first').val(),
                lastname = $('#last').val(),
                username = $('#username').val(),
                email = $('#email').val(),
                password = $('#password').val();
            console.log(firstname + ' ' + lastname + ' ' + username + ' ' + password);

            $.ajax({
                url: 'xhr/register.php',
                type: 'post',
                dataType: 'json',
                data: {
                    firstname: firstname,
                    lastname: lastname,
                    username: username,
                    email: email,
                    password: password
                },

                success: function(response){
                    if(response.error){
                        alert(response.error);
                    } else {
                        window.location.assign('dashboard.html');
                    }
                }
            });
        });
        /*=================================== Username Display ===================================*/

        $.getJSON('xhr/check_login.php', function(data){
            console.log(data);
            $.each(data, function(key, val){
                console.log(val.first_name);
                $('.userid').html("Welcome User: " + val.first_name);
            });
        });


        /*=================================== Accordian ===================================*/

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

        /*=================================== Tooltip ===================================*/

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

        /*=================================== Date Picker ===================================*/

        $('.mydatepicker').datepicker();


        /*=================================== Sortable ===================================*/

        $(function() {
            $( "#sortable" ).sortable();
            $( "#sortable" ).disableSelection();
        });

        /*=================================== Dialog ===================================*/

        /*=================================== Log Out ===================================*/

        $('#logout').click(function(e){
            e.preventDefault;
            $.get('xhr/logout.php', function(){
                window.location.assign('index.html');
            })
        });







    }); // end private scope




