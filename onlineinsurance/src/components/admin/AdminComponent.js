import React,{Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
class AdminComponent extends Component{
    logout(){
        window.location.href="/";
    }
render(){
    let login=this.props.login;
    if(login===undefined){
        alert("unauthorized access...please try again");
        return <Redirect to="/login"></Redirect>
    }
    return(
        <body>
        <div>
        <h2>Welcome Administrator!!</h2>
        <Link to="/adminviewpolicy">
            <button className="btn btn-info">View Policies</button>
        </Link> &nbsp;
                <button className="btn btn-warning" id="bt" onClick={this.logout}>Logout</button>
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
export default connect(mapStateToProps) (AdminComponent);
