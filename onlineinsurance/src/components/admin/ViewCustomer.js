import React,{ Component, Fragment} from 'react';
import {connect} from 'react-redux';
import * as UserAction from '../../store/actions/UserAction'
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom';
import './viewCustomer.css';


//import 'bootstrap/dist/css/bootstrap.min.css';

class ViewCustomer extends Component{
constructor(props){
    super(props)
    if(sessionStorage.getItem("adminId")==undefined)
        {
           
            window.location.href="/login";
        }
    }
    componentDidMount(){
        this.props.UserAction.getCustomer()
    }
    
    logout(){
        sessionStorage.removeItem("adminId");
        window.location.href="/login";
    }

render(){
    let stock=this.props.customer;
    
  return(
    <body class="view">
    <div class="viewcust">
    <div class="container">
              <div class="dropdown">
               <button class="viewbtn" style={{marginLeft:"85%"}} type="button" id="menu1" data-toggle="dropdown"><span className="glyphicon glyphicon-user"></span> Profile
                 <span class="caret"></span></button>
                  <ul class="dropdown-menu dropdown-menu-right" role="menu" aria-labelledby="menu1">
                      <Link to="/login" >
                    <li role="presentation" ><a role="menuitem"  tabindex="0"style={{color:'black'}} ><span className="glyphicon glyphicon-log-out" onClick={this.logout}></span> Logout</a></li><br></br>
                    </Link>
                    <Link to="/admin">
                    <li role="presentation"><a role="menuitem"  tabindex="0" style={{color:'black'}}><span className="glyphicon glyphicon-home"></span> Admin Page</a></li>
                    </Link>
                      </ul>
             </div>
          </div>
          
    
        <h1>CUSTOMER</h1>
        <table className="customer-table" align="center" width="50%">
            
            <thead>
                <tr>
                    <th>FIRST NAME</th>
                    <th>LAST NAME</th>
                    <th>EMAIL ID</th>
                </tr>
            </thead>
            <tbody>
                {
                    
                    stock.map(customer=>
                      (customer.role==='user')?
                     <tr key={customer.customerId}align="center">
                     
                     
                         <td>{customer.firstName}</td>
                         <td>{customer.lastName}</td>
                         <td>{customer.emailId}</td>       
                     </tr>:<tr></tr>
                     

                      )}
                       
              </tbody>
        </table><br></br>
        
        <Link to="/admin"><button className="btn btn-info" class="viewbtn">Back to admin page</button></Link>
       
   </div>
   </body>
  );
}
}
function mapStateToProps(state){
    return{
        customer : state.UserReducer.customer,
        
    };
}
function mapDispatchToProps(dispatch){
    return{
        UserAction:bindActionCreators(UserAction,dispatch)
    };

}

export default connect(mapStateToProps,mapDispatchToProps)(ViewCustomer);