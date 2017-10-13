$(document).ready(function () {

    //E-mail Ajax Send
    $("form").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function () {
            $('#form-hidden').fadeIn(500);  //добавляем скрытый класс окна
            $("body").click(function (e) {  //при клике на любое место скрытое окно скрывается
                $("#form-hidden").css("display", "none");  //класс окна скрывается
            });
            // alert("Спасибо, я свяжусь с вами в ближайшее время!");
            setTimeout(function () {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});