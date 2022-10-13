// menu
$(window).scroll(function(){
    var scrolling = $ (this) .scrollTop()
    if(scrolling > 20){
        $(".navbar").addClass("bg")
    }else{
        $(".navbar").removeClass("bg")
    }
})

// mixit up
var mixer = mixitup('.mix');

// slick
$('.member-item').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000,
  });
//   kursor js
new kursor({
    type: 1
})
