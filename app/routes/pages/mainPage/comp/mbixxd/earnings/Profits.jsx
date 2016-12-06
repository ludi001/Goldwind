import React from 'react';
import {connect} from 'react-redux';
import styles from './Profitstyle.scss';
import AreaTable from './AreaTable.jsx';
import WindfieldTable from './WindfieldTable.jsx';
import icono from '../wind_logo.png';
import Fanchart from './fanchart.jsx';
import Month from '../Month.jsx';
var actions = require('redux/actions');
let data=require('./Profit-data');
let month=data.month;
let button=data.button;
let areaName=data.areaName;
let areaRecordCost=data.areaRecordCost;
let areaRecordProfit=data.areaRecordProfit;
let TBA=data.TBA;
let text=data.text;
let x0=[];
let x1=[];
let x2=[];
let x3=[];
let x4=[];
let machine=[];
let areaRecordCostR=[];
let areaRecordProfitR=[];
let TBAA=[];
 let windFiled=data.windFiled;
        let windCost=data.windCost;
        let windProfit=data.windProfit;
let windFJ=data.windFJ;
 (function(){
             for(var i=0;i<12;i++){
         machine[i]=data.windFJ[i].name;
         areaRecordCostR[i]=data.windFJ[i].areaRecordCost;
         areaRecordProfitR[i]=data.windFJ[i].areaRecordProfit;
         TBAA[i]=data.windFJ[i].TBA;
        }
    })();
  (function(){

  })() 
let Component = React.createClass({
    componentDidMount() {
        this.props.init();
    },

    render() {
       let{actbt=0,changpage,wind,windP,windPT,gogogo,back,areaRecordCostRR,machinee,height,more,close,ban,backtop,befor_pagee='group',befor_page2,w11='1区域',w111='风机1',sqy,pointPlacement}=this.props;
          return (
           <div className={styles.box}>
            <div className={styles.boxcover} id='boxcover'></div>
             <div className={styles.more} id="sss">
                <div className={styles.moretitle}>
                <img src={icono}/>
                <p>{[actbt+1]+'月'+w11+w111+'各风机收益率'}</p>
                <div onClick={()=>close()}>x</div>
                </div>
                <Fanchart areaRecordCostR={areaRecordCostRR==null?areaRecordCostR:areaRecordCostRR} areaRecordProfitR={areaRecordProfitR} machine={machinee==null?machine:machinee } height={500} TBAA={TBAA} width={1750} pointPlacement={-0.2}></Fanchart>

                 </div>
               <ul className={styles.monthbox}>
                    {
                        data.wind.map((value,key)=>{
                            return(<li className={actbt===key? styles.red : styles.green}  onClick={()=>changpage(value,key)} key={key}>{value.name}</li>)
                        })
                    }
                     <li className={styles.back} onClick={()=>backtop(befor_pagee,befor_page2)}>返回</li>
                </ul>
               <div className={styles.covers} >
                   <div className={styles.bgccc}> <img src={icono}/></div>
                   <div className={`${styles.areabox} ${styles.shadow}`}>
                          <p className={styles.titleeee}>{actbt+1+'月集团各区域收益率'}</p>
                           <AreaTable text={text[actbt]} areaName={areaName} areaRecordCost={wind==undefined? areaRecordCost:wind} areaRecordProfit={windP==undefined? areaRecordProfit:windP} TBA={windPT==undefined? TBA:windPT}></AreaTable>
                    </div>
                </div>

               <div className={styles.covers}>
                   <div className={styles.bgccc}> <img src={icono}/></div>
                   <div className={`${styles.windbox} ${styles.shadow}`}>
            
                       <p className={styles.tiw}>{[actbt+1]+'月'+w11+'各风场年收益率'}</p>
                        <div>
                           <WindfieldTable windFiled={windFiled} windCost={sqy==null?windCost:sqy} windProfit={windProfit}></WindfieldTable>
                       </div>
                   </div>
               </div>


               <div className={`${styles.bigbox} ${styles.shadow}`}>
                   <div className={styles.coverbox}>
                       <div className={styles.windcebox}>
                           <div>
                               <Fanchart areaRecordCostR={areaRecordCostRR==null?areaRecordCostR:areaRecordCostRR} areaRecordProfitR={areaRecordProfitR} machine={machinee==null?machine:machinee } height={340} TBAA={TBAA} pointPlacement={-0.06}></Fanchart>
                           </div>
                       </div>
                       <div className={styles.tik}>
                           <p>{[actbt+1]+'月'+w11+w111+'各风机收益率'}</p>
                       </div>
                   </div>
                   <div className={styles.imgq}>
                       <img src={icono}/>
                   </div>
                   <div className={styles.buttons}>
                      <button onClick={()=>gogogo(windFJ)} > 前10</button>
                      <button onClick={()=>back(windFJ)}>后10</button>
                      <button  onClick={()=>more()}>更多</button>
                   </div>
               </div>
               <p className={styles.clear}></p>
               <div className={styles.morebox}>
                 <div className={styles.coverbox}>
                      <div className={styles.close} onClick={()=>close()}>x</div>
                       <div className={styles.windcebox}>
                           <div>
                               <Fanchart areaRecordCostR={areaRecordCostR} areaRecordProfitR={areaRecordProfitR} machine={machine} TBAA={TBAA} height={370} pointPlacement={-0.06}></Fanchart>
                           </div>
                       </div>
                   </div>
                   <div className={styles.imgqa}>
                       <img src={icono}/>
                       <p className={styles.tit}>10月1区域1风场年收益率</p>
                   </div>

                </div>
           </div>
        );
    }
});



