import React from 'react';
import {connect} from 'react-redux';
import styles from './header.scss';
import back from '../../img/comp/back.png';
var actions = require('redux/actions');
let matrixdata = require('../../../../../../config/MatrixData');
let model = require('../../../../../../config/Model');
let modeldata = require('../../../../../../config/ModelData');

let data=modeldata.ModelData;
let mod=model.Model;
let  mat=model.Model;
let matD=matrixdata.ModelData;
let model_data = modeldata.ModelData;
var model_ens = model.Model.ens;
let arr1 = [];
let arr2 = [];
var obj = matrixdata;
var obj_wfd = obj.ModelData[8888801].WFDevsStatus;
var obj_pvd = obj.ModelData[8888802].PVDevsStatus;


(function(){
    for(var x in obj_wfd){
        arr1.push(x)
    }
     for(var m in obj_pvd){
        arr2.push(m)
        
    }
   
}());


let Component = React.createClass({
    componentDidMount() {
        this.props.init();
    },

    render() {
       let{ changpage, fcpage,actbt=0,backtop,changpage1,actbt1}=this.props;
        return (
         
                <div className={styles.bodynav}>
                <img src={back} onClick={()=>backtop()}/>
                 {
                    arr1.map((value,key)=>{
                        return(
                            <div className={actbt===key? styles.bodybtn1 : styles.bodybtn} key={key} onClick={()=>changpage(value,key)}>{model_ens[value].name}</div>
                            )
                    })

                 }
                  {
                    arr2.map((value,key)=>{
                        return(
                            <div className={actbt1===key? styles.bodybtn1 : styles.bodybtn} key={key} onClick={()=>changpage1(value,key)}>{model_ens[value].name}</div>
                            )
                    })
                    
                 }

                </div>
        );
    }
});


const mapStateToProps = (state) => {
    return {

        actbt : state.vars.actbt,
        actbt1 : state.vars.actbt1,

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        init: (flag) => {
            var obj = {
                test:'',
                }

        },
         changpage :(value,key)=>{
              dispatch(actions.setVars('numpage', 'fanmatrix'));
              dispatch(actions.setVars('actbt',key ));
              dispatch(actions.setVars('actbt1','' ));
              dispatch(actions.setVars('valuepage', value));
              dispatch(actions.setVars('hiden', true));
        },
        changpage1 :(value,key)=>{
              dispatch(actions.setVars('numpage', 'pvmatrix'));
              dispatch(actions.setVars('actbt1',key ));
              dispatch(actions.setVars('actbt','' ));
              dispatch(actions.setVars('valuepage1', value));
              dispatch(actions.setVars('hiden', true));
        },
        backtop:()=>{
            dispatch(actions.setVars('showPage','distribution'));
            dispatch(actions.setVars('navhide', true));
            dispatch(actions.setVars('numpage', 'fanmatrix'));
        }
   
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
