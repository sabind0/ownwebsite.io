
$(document).ready(function(){
    $('.button').click(function(){
        $('nav').toggleClass('active')
    });
var typed = new Typed(".typing", {
        strings: ["Student", "Frontend-Developer", "Graphic Designer", "Freelancer"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
    });

    /*nav bar*/
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY >100){
            $('.here').addClass("sticky");
        }else{
            $('.here').removeClass("sticky");
        }
        
        
    });
 });