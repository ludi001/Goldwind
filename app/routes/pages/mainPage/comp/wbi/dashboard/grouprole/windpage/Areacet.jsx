import React from 'react';
import {connect} from 'react-redux';
import styles from './Areacestyle.scss';
import Windcet from './Windcet.jsx';
import Windcett from './Windcett.jsx';
import icono from '../../../../../img/comp/wind_logo.png';
var actions = require('redux/actions');
var $ = require('jquery');
let data = require('./../group/Profit-data3');
let month = data.month;
let button = data.button;
let input_url = "10.9.100.38";
let x0 = [];
let x1 = [];
let x2 = [];
let x3 = [];
let windPT = data.windFJJ;
let Component = React.createClass({
    componentWillMount() {
        let {xxdwfId, xxdwfNa, ipUrl}=this.props;
        this.props.ajax(xxdwfId, xxdwfNa, ipUrl);
    },
    componentDidMount() {
        this.props.init();
    },
    render() {

        let areaPlanDay = data.areaPlanDay;
        let areaPlanDayT = data.areaPlanDayT;
        let text = data.textT;

        let {wftpowerplan, wftmonth, wftpoweract, ipUrl, xxdwfId, xxdwfNa, actbt = 0,  wind, windP, backtop, befor_pagee = 'windpage', areaPlan,mon,secondData}=this.props;
        return (
            <div className={styles.box}>


                <div className={styles.paddingtop}>
                    <div className={styles.back} onClick={() => backtop(befor_pagee,)}>返回</div>
                </div>
                {//12个 月的数据
                     }
                <div className={`${styles.biggbox} ${styles.shadow}`}>


                    <Windcett areaPlan={wftmonth} xxdwfId={xxdwfId} input_url={ipUrl} areaPlanDay={wftpowerplan}
                              areaPlanDayT={wftpoweract} height={410} text={xxdwfNa + '每月发电量'} secondData={secondData}></Windcett>


                    <div className={styles.imgq}>
                        <img src={icono}/>
                    </div>

                </div>

                {//每天的数据
                     }
                <div className={`${styles.biggbox} ${styles.shadow}`}>


                    <Windcet areaPlan={areaPlan} areaPlanDay={wind} areaPlanDayT={windP} height={410}
                             text={mon + xxdwfNa + '每日发电量'}></Windcet>


                    <div className={styles.imgq}>
                        <img src={icono}/>
                    </div>

                </div>
            </div>



        );
    }
});


const mapStateToProps = (state) => {
    return {
        actbt: state.vars.actbtt,
        wind: state.vars.areaRecordCostNP,
        windP: state.vars.areaRecordProfitNP,
        befor_pagee: state.vars.befor_pagee,
        xxdwfId: state.vars.xxdwfId1,
        xxdwfNa: state.vars.xxdwfNa1,
        btn: state.vars.btnn,
        areaPlan: state.vars.areaNameNP,
        ipUrl: state.vars.ipUrl,
        wftmonth: state.vars.wftmonth1,
        wftpowerplan: state.vars.wftpowerplan1,
        wftpoweract: state.vars.wftpoweract1,
        mon: state.vars.mon,
        secondData: state.vars.secondData,


    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        ajax: (xxdwfId, xxdwfNa, input_url) => {
            let arr1 = [];
            let arr2 = [];
            let arr3 = [];
            let date = new Date();
            let year=date.getFullYear();
            let month = date.getMonth();
            if (month == 0) {
                month = 12;
                year = year - 1;
            }
            let wftmonth = [];
            let wftpoweract = [];
            let wftpowerplan = [];
            let secondData=[];
            // 发电量12个月的
            $.ajax({
                url: 'http://' + input_url + '/wbi/ELEC/getWfieldElec',
                type: 'post',
                async: true,
                data: {'wfid': xxdwfId},
                dataType: 'json',//here
                success: function (data) {

 secondData=data.data.wfieldsMonthsElec

                    for (let i in data.data.wfieldsMonthsElec) {
                        let month = data.data.wfieldsMonthsElec[i].month;
                        wftmonth.push(month + '月');
                        let poweract = data.data.wfieldsMonthsElec[i].poweract;
                        wftpoweract.push(poweract);


                    }
                    for (let j in data.data.wfieldsMonthsPlanElec) {

                        wftpowerplan.push(data.data.wfieldsMonthsPlanElec[j]);
                    }

                    dispatch(actions.setVars('wftmonth1', wftmonth));
                    dispatch(actions.setVars('wftpowerplan1', wftpowerplan));
                    dispatch(actions.setVars('wftpoweract1', wftpoweract));
                    dispatch(actions.setVars('secondData', secondData));
                },
                error: function () {

                },
            });
            // 初始的月每天
            $.ajax({
                type: 'post',
                url: 'http://' + input_url + '/wbi/ELEC/getWtTimeAreaElec',
                async: false,
                data: {
                    'month': month,
                    'wfid': xxdwfId,
                    'year':year,
                },
                dataType: 'json',
                timeout: '3000',
                success: function (data) {


                    let dataa = data.data;
                    for (let i = 0; i < dataa.length; i++) {
                        // 每天
                        let xDay = data.data[i].day + '日';
                        arr1.push(xDay);
                        // 计划发电量
                        let yPowerPlan = Number(data.data[i].powerplan.toFixed(2));
                        arr2.push(yPowerPlan);
                        // 实际发电量
                        let yPowerAct = Number(data.data[i].poweract.toFixed(2));
                        arr3.push(yPowerAct);
                    }


                    dispatch(actions.setVars('areaNameNP', arr1));
                    dispatch(actions.setVars('areaRecordCostNP', arr2));
                    dispatch(actions.setVars('areaRecordProfitNP', arr3));
                    dispatch(actions.setVars('actbtt', month));
                    
                    dispatch(actions.setVars('mon', month+'月'));
                },
                error: function () {

                },
            });

        }
        ,
        init: () => {
            var obj = {
                test: ''
            }
        }
        ,
        changpage: (value, key, xxdwfId, input_url) => {
            dispatch(actions.setVars('actbtt', key));
            let date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth();

            if (month == 0) {
                month = 12;
                year = year - 1;
            }
            var arr1w = [];
            var arr2w = [];
            var arr3w = [];
            var monthh = key + 1;
            $.ajax({
                type: 'post',
                url: 'http://' + input_url + '/wbi/ELEC/getWtTimeAreaElec',
                async: false,
                data: {
                    'year': year,
                    'month': monthh,
                    'wfid': xxdwfId,
                },
                dataType: 'json',
                timeout: '3000',
                success: function (data) {

                    // 获取x轴的值内蒙达茂天润风电场

                    for (var i = 0; i < data.data.length; i++) {
                        var xDay = data.data[i].day + '日';
                        arr1w.push(xDay);
                        var yPowerPlan = data.data[i].powerplan;
                        arr2w.push(yPowerPlan);
                        var yPowerAct = data.data[i].poweract;
                        arr3w.push(yPowerAct);
                    }

                },
                error: function () {

                },
            });
            dispatch(actions.setVars('areaNameNP', arr1w));
            dispatch(actions.setVars('areaRecordCostNP', arr2w));
            dispatch(actions.setVars('areaRecordProfitNP', arr3w));

        },

        backtop: (befor_pagee, ) => {
            dispatch(actions.setVars('showPage', befor_pagee));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
