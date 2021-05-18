import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as LoginAction from '../../store/actions/LoginAction';
import {bindActionCreators} from 'redux';
import './RegisterCustomer.css';
import CustomerLoginNav from '../CustomerLoginNav';

class AddCustomerDetails extends Component{
   constructor(props){
       super(props)
       this.state={
        isDiabetic:'',
        isSmoker:'',
        isAlcoholic:'',
        bodyMassIndex:'',
        age:'',
        salaryBracket:'',
        customerId:'',
        errors:{}
        
       }
       
       this.addCustomerDetails=this.addCustomerDetails.bind(this);
   }
   validate = () => {
        let errors = {}
        let formIsValid = true
        if(!this.state.isDiabetic)
        {
            formIsValid = false
            errors['isDiabetic'] = '*Please enter is diabetic field '
        }
        if(!this.state.isAlcoholic)
        {
            formIsValid = false
            errors['isAlcoholic'] = '*Please enter is Alchoholic field '
        }
        if(!this.state.isSmoker)
        {
            formIsValid = false
            errors['isSmoker'] = '*Please enter is Smoker field '
        }
        if(!this.state.bodyMassIndex)
        {
            formIsValid = false
            errors['bodyMassIndex'] = '*Please enter is BodyMassIndex '
        }
        if(!this.state.age)
        {
            formIsValid = false
            errors['age'] = '*Please enter Age '
        }
        if(!this.state.salaryBracket)
        {
            formIsValid = false
            errors['salaryBracket'] = '*Please enter Salary Bracket '
        }
        
        this.setState({ errors })
        return formIsValid
   }
   addCustomerDetails=(add)=>{
    add.preventDefault();
    if(this.validate()){
       let payload={
        isDiabetic:this.state.isDiabetic,
        isSmoker:this.state.isSmoker,
        isAlcoholic:this.state.isAlcoholic,
        bodyMassIndex:this.state.bodyMassIndex,
        age:this.state.age,
        salaryBracket:this.state.salaryBracket,
        customerId:this.customerId.value
       }
       console.log(payload.customerId);
       this.props.LoginAction.addCustDetails(payload);
    }
   }
   onChange=(add)=>this.setState({[add.target.name]:add.target.value});
   render(){
    let register=this.props.register;
    let search=window.location.search;
    let params=new URLSearchParams(search);
    let customerId=params.get('Id')

    if(customerId==null)
    {
        customerId=sessionStorage.getItem("userId");
    }
     
    return(
        <div>
            <CustomerLoginNav/>
            <br></br>
           
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Customer Details</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label style={{color:'black'}}>Are you Diabetic?</label>
                                    <br></br>
                                    <select name="isDiabetic" onChange={this.onChange} className="form-control" style={{height:"40px"}}>
                                         <option value="Select">Select</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                    <div  className='errorMsg'>{this.state.errors.isDiabetic}</div><br></br>

   
                                </div> 
                                <div>   
                                    <label style={{color:'black'}}>Are you smoker?</label>
                                    <br></br>
                                    <select name="isSmoker" onChange={this.onChange} style={{height:"40px"}} className="form-control" >
                                    <option value="Select">Select</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                    <div  className='errorMsg'>{this.state.errors.isSmoker}</div><br></br>

                                    </div>
                               <div>    
                                    <label style={{color:'black'}}>Are you alcoholic?</label>
                                    <br></br>
                                    
                                    <select name="isAlcoholic" onChange={this.onChange}style={{height:"40px"}} className="form-control">
                                    <option value="Select">Select</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                       
                                    </select>
                                    <div  className='errorMsg'>{this.state.errors.isAlcoholic}</div><br></br>

                                    </div>
                                    <div>
                                    <label style={{color:'black'}}>Body Mass Index</label>
                                    <input type="number" placeholder="Enter bodymassindex" name="bodyMassIndex" value={this.state.bodyMassIndex} className="form-control" onChange={this.onChange}></input>
                                    <div  className='errorMsg'>{this.state.errors.bodyMassIndex}</div><br></br>

                                </div>
                                <div>
                                    <label style={{color:'black'}}>Age</label>
                                    <input type="number" placeholder="Enter Age" name="age" value={this.state.age} className="form-control" onChange={this.onChange}></input>
                                    <div  className='errorMsg'>{this.state.errors.age}</div><br></br>

                                </div>
                                <div>
                                    <label style={{color:'black'}}>Salary Bracket</label>
                                    <input type="number" placeholder="Enter salaryBracket" name="salaryBracket" value={this.state.salaryBracket} className="form-control" onChange={this.onChange}></input>
                                    <div  className='errorMsg'>{this.state.errors.salaryBracket}</div><br></br>

                                </div>
                                <div>
                                    
                                    <input type="hidden" name="customerId" value={customerId} 
                       ref={(input) => { this.customerId = input }} />
                                
                                </div>

                                <button className="btn btn-success" onClick={this.addCustomerDetails}>Save</button>
                          </form>
                    </div>
                </div>
            </div>
            </div>
          </div> 
                        
    )
}
}
function mapStateToProps(state){
return{
    customerDetails:state.LoginReducer.customerDetails,
    register:state.LoginReducer.register
};
}
function mapDispatchToProps(dispatch){
return{
    LoginAction: bindActionCreators(LoginAction,dispatch)
};
}


export default connect(mapStateToProps,mapDispatchToProps)(AddCustomerDetails);


