import React, {Component,Fragment} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import * as PolicyAction from '../../store/actions/PolicyAction';
import * as UserAction from '../../store/actions/UserAction';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
class PolicyDisplay extends Component{
    constructor(props)
    {
        super(props)
        this.buy=this.buy.bind(props);
        this.viewPurchased=this.viewPurchased.bind(props);
        if(sessionStorage.getItem("userId")==undefined)
        {
           
            window.location.href="/login";
        }
    }
    viewPurchased=(customerId)=>{
        window.location.href="/viewPurchasedPolicy?Id="+customerId;
    }
    buy=(policyId,customerId)=>{
        let payload={
            customerId:customerId,
            policyId:policyId
        }
        this.props.UserAction.buyPolicies(payload);
    }
    logout(){
        sessionStorage.removeItem("userId");
        
        window.location.href="/login"

    }
    componentDidMount(){
        
        this.props.PolicyAction.getPolicy(); 
    }
    
   
    render(){
        let search=window.location.search;
        let params=new URLSearchParams(search);
        let customerId=params.get('Id');
         let login=this.props.login;
         
        if(customerId==null){
           //if(login===undefined){
             //  alert("unauthorized access");
             //  window.location.href="/login";
           //}
            customerId=sessionStorage.getItem("userId");;
        }
        let userlogin = window.localStorage.getItem("login");
        return(
            <div >
                <button className="logout" style={{marginLeft:"90%"}} onClick={this.logout}><i class="fa fa-sign-out"></i> Logout</button>
                <h2 align="center">Policy List</h2>
                <button className="renew float-right" style={{marginLeft:"80%",marginTop:"6px"}} onClick={()=>this.viewPurchased(customerId)}>Purchased policies</button>
                <Link to="/user"><button className="renew"><i class="fa fa-arrow-left" aria-hidden="true"></i> Back</button></Link>
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
                                      
                                       <Fragment>
                                           <button type="button" className="renew" onClick={()=>this.buy(pol.policyId,customerId)}>  
                                
                                                <span className="glyphicon glyphicon-shopping-cart">  
                                        </span> <b> Buy Now </b>  </button>
                                        </Fragment>
                                      
                                       }
                                    </td>
                                                                          
                                        
                        
                                </tr>
                            
                                )
                        }
                    </tbody>
                </table>
                
               
            </div>
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
       PolicyAction: bindActionCreators(PolicyAction,dispatch),
       UserAction: bindActionCreators(UserAction,dispatch)
    };
}


export default connect(mapStateToProps,mapDispatchToProps)(PolicyDisplay);
