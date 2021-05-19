import React, {Component,Fragment} from 'react';
import {connect} from 'react-redux';
import * as PolicyAction from '../../store/actions/PolicyAction';
import * as UserAction from '../../store/actions/UserAction';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import CustomerLoginNav from '../CustomerLoginNav';

class PurchasedPolicy extends Component{
    constructor(props)
    {
        super(props)
        this.onRenew=this.onRenew.bind(this);
        this.viewPolicy=this.viewPolicy.bind(this);
        if(sessionStorage.getItem("userId")==undefined)
        {
           
            window.location.href="/login";
        }
        
    }
    onRenew=(policyDetailsId,policyId,customerId)=>{
    let payload={
        policyDetailsId:policyDetailsId,
        policyId:policyId,
        customerId:customerId
    }
        if(window.confirm('Are you sure you want to renew the policy?')){
            this.props.UserAction.renewPolicy(payload);
        }
    }
   
    viewPolicy=(customerId)=>{
    window.location.href="/customerViewPolicy?Id="+customerId;
    }

    logout(){
        sessionStorage.removeItem("userId");
        window.location.href="/login"
    }

    componentDidMount(){
        let search=window.location.search;
        let params=new URLSearchParams(search);
        let customerId=params.get('Id')
        this.props.UserAction.getBoughtPolicy(customerId);
    }

    render(){
        let newDate = new Date();
        let search=window.location.search;
        let params=new URLSearchParams(search);
        let customerId=params.get('Id')
        return(
            <body class="policy-display">
            <CustomerLoginNav/>
                <h2 align="center">Purchased Policy</h2>
                <button className="renew" style={{marginLeft:"90%"}} onClick={()=>this.viewPolicy(customerId)}>View Policy</button>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Policy Details Id</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Premium Amount</th>
                           
                            <th>Customer Id</th>
                            <th>Policy Id</th>
                            <th>Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.policyDetails.map((policyDetail)=>
                            <tr key={policyDetail.policyDetailsId}>
                                <td>{policyDetail.policyDetailsId}</td>
                                <td>{policyDetail.startDate}</td>
                                <td>{policyDetail.expiryDate}</td>
                                <td>{policyDetail.premiumAmounts}</td>
                               
                                <td>{policyDetail.customer.customerId}</td>
                                <td>{policyDetail.policy.policyId}</td>
                               
                                <td>{
                                   
                                       (((newDate.getTime()-(new Date(policyDetail.expiryDate).getTime()))/(1000*3600*24))>=0)?
                                         <Fragment>
                                         <button style={{marginLeft:"5px"}} className="renew"  onClick={()=>this.onRenew(policyDetail.policyDetailsId,policyDetail.policy.policyId,policyDetail.customer.customerId)} ><i class="fa fa-refresh" aria-hidden="true"></i> Renew</button>
                                         </Fragment>:<Fragment></Fragment>
                                    }
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </body>
        )
    }
}

function mapStateToProps(state){
    return{
        policyDetails:state.UserReducer.policyDetails,
       login:state.LoginReducer.login
    };
}

function mapDispatchToProps(dispatch){
    return{
       UserAction: bindActionCreators(UserAction,dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(PurchasedPolicy);
