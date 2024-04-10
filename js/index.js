let index = 0;

const totalWorkItems = $(".work-item").length;
$(document).ready(function () {
$(window).on("load",function(){
    $("preloader").addClass("loaded");
})

    $(".nav-toggle").click(function(){
        $(".header .nav").slideToggle();
    })
    $(".header .nav a").click(function(){
        if($(window).width()<768){
            $(".header .nav").slideToggle();
        }
    })
    //fixed header
    $(window).scroll(function(){
        if($(this).scrollTop()>100){
            $(".header").addClass("fixed").addClass("fixed");
        }
        else{
            $(".header").removeClass("fixed");
        }
    })
    $("a").on("click",function(){
        
        if(this.hash !== ""){
                event.preventDefault();
                var hash = this.hash;
                console.log($(hash).offset().top)
                $("html , body").animate({
                    scrollTop : $(hash).offset().top
                },800,function(){
                    window.location.hash = hash;
                });
        }

    })
    const wHeight = $(window).hight;
    $(".lightbox-img").css("max-height",wHeight+"px");
    $(".work-item-inner").click(function(){
        // alert(345)
        index = $(this).parent(".work-item").index();
        // console.log(index)
        $(".lightbox").addClass("open");
        lightboxSlidesShow();

    })
    $(".lightbox .prev").click(function(){
        if(index == 0 ) {
            index = totalWorkItems - 1;
        }
        else{
            index--;

        }
        lightboxSlidesShow();
    })
    $(".lightbox .next").click(function(){
        if(index == totalWorkItems-1){
            index = 0 
        }
        else{
            index++;
        }
        lightboxSlidesShow();
    })
    $(".lightbox-close").click(function(){
        $(".lightbox").removeClass("open");
    })
    $(".lightbox").click(function(event){
        if($(event.target).hasClass("lightbox")){
            $(this).removeClass("open");
        }
    })
    function lightboxSlidesShow(){
        const imgSrc = $(".work-item").eq(index).find('img').attr("data-large");
        const category = $(".work-item").eq(index).find("h4").html();
        $(".lightbox-img").attr("src",imgSrc);
        $(".lightbox-category").html(category);
        $("lightbox-counter").html(totalWorkItems+"/"+(index+1));
    }
    $("#button").click(function(){
        $("#dialog").dialog("open");
    })
    $("#dialog").dialog({
        title:"Thank For contacting",
        closeOnEscape:false,
        modal:true,
        autoOpen:false
    })
});