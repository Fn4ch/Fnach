$(function(){
    $("a[href^='#albums']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"},1000);
            return false;
    });
});