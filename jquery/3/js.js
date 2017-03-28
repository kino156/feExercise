$(document).ready(function () {
    $('#btn1').click(function () {
        $('ol').append('<li>测试</li>');
    });
    $('#btn2').click(function () {
        $('ol').prepend('<li>测试</li>');
    });
    $('#btn3').click(function () {
        $('ol').after('<p>测试</p>');
    });
    $('#btn4').click(function () {
        $('ol').before('<p>测试</p>');
    });

    $('#btn5').click(function () {
        $('ol').remove();
    });
    $('#btn6').click(function () {
        $('#btn5').empty();
    });
});