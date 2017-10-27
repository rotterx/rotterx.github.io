$(document).ready(function () {
    
    $(".filter li").click(function () {
        $(".filter li").removeClass("active");
        $(this).addClass("active");
    });
    
});