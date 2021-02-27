
$(document).ready(function(){
  $('.but i').click(function(){
       $('.navcontent').toggleClass('aab');
   });
    
var typed = new Typed(".typing", {
        strings: ["Student", "Frontend-Developer", "Graphic Designer", "Freelancer"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
    });
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:100,
    nav:false,
    responsive:{
        400:{
            items:2
        },
        700:{
            items:3
        },
        1000:{
            items:4
        }
    }
});

    /*nav bar*/
  //  $(window).scroll(function(){
  //      // sticky navbar on scroll script
   //       if(this.scrollY >100){
     //         $('.here').addClass("sticky");
    //      }else{
     //         $('.here').removeClass("sticky");
     //     }
    //       
  //  });
  
});