/*global $ , console , alert , document, window */
$(function () {
    'use strict';

    $('.offers').click(function () {
        $('html,body').animate({
            scrollTop: $('#offers').offset().top
        }, 1500);
    });

    $('.about-us').click(function () {
        $('html,body').animate({
            scrollTop: $('#about').offset().top
        }, 1500);
    });

    $('.about-us2').click(function () {
        $('html,body').animate({
            scrollTop: $('#about').offset().top
        }, 1500);
    });

    $('.contact').click(function () {
        $('html,body').animate({
            scrollTop: $('#contact').offset().top
        }, 1500);
    });
});
