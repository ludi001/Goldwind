import React from 'react';
import {connect} from 'react-redux';
import styles from './Hindex.scss';
import Hly_t from './Hly_t.jsx';
import Hly_a from './Hly_a.jsx';
import Hly_pba from './Hly_pba.jsx';
import Hly_pbas from './Hly_pbas.jsx';
import Hly_r from './Hly_r.jsx';
import Hly_rs from './Hly_rs.jsx';
import Hly_d from './Hly_d.jsx';
var actions = require('redux/actions');
var $ = require('jquery');

let data = require('./Healthy-data');
let month = data.data.line_month;
let button = data.data.button;
let barLoPowerValue1 = data.data.bar_roPowerses;
let barLoPowerValues1 = data.data.bar_roPower;
let barLdpowerValue1 = data.data.line_lpower;
let barLotime1 = data.data.bar_lotime;
let text0 = data.data.line_date;
let barRotime2 = data.data.bar_rotime;
let barLoPowerValue2 = data.data.bar_roPowerses;
let barLoPowerValues2 = data.data.bar_roPower;
let barLdpowerValue2 = data.data.line_lpower;
let barRotimes3 = data.data.bar_rotimes;
let barLoPowerValue3 = data.data.bar_roPowerses;
let barLoPowerValues3 = data.data.bar_roPower;
let barLdpowerValue3 = data.data.line_lpower;

let sort0 = data.data.sort1;
let x0 = [];
let x1 = [];
let x2 = [];
let x3 = [];
let x4 = [];
let x5 = [];
let x6=[];
let x7=[];
(function () {

    for (var i = 0; i < 12; i++) {
        x4[i] = sort0[i].name;
        x5[i] = sort0[i].time;
    }
    for(var i=0;i<sort0.length;i++){
        x6[i]=sort0[i].name;
        x7[i]=sort0[i].time;
    }

})();

let Component = React.createClass({
    componentDidMount() {
        this.props.init();
    },


    render() {
        let {w0="一区域",w10="风场1",mon="一月份",win,windplan=win,befor_pages='group', returnit,hideit,wind, winds, windss, buttonAction, actbt = 0, changecolor, gogogo,back,more, arr, arr2} = this.props;
        return (




            <div className={styles.box}>

                <div className={styles.light} id="light"> </div>

                <div className={`${styles.boxhidden} ${styles.box_shadow}`}   id="boxhidden">
                    <div className={styles.hidden_top}>
                        <div className={styles.logo2}></div>
                        <div className={styles.logo3}>
                            {mon+w0+w10+"各风机健康度"}
                            </div>
                        <span onClick={()=>hideit()}>×</span>
                    </div>
                    <Hly_pbas height={500} widths={1620} text={''}
                              barRotimes={x6} barLoPowerValue={x7}
                              barLoPowerValues={x7} barLdpowerValue={x7}></Hly_pbas>



                </div>



                <div className={styles.onmonth}>
                    {
                        data.data.yearelectric[0].wind.map((value, key) => {
                            return (
                                <div className={actbt === key ? styles.inmonth : styles.inmonth2} key={key}
                                     onClick={() => changecolor(value, key)}>
                                    {value.name}
                                </div>
                            )
                        })
                    }
                    <div className={styles.return}  onClick={()=>returnit(befor_pages)}>返回</div>
                </div>


                <div className={`${styles.tbox}`}>
                    <div className={`${styles.box_shadow} ${styles.logofa}`}>
                        <Hly_a text={text0[actbt] + "月份集团各区域PBA"} barLotime={barLotime1}
                               barLdpowerValue={winds == undefined ? barLoPowerValue1 : winds}
                               barLoPowerValues={wind == undefined ? barLoPowerValue2 : wind}
                               barLoPowerValue={windss == undefined ? barLoPowerValue1 : windss}></Hly_a>
                        <div className={styles.logo}>

                        </div>
                    </div>
                </div>

                <div className={styles.clear}>

                </div>
                <div className={styles.fbox}>
                    <div className={`${styles.rbox} ${styles.box_shadow}`}>
                        <Hly_pba height={400} text={mon+w0+"各风场PBA"} barRotime={barRotime2}
                                 barLoPowerValue={barLoPowerValue2} barLoPowerValues={barLoPowerValue2}
                                 barLdpowerValue={barLoPowerValue1}></Hly_pba>
                        <div className={styles.logomini}>

                        </div>
                    </div>

                    <div className={`${styles.rbox2} ${styles.box_shadow} ${styles.logofa}`}>
                        <div className={styles.rbox30}>

                        </div>
                        <div className={styles.rbox33}>

                            <button className={styles.button} onClick={() => gogogo(sort0)}>前10</button>
                            <button className={styles.button} onClick={() => back(sort0)}>后10</button>
                            <button className={styles.button} onClick={() => more()}>更多</button>
                        </div>


                        <div className={styles.rbox4}>
                            <Hly_pbas height={400} text={mon+w0+w10+"各风机PBA"}
                                      barRotimes={arr2 == null ? x4 : arr2} barLoPowerValue={arr == null ? x5 : arr}
                                      barLoPowerValues={arr == null ? x5 : arr} barLdpowerValue={arr == null ? x5 : arr}></Hly_pbas>
                            <div className={styles.logomini}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});


const mapStateToProps = (state) => {
    return {
        actbt: state.vars.actbt,
        wind: state.vars.wind,
        winds: state.vars.winds,
        windss: state.vars.windss,
        arr: state.vars.arr,
        arr2: state.vars.arr2,
        w0 : state.vars.w1,
        w10 : state.vars.w11,
        mon : state.vars.mon,
        windplan : state.vars.windplan,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        init: () => {
            var obj = {
                test: ''
            }
        },
        changecolor: (value, key) => {
            dispatch(actions.setVars('mon', value.name));
            dispatch(actions.setVars('actbt', key));
            dispatch(actions.setVars('wind', value.plan));
            dispatch(actions.setVars('winds', value.actrul));
            dispatch(actions.setVars('windss', value.actruls));
        },
        gogogo: (sort0) => {
            (function () {
                sort0.sort(function (a, b) {
                    return b.time - a.time;
                })
                for (var i = 0; i < 12; i++) {
                    x0[i] = sort0[i].name;
                    x1[i] = sort0[i].time;
                }

            })();
            dispatch(actions.setVars('arr', x1))
            dispatch(actions.setVars('arr2', x0))


        },
        back: (sort0) => {
            (function () {
                sort0.sort(function (a, b) {
                    return a.time - b.time;
                })
                for (var i = 0; i < 12; i++) {
                    x2[i] = sort0[i].name;
                    x3[i] = sort0[i].time;
                }

            })();
            dispatch(actions.setVars('arr', x3))
            dispatch(actions.setVars('arr2', x2))
        },
        more: () => {
            $("#light").show();
            $("#boxhidden").show();
        },
        hideit: () =>{
            $("#boxhidden").hide();
            $("#light").hide();
        },
        returnit:(befor_pages)=>{
            dispatch(actions.setVars('showPage',befor_pages));

        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
