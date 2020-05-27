$(document).ready(function() {
    
    $('#fullpage').fullpage({
        //options here
        autoScrolling:true,
        scrollHorizontally: true,
        menu: '#menu',
    lockAnchors: false,
    anchors:['firstPage', 'secondPage'],
    navigation: true,
    navigationPosition: 'right',
    responsiveWidth:900,
    responsiveHeight:650,
    scrollingSpeed: 1500,
	autoScrolling: true,
	fitToSection: true,
	fitToSectionDelay: 1000,
	scrollBar: false,
    
    });
    $('.slider').owlCarousel({
        loop:true,
        margin:10,
        rtl:true,
        nav:true,
        responsive:{
            0:{
                items:1
            },
           
        }
    })

    
    $('.owl-customer-caption').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        rtl:true,
        navText: ["<img class='chevron' src='assets/img/chevron-right.svg'>","<img class='chevron' src='assets/img/chevron-left.svg'>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    $('.owl-partners').owlCarousel({
        loop:true,
        margin:10,
        dots:false,
        nav:false,
        rtl:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:6
            }
        }
    })



    let userWidth = $(document).innerWidth()
   if(userWidth <= 780){
      $('.main-menu li a svg').click(function(){
          $(this).parent().next().slideToggle();
          $(this).toggleClass('rotate-svg')
           
   }
      )
}
if(userWidth <= 780){
    $('.bg').remove()
    
}

if(userWidth <= 780){
    $('.slider-page').remove()
    
}
if(userWidth <= 780){
    $('.slider-paage .fp-tableCell').removeClass('fp-tableCell')
    
}

    if(userWidth >= 780){
        $('.main-menu li').hover(function(){
            $(this).find('.sub-menu').slideToggle();
         })
    }
    

    $('.res-btn-toggle').click(function(){
        $('.main-nav').toggleClass('transform-res-menu')
        $('.menu-overlay').toggleClass('toggle-main-overlay')
    })
    $('.menu-overlay').click(function(){
        $('.main-nav').toggleClass('transform-res-menu')
        $('.menu-overlay').toggleClass('toggle-main-overlay')
    })
    $('.close-res-menu').click(function(){
        $('.main-nav').toggleClass('transform-res-menu')
        $('.menu-overlay').toggleClass('toggle-main-overlay')

    })
    
});


