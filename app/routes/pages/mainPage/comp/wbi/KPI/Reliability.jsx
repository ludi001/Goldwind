import React from 'react';
import {connect} from 'react-redux';
import styles from './ReliabilityStyle.scss';
import PBAdata from './TimeSelect-data';
import ChartPie from './ChartPie.jsx';
import TwoColumn from './TwoColumn.jsx';
import Login from '../../../../../../components/common/Loading.jsx';

var actions = require('redux/actions');

let Component = React.createClass({
    componentDidMount() {
        let {ipUrl,selectId,selectName,init}=this.props;
        this.props.init(ipUrl,selectId,selectName);
        setTimeout(function(){
            init(ipUrl,selectId,selectName)
        },800)
    },
    
    render() {
        let {buttonResetA,buttonResetB,machineTypeTwo=[],machineTypeOne=[],typeTwo=[],typeOne=[],typeNameTwo,typeNameOne,reliabilityNameOne,reliabilityNameTwo,reliabilityOne=[],reliabilityTwo=[],wtType,ipUrl,reliabilityBool=false,selectId,selectName,buttonAction,buttonReset,inputOnChange, onFocus,changeValueS,changeValueE} = this.props;
        let comp = PBAdata.list;
        if(reliabilityBool){
            return(
                <div className={styles.bodyBox}>
                    <div className={styles.inquireBox}>
                        {
                            comp.map((value, key)=> {
                                if (value.type === 'date') {
                                    return (
                                            <div className={styles.dateBox} key={key}>
                                                <span>发生时间</span><input id="startTime" ref="startTime" placeholder={value.content} onChange={(e)=>changeValueS(e.target.value)} type={value.type} style={{width:value.width}}/>
                                                <span>结束时间</span><input id="endTime" ref="endTime" placeholder={value.content} onChange={(e)=>changeValueE(e.target.value)} type={value.type} style={{width:value.width}}/>
                                            </div>
                                        )
                                }else if (value.type === 'button') {
                                    return (
                                            <div className={styles.btnBox} key={key}>
                                                <div className={styles.bBox}>
                                                    <button onClick={()=>buttonAction(ipUrl,selectId,selectName,wtType,typeTwo=[],typeOne=[],typeNameTwo,typeNameOne,reliabilityNameOne,reliabilityNameTwo,reliabilityOne=[],reliabilityTwo=[],machineTypeTwo=[],machineTypeOne=[])}>{"查询"}</button>
                                                </div>
                                                <div className={styles.bBox}>
                                                    <button onClick={()=>buttonReset()}>{"重置"}</button>
                                                </div>
                                            </div>
                                        )
                                }
                            })
                        }
                        <div className={styles.seleBox}>
                                        <span>选择KPI损失电量对象</span>
                                        <select>
                                        {
                                            selectName.map((value, key)=> {
                                                return(
                                                    <option value={value} key={key}>{value}</option>
                                                )
                                           })
                                        }
                                        </select>
                        </div>
                    </div>
                    
                    <div className={styles.content}>
                        <div className={styles.floorOne}>
                            <div className={`${styles.pie} ${styles.boxShadow}`}>
                                <div className={typeNameOne==undefined? styles.hide:styles.button} onClick={()=>buttonResetA()}>清除</div>
                                <ChartPie unit={"h"} name={reliabilityNameOne} text={reliabilityNameOne} lose={reliabilityOne}></ChartPie>
                            </div>
                            <div className={`${styles.column} ${styles.boxShadow}`}>
                                <TwoColumn name={typeNameOne} title={typeNameOne} month={machineTypeOne} plan={typeOne} unit={"h"}></TwoColumn>
                            </div>
                        </div>
                        <div className={styles.floorTwo}>
                            <div className={`${styles.pie} ${styles.boxShadow}`}>
                                <div className={typeNameTwo==undefined? styles.hide:styles.button} onClick={()=>buttonResetB()}>清除</div>
                                <ChartPie unit={"h"} name={reliabilityNameOne} text={reliabilityNameTwo} lose={reliabilityTwo}></ChartPie>
                            </div>
                            <div className={`${styles.column} ${styles.boxShadow}`}>
                                <TwoColumn name={typeNameTwo} title={typeNameTwo} month={machineTypeTwo} plan={typeTwo} unit={"h"}></TwoColumn>
                            </div>
                        </div>
                    </div>
                </div>
            )   
        }else{
            return(
                <Login></Login>
            )   
        }
        
        
    }
});

