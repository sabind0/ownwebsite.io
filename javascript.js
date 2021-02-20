
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
const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  }
});

