import React,{Component} from 'react';
import {connect} from 'react-redux';

import * as LoginAction from '../../store/actions/LoginAction';
import {bindActionCreators} from 'redux';
import './RegisterCustomer.css'

class RegisterCustomer extends Component{
    constructor(props){
    super(props)
    this.state={
     firstName:'',
     lastName:'',
     emailId:'',
     password:'',
     role:'user',
     customerId:''

    }
    this.registration=this.registration.bind(this);
}
registration=(it)=>{
    it.preventDefault();
    let payload={
        firstName:this.state.firstName,
        lastName:this.state.lastName,
        emailId:this.state.emailId,
        password:this.state.password,
        role:'user',
        customerId:this.state.customerId
    }
   // PolicyService.save(customer).then(Response=>{
     //   this.props.history.push("/register");
      //  alert("resiterd");
        //window.location.href="/items";
        this.props.LoginAction.registerCustomer(payload);
    }

onChange=(seg)=>this.setState({[seg.target.name]:seg.target.value});
    render(){
   
        return(
           
            <div>
                <br></br>
                <div className="SignUp">
                <div class="box">
                   <h2>Sign Up</h2>
                <form>
                    <div class="inputBox">
                      <input type="text" placeholder="Enter FirstName" id="firstName" name="firstName" value={this.state.firstName} className="form-control" onChange={this.onChange} required></input><br></br>
                        
                    </div>
                    <div class="inputBox">
                       <input type="text" placeholder="Enter LastName" name="lastName" value={this.state.lastName} className="form-control" onChange={this.onChange} required></input><br></br>
                         
                    </div>  
                    <div class="inputBox">
                      <input type="email" placeholder="Enter email" name="emailId" value={this.state.emailId} className="form-control" onChange={this.onChange} required></input><br></br>
                        
                     </div>  
                    <div class="inputBox">
                     <input type="password" placeholder="Enter password" name="password" value={this.state.password} className="form-control" onChange={this.onChange} required></input><br></br>
                      
                     
                    <input type="hidden"  name="customerId" id="customerId" value="" ></input>
                    </div>              
                  <button className="btn btn-success" onClick={this.registration}>Save</button>
                 </form>
                </div>
                </div>
               
                </div>
             
        )
}
}
function mapStateToProps(state){
    return{
        register:state.LoginReducer.register
    };
}
function mapDispatchToProps(dispatch){
    return{
        LoginAction: bindActionCreators(LoginAction,dispatch)
    };
}


export default connect(mapStateToProps,mapDispatchToProps)(RegisterCustomer);


