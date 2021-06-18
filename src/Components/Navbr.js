import {React }from 'react';
import{Navbar,Form,Nav} from "react-bootstrap";
import {Link} from 'react-router-dom';
import {FaHeart} from "react-icons/fa"
import {BiCameraMovie} from "react-icons/fa"
import '../App.css';
import {BsSearch} from "react-icons/bs"






function Navbarr({getInput, favorite}){
    return (
<div>
<Navbar className="nav" expand="lg" fixed="top" >
  <Navbar.Brand href="#home">
 <div className="d-flex align-items-center" > <img
        src="images/lo.png" color="#FF5A5F"
        width="200" 
      
        className="logo"
        alt="Movietime"
      /><h3 className="titrelogo">Pocket Cinema</h3></div>

    </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
    <Link to="/" className="navlink nav-link-ltr"> Explore</Link>
      <Link to="/about" className="navlink nav-link-ltr">My Movies</Link>
      <Link to="/contact" className="navlink nav-link-ltr">Contact</Link>
      <Link to="/Favoris" className="iconav"> <FaHeart /> <span className="badge badge-danger rounded-circle">{favorite}</span></Link>
    </Nav>
    
    <Form className="mr-4">
  <input className="put" type="search" placeholder="Get your Movie...    "  onChange = {getInput}  /> 
  <i  className="BsSearch"></i>

  

</Form>

  </Navbar.Collapse>
</Navbar>
</div> 
)
    }

export default Navbarr;


