window.onload = function () {
    $(function () {
        $('#collapseOne').collapse('hide');
    });
    $(function () {
        $('#collapseThree').collapse('toggle');
    });
    $(function () {
        $('#collapseTwo').collapse('show');
    });
    $(function () {
        $('#collapseFour').collapse({
            toggle: false
        });
    });
};