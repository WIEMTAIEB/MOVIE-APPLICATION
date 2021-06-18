import {React }from 'react';
import{Navbar,Form,Nav, Button} from "react-bootstrap";
import {Link} from 'react-router-dom';

import {VscAccount} from "react-icons/vsc"

import '../App.css';








function Navadmin({getInput, favorite}){
    return (
<div>
<Navbar className="nav" expand="lg" fixed="top" >
  <Navbar.Brand href="#home">
 <div className="d-flex align-items-center" > <img
        src="images/lo.png" color="#FF5A5F"
        width="200" 
      
        className="logo"
        alt="Movietime"
      /><h3 className="titrelogo">Dashbord Admin</h3></div>

    </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
    <Link to="/" className="navlink nav-link-ltr"> Movies</Link>
      <Link to="/about" className="navlink nav-link-ltr">Series</Link>
      <Link to="/contact" className="navlink nav-link-ltr"></Link>
     <Button className="navadmin" >  <VscAccount/> </Button>
    </Nav>
    
    

  </Navbar.Collapse>
</Navbar>
</div> 
)
    }

export default Navadmin;


