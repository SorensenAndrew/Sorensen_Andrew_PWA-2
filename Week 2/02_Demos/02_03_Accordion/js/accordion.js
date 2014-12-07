// JavaScript Document

$(function() {
	var headings = $("h2");
	var paragraphs = $("p");
	paragraphs.not(":first").hide();


//When a header is clicked, the first thing to do is check whether
//the paragraph underneath it is visible. If it is, then you don’t
//need to do anything.

headings.on("click", function() {
	var t = $(this);
		if(t.next().is(":visible")) {
		return;
	}
});

//next gets the element that immediately follows the current one in the DOM
//Using the return keyword causes the function to stop execution at that point, and no further code in that function will be run.

//Hiding the visible paragraph, in this instance it’s much easier to hide them all, and then show only the one you need.

	$(function() {
		var headings = $("h2");
		var paragraphs = $("p");
		paragraphs.not(":first").hide();
		headings.on("click", function() {
			var t = $(this);
		//Made var t into another variable because we used it more than once.
			var tPara = t.next();
			if(tPara.is(":visible")) {
			return;
			}
			paragraphs.hide();
			t.next().show();
			//Or
			//paragraphs.slideUp("normal");
			//tPara.slideDown("normal");
			});
	});
});
