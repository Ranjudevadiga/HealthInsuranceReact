import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as PolicyAction from '../../store/actions/PolicyAction';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';

class AdminUpdatePolicy extends Component {
    constructor(props){
        super(props)
        this.state = {
            policyId : props.location.state.pol.policyId,
            policyName : props.location.state.pol.policyName,
            ageGroup : props.location.state.pol.ageGroup,
            policyTerm : props.location.state.pol.policyTerm,
            baseAmount : props.location.state.pol.baseAmount,
            policyCover : props.location.state.pol.policyCover,
            errors:{}
        }
    }
    componentDidMount(){
        console.log(this.props.location.state);
    }
    validate = () => {
        let errors = {}
        let formIsValid = true
        if(!this.state.policyName)
        {
            formIsValid = false
            errors['policyName'] = '*Please enter Policy name'
        }
        if(!this.state.ageGroup)
        {
            formIsValid = false
            errors['ageGroup'] = '*Please Enter  Age'
        }
        if(!this.state.policyTerm)
        {
            formIsValid = false
            errors['policyTerm'] = '*Please enter  Policy Term'
        }
        if(!this.state.baseAmount)
        {
            formIsValid = false
            errors['baseAmount'] = '*Please enter Base Amount'
        }
        if(!this.state.policyCover)
        {
            formIsValid = false
            errors['policyCover'] = '*Please enter Policy Cover '
        }

        this.setState({ errors })
        return formIsValid
    }

    updatePolicy= (e) =>{
        e.preventDefault();
        if(this.validate()){
            let payload = {
                policyId : this.state.policyId,
                policyName : this.state.policyName,
                ageGroup : this.state.ageGroup,
                policyTerm : this.state.policyTerm,
                baseAmount : this.state.baseAmount,
                policyCover : this.state.policyCover
            }
            this.props.PolicyAction.editPolicy(payload);
            this.props.history.push("/adminviewpolicy");
        }
    }
    onChange = (obj) => {
        this.setState({[obj.target.name] : obj.target.value});
    }
    render() {
        let pol = this.props.getpolicy;
        console.log(pol);
        return(
            <div>
            <h1>Update  Policy </h1>
             <form >
                <div className="form-group">
                <label>Enter Policy Id</label>
                    <input type="text" name="policyId" className="form-control" value={this.state.policyId} onChange={this.onChange}  readOnly></input><br></br>
                    <label>Enter Policy Name</label>
                    <input type="text" name="policyName" className="form-control" value={this.state.policyName} onChange={this.onChange}  required="required"></input><br></br>
                    <div  className='errorMsg'>{this.state.errors.policyName}</div><br></br>

                    <label>Enter Age Group</label>
                    <input type="number" name="ageGroup" className="form-control" value={this.state.ageGroup} onChange={this.onChange}></input><br></br>
                    <div  className='errorMsg'>{this.state.errors.ageGroup}</div><br></br>

                    <label>Enter Policy Term</label>
                    <input type="number" name="policyTerm" className="form-control" value={this.state.policyTerm} onChange={this.onChange}></input> <br></br>
                    <div  className='errorMsg'>{this.state.errors.policyterm}</div><br></br>

                    <label>Enter Base Amount</label>
                    <input type="number" name="baseAmount" className="form-control" value={this.state.baseAmount} onChange={this.onChange}></input> <br></br>
                    <div  className='errorMsg'>{this.state.errors.baseAmount}</div><br></br>

                    <label>Enter Policy Cover</label>
                    <input type="number" name="policyCover" className="form-control" value={this.state.policyCover} onChange={this.onChange}></input> <br></br>
                    <div  className='errorMsg'>{this.state.errors.policyCover}</div><br></br>

                </div>
                    <button className="btn btn-success" onClick={this.updatePolicy}>update item</button>
                    <Link to="/adminviewpolicy"> <button className="btn btn-danger">Cancel</button></Link> 
                </form> 
            </div>
    );

    }
}
function mapStateToProps(state) {
    return {
       editpolicy : state.PolicyReducer.editpolicy,
       login : state.LoginReducer.login
       };
   }
   function mapDispatchToProps(dispatch){
    return {
     PolicyAction : bindActionCreators(PolicyAction, dispatch)
      };
   }
   export default connect(mapStateToProps,mapDispatchToProps)(AdminUpdatePolicy);
