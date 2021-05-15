import React, {Component} from 'react';
import contactus from './images/contactus.jpg'

class Contact extends Component{
render(){
    return(
        <div>
        <div class="contact">
            <img src={contactus} alt="contact" width={1300} height={500}></img>
        </div>
        <div class="contactbox">
        <div class="col-md-6 col-sm-6">
         <div class="box">
         <i class="fa fa-phone fa-5x "  aria-hidden="true"></i>
              <h3>Talk to agent</h3>
              <p>Interested in getting a Health Insurance?<br></br>Talk to our agent and get answers to all your questions</p>
              <p style={{color:"blue"}}>+91 72828392902</p>
              </div>
              </div>
              <div class="col-md-6 col-sm-6">
         <div class="box">
         <i class="fa fa-comments fa-5x "  aria-hidden="true"></i>
              <h3>Customer Support</h3>
              <p>Sometimes you need a little help from your friends or support from us.<br></br>Dont worry we are here for you.</p>
              <br></br><button className="btn btn-danger">Contact Support</button>
              </div>
              </div>
            </div>
    </div>
    );
}
}
export default Contact;