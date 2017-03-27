window.onload = function () {
    function addEventHandler(ele, event, hanlder) {//浏览器兼容
        if (ele.addEventListener) {
            ele.addEventListener(event, hanlder, false);
        } else if (ele.attachEvent) {
            ele.attachEvent("on"+event, hanlder);
        } else  {
            ele["on" + event] = hanlder;
        }
    }

    var $ = function (id) {
        return document.getElementById(id);
    };
    var $$ = function (tag) {
        return document.getElementsByTagName(tag);
    };

    function leftIn() {
        var num = $$('input')[0];
        var outerDiv = document.createElement('div');
        outerDiv.className = 'show';
        outerDiv.innerHTML = '<div class="inner">' +num.value+ '</div>';
        $('main').insertBefore(outerDiv, $('main').firstChild);//先获取父元素
        num.value = '';//操作的是节点
    }
    function rightIn() {
        var num = $$('input')[0];
        var outerDiv = document.createElement('div');
        outerDiv.className = 'show';
        outerDiv.innerHTML = '<div class="inner">' +num.value+ '</div>';
        $('main').appendChild(outerDiv);
        num.value = '';//操作的是节点
    }
    function leftOut() {
        var out = $('main').firstChild;
        $('main').removeChild(out);

    }
    function rightOut() {
        var out = $('main').lastChild;
        $('main').removeChild(out);
    }
    addEventHandler($$('button')[0], 'click', leftIn);
    addEventHandler($$('button')[1], 'click', rightIn);
    addEventHandler($$('button')[2], 'click', leftOut);
    addEventHandler($$('button')[3], 'click', rightOut);
};
