import React from 'react';
import {connect} from 'react-redux';
var actions = require('redux/actions');
var ReactHighcharts = require('react-highcharts');

let data = require('./TimeSelect-data.js');

let Component = React.createClass({
    componentWillMount() {
    },

    render() {
        let configPie = {
            chart: {
                height:300,
                backgroundColor: '#282f37',
                plotBackgroundColor: '#282f37',
                plotBorderWidth: 0,
                borderWidth: 0,
                plotShadow: false,
                paddingLeft:100,
                borderRadius:10
            },
            title: {
                text: '损失收入电量',
                align:'left',
                 x : "0",
                style:{
                    color:"#fff",
                    fontSize:"16px",
                    fontFamily:"微软雅黑"
                }
            },
            //图例说明
            legend: {
                align:"right",
                verticalAlign: "top",
                itemStyle: {
                    color: "#fff",
                    fontSize:"14px",
                    fontWeight:"normal",
                    fontFamily:"微软雅黑"
                }
            },
            tooltip: {
                // pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                pointFormat: "<b>{point.percentage:.0f}%</b>"
            },
            credits: {
                enabled: false //不显示highCharts版权信息
            },
            colors: [ '#4cdb9d', '#2e75b6','#e2ac00','#009a46', '#ff6600','#5b9bd5'],
            plotOptions: {
                pie: {
                    allowPointSelect: false,
                    cursor: 'pointer',
                    borderWidth: 0,
                    size: '100%',
                    innerSize: '80%',
                    dataLabels: {
                        enabled: false
                    },
                    
                },
                bar:{
                    animation: true
                }
            },
            plotOptions: {
                column: {
                    pointPadding: 0.1,
                    borderWidth: 0,
                    pointWidth: 50
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
                categories:data.data[2].name,
            },
            yAxis: {
               // lineWidth: 1,
               // lineColor: "red",
                //tickWidth: 4,
                labels: {
                	format:'{value}万元',
                    y: 10, //x轴刻度往下移动20px
                    style: {
                        color: '#fff',//颜色
                        fontSize:'14px'  //字体
                    }
                },
            },
            series: [{
                name: '集团区域1',
                type: 'column',
                data: data.data[2].loseA,
            },{
            	name: '集团区域2',
                type: 'column',
                data: data.data[2].loseB,
            },{
                name: '集团区域13',
                type: 'column',
                data: data.data[2].loseC,
            },{
            	name: '集团区域4',
                type: 'column',
                data: data.data[2].loseD,
            }]
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