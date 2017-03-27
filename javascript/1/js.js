window.onload = function() {

    // 在注释下方写下代码
    // 给按钮button绑定一个点击事件
    // 在事件处理函数中
    // 获取aqi-input输入的值，并显示在aqi-display中


    // 可改善：对输入的值进行判断
    var $ = function (id) {
        return document.getElementById(id);
    };

    var click = function () {
        $("aqi-display").innerHTML = $("aqi-input").value;
    };

    if($("button").attachEvent) {
        $("button").attachEvent("onclick", click);
    }else {
        $("button").addEventListener("click", click, false);
    }

    $("aqi-input").onkeyup = function (ev) {
        if(ev.keyCode === 13) {
            click();
        }
    };
};