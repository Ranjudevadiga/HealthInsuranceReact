import React, {Component} from 'react';
import HomeNavBar from '../HomeNavBar';

class Services extends Component{
render(){
    return(
        <div>
          
          <div className="image">
          <HomeNavBar/>
               </div>
     <div class="service">
         
        <div class="col-md-3 col-sm-6">
        <div class="box">
        <i class="fa fa-hotel fa-5x "  aria-hidden="true"></i>
             <h3>Hospitalisation</h3>
               <p>Medical expenses incurred during hospitalisation for more than 24 hours, including room charges, doctor/surgeon’s fee, medicine bills, etc.</p>
             </div>
        </div>
        <div class="col-md-3 col-sm-6">
        <div div class="box">
        <i class="fa fa-ambulance fa-5x"></i>
              <h3>Ambulance costs</h3>
               <p> Ambulance charges and other transportation costs of the person insured are also covered under health insurance policies</p>
             </div>
        </div>
        <div class="col-md-3 col-sm-6">
        <div class="box">
        <i class="fa fa-stethoscope fa-5x" aria-hidden="true"></i>
             <h3>Medical check-ups</h3>
               <p>Our policies also offer coverage for periodic health check-ups. We offer free check-ups on the basis of earlier no-claim bonuses</p>
              </div>
        </div> 
        <div class="col-md-3 col-sm-6">
        <div class="box">   
        <i class="fa fa-money fa-5x"></i>
             <h3>Fixed Premiums</h3>
               <p>We offer higher coverage for premiums that are affordable. Premium amounts also remain fixed for the entire duration of the policy</p>
             </div>
        </div>
     </div>
     </div>
       
      );
    }    
    }
    export default Services;