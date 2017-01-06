import React from "react";
import {connect} from 'react-redux';
import FixedContent from '../../../components/common/FixedContent.jsx';
var {browserHistory} = require('react-router');
var actions = require('redux/actions');
var $ = require('jquery');
let page = require('../../../../config/page');
let comp = require('../../../../config/comp');
import css from './Login.scss';
require('jquery.cookie');
let codeChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let Component = React.createClass({
  componentDidMount() {
    this.props.init(this.props.userInfo);
  },
  render() {
    let {login,code,change,keylogin}=this.props;
    return (
        <FixedContent mode="fullWidth" width={1920}>
          {
            <div className={css.whole}>
            <form className={css.loginBox}>
              <input placeholder=" 用户名:" className={css.int} id="username1" type="text" name="username" onKeyDown={()=>keylogin()}/><br/>
              <input placeholder=" 密 码:" className={css.int} id="password1" type="password" name="password" /><br/>
              <input placeholder=" 验证码:" className={css.ints} id="check" type="text" name="check" />
              <input value={code} readOnly="readOnly" id="checked" onClick={()=>{change()}} className={css.pages}/><br/>
              <input className={css.submit} type="submit " value='登      陆' readOnly="true" onClick={(e)=>login(e.target)} />
            </form>
          </div>
          }
        </FixedContent>
    )
  }
});
const mapStateToProps = (state) => {
  return {
      userInfo: state.vars.userInfo,
      code:state.vars.verificationCode,
      userMessage:state.objs.userMessage,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    init: ()=> {
        dispatch(actions.setVars('userInfo', true));
      // $.cookie('token','123123');
      let codeNew='';
      for (let i=0;i<4;i++){
        codeNew+=codeChars[Math.floor(Math.random()*36)]
      }
      dispatch(actions.setVars('verificationCode', codeNew));
       // browserHistory.push('/app/all/page/main');
    },
    change:()=>{
      let codeNew='';
      for (let i=0;i<4;i++){
        codeNew+=codeChars[Math.floor(Math.random()*36)]
      }
      dispatch(actions.setVars('verificationCode', codeNew));
    },
    keylogin:()=>{
        // var x = event.charCode;
        // console.log(x)
    },
    login:(even)=>{
         $.ajax({
              url: 'http://54.223.200.134/System/mlogin.aspx?loginType=4&P_username='+$('#username1')[0].value+'&P_password='+$('#password1')[0].value+'&crossDomain=true',
               dataType:"jsonp",    
               jsonp:"callback",    
               jsonpCallback:"testCall",    
               timeout:3000,       
               success:function(json,textStatus){
                   // console.log(json);
                   dispatch(actions.setVars('areaid', json.areaid));
               },    
               error:function(XMLHttpRequest,textStatus,errorThrown){    
                   console.log('获取数据失败！');   
                   
               }    
               
            });

         


      if ($('#check')[0].value!==$('#checked')[0].value){
          alert('验证码输入错误');
          even.value='登     入';
      // let codeNew='';
      // for (let i=0;i<4;i++){
      //   codeNew+=codeChars[Math.floor(Math.random()*36)]
      // }
      // dispatch(actions.setVars('verificationCode', codeNew));}else {
      //     $.ajax({
      //         url: 'http://10.68.100.32:8080/soam/user/login',
      //         type: 'post',
      //         data:'name='+$('#username1')[0].value+'&&password='+$('#password1')[0].value,
      //         dataType: 'json',//here,
      //         success:function (data) {
      //             console.log(data);
      //             data.data.result==='False'?
      //                 alert('用户名或密码错误'):
      //                 browserHistory.push('/app/all/page/main')  ;
      //             dispatch(actions.setObjs('userMessage', data));
      //             dispatch(actions.setVars('userInfo', true));
      //             try { Base.returnPlay(); } catch (e) { };
      //             try { if (TY == null) { } } catch (e) { alert("配置文件加载失败!"); return; }
      //             TY.dataUrl = "http://54.223.200.134/System/data.aspx";
      //             TY.crossDomain = true;
      //             TY.Zip =false;
      //             TY.TT.timeOutlength = 1000*60*1;

      //         },
      //         error:function(){
      //             console.log('获取数据失败')
      //         }
      //     });
      let codeNew='';
      for (let i=0;i<4;i++){
        codeNew+=codeChars[Math.floor(Math.random()*36)]
      }
      dispatch(actions.setVars('verificationCode', codeNew));
    }else {
        even.value='登 入 中...';
          $.ajax({
              url: 'http://10.68.100.32:8080/soam/user/login',
              // url: 'http://10.9.0.10:9080/soam/user/login',
              type: 'post',
              data:'name='+$('#username1')[0].value+'&&password='+$('#password1')[0].value,
              dataType: 'json',//here,
              success:function (data) {
                  // console.log(data);
                  data.data.result==='False'? alert(data.message): browserHistory.push('/app/all/page/main') ;
                  dispatch(actions.setObjs('userMessage', data));
                  dispatch(actions.setVars('userNameT', $('#username1').val()));
                  dispatch(actions.setVars('userInfo', true));
                  try { Base.returnPlay(); } catch (e) { };
                  try { if (TY == null) { } } catch (e) { alert("配置文件加载失败!"); return; }
                  TY.dataUrl = "http://54.223.200.134/System/data.aspx";
                  TY.crossDomain = true;
                  TY.Zip =false;
                  TY.TT.timeOutlength = 1000*60*1;
              },
              error:function(){
                even.value='登     入';
                  console.log('获取数据失败')
              }
          });
      }
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
