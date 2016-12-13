import React from 'react';
import {connect} from 'react-redux';
import styles from './Hindex.scss';
import Hly_tsa from './Hly_tsa.jsx';

import Hly_ds from './Hly_ds.jsx';
var actions = require('redux/actions');


let data = require('./Healthy-data');
let month=data.data.line_month;
let barLoTime1 = data.data.line_month;
let barLoPowerValue1 = data.data.bar_loPower;
let barRoPowerValue1 = data.data.bar_roPowers;
let barRoPowerValues1 = data.data.bar_roPowerses;
let barLdpowerValue2 = data.data.line_date;
let barLpdpowerValue2 = data.data.line_pdate;
let barlinepdats2 = data.data.line_pdates;
let barlinepdat2 = data.data.line_pdatess;
let text222=data.data.line_date;

let Component = React.createClass({
    componentDidMount() {
        this.props.init();
    },


    render() {
        let { ip="10.68.100.32",befor_pages = 'area', returnit} = this.props;
        return (




            <div className = {styles.box}>
                <div className={styles.return2} onClick={() => returnit(befor_pages)}>返回</div>
                <div className={styles.tbox2}>
                    <div className={`${styles.box_shadow} ${styles.logofa}`}>
                        <Hly_tsa text={"区域每月PBA"}  names={'PBA'} barLoTime={barLoTime1} barLoPowerValue={barLoPowerValue1} barRoPowerValue={barRoPowerValue1} barRoPowerValues={barRoPowerValues1}></Hly_tsa>
                        <div className={styles.logo}>

                        </div>
                    </div>
                </div>

                <div className={styles.clear}>

                </div>
                <div className={`${styles.fbox} `}>
                    <div className={` ${styles.logofa} ${styles.box_shadow}`}>
                        <Hly_ds text={"集团"+text222[4]+"月每日PBA"} names={'PBA'} barLdpowerValue={barLdpowerValue2} barLpdpowerValue={barLpdpowerValue2} barlinepdats={barlinepdats2} barlinepdat={barlinepdat2}></Hly_ds>
                        <div className={styles.logomini}>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
});


const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        init: () => {
            var obj = {
                test:''
            }
        } ,
        returnit: (befor_pages) => {
            dispatch(actions.setVars('showPage', befor_pages));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
