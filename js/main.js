
$(document).ready(function () {

    // ----- === change header while scrolling === ----- //
    $(window).on('scroll load', function () {
        if ($(this).scrollTop() > 50) {
            $('.header').addClass('change-bg');
        } else {
            $('.header').removeClass('change-bg');
        }
    });

    // ---- === accordeon === ---- //
    $('.accordeon-head').on('click', function () {
        $(this).closest('.accordeon-row').toggleClass('active');
        $(this).next('.accordeon-body').slideToggle();
    });

    // ----------- === mobile menu === ------------ //
    $('.burger').on('click', function () {
        $('.header__menu').toggleClass('active');
        $(this).toggleClass('on');
    });
    $('.header__menu a').on('click', function () {
        $('.header__menu').removeClass('active');
        $('.burger').removeClass('on');
    });


    // scroll to anchor ------------- //
    $(".scrollto").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top - 100 }, 0);
    });


    //  --- animated text --- //
    function animateTextIn(text, index) {
        if (index < text.length) {
            $("#animatedText").append(text[index]);
            setTimeout(function () {
                animateTextIn(text, index + 1);
            }, 120);
        } else {

            setTimeout(function () {
                animateTextOut(text, text.length - 1);
            }, 1000);
        }
    }

    function animateTextOut(text, index) {
        if (index >= 0) {
            var newText = text.substring(0, index);
            $("#animatedText").text(newText);
            setTimeout(function () {
                animateTextOut(text, index - 1);
            }, 120);
        } else {

            setTimeout(function () {
                animateTextIn(text, 0);
            }, 700);
        }
    }


    var originalText = $("#animatedText").data('text');
    setTimeout(function () {
        animateTextIn(originalText, 0);
    }, 500);


    // input mask
    if ($('.phoneinp').length) {
        $('.phoneinp').inputmask({
            mask: "999 999 9999",
            placeholder: "_",
            showMaskOnFocus: true,
            showMaskOnHover: true,
        });
    }

});

AOS.init({
    duration: 800,
    disable: 'mobile',
    once: true,
    easing: 'ease-in-out'
});