import React, {Component,Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as PolicyAction from '../../store/actions/PolicyAction';
import {bindActionCreators} from 'redux';
class AdminPolicyDisplay extends Component{
    constructor(props)
    {
        super(props)
        
    }
    logout(){
        window.location.href="/login"
    }
    componentDidMount(){
        this.props.PolicyAction.getPolicy();
    }
    onDeletePost(policyId){
        if(window.confirm('Are you sure you want to delete the post?')){
            this.props.PolicyAction.deletePolicy(policyId);
        }
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
                                       <Fragment>
                                        
                                           <button style={{marginLeft:"5px"}} type="button" className="btn btn-success btn-sm"><span className="glyphicon glyphicon-edit"></span></button>
                                          
                                         <button style={{marginLeft:"5px"}}  className="btn btn-danger" onClick={()=>this.onDeletePost(pol.policyId)}><i className="fa fa-trash" aria-hidden="true"></i></button>
                                           </Fragment>
    }
                                        </td>
                                                                            

                                </tr>
                            
                                )
                        }
                    </tbody>
                </table>
                <button className="btn btn-warning" onClick={this.logout}>Log out</button>
                <Link to="/admin"><button className="btn btn-info">Back to admin page</button></Link>
            </Fragment>
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
