window.onload = function () {

    // 读取页面上已有的source列表，从中提取出城市以及对应的空气质量
    // 将数据按照某种顺序排序后，在resort列表中按照顺序显示出来


    var $ = function (id) {
        return document.getElementById(id);
    }
    function getData() {
        var data = [];
        var liData = $("source").getElementsByTagName("li");
        for(var i=0; i< liData.length; i++) {
            data.push(liData[i].innerHTML);
        }
        return data;
    }
    function sortAqiData(data) {
        // var dataSort = [];
        // var num = [];
        dataSort = data.sort(function(a, b) {
            var aSort = a.replace(/[^0-9]/ig, "");
            var bSort = b.replace(/[^0-9]/ig, "");
            return aSort - bSort;
        });
        return dataSort;
    }
    function render(data) {
        var html = "";
        for(var i=0; i<data.length; i++) {
            html += '<li>' +data[i]+ '</li>';
        }
        $("resort").innerHTML = html;
    }
    function btnHandle() {
        var aqiData = getData();
        aqiData = sortAqiData(aqiData);
        render(aqiData);
    }
    function init() {
        $("sort-btn").onclick = function () {
            btnHandle();
            $("sort-btn").disabled = true;
        }
    }
    init();
};