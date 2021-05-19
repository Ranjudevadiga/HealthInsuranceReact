import React,{ Component,Redirect } from 'react';
import{Navbar,Nav,NavDropdown} from 'react-bootstrap';
export default class HomeNavBar extends Component{
    render(){
    
        return(
            <div>
            <Navbar collapseOnSelect expand="lg" className="colour-nav" style={{backgroundColor:'rgb(38, 4, 44)',width:'100%',color:'white'}} variant='light' >
  <Navbar.Brand style={{color:'white'}} href="/">Omega</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="justify-content-end" style={{width:"95%"}}>
    <Nav.Link style={{color:'white'}} href="/" >Home</Nav.Link>
      <Nav.Link style={{color:'white'}} href="/About">About Us</Nav.Link>
      <Nav.Link style={{color:'white'}} href="/login">Login </Nav.Link>

      <NavDropdown  id="collasible-nav-dropdown" title="Other" style={{backgroundColor:'white',width:'8rem'}} className="drop" >
        <NavDropdown.Item href="/services">Services</NavDropdown.Item>
        <NavDropdown.Item href="/contact"> Contact</NavDropdown.Item>
        
      </NavDropdown>
      </Nav>
  </Navbar.Collapse>
</Navbar>  
            </div>   
        );
    }
    
    
    }