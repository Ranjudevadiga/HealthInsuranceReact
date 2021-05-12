import React,{ Component} from 'react';
import {connect} from 'react-redux';
import * as UserAction from '../../store/actions/UserAction'
import { bindActionCreators } from 'redux';



//import 'bootstrap/dist/css/bootstrap.min.css';

class ViewCustomer extends Component{
constructor(props){
    super(props)
    }
    componentDidMount(){
        this.props.UserAction.getCustomer()
    }
    backToAdmin(){
        window.location.href="/admin";
    }
    logout(){
        window.location.href="/login"
    }

render(){
    let stock=this.props.customer;
    
  return(
      <div>
          <h1>CUSTOMER</h1>
          <table className="table-bordered table-dark" align="center" width="50%">
              
              <thead>
                  <tr>
                      <th>FIRST NAME</th>
                      <th>LAST NAME</th>
                      <th>EMAIL ID</th>
                      <th>PASSWORD</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      stock.map(customer=>
                       <tr key={customer.customerId}align="center">
                           <td>{customer.firstName}</td>
                           <td>{customer.lastName}</td>
                           <td>{customer.emailId}</td>
                           <td>{customer.password}</td>

                       </tr>
                      
                        )}
                         
                </tbody>
          </table><br></br>
          <button className="btn btn-warning" id="bt" onClick={this.logout}>Logout</button>
          <button className="btn btn-warning" id="bt" onClick={this.backToAdmin}>Back To Admin</button>
         
     </div>
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