const mapStateToProps = (state) => {
    return {
        selectId : state.vars.selectId,
        selectName : state.vars.selectName,
        ipUrl : state.vars.ipUrl,
        reliabilityBool : state.vars.reliabilityBool,
        
        reliabilityNameOne : state.vars.reliabilityNameOne,
        reliabilityOne : state.vars.reliabilityOne,
        machineTypeOne : state.vars.machineTypeOne,
        typeNameOne : state.vars.typeNameOne,
        typeOne : state.vars.typeOne,

        reliabilityNameTwo : state.vars.reliabilityNameTwo,
        reliabilityTwo : state.vars.reliabilityTwo,
        machineTypeTwo : state.vars.machineTypeTwo,
        typeNameTwo : state.vars.typeNameTwo,
        typeTwo : state.vars.typeTwo,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        init: (ipUrl,selectId,selectName) => {
            dispatch(actions.setVars('reliabilityNameOne', ));
            dispatch(actions.setVars('reliabilityOne', ));
            dispatch(actions.setVars('typeNameOne', ));
            dispatch(actions.setVars('typeOne', ));
            dispatch(actions.setVars('machineTypeOne', ));

            dispatch(actions.setVars('reliabilityNameTwo', ));
            dispatch(actions.setVars('reliabilityTwo', ));
            dispatch(actions.setVars('typeNameTwo', ));
            dispatch(actions.setVars('typeTwo', ));
            dispatch(actions.setVars('machineTypeTwo', ));
            //初始日期为上月
            var date = new Date();
            var yearString=date.getFullYear();
            var monthString=date.getMonth()+1;
            var dayString;
            //判断获取上月的月份和年份
            if(monthString==1){
                monthString=12;
                yearString=yearString-1;
            }else{
                monthString=monthString-1;
            };
            //判断获取上月最后一天日期
            if(monthString==2){
                if(yearString%4==0){
                    dayString=29;
                }
                dayString=28;
            }else if(monthString==4||6||9||11){
                dayString=30;
            }else{
                dayString=31;
            };
            var startString=yearString+'-'+monthString+'-'+'01';
            var endString=yearString+'-'+monthString+'-'+dayString;
            $('#startTime').val(startString);
            $('#endTime').val(endString); 
            
            $.ajax({
                url:'http://'+ipUrl+'/wbi/KPI/getGroupidAndwfid',//下拉框内容
                type: 'post',
                async: true,
                dataType: 'json',
                data: '',
                timeout : 60000, 
                success: function (data) {
                    selectId=[],selectName=[];
                    for(var i in data.data) {
                        selectId.push(data.data[i].groupid);
                        selectName.push(data.data[i].groupname);
                        for(var j in data.data[i].wfs) {
                            selectId.push(data.data[i].wfs[j].wfid);
                            selectName.push(data.data[i].wfs[j].wfname);
                        }
                    }
                    dispatch(actions.setVars('selectId', selectId));
                    dispatch(actions.setVars('selectName', selectName));
                },
                complete : function(XMLHttpRequest,status) { 
                    dispatch(actions.setVars('reliabilityBool', true));
                },
            });
        },
        changeValueS:(e)=>{
            
        },
        changeValueE:(e)=>{
            
        },
        buttonResetA:()=>{
            dispatch(actions.setVars('reliabilityNameOne', ));
            dispatch(actions.setVars('reliabilityOne', ));
            dispatch(actions.setVars('typeNameOne', ));
            dispatch(actions.setVars('typeOne', ));
            dispatch(actions.setVars('machineTypeOne', ));
        },
        buttonResetB:()=>{
            dispatch(actions.setVars('reliabilityNameTwo', ));
            dispatch(actions.setVars('reliabilityTwo', ));
            dispatch(actions.setVars('typeNameTwo', ));
            dispatch(actions.setVars('typeTwo', ));
            dispatch(actions.setVars('machineTypeTwo', ));
        },
        buttonReset:()=>{
            dispatch(actions.setVars('reliabilityNameOne', ));
            dispatch(actions.setVars('reliabilityOne', ));
            dispatch(actions.setVars('typeNameOne', ));
            dispatch(actions.setVars('typeOne', ));
            dispatch(actions.setVars('machineTypeOne', ));

            dispatch(actions.setVars('reliabilityNameTwo', ));
            dispatch(actions.setVars('reliabilityTwo', ));
            dispatch(actions.setVars('typeNameTwo', ));
            dispatch(actions.setVars('typeTwo', ));
            dispatch(actions.setVars('machineTypeTwo', ));
        },
        buttonAction:(ipUrl,selectId,selectName,wtType,typeTwo=[],typeOne=[],typeNameTwo,typeNameOne,reliabilityNameOne,reliabilityNameTwo,reliabilityOne=[],reliabilityTwo=[],machineTypeTwo=[],machineTypeOne=[])=>{
            var sTime = $('#startTime').val();
            //结束时间时间
            var eTime = $('#endTime').val();
            if(sTime == '' || eTime == '') {
                alert('请选择开始或者结束时间');
                return false;
            };
            var A=$('select').val();
            for(var i in selectName){
                if(selectName[i]==A){
                    selectId=selectId[i];
                }
            };
            if(selectId<1000000){
                $.ajax({
                    url:'http://'+ipUrl+'/wbi/KPI/getReliableAnalyse',
                    type: 'post',
                    async: false,
                    dataType: 'json',
                    data: {'startTime':sTime,'endTime':eTime,'wfid':selectId}, 
                    success: function (data) {
                        if(typeNameOne==undefined){
                            reliabilityOne=[];
                            wtType=data.data[0].wttype;
                            for(var i in data.data){
                                reliabilityOne.push([data.data[i].wttype,(data.data[i].totalloss).toFixed(1)/1]);
                            };
                            reliabilityNameOne=A;
                            dispatch(actions.setVars('reliabilityNameOne', reliabilityNameOne));
                            dispatch(actions.setVars('reliabilityOne', reliabilityOne));
                        }else if(typeNameOne!==undefined&&typeNameTwo==undefined){
                            reliabilityTwo=[];
                            wtType=data.data[0].wttype;
                            for(var i in data.data){
                                reliabilityTwo.push([data.data[i].wttype,(data.data[i].totalloss).toFixed(1)/1]);
                            };
                            reliabilityNameTwo=A;
                            dispatch(actions.setVars('reliabilityNameTwo', reliabilityNameTwo));
                            dispatch(actions.setVars('reliabilityTwo', reliabilityTwo));
                        }else{
                            alert('请先重置清除数据');
                        }
                    },
                    complete : function(XMLHttpRequest,status) {
                        $.ajax({
                            url:'http://'+ipUrl+'/wbi/KPI/getReliableNormAnalyse',
                            type: 'post',
                            async: false,
                            dataType: 'json',
                            data: {'wttype':wtType,'startTime':sTime,'endTime':eTime,'wfid':selectId}, 
                            success: function (data) {
                                if(typeNameOne==undefined){
                                    typeOne=[],machineTypeOne=[];
                                    typeNameOne=wtType;
                                    for(var i in data.data){
                                        typeOne.push((data.data[i]).toFixed(1)/1);
                                        machineTypeOne.push(i);
                                    }
                                    dispatch(actions.setVars('typeNameOne', typeNameOne));
                                    dispatch(actions.setVars('typeOne', typeOne));
                                    dispatch(actions.setVars('machineTypeOne', machineTypeOne));
                                }else if(typeNameOne!==undefined&&typeNameTwo==undefined){
                                    typeTwo=[],machineTypeTwo=[];
                                    typeNameTwo=wtType;
                                    for(var i in data.data){
                                        typeTwo.push((data.data[i]).toFixed(1)/1);
                                        machineTypeTwo.push(i);
                                    }
                                    dispatch(actions.setVars('typeNameTwo', typeNameTwo));
                                    dispatch(actions.setVars('typeTwo', typeTwo));
                                    dispatch(actions.setVars('machineTypeTwo', machineTypeTwo));
                                }
                            },
                            complete : function(XMLHttpRequest,status) {},
                        });
                    },
                });
            }else{
                $.ajax({
                    url:'http://'+ipUrl+'/wbi/KPI/getReliableAnalyse',//区域
                    type: 'post',
                    async: false,
                    dataType: 'json',
                    data: {'startTime':sTime,'endTime':eTime,'groupid':selectId}, 
                    success: function (data) {
                        if(typeNameOne==undefined){
                            reliabilityOne=[];
                            wtType=data.data[0].wttype;
                            for(var i in data.data){
                                reliabilityOne.push([data.data[i].wttype,(data.data[i].totalloss).toFixed(1)/1]);
                            };
                            reliabilityNameOne=A;
                            dispatch(actions.setVars('reliabilityNameOne', reliabilityNameOne));
                            dispatch(actions.setVars('reliabilityOne', reliabilityOne));
                        }else if(typeNameOne!==undefined&&typeNameTwo==undefined){
                            reliabilityTwo=[];
                            wtType=data.data[0].wttype;
                            for(var i in data.data){
                                reliabilityTwo.push([data.data[i].wttype,(data.data[i].totalloss).toFixed(1)/1]);
                            };
                            reliabilityNameTwo=A;
                            dispatch(actions.setVars('reliabilityNameTwo', reliabilityNameTwo));
                            dispatch(actions.setVars('reliabilityTwo', reliabilityTwo));
                        }else{
                            alert('请先重置清除数据');
                        }
                    },
                    complete : function(XMLHttpRequest,status) {
                        $.ajax({
                            url:'http://'+ipUrl+'/wbi/KPI/getReliableNormAnalyse',
                            type: 'post',
                            async: false,
                            dataType: 'json',
                            data: {'wttype':wtType,'startTime':sTime,'endTime':eTime,'groupid':selectId}, 
                            success: function (data) {
                                if(typeNameOne==undefined){
                                    typeOne=[],machineTypeOne=[];
                                    typeNameOne=wtType;
                                    for(var i in data.data){
                                        typeOne.push((data.data[i]).toFixed(1)/1);
                                        machineTypeOne.push(i);
                                    }
                                    dispatch(actions.setVars('typeNameOne', typeNameOne));
                                    dispatch(actions.setVars('typeOne', typeOne));
                                    dispatch(actions.setVars('machineTypeOne', machineTypeOne));
                                }else if(typeNameOne!==undefined&&typeNameTwo==undefined){
                                    typeTwo=[],machineTypeTwo=[];
                                    typeNameTwo=wtType;
                                    for(var i in data.data){
                                        typeTwo.push((data.data[i]).toFixed(1)/1);
                                        machineTypeTwo.push(i);
                                    }
                                    dispatch(actions.setVars('typeNameTwo', typeNameTwo));
                                    dispatch(actions.setVars('typeTwo', typeTwo));
                                    dispatch(actions.setVars('machineTypeTwo', machineTypeTwo));
                                }
                            },
                            complete : function(XMLHttpRequest,status) {},
                        });
                    },
                });
            }
                
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);