
import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import CustomerLoginNav from '../CustomerLoginNav';
class UserComponent extends Component{
    constructor(props){
        super(props)
        if(sessionStorage.getItem("userId")==undefined)
        {
           
            window.location.href="/login";
        }
    }
    logout(){
        sessionStorage.removeItem("userId");
        window.location.href="/login";
    }
  
render(){
   
    return(
        <body>
       <CustomerLoginNav/>
       <div class="user">
      
        <center className="txt">Welcome {sessionStorage.getItem("username")}</center>
        <Link to="/customerViewPolicy">
            <button className="btn" >View Policies</button>
        </Link>&nbsp;
        </div>
        </body>
        
    );
}
}
function mapStateToProps(state) {
    return {
        login : state.LoginReducer.login
    };
}
export default connect(mapStateToProps) (UserComponent);
