import React, {Component,Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as PolicyAction from '../../store/actions/PolicyAction';
import {bindActionCreators} from 'redux';
import LoginNavBar from '../LoginNavBar';
class AdminPolicyDisplay extends Component{
    constructor(props)
    {
        super(props)
        this.addPolicy=this.addPolicy.bind(this);
        if(sessionStorage.getItem("adminId")===undefined)
        {
           
            window.location.href="/login";
        }
    }
    addPolicy=()=>{
        window.location.href="/add-Policy"
    }
    logout(){
        sessionStorage.removeItem("adminId");
        window.location.href="/login";
    }
    componentDidMount(){
        this.props.PolicyAction.getPolicy();
    }
    onDeletePost(policyId){
        if(window.confirm('Are you sure you want to delete the policy?')){
            this.props.PolicyAction.deletePolicy(policyId);
        }
    }
    
    render(){
        let login=this.props.login;
        return(
           <div class="policy-display">
                <LoginNavBar/>
                
               
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
                                       <Fragment>
                                        
                                        <Link to ={{pathname: '/edit-policy',state:{pol}}}> <button style={{marginLeft:"5px"}} type="button" className="btn btn-success btn-sm"><span className="glyphicon glyphicon-edit"></span></button></Link>
                                          
                                         <button style={{marginLeft:"5px"}}  className="btn btn-danger" onClick={()=>this.onDeletePost(pol.policyId)}><i className="fa fa-trash" aria-hidden="true"></i></button>
                                         </Fragment>
    }
                                        </td>
                                                                            

                                </tr>
                            
                                )
                        }
                    </tbody>
                </table>
                <Link to="/add-Policy"><button className="btn" onClick={this.addPolicy}>Add Policy</button></Link>
                </div>
          
              
           
        );
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


export default connect(mapStateToProps,mapDispatchToProps)(AdminPolicyDisplay);
