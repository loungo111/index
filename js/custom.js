// JavaScript Document

$('#danhmuc').owlCarousel ({
    loop:true,
    margin:25,
    responsiveClass:true,
    smartSpeed:1000,   	
	autoplay:true,		
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})


