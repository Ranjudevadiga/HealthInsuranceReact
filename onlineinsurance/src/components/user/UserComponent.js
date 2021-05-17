
import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
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
    let login=this.props.login;
    //if(login===undefined){
      //  alert("unauthorized access...please try again");
      //  return <Redirect to="/login"></Redirect>
       // }
       
    return(
        <body>
       
       <div class="user">
      
        <center className="txt">Welcome {sessionStorage.getItem("username")}</center>
        <Link to="/customerViewPolicy">
            <button className="btn" >View Policies</button>
        </Link>&nbsp;
  
        <button className="btn " id="bt" onClick={this.logout}> Logout</button>
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
