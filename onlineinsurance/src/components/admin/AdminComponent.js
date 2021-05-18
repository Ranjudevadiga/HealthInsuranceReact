import React,{Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import LoginNavBar from '../LoginNavBar';
class AdminComponent extends Component{
    constructor(props){
        super(props)
        if(sessionStorage.getItem("adminId")===undefined)
        {
           
            window.location.href="/login";
        }
    }
    logout(){
        sessionStorage.removeItem("adminId");
        window.location.href="/login";
    }
  
render(){
    let login=this.props.login;
  
    
    return(
        <body>
			<LoginNavBar/>
        <div class="admin-clas">
        <h2>Welcome Administrator!!</h2>
        
		<div class="row" ></div>
			<div class="col-md-6 col-sm-6">
			    <div class="card img" style={{backgroundColor:'white',borderColor:'#3498db',boxShadow:'6px 6px 5px #3498db',width:"200px",width:'100%'}}>
			        <i class="fa fa-file-text fa-3x" style={{textAlign:'center',color:'black'}} aria-hidden="true" ></i>
			        <div class="card-body text-center">
			            <h5 class="card-title" style={{color:'black'}}>View Policies</h5>
			            <p class="card-text"></p>
			            <Link to="/adminviewpolicy">
                         <i class="fa fa-arrow-right fa-2x" aria-hidden="true"></i></Link>
			        </div>
			    </div>
			</div>
			  <div class="col-md-6 col-sm-6">
              <div class="card img" style={{backgroundColor:'white',borderColor:'#3498db',boxShadow:'6px 6px 5px #3498db',width:"200px",width:'100%'}}>
			        <i class="fa fa-users fa-3x" style={{textAlign:'center',color:'black'}} aria-hidden="true" ></i>
			        <div class="card-body text-center">
			            <h5 class="card-title" style={{color:'black'}}>View customers</h5>
			            <p class="card-text"></p>
			            <Link to="/viewcustomers">
                         <i class="fa fa-arrow-right fa-2x" aria-hidden="true"></i></Link>
			        </div>
			    </div>
			</div>
			
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
