import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as LoginAction from '../../store/actions/LoginAction';
import {bindActionCreators} from 'redux';
import './RegisterCustomer.css';
import HomeNavBar from '../HomeNavBar';

const initialState={
    firstName:'',
    lastName:'',
    emailId:'',
    password:''
}

class RegisterCustomer extends Component{
    state=initialState;
    constructor(props){
    super(props)
    this.state={
     firstName:'',
     lastName:'',
     emailId:'',
     password:'',
     role:'user',
     customerId:'',
     errors: {}
    }
    this.registration=this.registration.bind(this);
}

registration=(it)=>{
    it.preventDefault();
    if (this.validateForm()) {
    let payload={
        firstName:this.state.firstName,
        lastName:this.state.lastName,
        emailId:this.state.emailId,
        password:this.state.password,
        role:'user',
        customerId:this.state.customerId
    }
        this.props.LoginAction.registerCustomer(payload);
        this.setState(initialState);
    }
}

validateForm = () => {
    let errors = {}
    let formIsValid = true
  if(!this.state.firstName) {
      formIsValid = false
      errors['firstName'] = '*Please enter your firstname'
    }
   else  if(!this.state.firstName.match(/^[a-zA-Z]+$/)){
           formIsValid = false;
           errors['firstName'] = '*Please Enter Only Alphabets ';
    }     
     
   if (!this.state.lastName) {
    formIsValid = false
    errors['lastName'] = '*Please enter your lastname'
    }
    
    else if(!this.state.lastName.match(/^[a-zA-Z]+$/)){
           formIsValid = false;
           errors['lastName'] = '*Please Enter Only Alphabets ';
        }     
    
    if (!this.state.emailId) {
        formIsValid = false
        errors['emailId'] = '*Please enter your EmailId'
    }
    else if(!/\S+@\S+\.\S+/.test(this.state.emailId)){
        formIsValid = false
        errors['emailId'] = '*Please enter valid EmailId'
    }
    if (!this.state.password) {
        formIsValid = false
        errors['password'] = '*Please enter your password'
    }
    else if(this.state.password.length<6 ){
       
        formIsValid=false
        errors['password']='*Password length must be above 6 characters'
    }
    else if( this.state.password.length>12 ){
        formIsValid=false
        errors['password']='*Password length must be below 12 characters'
    }
    
   
    this.setState({ errors })
    return formIsValid
}

onChange=(seg)=>this.setState({[seg.target.name]:seg.target.value});
    render(){
        return(
           <div>
                <HomeNavBar/>
                <br></br>
                <div className="SignUp">
                <div class="box">
                   <h2>Sign Up</h2>
                <form>
                    <div class="inputBox">
                      <input type="text" placeholder="Enter FirstName" id="firstName" name="firstName" value={this.state.firstName} className="form-control" onChange={this.onChange} required></input>
                      <div  className='errorMsg'>{this.state.errors.firstName}</div>                   
                    </div>

                    <div class="inputBox">
                       <input type="text" placeholder="Enter LastName" name="lastName" value={this.state.lastName} className="form-control" onChange={this.onChange} required></input>
                       <div className='errorMsg'>{this.state.errors.lastName}</div>                   
                     </div>
                    
                    <div class="inputBox">
                      <input type="email" placeholder="Enter email" name="emailId" value={this.state.emailId} className="form-control" onChange={this.onChange} required></input>
                      <div className='errorMsg'>{this.state.errors.emailId}</div>
                    </div>

                    <div class="inputBox">
                     <input type="password" placeholder="Enter password" name="password" value={this.state.password} className="form-control" onChange={this.onChange} required></input>
                     <div className='errorMsg'>{this.state.errors.password}</div>
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