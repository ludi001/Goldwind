import React from 'react';
import {connect} from 'react-redux';
var actions = require('redux/actions');
var ReactHighcharts = require('react-highcharts');

let data = require('./Profit-data');

let Component = React.createClass({
    componentWillMount() {
    },
    render() {
        let areaName=data.areaName;
        let areaRecordCost=data.areaRecordCost;
        let areaPlan=data.areaPlan;
        let areaPlanDay=data.areaPlanDay;
        let areaPlanDayT=data.areaPlanDayT;

        let configPie = {
            chart: {
                height:390,
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
                    fontSize:"14px",
                    fontWeight:"normal",
                    fontFamily:"微软雅黑",

                }
            },
            tooltip: {
               
            },
            credits: {
                enabled: false
            },

            colors: [ '#1E664A', '#4CDB9D'],

            plotOptions: {
                column: {
                    pointPadding: 10,
                    borderWidth: 1,
                    pointWidth: 50,

                }, series: {
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

                tickWidth: 0,
                labels: {
                    y: 20,
                    style: {
                        color: '#fff',
                        fontSize:'14px'
                    }
                },
                categories:areaPlan,
            },
           yAxis: [{
            labels: {
                format: '',
                style: {
                    color: '#fff',
                    fontSize:'14px'
                }
            },
            title: {
                text:'100%',
                align:'high',
                rotation:'0',
                y: -20,
                x: 40,
                style:{
                    fontSize:'14px',
                    color:'#fff'
                }
            }
        }, {
            labels: {
                format: '',
                style: {
                    color: '#fff',
                    fontSize:'14px'
                }
            },
            title: {
                text: '',
                 align:'high',
                rotation:'0',
                y: -20,
                x: 40,
                style:{
                    fontSize:'14px',

                    color:'#fff'
                }

            },
            opposite: true
        }],
            //几条数据
            series: [{
                name: '实际发电量',
                type: 'column',
                data: areaPlanDay,
                color:'#64DC83',
                pointWidth: 15,
            },
            {
            	name: '理论发电量',
                type: 'column',
                data:areaPlanDayT,
                color:'#ccc',
                pointWidth: 15,
            },{
                    name: 'PBA',
                    type: 'line',
                    data:areaPlanDayT,
                    color:'blue',
                    opposite:true,
                    yAxis:1
                }

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