/*
Description: DESCRIPTION INFO GOES HERE
Author: Lyndon Modomo
Date: DATE GOES HERE
*/

$(function(){

	var leftNav = $('#contentleft'), //Sets the My List is Awesome div to a variable
		rightNav = $('#contentright'), //Sets the My List is more awesome div to a variable
		leftNavUL = leftNav.find('ul'), //Makes a variable for the left nav's ul
		rightNavUL = rightNav.find('ul') //Makes a variable for the right nav's ul
	;	 

	leftNavUL.css('backgroundColor', '#ff9933'); // Changes the background color to orange
	//leftNavUL.css({backgroundColor: "orange"});

	console.log('Top Offset:', leftNavUL.offset().top); // Logs to the console the top offset of the leftNav div
	console.log('Top Position:', leftNavUL.position().top); //Logs to the console the top position of the leftNav's ul

	leftNavUL.find('li:eq(1)').css({marginLeft: 30}); //Adds margin-left to the second list item of the leftNav

	leftNavUL.find('li:eq(3)').css({color: 'red'}); //changes the color of the fourth list item of the leftNav

	console.log(leftNavUL.find('li').filter(':eq(3)').width()); //Logs the width of the fourth item of the leftNav

	var h3Right = rightNav.find('h3').css({float: 'right'}); //Floats the h3 of the rightNav to the right

	h3Right.addClass('listhead'); //Adds a class of listhead to the variable h3Right

	console.log("listhead: ", h3Right.hasClass('listhead')); //Logs if h3Right has a class of listhead

	console.log(rightNavUL); //Logs the value of the rightNavUL prior to any changes 

	rightNavUL  //changes the link of the third list item of the rightNavUL
		.find('li')
		.children(':eq(2)')
		.attr('href', 'http://www.us.playstation.com')
	;

	rightNavUL //changes the link of all a tags that are not the first
		.find('a')
		.not(':eq(0)')
		.attr('href', 'http://nogoogle.com')
	;




});