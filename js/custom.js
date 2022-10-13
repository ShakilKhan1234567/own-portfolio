// // typing js

$(function(){
	$(".typed").typed({
		strings: ["Front-end Developer.", " <span class='typejs-color'>Freelancer</span> .",],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: true,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
});

// slick js
$('.slick').slick({
	infinite: true,
	slidesToShow: 2,
	slidesToScroll: 1,
	prevArrow: ".prev",
	nextArrow: ".next",
	autoplay: true,
	autoplaySpeed: 2000,
	responsive: [
		{
			breakpoint: 991,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			}
		  },
		{
		  breakpoint: 576,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
		  }
		},
		{
		  breakpoint: 575,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
		  }
		},
		{
		  breakpoint: 400,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
		  }
		},
	  ]
  });

// back2top
$(window).scroll(function(){
	var scrolling = $ (this).scrollTop()
	if(scrolling > 20){
		$(".back2top i").fadeIn(500)
	}else{
		$(".back2top i").fadeOut(500)
	}
})
// one click
$(".back2top i").click(function(){
    $("html, body").animate({
        scrollTop:0
    },1000)
})
