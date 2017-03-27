window.onload = function () {

    // 原始数据包含几个城市的空气质量指数数据
    // 用户可以选择查看不同的时间粒度，以选择要查看的空气质量指数是以天为粒度还是以周或月为粒度
    // 天：显示每天的空气质量指数
    // 周：以自然周（周一到周日）为粒度，统计一周7天的平均数为这一周的空气质量数值，如果数据中缺少一个自然周的几天，则按剩余天进行计算
    // 月：以自然月为粒度，统一一个月所有天的平均数为这一个月的空气质量数值
    // 用户可以通过select切换城市
    // 通过在"aqi-chart-wrap"里添加DOM，来模拟一个柱状图图表，横轴是时间，纵轴是空气质量指数，参考图（点击打开）。天、周、月的数据只根据用户的选择显示一种。
    // 天：每天的数据是一个很细的矩形
    // 周：每周的数据是一个矩形
    // 月：每周的数据是一个很粗的矩形
    // 鼠标移动到柱状图的某个柱子时，用title属性提示这个柱子的具体日期和数据

    function addEventHandler(ele, event, hanlder) {//浏览器兼容
        if (ele.addEventListener) {
            ele.addEventListener(event, hanlder, false);
        } else if (ele.attachEvent) {
            ele.attachEvent("on"+event, hanlder);
        } else  {
            ele["on" + event] = hanlder;
        }
    }

    function getDateStr(dat) {
        var y = dat.getFullYear();
        var m = dat.getMonth() + 1;
        m = m<10? '0'+m : m;
        var d = dat.getDate();
        d = d<10? '0'+d : d;
        return y +'-'+ m +'-'+ d;
    }
    function randomBuildData(seed) {
        var returnData = {};
        var dat = new Date("2016-01-01");
        var datStr = ''
        for (var i = 1; i < 92; i++) {
            datStr = getDateStr(dat);
            returnData[datStr] = Math.ceil(Math.random() * seed);
            dat.setDate(dat.getDate() + 1);
        }
        return returnData;
    }
    var aqiSourceData = {
        "北京": randomBuildData(500),
        "上海": randomBuildData(300),
        "广州": randomBuildData(200),
        "深圳": randomBuildData(100),
        "成都": randomBuildData(300),
        "西安": randomBuildData(500),
        "福州": randomBuildData(100),
        "厦门": randomBuildData(100),
        "沈阳": randomBuildData(500)
    };

    var $ = function (id) {
        return document.getElementById(id);
    };
    var pageState = {//当前页选项
        nowSelectCity: -1,
        nowGraTime: "day"
    };

    function initGraTimeForm() {//设置radio点击事件
        var radio = $("form-gra-time").getElementsByTagName("input");
        for(var i=0; i<radio.length; i++) {
            addEventHandler(radio[i], "click", graTimeChange);
        }
    }
    function graTimeChange() {// 确定time是否发生了变化
        // if(pageState.nowGraTime == "day") {
        //
        // }else {
                pageState.nowGraTime = this.value;
        // }
        console.log(this.value+"---");
        initAqiChartData();
        renderChart();
    }

    function initCitySelector() {//设置select的下拉列表
        var cityOption = "<option value=''>城市</option>";
        for (var key in aqiSourceData) {
            cityOption += "<option value='" +key+ "'>" +key+ "</option>";
        }
        $("city-select").innerHTML = cityOption;
        addEventHandler($("city-select"), "change", citySelectChange);
    }
    function citySelectChange() {// 确定city是否发生了变化
        if(pageState.nowSelectCity == this.value) {

        }else {
            pageState.nowSelectCity = this.value;
        }
        // console.log(this.value+ "===");
        initAqiChartData();
        renderChart();
    }

    function getWidth() {
        
    }
    function renderChart() {//渲染图表
        var html = '';
        var main = document.getElementsByClassName("aqi-chart-wrap");
        var data = chartData[pageState.nowGraTime];
        var height = '', width = '', color ='';
        for(var key in data) {
            height = data[key];
            // width = "8px";
            console.log(height);
            // html += '<div style="height:' +height+ ';width:' +width+ ';background: ' +color+ ';"></div>';
            html += '<div style="height: 10px;width: 2px;background: black;">111</div>';
        }
        main.innerHTML = html;
    }

    var chartData = {};
    function initAqiChartData() {//设置图表所需数据
        if(pageState.nowGraTime == "day") {
            chartData.day = aqiSourceData[pageState.nowSelectCity];
        }
        // console.log(chartData.day);
    }

    function init() {
        initGraTimeForm();
        initCitySelector();
        initAqiChartData();
    }
    init();

    function aaa(a) {
        if (isNaN(a)) {
            console.log("===");
        }else {
            console.log("---");
        }
    }
    // aaa();//"==="


};