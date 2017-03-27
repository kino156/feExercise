window.onload = function () {

    // 用户输入城市名称和空气质量指数后，点击“确认添加”按钮后，就会将用户的输入在进行验证后，添加到下面的表格中，新增一行进行显示
    // 用户输入的城市名必须为中英文字符，空气质量指数必须为整数
    // 用户输入的城市名字和空气质量指数需要进行前后去空格及空字符处理（trim）
    // 用户输入不合规格时，需要给出提示（允许用alert，也可以自行定义提示方式）
    // 用户可以点击表格列中的“删除”按钮，删掉那一行的数据

    var $ = function (id) {
        return document.getElementById(id);
    };
    var aqiData = {};
    function addAqiData() {
        var city = $("aqi-city-input").value.trim();
        var cityAir = $("aqi-value-input").value.trim();
        if(!city.match(/^[A-Za-z\u4E00-\u9FA5]+$/)){
            alert("城市名必须为中英文字符！");
            return false;
        }
        if(!cityAir.match(/^\d+$/)) {
            alert("空气质量指数必须为整数！");
            return false;
        }
        aqiData[city] = cityAir;
    }
    function renderAqiList() {
        var tableTitle = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
        for(var key in aqiData) {
            tableTitle += "<tr><td>" +key+ "</td><td>" +aqiData[key]+ "</td><td><button" +
                " class='delete'>删除</button></td></tr>";
        }
        $("aqi-table").innerHTML = tableTitle;
    }
    function addBtnHandle() {
        addAqiData();
        renderAqiList();
    }
    function delBtnHandle(event) {
        var delTr = event.parentNode.parentNode;
        var delCity = delTr.children[0].innerText;
        delete aqiData[delCity];
        // var delTr = event.parentNode.parentNode.rowIndex;deleteRow/removeChild等方法都删除不了，不知道哪里不对
        // console.log(delTr);
        // $("aqi-table").deleteRow(delTr);
        renderAqiList();
    }
    function init() {
        $("add-btn").addEventListener("click", function () {
            addBtnHandle();
        });
        $("aqi-table").addEventListener("click", function (e) {
            if(e.target || e.target.nodeName == "button") {
                delBtnHandle(e.target);
            }
        });
    }
    init();
};