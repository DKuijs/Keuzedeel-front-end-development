$(document).ready(function(){

    // navbar scroll
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // scroll-up button
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // smooth scroll menu 
    $('.navbar .menu li a').click(function(){
        $('html').animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 500);
        $('.navbar .menu').removeClass("active");
        $('.menu-btn i').removeClass("active");
    });

    // typing animation script 
    var typed1 = new Typed(".typing", {
        strings: ["Smart ICT Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed2 = new Typed(".typing-2", {
        strings: ["Smart ICT Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

});