window.onload = function () {

     // 在注释下方编写代码
     // 遍历读取aqiData中各个城市的数据
     // 将空气质量指数大于60的城市显示到aqi-list的列表中

    var aqiData = [
        ["北京", 90],
        ["上海", 50],
        ["福州", 10],
        ["广州", 50],
        ["成都", 90],
        ["西安", 100]
    ];
    //filter过滤代替if条件、forEach循环代替for循环
    var list = document.getElementById("aqi-list");
    var arr = ["一", "二", "三", "四", "五", "六"];
    var sortData = aqiData.sort(function(a, b) {
        return b[1] - a[1];
    });

    sortArray();
    function sortArray() {
        var html = "";
        for (var i = 0; i < sortData.length; i++) {
            if (sortData[i][1] > 60) {
                html += "<li>第" + arr[i] + "名：" + aqiData[i][0] + aqiData[i][1] + "</li>";
            }
        }
        list.innerHTML = html
    }
};