import React,{Component} from 'react';
class UserComponent extends Component{
    logout(){
        window.location.href="/login";
    }
render(){
    
    return(
        <body>
       
        <h2>Welcome User!!</h2>

  
        <button className="btn btn-warning" id="bt" onClick={this.logout}>Logout</button>
        </body>
    );
}
}
export default UserComponent;