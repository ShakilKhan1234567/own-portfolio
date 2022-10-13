// menu
$(window).scroll(function(){
  var scrolling = $ (this).scrollTop()
  if(scrolling > 20){
    $(".navbar").addClass("bg")
  }else{
    $(".navbar").removeClass("bg")
  }
})

// popular slick
$('.popular-slick').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow:".prev",
    nextArrow:".next"
  });
