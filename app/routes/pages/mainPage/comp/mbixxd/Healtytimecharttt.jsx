import React from 'react';
import {connect} from 'react-redux';
var actions = require('redux/actions');
var ReactHighcharts = require('react-highcharts');

let data = require('./Profit-data');

let Component = React.createClass({
    componentWillMount() {
    },
    render() {
        
        let {w0,areaName,areaRecordCost,areaRecordProfit,machine,areaPlanDay,areaPlan}=this.props;
        let configPie = {
            chart: {
                height:410,
                 backgroundColor: "rgba(44, 61, 71,0)",
                plotBorderWidth: 0,
                borderWidth: 0,
                plotShadow: false,
                paddingLeft:100,
                
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
                    fontFamily:"微软雅黑",

                }
            },
            tooltip: {
                
            },
            credits: {
                enabled: false
            },
            //柱子颜色
            colors: [ '#1E664A', '#4CDB9D']
            ,
            // 柱子宽 柱子间隔 柱子边框；
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0,
                    pointWidth: 20,
                    borderRadius: 7,
                }, series: {
                    cursor: 'pointer',
                    events: {
                        click: function(e) {
                           
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
            }, gridLineDashStyle: 'Solid',
                gridLineColor: '#6d6a6c',

            title: {
                text:'100%',
                align:'high',
                rotation:'0',
                y: -20,
                x: 45,
                style:{
                    color:'#fff',
                    fontSize:'14px'
                }
            }
        }, {
             gridLineDashStyle: 'Solid',
                gridLineColor: '#6d6a6c',

            title: {
                text: '',
                 align:'high',
                rotation:'0',
                y: -20,
                x: 40,

            },
            opposite: true
        }],

            series: [{
                name: '健康度',
                type: 'column',
                data: areaPlanDay,
                color:'#4CDB9D',
                
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
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        init: () => {
            dispatch(actions.setVars('w1',w0 ));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);