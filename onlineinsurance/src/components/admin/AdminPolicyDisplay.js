import React, {Component,Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as PolicyAction from '../../store/actions/PolicyAction';
import {bindActionCreators} from 'redux';
class AdminPolicyDisplay extends Component{
    constructor(props)
    {
        super(props)
        this.addPolicy=this.addPolicy.bind(this);
        if(sessionStorage.getItem("adminId")==undefined)
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
        if(window.confirm('Are you sure you want to delete the post?')){
            this.props.PolicyAction.deletePolicy(policyId);
        }
    }
    
    render(){
        let login=this.props.login;
        return(
            <Fragment>
                <div class="dropdown">
                 <button style={{marginLeft:"85%",backgroundColor:'white',color:'black' ,height:"40px",boxShadow:'0 6px 6px'}}  type="button" id="menu1" data-toggle="dropdown"><span className="glyphicon glyphicon-user"></span> Profile
                   <span class="caret"></span></button>
                    <ul class="dropdown-menu dropdown-menu-right" role="menu" aria-labelledby="menu1">
                        <Link to="/login" >
                      <li role="presentation" ><a role="menuitem"  tabindex="0"style={{color:'black'}} ><span className="glyphicon glyphicon-log-out"></span> Logout</a></li><br></br>
                      </Link>
                      <Link to="/admin">
                      <li role="presentation"><a role="menuitem"  tabindex="0" style={{color:'black'}}><span className="glyphicon glyphicon-home"></span> Admin Page</a></li>
                      </Link>
                        </ul>
               </div>
                 
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
