import React, {Component} from 'react';

class Welcome extends Component{
render(){
    return(
        <div class="container">
  
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
  
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

   
    <div class="carousel-inner">

      <div class="item active">
        <img src="images/Health-insurance-min_1.jpg" alt="Los Angeles"></img>
        
      </div>

      <div class="item">
        <img src="images/Dhirendra.jpg" alt="Chicago"></img>
        
      </div>
    
      <div class="item">
        <img src="images/health-insurance-concept-with-words-coverage-protection-risk-and-security-HG92P3.jpg" alt="New York" ></img>
       
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
</div>

      
            
             
        );
    }    
    }
    export default Welcome;