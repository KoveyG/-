$(function(){
    // echart柱状图	
	var myChart = echarts.init(document.getElementById('main')); 
        var option = {
            color: ['#9c81ce','#fd99bf','#fdd499','#d4f390'],
            tooltip: {
                show: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ["预约预定工具","落地云"]
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            legend: {
                right: 2,
                top:30,
                orient: 'vertical',
                data:['PV','UV','IP','留言']
            },
            series : [
                {
                    "name":"PV",
                    "type":"bar",
                    "data":[350, 300],
                    barGap:'0'
                },
                {
                    "name":"UV",
                    "type":"bar",
                    "data":[250, 270],
                },
                {
                    "name":"IP",
                    "type":"bar",
                    "data":[230, 250],

                },
                {
                    "name":"留言",
                    "type":"bar",
                    "data":[80, 150],
                }
            ]
        };
        myChart.setOption(option); 
});