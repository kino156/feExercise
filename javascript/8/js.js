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
    var $Class = function (className) {
        return document.getElementsByClassName(className)
    };

    function showDiv() {
        var num = document.getElementsByTagName('textarea');
        var single = num.split(/[,_]/);
        var outerDiv = document.createElement('div');
        outerDiv.className = 'show';

        outerDiv.innerHTML = '<div class="inner">' +num.value+ '</div>';
        $('main').appendChild(outerDiv);
        num.value = '';
    }

    // deleteDiv();
    function deleteDiv() {
        var out = $('main').children;
        for(var i=0; i<out.length; i++) {
            addEventHandler(out[i], 'click', function () {
                $('main').remove(out[i]);
            });
        }
        console.log('===');
    }
    addEventHandler($$('button')[0], 'click', showDiv);

    addEventHandler($Class('show')[this], 'click', function () {
        var out = $('main').children;
        $('main').removeChild(out[this]);
        console.log('===')
    });
    // addEventHandler($$('button')[1], 'click', rightIn);
};
