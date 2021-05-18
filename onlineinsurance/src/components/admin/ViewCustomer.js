import React,{ Component, Fragment} from 'react';
import {connect} from 'react-redux';
import * as UserAction from '../../store/actions/UserAction'
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom';
import './viewCustomer.css';
import LoginNavBar from '../LoginNavBar';

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
        <LoginNavBar/>
    <div class="viewcust"> 
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