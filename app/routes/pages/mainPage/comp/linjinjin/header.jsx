import React from 'react';
import {connect} from 'react-redux';
import styles from './header.scss';
import back from '../../img/comp/back.png';
var actions = require('redux/actions');
let matrixdata = require('../../../../../../config/MatrixData');
let model = require('../../../../../../config/Model');
let modeldata = require('../../../../../../config/ModelData');
var $ =require('jquery');
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
       let{ changpage, fcpage,actbt=0,backtop,changpage1,actbt1,befor_page='super',befor_page2}=this.props;
        return (
         
                <div className={styles.bodynav}>
                <img src={back} onClick={()=>backtop(befor_page,befor_page2)}/>
                <img src={back} id='back'/>
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
        befor_page : state.vars.befor_page,
        befor_page2 : state.vars.befor_page2,

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        init: (flag) => {
          $('#back').on('click',function(){
            alert(1)
          })
            var obj = {
                test:'',
                }

        },
         changpage :(value,key)=>{
              dispatch(actions.setVars('fan_page', 'allpage'));
              dispatch(actions.setVars('numpage', 'fanmatrix'));
              dispatch(actions.setVars('actbt',key ));
              dispatch(actions.setVars('actbt1','' ));
              dispatch(actions.setVars('valuepage', value));
              dispatch(actions.setVars('Changnav', 0));
              dispatch(actions.setVars('actbtn', 0));
              dispatch(actions.setVars('fc_info', value));
             
        },
        changpage1 :(value,key)=>{
              dispatch(actions.setVars('fan_page', 'allpage'));
              dispatch(actions.setVars('numpage', 'pvmatrix'));
              dispatch(actions.setVars('actbt1',key ));
              dispatch(actions.setVars('actbt','' ));
              dispatch(actions.setVars('valuepage1', value));
              dispatch(actions.setVars('Changnav', 1));
              dispatch(actions.setVars('actbtn', 0));
              dispatch(actions.setVars('fc_info', value));

        },
        backtop:(befor_page,befor_page2)=>{
            dispatch(actions.setVars('showPage',befor_page));
            dispatch(actions.setVars('navhide', true));
            dispatch(actions.setVars('numpage', 'fanmatrix'));
            console.log(befor_page2)
        }
   
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