const mapStateToProps = (state) => {
    return {
         actbt:state.vars.actbt,
         wind:state.vars.wind,
         windP:state.vars.windP,
         windPT:state.vars.windPT,
         ban:state.vars.ban,
         machinee:state.vars.machinee,
         areaRecordCostRR:state.vars.areaRecordCostRR,
         w11: state.vars.w1,
         w111: state.vars.w12,
          sqy: state.vars.wins1,
        


    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        init: () => {
            var obj = {
                test:''
            }
        }
        ,
        changpage :(value,key)=>{
            dispatch(actions.setVars('actbt',key ));
            dispatch(actions.setVars('wind',value.plan));
            dispatch(actions.setVars('windP',value.actrul));
            dispatch(actions.setVars('windPT',value.actruls));

        },
        gogogo : (windFJ)=>{
         
          (function(){

        
             windFJ.sort(function(a,b){
              return b.areaRecordCost - a.areaRecordCost;
             })
               for(var i=0;i<12;i++){
                    x0[i]=windFJ[i].name;
                    x1[i]=windFJ[i].areaRecordCost;
                }

          })()
            dispatch(actions.setVars('machinee', x0))
            dispatch(actions.setVars('areaRecordCostRR', x1))
        },
        back:(windFJ)=>{
          (function(){
             windFJ.sort(function(a,b){
              return a.areaRecordCost - b.areaRecordCost;
             })
               for(var i=0;i<12;i++){
                    x2[i]=windFJ[i].name;
                    x3[i]=windFJ[i].areaRecordCost;
                }

          })()
            dispatch(actions.setVars('machinee', x2))
            dispatch(actions.setVars('areaRecordCostRR', x3))
        },
         more:()=>{
             $("#sss").show();
             $('#boxcover').show();
             // $('.box').css('opacity',".5")
        },
        close:()=>{
            $("#sss").hide();
              $('#boxcover').hide();
        },
         backtop:(befor_pagee,befor_page2)=>{
            dispatch(actions.setVars('showPage',befor_pagee));
        },

    };

};

export default connect(mapStateToProps, mapDispatchToProps)(Component);