import React from 'react';
import {connect} from 'react-redux';
var actions = require('redux/actions');
var ReactHighcharts = require('react-highcharts');

var $ = require('jQuery');
let data = require('./Healthy-data');

let winds = data.data.yearelectric[0].wind;
let win  = winds[0].plan;


let Component = React.createClass({
    componentWillMount() {
    },

    render() {


        let {w0,changedata1,x,windplan1 = win,barLoTime,text,}=this.props;
        let configPie = {
            chart: {
                height:400,


                backgroundColor: "rgba(44, 61, 71, 0.4)",


                plotBackgroundColor: "rgba(46, 46, 65, 0)",

                plotBorderWidth: 0,
                borderWidth: 0,
                plotShadow: false,
                paddingLeft:100,



                borderRadius:10
            },

            title: {
                text: text,
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
                y:20,
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
                // pointFormat: "<b>{point.percentage:.0f}%</b>"
            },
            credits: {
                enabled: false //不显示highCharts版权信息
            },
            colors: ['#4CDB9D', '#1E664A', '#000','#134833', '#082B1F']
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
                series: {
                    cursor: 'pointer',
                    events: {
                        click: function(e) {
                            w0=e.point.category;
                            changedata1(w0,win);

                        }
                    }
                },
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0,
                    pointWidth: 25
                }
            },
            xAxis: {
                lineWidth: 1,

                tickWidth: 0,
                labels: {
                    y: 20, //x轴刻度往下移动20px
                    style: {
                        color: '#fff',//颜色
                        fontSize:'14px'  //字体
                    }
                },
                categories:barLoTime,
            },
            yAxis: {
               // lineWidth: 1,
               // lineColor: "red",
                //tickWidth: 4,
                gridLineDashStyle: 'Solid',
                gridLineColor: '#6d6a6c',
            title: {
                text:'(100%)',
                    align:'high',
                    rotation:'0',
                    y: -10,
                    x: 40,
                style:{
                    color:'#fff',
                    fontSize:'14px'
                }
            },


        labels: {
                    title:'100%',
                    y: 10, //x轴刻度往下移动20px
                    style: {
                        color: '#fff',//颜色
                        fontSize:'14px'  //字体
                    }
                },
            },
            series: [{
                name: '实际健康度',
                type: 'column',
                data: windplan1,
                borderRadius: 7,
            }
            // ,{
            //     name: '实际健康度',
            //     type: 'column',
            //     data: barRoPowerValue
            // },{
            //     name: '停机时间',
            //     type: 'spline',
            //     color:'#fff',
            //     data: barRoPowerValue
            // }


            ]
        };
        return (
            <ReactHighcharts config={configPie}/>
        );
    },

});


const mapStateToProps = (state) => {
    return {
        w0 : state.vars.w1,
        win : state.vars.win1,
        windplan1 : state.vars.windplan1,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        init: () => {
        },
        changedata1 :(w0,win)=>{
            dispatch(actions.setVars('w1',w0 ));
            dispatch(actions.setVars('win1',win ));
            console.log(win);


        },

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
