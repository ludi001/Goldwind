import React from 'react';
import {connect} from 'react-redux';
var actions = require('redux/actions');
var ReactHighcharts = require('react-highcharts');

let data = require('./Profit-data');

let Component = React.createClass({
    componentWillMount() {
    },
    render() {
        let machine=data.machine;
        let areaName=data.areaName;
        let areaRecordCost=data.areaRecordCost;
        let areaRecordProfit=data.areaRecordProfit;
      
        let configPie = {
            chart: {
                height:345,
                backgroundColor: '#282f37',
                plotBackgroundColor: '#282f37',
                plotBorderWidth: 0,
                borderWidth: 0,
                plotShadow: false,
                paddingLeft:100,
                borderRadius:10
            },
            title: {
                text: '',
                align:'left',
                top:'-20px',
                vertical:'top',
                x : "0",
                style:{
                    color:"#fff",
                    fontSize:"25px",
                    fontFamily:"微软雅黑",
                    fontWeight:700,
                }
            },
            // 插入图片
            //图例说明
            legend: {
                align:"right",
                verticalAlign: "top",
                itemStyle: {
                    color: "#fff",
                    fontSize:"18px",
                    fontWeight:"normal",
                    fontFamily:"微软雅黑",

                }
            },
            tooltip: {
                pointFormat: "<b>{point.percentage:.0f}%</b>"
            },
            credits: {
                enabled: false //不显示highCharts版权信息
            },
            //柱子颜色
            colors: [ '#1E664A', '#4CDB9D']
            ,
            // 柱子宽 柱子间隔 柱子边框；
            plotOptions: {
                column: {
                    pointPadding: 0.1,
                    borderWidth: 0,
                    pointWidth: 15
                },
                series: {
                    cursor: 'pointer',
                    events: {
                        click: function(e) {
                            alert('X轴的值：'+e.point.category);
                        }
                    }
                }

            },

            xAxis: {
                lineWidth: 1,
                //lineColor: "red",
                tickWidth: 0,
                labels: {
                    y: 20, //x轴刻度往下移动20px
                    style: {
                        color: '#fff',//颜色
                        fontSize:'14px'  //字体
                    }
                },
                categories:machine,
            },
            yAxis: {
                // lineWidth: 1,
                // lineColor: "red",
                //tickWidth: 4,
                labels: {
                    y: 10, //x轴刻度往下移动20px
                    style: {
                        color: '#fff',//颜色
                        fontSize:'14px'  //字体
                    }
                },
            },
            //几条数据
            series: [{
                name: '实际收益',
                type: 'column',
                data: areaRecordProfit,
                pointWidth:15
            },
            {
                name: '收入成本',
                type: 'column',
                data: areaRecordCost,
                pointWidth:15
            },
            {
                    name:"TBA",
                    type:'line',
                    color:'blue',
                    data:[5,6,6,7,4,5,6,7,7,9,1,9],}]
        };
        return (
            <ReactHighcharts config={configPie}/>
        );
    }
});


const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        init: () => {
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);