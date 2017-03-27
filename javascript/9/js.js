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

    var $ = function (node) {
        return document.querySelector(node);
    };

    var dataNode = [];
    function preOrder(node) {
        if(!(node == null)){
            dataNode.push(node);
            preOrder(node.firstElementChild);
            preOrder(node.lastElementChild);
        }
    }
    function midOrder(node) {
        if(!(node == null)){
            midOrder(node.firstElementChild);
            dataNode.push(node);
            midOrder(node.lastElementChild);
        }
    }
    function lastOrder(node) {
        if(!(node == null)){
            lastOrder(node.firstElementChild);
            lastOrder(node.lastElementChild);
            dataNode.push(node);
        }
    }
    var timer;
    function color() {
        var i = 0;
        dataNode[i].style.backgroundColor = 'pink';
        timer = setInterval(function () {
            i++;
            if(i<dataNode.length) {
                dataNode[i].style.backgroundColor = 'pink';
                dataNode[i-1].style.backgroundColor = '#fff';
            }else {
                clearInterval(timer);
                dataNode[dataNode.length-1].style.backgroundColor = '#fff';
            }
        },500);
    }
    function init() {
        dataNode = [];
        clearInterval(timer);
        var divs = document.getElementsByTagName('div');
        for (var i = 0; i < divs.length; i++) {
            divs[i].style.backgroundColor = '#fff';
        }
    }
    function change() {
        var select = $('#select').value;
        var root = $('#root');
        if(select == '0') {
            init();
            preOrder(root);
            color();
        }else if(select == '1') {
            init();
            midOrder(root);
            color();
        }else if(select == '2') {
            init();
            lastOrder(root);
            color();
        }
    }

    addEventHandler($('button'), 'click', change);
};