import React from 'react';
import {connect} from 'react-redux';
var actions = require('redux/actions');
var ReactHighcharts = require('react-highcharts');

let data = require('./Healthy-data');

let Component = React.createClass({
    componentWillMount() {
    },

    render() {

        let {height,barRotimes,barLoPowerValue,barLoPowerValues,barLdpowerValue,text} = this.props;



        let configPie = {
            chart: {
                height:height,
                backgroundColor: "rgba(44, 61, 71, 0.4)",
                //plotBackgroundColor: "rgba(46, 46, 65, 0)",
                plotBorderWidth: 0,
                borderWidth: 0,
                plotShadow: false,
                borderRadius:10
            },
            title: {
                text: text,

                align:'left',
                x : "0",
                style:{
                    color:"#fff",
                    fontSize:"16px",
                    fontWight:'600',
                    fontFamily:"微软雅黑"
                }
            },
            //图例说明
            legend: {
                align:"right",
                verticalAlign: "top",
                y:30,
                itemHoverStyle:{
                    color:'#31f3fb',
                },
                itemStyle: {
                    color: "#fff",
                    fontSize:"14px",
                    fontWeight:"normal",
                    fontFamily:"微软雅黑"
                }
            },
            tooltip: {
                // pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                // pointFormatter: "<b>{point.percentage:.0f}%</b>"

            },
            credits: {
                enabled: false //不显示highCharts版权信息
            },
            colors: ['#4CDB9D', ' #A2D04D', '#FFD927' , '#FF9424', '#FF6124', '#000fff','#134833', '#082B1F']
            ,
            plotOptions: {
                pie: {
                    allowPointSelect: false,
                    cursor: 'pointer',
                    borderWidth: 0,
                    size: '100%',
                    innerSize: '80%',
                    dataLabels: {
                        enabled: false
                    }
                },
                bar:{
                    animation: true
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal',

                    borderWidth: 0,

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
                categories:barRotimes,
            },
            yAxis: [{
                // lineWidth: 1,
                // lineColor: "red",
                //tickWidth: 4,
                gridLineDashStyle: 'Solid',
                gridLineColor: '#6d6a6c',
                title: {
                    text:'(kWh)',
                    align:'high',
                    rotation:'0',
                    y: -10,
                    x: 40,
                    style:{
                        color:'#fff',
                        fontSize:'14px'
                    },
                },

                labels: {
                    y: 10, //x轴刻度往下移动20px
                    style: {
                        color: '#fff',//颜色
                        fontSize:'14px'  //字体
                    }
                },
            },{
                title:'',
                max:100,
                oppsite:true,
                labels: {
                    y: 10, //x轴刻度往下移动20px
                    style: {
                        color: '#fff',//颜色
                        fontSize:'14px'  //字体
                    }
                },
            }],
            series: [{
                name: '实际发电量',
                type: 'column',
                color:"#33BAC0",
                data: barLoPowerValues,
                borderRadius: 4,
            },
                {
                    name: '故障损失',
                    color:'#5298d3',
                    type: 'column',
                    data: barLoPowerValue,
                    stack:'time',
                    borderRadius: 2,

                },
                {
                    name: '维护损失',
                    color:'#ffffff',
                    type: 'column',
                    data: barLoPowerValue,
                    stack:'time'
                },
                {
                    name: '限功率损失',
                    color:'#e9c75c',
                    type: 'column',
                    data: barLoPowerValue,
                    stack:'time'
                },
                {
                    name: '非设备原因损失',
                    color:'#d06960',
                    type: 'column',
                    data: barLoPowerValue,
                    stack:'time'
                },
                {
                    name: 'TBA',
                    type: 'line',
                    color:'#0000ff',
                    data: barLdpowerValue
                },

            ]
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
