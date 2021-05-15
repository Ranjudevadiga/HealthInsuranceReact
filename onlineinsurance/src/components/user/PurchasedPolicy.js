import React, {Component,Fragment} from 'react';
import {connect} from 'react-redux';
import * as PolicyAction from '../../store/actions/PolicyAction';
import * as UserAction from '../../store/actions/UserAction';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
class PurchasedPolicy extends Component{
    
    constructor(props)
    {
        super(props)
        this.onRenew=this.onRenew.bind(this);
        this.viewPolicy=this.viewPolicy.bind(this);
        
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
        window.location.href="/login"
    }

    componentDidMount(){
        let search=window.location.search;
        let params=new URLSearchParams(search);
        let customerId=params.get('Id')
       // if(customerId===null)
       // {
        //   alert("Unauthorized access");
         //   window.location.href="/login";
       // }
       
        this.props.PolicyAction.getBoughtPolicy(customerId);
    }
    render(){
        let newDate = new Date();
        let search=window.location.search;
        let params=new URLSearchParams(search);
        let customerId=params.get('Id')
        return(
            <body>
                 <button className="btn btn-primary" style={{marginLeft:"90%"}} onClick={this.logout}>Log out</button>
                <h2 align="center">Purchased Policy</h2>
                <button className="btn btn-primary" style={{marginLeft:"90%"}} onClick={()=>this.viewPolicy(customerId)}>View Policy List</button>
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
                                         <button style={{marginLeft:"5px"}}  className="btn btn-success" onClick={()=>this.onRenew(policyDetail.policyDetailsId,policyDetail.policy.policyId,policyDetail.customer.customerId)} >Renew</button>
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
        policyDetails:state.PolicyReducer.policyDetails,
       login:state.LoginReducer.login
    };
}
function mapDispatchToProps(dispatch){
    return{
       PolicyAction: bindActionCreators(PolicyAction,dispatch),
       UserAction: bindActionCreators(UserAction,dispatch)
    };
}


export default connect(mapStateToProps,mapDispatchToProps)(PurchasedPolicy);
