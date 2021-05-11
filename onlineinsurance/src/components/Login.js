import React, {Component} from 'react';

import {connect} from 'react-redux';
import * as LoginAction from '../store/actions/LoginAction';
import {bindActionCreators} from 'redux';
import {Redirect} from 'react-router-dom';

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
            return <Redirect to="/admin"></Redirect>
        }
        else if(login.role==="user"){
            alert("valid user....");
            return <Redirect to="/user"></Redirect>
        }
        else{
            alert("invalid user....");
            
        }
        
    }
    return(
        <div>
            
            <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h2 className="text-center">Login</h2>
                            <div className="card-body"></div>
            <form>
                <div className="form-group">
                    
                    <label>Username</label>
                    <input type="text" name="emailId" className="form-control" value={this.state.emailId} onChange={this.onChange} required/><br></br>
                    <label>Enter password</label>
               <input type="password" name="password" className="form-control" value={this.state.password} onChange={this.onChange} required></input><br></br>
                </div>
                    <button className="btn btn-success" onClick={this.validation}>Login</button>
          
               
            </form>
            </div></div>
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