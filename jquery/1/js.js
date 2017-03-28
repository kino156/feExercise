$(document).ready(function () {
   $('#click1').click(function () {
       $('#panel1').slideDown();
   });
   $('#click2').click(function () {
        $('#panel2').slideUp();
   });
   $('#click3').click(function () {
        $('#panel3').slideToggle();
   });
});