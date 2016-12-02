import React from 'react';
import {connect} from 'react-redux';
var actions = require('redux/actions');
var ReactHighcharts = require('react-highcharts');

let data = require('./Healthy-data');
let text0 = data.data.line_date;
let winds = data.data.yearelectric[0].wind;
let win  = winds[0].plan;

let Component = React.createClass({
    componentWillMount() {
    },

    render() {
        let {changedata1,w0='一区域',mon='一月份',windplan=win,w10,barRotime,barLdpowerValue,barLoPowerValues,barLoPowerValue,text,height} = this.props;



        let configPie = {
            chart: {
                height:height,
                backgroundColor: "rgba(46, 46, 65, 0)",
                plotBackgroundColor: "rgba(46, 46, 65, 0)",
                plotBorderWidth: 0,
                borderWidth: 0,
                plotShadow: false,
                backgroundColor: {
                    linearGradient: [0, 0, 500, 500],
                    stops: [

                        [0, 'rgb(37, 41, 48)'],

                    ]
                },
                borderRadius:10
            },

            title: {
                text: mon+w0+"各风场PBA",

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
                series: {
                    cursor: 'pointer',
                    events: {
                        click: function(e) {
                            w10=e.point.category;
                            changedata1(w10,e);

                        }
                    }
                },
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
                categories:barRotime,
            },
            yAxis: [{
                // lineWidth: 1,
                // lineColor: "red",
                //tickWidth: 4,
                gridLineDashStyle: 'Solid',
                gridLineColor: '#6d6a6c',
                title: {
                    text:'小时',
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
                title:'TBA%',
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
                data: barLoPowerValues,
                borderRadius: 4,
                events: {
                    click: function(e) {
                        w10=e.point.category;
                        changedata1(w10,e);

                    }
                }

            },
                {
                    name: '理论',
                    color:'#A2D04D',
                    type: 'column',
                    data: barLoPowerValue,
                    stack:'time',
                    borderRadius: 2,
                    events: {
                        click: function(e) {
                            w10=e.point.category;
                            changedata1(w10,e);

                        }
                    }
                },
                {
                    name: '理论',
                    color:'#FFD927',
                    type: 'column',
                    data: barLoPowerValue,
                    stack:'time',
                    events: {
                        click: function(e) {
                            w10=e.point.category;
                            changedata1(w10,e);

                        }
                    }
                },
                {
                    name: '理论',
                    color:'#FF9424',
                    type: 'column',
                    data: barLoPowerValue,
                    stack:'time',
                    events: {
                        click: function(e) {
                            w10=e.point.category;
                            changedata1(w10,e);

                        }
                    }
                },
                {
                    name: '理论发电量',
                    color:'#FF6124',
                    type: 'column',
                    data: barLoPowerValue,
                    stack:'time',
                    events: {
                        click: function(e) {
                            w10=e.point.category;
                            changedata1(w10,e);

                        }
                    }
                },
                {
                    name: 'PBA',
                    type: 'line',
                    color:'#0000ff',
                    data: barLdpowerValue,
                    events: {
                        click: function(e) {
                            w10=e.point.category;
                            changedata1(w10,e);

                        }
                    }
                },

            ]
        };
        return (
            <ReactHighcharts config={configPie}/>
        );





    }
});


const mapStateToProps = (state) => {
    return {
        w0 : state.vars.w1,
        w10 : state.vars.w11,
        mon : state.vars.mon,
        windplan : state.vars.windplan,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        init: () => {
            dispatch(actions.setVars('w1',w0 ));
        },
        changedata1 :(w10,e)=> {
            dispatch(actions.setVars('w11', w10,e));

        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
