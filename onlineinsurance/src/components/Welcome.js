import React, {Component} from 'react';
import HomeNavBar from './HomeNavBar';
import homepage from './images/homepage.jpg'

import homepageee from './images/homepageee.jpg'

class Welcome extends Component{
render(){
   
    return(

        <div class="one">
          <HomeNavBar/>
        
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
  
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

   
    <div class="carousel-inner">

      <div class="item active">
        <img src={homepage} alt="Los Angeles" ></img>
  
        
      </div>

      <div class="item">
        <img src='./images/Health-insurance-min_1.jpg' alt="Chicago" ></img>
        
      </div>
    
      <div class="item">
        <img src={homepageee} alt="New York" ></img>
       
      </div>
  
    </div>

   
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
  <section id="Services" class="content-section text-center">
            <div class="container">
              <div class="block-heading">
                <h2>What We Offer</h2>
              </div>
              <div class="row">
                <div class="col-md-3 col-sm-6">
                 
                      <div class="front-content">
                        <i class="fa fa-hotel fa-5x "  aria-hidden="true"></i>
                        <h3>Hospitalisation</h3>
                      
                    </div>
                    <div class="service-content">
                      <p>Medical expenses incurred during hospitalisation for more than 24 hours, including room charges, doctor/surgeon’s fee, medicine bills, etc.</p>
                    </div>
                  
                </div>
                <div class="col-md-3 col-sm-6">
                  
                      <div class="front-content">
                        <i class="fa fa-ambulance fa-5x"></i>
                        <h3>Ambulance costs</h3>
                      </div>
                   
                    <div class="service-content">
                     
                      <p> Ambulance charges and other transportation costs of the person insured are also covered under health insurance policies</p>
                    </div>
                 
                </div>
                <div class="col-md-3 col-sm-6">
                  
                      <div class="front-content">
                        <i class="fa fa-stethoscope fa-5x" aria-hidden="true"></i>
                        <h3>Medical check-ups</h3>
                  </div>
                    <div class="service-content">
                      <p>Our policies also offer coverage for periodic health check-ups. We offer free check-ups on the basis of earlier no-claim bonuses</p>
                    </div>  
                </div>
                <div class="col-md-3 col-sm-6">
                      <div class="front-content">
                        <i class="fa fa-money fa-5x"></i>
                        <h3>Fixed premiums</h3>
                      </div>
                    <div class="service-content">
                      <p>We offer higher coverage for premiums that are affordable. Premium amounts also remain fixed for the entire duration of the policy</p>
                    </div>
                  </div>
               
              </div>
            </div></section>
</div>

      
            
             
        );
    }    
    }
    export default Welcome;