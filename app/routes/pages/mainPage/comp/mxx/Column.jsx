import React from 'react';
import {connect} from 'react-redux';
var actions = require('redux/actions');
var ReactHighcharts = require('react-highcharts');

let data = require('../../../../../../config/RegulationData');
let mod = require('../../../../../../config/Model');
let arr1 = [];
let arr2=[];
let arr3=[];
let ssg1 = data.ModelData;
let ssg2=mod.Model.ens;
(function(){
    for(let x in ssg1){
        arr1.push(ssg1[x].Capacity/1);
    }}());
arr1.splice(-2,2);
(function(){
    for(let x in ssg1){
        arr2.push((ssg1[x].Transformer_P/1).toFixed(0)/1);
    }}());
arr2.splice(-2,2);
(function(){
    for(let x in ssg2){
        arr3.push(ssg2[x].name);
    }}());
arr3.splice(-2,2);
let Component = React.createClass({
    componentWillMount() {
    },

    render() {
        let configPie = {
            chart: {
                type: 'column',
                backgroundColor: "rgba(46, 46, 65, 0)",
                plotBackgroundColor: "rgba(46, 46, 65, 0)",
                plotBorderWidth: 0,
                borderWidth: 0,
                plotShadow: false,
                height:270,
                marginTop: 50,
                marginBottom:45,
            },
            title: {
                text: '',
                style:{
                    color:"#fff",
                    fontSize:"24px",
                    fontFamily:"Microsoft YaHei"
                }
            },
            tooltip: {headerFormat:'<span style="font-size: 20px;">{series.name}</span>',
                // pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                pointFormat: "<b>{point.percentage:.0f}%</b>",
                style:{
                    fontSize:'15px'
                }
            },
            legend: {
                enabled:false
            },
            xAxis: {
                labels: {
                    style: {
                        color: '#fff',//颜色
                        fontSize:'12px'  //字体
                    },
                    rotation: 0
                },
                categories: ['十一月','十二月','一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月']
            },
            yAxis: {
                lineWidth: 1,
                title: {
                    text: ''
                },
                gridLineWidth: 0
            },
            credits: {
                enabled: false //不显示highCharts版权信息
            },
            colors: ['#32C5CD', '#37545C']
            ,
            plotOptions: {
                series: {
                    stacking: 'normal',
                    allowPointSelect: false,
                    cursor: 'pointer',
                    borderWidth: 0,
                    dataLabels: {
                        enabled: false
                    }
                }
            },
            series: [{
                data: arr1,
                borderRadius: 5
            },{
                data: arr2,
                borderRadius: 5
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
        init: () => {},
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);