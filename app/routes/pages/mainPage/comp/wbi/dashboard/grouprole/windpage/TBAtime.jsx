import React from 'react';
import {connect} from 'react-redux';
import styles from './Areacestylee.scss';
import TBAtimechart from './TBAtimechart.jsx';
import TBAtimechartt from './TBAtimechartt.jsx';
import icono from '../../../../../img/comp/TBA.png';;
var actions = require('redux/actions');
let data=require('./../group/Profit-data3');
let input_url="10.68.100.32";
let Component = React.createClass({
    componentWillMount() {
       let{xxdwfId,xxdwfNa,ipUrl}=this.props;
        this.props.ajax(xxdwfId,xxdwfNa,ipUrl);
    },
    componentDidMount() {
        this.props.init();
    },

    render() {
        let {ipUrl,xxdwfNa,xxdwfId,changedata2,TBA,TBAAA,montht,profit,cost,areaPlan,areaPlanDay,areaPlanDayT,w0,winss,befor_pagee='windpage',backtop,befor_pagee2}=this.props;
        
        return (
            <div className={`${styles.box} ${styles.shadow}`}>
          
             <div className={styles.padding}>
              
             <div className={styles.back} onClick={()=>backtop(befor_pagee,befor_pagee2)}>返回</div></div>
                <div className={styles.bigbox}>
 
                       <div className={styles.imgqq}>
                        <img  className={styles.img}src={icono}/>
                       </div>
                          <TBAtimechart xxdwfNa={xxdwfNa}montht={montht} profit={profit} cost={cost} TBA={TBA} height={420} xxdwfId={xxdwfId} input_url={ipUrl} pointWidth={30}></TBAtimechart>
   
                </div>
                   <div className={styles.bigbox}>
               
                                <TBAtimechartt areaPlan={areaPlan} areaPlanDay={areaPlanDay} areaPlanDayT={areaPlanDayT} TBA={TBAAA}height={420} text={w0+xxdwfNa+'每日TBA'}></TBAtimechartt>

                     <div className={styles.imgqq}>
                        <img  className={styles.img}src={icono}/>
                    </div>
                </div>
            </div>


        );
    }
});



const mapStateToProps = (state) => {
    return {
       
        winss: state.vars.wins1,
    
        montht:state.vars.wTBAMonth1,
        profit:state.vars.wTBARun1,
        cost:state.vars.wTBADown1,
        TBA:state.vars.wTBAT1,
       
        areaPlan:state.vars.wTBADaD1,
        areaPlanDay:state.vars.wTBARunD1,
        areaPlanDayT:state.vars.wTBADownD1,
        TBAAA:state.vars.wTBATD1, 
        
        w0:state.vars.monthTD1,
         xxdwfId:state.vars.xxdwfId1,
        xxdwfNa:state.vars.xxdwfNa1,
        ipUrl:state.vars.ipUrl,

       

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
           ajax: (xxdwfId,xxdwfNa,input_url) => {
            let date=new Date;
            let monthT=date.getMonth();
            // 12个月的TBA
            let wTBAMonth=[];
            let wTBARun=[];
            let wTBADown=[];
            let wTBAT=[];
            //下面每天的数据TBA
            let wTBADaD=[];
            let wTBARunD=[];
            let wTBADownD=[];
            let wTBATD=[];


           $.ajax({
             type:'post',
             url:'http://'+input_url+'/wbi/TBA/getMonthsTBAByWf',  
             async:false,
            data:{
             'wfid':xxdwfId,
            },
             dataType:'json',
             timeout:'3000',
             success:function(data){
             let wTBATime=data.data;
             for (let i in wTBATime){
             let month=wTBATime[i].month+'月';
             wTBAMonth.push(month);
             let downtimes=wTBATime[i].downtimes;
             wTBADown.push(downtimes);

                let runtimes=wTBATime[i].runtimes;
                wTBARun.push(runtimes);

                let tba=wTBATime[i].tba*100;
                wTBAT.push(Number(tba.toFixed(1)));



             }
            
             },
             error:function(){
                
             },
           });   
           // 给12个月赋初值
           dispatch(actions.setVars('wTBAMonth1',wTBAMonth)) 
           dispatch(actions.setVars('wTBARun1',wTBARun)) 
           dispatch(actions.setVars('wTBADown1',wTBADown)) 
           dispatch(actions.setVars('wTBAT1',wTBAT)) ;
           //默认上个月
           $.ajax({
             type:'post',
             url:'http://'+input_url+'/wbi/TBA/getDaysTBAByWf',  
             async:false,
            data:{
             'wfid':xxdwfId,
             'month':monthT,
            },
             dataType:'json',
             timeout:'3000',
             success:function(data){
           
             let wTBATime=data.data;
             for (let i in wTBATime){
                let day=wTBATime[i].day+'日';
                 wTBADaD.push(day);

                 let downtimes=wTBATime[i].downtimes;
                 wTBADownD.push(downtimes);

                let runtimes=wTBATime[i].runtimes;
                wTBARunD.push(runtimes);

                let tba=wTBATime[i].tba*100;
                wTBATD.push(Number(tba.toFixed(1)));
             }
            
             },
             error:function(){
                 
             },
           });   
           // 给每天赋值
           dispatch(actions.setVars('wTBADaD1',wTBADaD)) 
           dispatch(actions.setVars('wTBARunD1',wTBARunD)) 
           dispatch(actions.setVars('wTBADownD1',wTBADownD)) 
           dispatch(actions.setVars('wTBATD1',wTBATD)) ;
           dispatch(actions.setVars('monthTD1',monthT+'月')) ;
           dispatch(actions.setVars('monthTDD',monthT+'月')) ;
          

        }
        ,

        init: () => {
            var obj = {
                test:''
            }
        }
        ,
        backtop:(befor_pagee,befor_page2)=>{
            dispatch(actions.setVars('showPage',befor_pagee));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
