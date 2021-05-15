import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
class UserComponent extends Component{
    logout(){
        window.location.href="/login";
    }
render(){
    let login=this.props.login;
    if(login===undefined){
        alert("unauthorized access...please try again");
        return <Redirect to="/login"></Redirect>
        }
    return(
        <body>
       
       <div class="user">
        <h2>Welcome user</h2>
        <Link to="/customerViewPolicy">
            <button className="btn" >View Policies</button>
        </Link>&nbsp;
  
        <button className="btn " id="bt" onClick={this.logout}>Logout</button>
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

