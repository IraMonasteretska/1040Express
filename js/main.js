
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
});