import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as LoginAction from '../../store/actions/LoginAction';
import {bindActionCreators} from 'redux';

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
        customerId:''
        
       }
       
       this.addCustomerDetails=this.addCustomerDetails.bind(this);
   }
   addCustomerDetails=(add)=>{
    add.preventDefault();
   
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
   onChange=(add)=>this.setState({[add.target.name]:add.target.value});
   render(){
    let register=this.props.register;
    let search=window.location.search;
    let params=new URLSearchParams(search);
    let customerId=params.get('Id')
     
    return(
        <div>
            <br></br>
           
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Customer Details</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Are you Diabetic?</label>
                                    <br></br>
                                    <select name="isDiabetic" onChange={this.onChange} className="form-control">
                                       
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
   
                                </div> 
                                <div>   
                                    <label>Are you smoker?</label>
                                    <br></br>
                                    <select name="isSmoker" onChange={this.onChange} className="form-control">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                    </div>
                               <div>    
                                    <label>Are you alcoholic?</label>
                                    <br></br>
                                    <select name="isAlcoholic" onChange={this.onChange} className="form-control">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                       
                                    </select>
                                    </div>
                                    <div>
                                    <label>Body Mass Index</label>
                                    <input type="text" placeholder="Enter bodymassindex" name="bodyMassIndex" value={this.state.bodyMassIndex} className="form-control" onChange={this.onChange}></input>
                                
                                </div>
                                <div>
                                    <label>Age</label>
                                    <input type="text" placeholder="Enter Age" name="age" value={this.state.age} className="form-control" onChange={this.onChange}></input>
                                
                                </div>
                                <div>
                                    <label>Salary Bracket</label>
                                    <input type="text" placeholder="Enter salaryBracket" name="salaryBracket" value={this.state.salaryBracket} className="form-control" onChange={this.onChange}></input>
                                
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


