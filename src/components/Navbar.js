import {React,useEffect,useState} from 'react'
// import { Outlet, Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'
// import '../bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../mystyle.css';
import {useAuth} from './Auth';
export const Navs = () => {
    const location = useLocation();
    const na = localStorage.getItem("user")
    const myObject = JSON.parse(na);
  return (
    
    <div className=''>
      <Navbar collapseOnSelect expand="sm"   variant="dark" className='nav fixed-top'>
      <Container>
        <Navbar.Brand href="/" id="navs">LIFE SAVER</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  href="/" className={`nav-link ${location.pathname==="/"?"active":""}`}>Home</Nav.Link>
            <Nav.Link  href="/donate" className={`nav-link ${location.pathname==="/donate"?"active":""}`}>Donate</Nav.Link>
            <Nav.Link  href="/need" className={`nav-link ${location.pathname==="/need"?"active":""}`}>Need</Nav.Link>
            </Nav>

            {myObject===null?<Nav><Nav.Link href="/login" className={`nav-link ${location.pathname==="/login"?"active":""}`}>Login</Nav.Link>
            <Nav.Link eventKey={2} href="/signup" className={`nav-link ${location.pathname==="/signup"?"active":""}`}>Signup
            </Nav.Link></Nav>:<Nav><Nav.Link href="" className="nav-link active">Hi, {myObject.uname}</Nav.Link>
            <Nav.Link  href="/" className="nav-link active" onClick={()=>localStorage.removeItem("user")}>Logout
            </Nav.Link></Nav>
}
            
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
<br></br><br></br>
       {/* <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">ARADHAYA MINERALS</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link to="/" className={`nav-link ${location.pathname==="/"?"active":""}`}>Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/shop" className={`nav-link ${location.pathname==="/shop"?"active":""}`}>Shop</Link>
        </li>
        <li class="nav-item">
          <Link to="/login" className={`nav-link ${location.pathname==="/login"?"active":""}`}>Login</Link>
        </li>
        <li class="nav-item">
          <Link to="/signup" className={`nav-link ${location.pathname==="/signup"?"active":""}`}>Signup</Link>
        </li>
      </ul>
    </div>
  </div>
  
      </nav> */}

    </div>
  )
}

