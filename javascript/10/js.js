var elem = document.getElementById('element');
var show = document.getElementsByTagName('span')[0];
function distance(elem, mousex, mousey) {
    var x = elem.offsetLeft + 25;
    var y = elem.offsetTop + 25;
    var xx = Math.pow(x - mousex, 2);
    var yy = Math.pow(y - mousey, 2);
    var disPow = xx + yy;
    var dis = Math.sqrt(disPow);
    show.innerHTML = dis;
}
function mouseMove(ev) {
    if(ev.pageX || ev.pageY){
        return {x:ev.pageX, y:ev.pageY};
    }
    return{
        x:ev.clientX + document.body.scrollLeft - document.body.clientLeft,
        y:ev.clientY + document.body.scrollTop - document.body.clientTop
    };
}
function move(ev) {
    var ev = ev||window.event;
    var mouse = mouseMove(ev);
    distance(elem, mouse.x, mouse.y);
}
window.onmousemove = move;