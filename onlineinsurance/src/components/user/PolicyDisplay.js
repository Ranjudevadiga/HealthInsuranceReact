import React, {Component,Fragment} from 'react';

import {connect} from 'react-redux';
import * as PolicyAction from '../../store/actions/PolicyAction';
import {bindActionCreators} from 'redux';
class PolicyDisplay extends Component{
    constructor(props)
    {
        super(props)
        this.buy=this.buy.bind(props);
        this.viewPurchased=this.viewPurchased.bind(props);
    }
    viewPurchased=(customerId)=>{
        let login=this.props.login
        window.location.href="/viewPurchasedPolicy?Id=/"+customerId;
    }
    buy=(policyId,customerId)=>{
       
        let payload={
            customerId:customerId,
            policyId:policyId
        }
       
        this.props.PolicyAction.buyPolicies(payload);
    }
    logout(){
        window.location.href="/login"
    }
    componentDidMount(){
        this.props.PolicyAction.getPolicy();
    }
    
    
    render(){
        let login=this.props.login;
       
        return(
            <Fragment>
                <h2 align="center">Policy List</h2>
                <table className="table table-striped table-bordered">
                    
                    <thead>
                        <tr>
                            <th>Policy Id</th>
                            <th>Policy NAME</th>
                            <th>Age Group</th>
                            <th>Base Amount</th>
                            <th>Policy Cover</th>
                          
                            <th>Policy Term</th>
                            <th>Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.policies.map((pol)=>
                                <tr key={pol.policyId}>
                                   <td>{pol.policyId}</td>
                                   <td>{pol.policyName}</td>
                                    <td>{pol.ageGroup}</td>
                                    <td>{pol.baseAmount}</td>
                                    <td>{pol.policyCover}</td>
                                    
                                    
                                    
                                    <td>{pol.policyTerm}</td>
                                    <td>{
                                        (login!==undefined) &&(login.role==='admin')?
                                        <Fragment>
                                           <button  type="button" className="btn btn-info btn-sm"><span className="glyphicon glyphicon-edit"></span> Edit</button>
                                           <button style={{marginLeft:"5px"}} type="button" class="btn btn-danger btn-sm"><span class="glyphicon glyphicon-minus"></span>Remove</button>
                                           
                                        </Fragment>:<Fragment>
                                 <button type="button" className="btn btn-primary btn-sm" onClick={()=>this.buy(pol.policyId,login.customerId)}>  
                                
                                                <span className="glyphicon glyphicon-shopping-cart">  
                                        </span> <b> Buy Now </b>  </button>
                                        </Fragment>}
                                                                            </td>
                                                                            

                                </tr>
                            
                                )
                        }
                    </tbody>
                </table>
                <button className="btn btn-warning" onClick={this.logout}>Log out</button>
                <button className="btn btn-warning" onClick={()=>this.viewPurchased(login.customerId)}>Purchased policies</button>
            </Fragment>
        );
    }
}
function mapStateToProps(state){
    return{
        policies:state.PolicyReducer.policies,
        login:state.LoginReducer.login,
        policyDetails:state.PolicyReducer.policyDetails
    };
}
function mapDispatchToProps(dispatch){
    return{
       PolicyAction: bindActionCreators(PolicyAction,dispatch)
    };
}


export default connect(mapStateToProps,mapDispatchToProps)(PolicyDisplay);
