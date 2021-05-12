import React, {Component} from 'react';

import {connect} from 'react-redux';
import * as LoginAction from '../store/actions/LoginAction';
import {bindActionCreators} from 'redux';
import {Redirect} from 'react-router-dom';
import './Login.css';

class Login extends Component{
   constructor(){
       super();
       this.state={
           emailId:'',
           password:''
           

       }
       
       
   }
   validation=(usr)=>{
    let payload={
        emailId:this.state.emailId,
        password:this.state.password
    }
    this.props.LoginAction.loginValidate(payload);
    usr.preventDefault();

   
}
   onChange=(user)=>this.setState({[user.target.name]:user.target.value});

   
   render(){
    let login=this.props.login;
    

    if(login!==undefined)
    {
        if(login.role==="admin")
        {
            return <Redirect to="/adminviewpolicy"></Redirect>
        }
        else if(login.role==="user"){
            alert("valid user....");
            return <Redirect to="/customerViewPolicy"></Redirect>
        }
        else{
            alert("invalid user....");
            
        }
        
    }
    return(
        <div className="new">
           <div class="box">
  <h2>Login</h2>
  <form>
    <div class="inputBox">
       <input type="text" name="emailId" className="form-control" value={this.state.emailId} onChange={this.onChange} required/><br></br>
      <label>Username</label>
    </div>
    <div class="inputBox">
      <input type="password" name="password" className="form-control" value={this.state.password} onChange={this.onChange} required></input><br></br>
      <label>Password</label>
      </div>
      
      <button className="btn btn-success" onClick={this.validation}>Login</button>
    </form>
    </div>
   
 </div>

    );
}
}
function mapStateToProps(state){
return{
    login:state.LoginReducer.login
};
}
function mapDispatchToProps(dispatch){
return{
    LoginAction: bindActionCreators(LoginAction,dispatch)
};
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);