import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as PolicyAction from '../../store/actions/PolicyAction';
import {bindActionCreators} from 'redux';
import './addPolicy.css'
class addPolicy extends Component{
    constructor(props) {
        super(props)
        this.state = {
            policyName: '',
            ageGroup: '',
            policyTerm: '',
            baseAmount: '',
            policyCover: '',
            errors:{}

        }

        this.changePolicyName = this.changePolicyName.bind(this);
        this.changeAgeGroup = this.changeAgeGroup.bind(this);
        this.changePolicyTerm = this.changePolicyTerm.bind(this);
        this.changeBaseAmount = this.changeBaseAmount.bind(this);
        this.changePolicyCover = this.changePolicyCover.bind(this);

        this.savePolicy = this.savePolicy.bind(this);
        this.listOfPolicies = this.savePolicy.bind(this);
        if(sessionStorage.getItem("adminId")==undefined)
        {
           
            window.location.href="/login";
        }
    }


    listOfPolicies() {
        window.location.href = "/adminviewpolicy"
        //alert("Policy added Successfully");
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
        else  if(!this.state.ageGroup.match("^[0-9]")){
            formIsValid = false;
            errors['ageGroup'] = '*Please Enter Only Numbers ';
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

    savePolicy = (e) => {
        e.preventDefault();
        if(this.validate()){
            let policy = {
                policyName: this.state.policyName,
                ageGroup: this.state.ageGroup,
                policyTerm: this.state.policyTerm,
                baseAmount: this.state.baseAmount,
                policyCover: this.state.policyCover

            }
            console.log(policy.ageGroup)

            PolicyAction.createPolicy(policy)(res => {
                this.listOfPolicies();
            })
        }
       
    }
    cancel() {
        this.props.history.push("/adminviewpolicy")
    }
    changePolicyName = (event) => {
        this.setState({ policyName: event.target.value })
    }
    changeAgeGroup = (event) => {
        this.setState({ ageGroup: event.target.value })
    }
    changePolicyTerm = (event) => {
        this.setState({ policyTerm: event.target.value })
    }
    changeBaseAmount = (event) => {
        this.setState({ baseAmount: event.target.value })
    }
    changePolicyCover = (event) => {
        this.setState({ policyCover: event.target.value })
    }


    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3 ">
                            <h3 className="text-center">Add Policy</h3>
                            <div className="card-body">
                                <form>

                                    <div className="form-group">
                                        <label>Policy Name</label>
                                        <input placeholder="Policy Name"  name="policyname" className="form-control"
                                            value={this.state.policyName} onChange={this.changePolicyName} />
                                         <div  className='errorMsg'>{this.state.errors.policyName}</div><br></br>
                                    </div>

                                    <div className="form-group">
                                        <label>Age Group</label>
                                        <input placeholder="Age Group" name="agegroup" type="number" className="form-control"
                                            value={this.state.ageGroup} onChange={this.changeAgeGroup} />
                                            <div  className='errorMsg'>{this.state.errors.ageGroup}</div><br></br>
                                    </div>

                                    <div className="form-group">
                                        <label>Policy Term</label>
                                        <input placeholder="Policy Term" name="policyterm" type="number" className="form-control"
                                            value={this.state.policyTerm} onChange={this.changePolicyTerm} />
                                            <div  className='errorMsg'>{this.state.errors.policyTerm}</div><br></br>
                                    </div>

                                    <div className="form-group">
                                        <label>Policy Base Amount</label>
                                        <input placeholder="Policy Base Amount" type="number" name="baseamount" className="form-control"
                                            value={this.state.baseAmount} onChange={this.changeBaseAmount} />
                                            <div  className='errorMsg'>{this.state.errors.baseAmount}</div><br></br>

                                    </div>

                                    <div className="form-group">
                                        <label>Policy Cover</label>
                                        <input placeholder="Policy Cover" type="number" name="policycover" className="form-control"
                                            value={this.state.policyCover} onChange={this.changePolicyCover} />
                                            <div  className='errorMsg'>{this.state.errors.policyCover}</div><br></br>
                                    </div>

                                    <button className="btn btn-success" onClick={this.savePolicy}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
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
        policies:state.PolicyReducer.policies,
        login:state.LoginReducer.login
    };
}
function mapDispatchToProps(dispatch){
    return{
       PolicyAction: bindActionCreators(PolicyAction,dispatch)
    };
}


export default connect(mapStateToProps,mapDispatchToProps)(addPolicy);
