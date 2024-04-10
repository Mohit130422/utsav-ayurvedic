$(document).ready(function () {
    $("#bell").click(function () {
        $("#box").toggle();
    });
    $(".action-btn").click(function () {
        $("#act-box").toggle()
    });
    $(".profile-pic").click(function () {
        $("#profile-box").toggle()
    });
    $("#close, main").click(function () {
        $("#box").hide();
        $(".sidebar").removeClass('openside');
        $("#act-box").hide();
        $("#profile-box").hide();
        $(".search-area").css({top: "-65%"});
    });
    $(".btnmenu").click(function(){
        $(".sidebar").toggleClass('openside');
    });
    $('#order-done').click(function(){
        $("#confirmation-box").css("display","flex");
    });
    $("#btnCloseDone, #btnDone").click(function(){
        $("#confirmation-box").hide();
    });
    $('#search').click(function () {
        $(".search-area").css({top: "18%"});
    });
    $('.outline-action-btn').click(function() {
        setTimeout(function(){
            $("#alertMessage").show();
        },[]);
        setTimeout(function(){
            $("#alertMessage").fadeOut();
        }, 2000);
    }); 
    $('#explore,#explore-product').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
});