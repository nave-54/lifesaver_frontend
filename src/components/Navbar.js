import {React,useEffect,useState} from 'react'
// import { Outlet, Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import {useAuth} from './Auth';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../mystyle.css';
export const Navs = () => {
  const auth = useAuth()
    const location = useLocation();
    const na = localStorage.getItem("user")
    const myObject = JSON.parse(na);
    const [move,setmove] = useState("/donate")
    const name = auth.disname
    useEffect(()=>{
      if(myObject!=null)
      {
        if(myObject.udec===false)
        {
          setmove("/donated")
        }
        else{
          setmove('/donate')
        }
      }
    },[])
    
  return (
    
    <div className='container'>
      <Navbar collapseOnSelect expand="sm"   variant="dark" className='nav fixed-top'>
      <Container>
        <Navbar.Brand href="/" id="navs">LIFE SAVER</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  href="/" className={`nav-link ${location.pathname==="/"?"active":""}`}>Home</Nav.Link>
            <Nav.Link  href={move} className={`nav-link ${location.pathname===move?"active":""}`}>Donate</Nav.Link>
            <Nav.Link  href="/need" className={`nav-link ${location.pathname==="/need"?"active":""}`}>Need</Nav.Link>
            </Nav>

            {myObject===null?<Nav><Nav.Link href="/login" className={`nav-link ${location.pathname==="/login"?"active":""}`}>Login</Nav.Link>
            <Nav.Link eventKey={2} href="/signup" className={`nav-link ${location.pathname==="/signup"?"active":""}`}>Signup
            </Nav.Link></Nav>:<Nav><Nav.Link href="" className="nav-link active">Hi, {myObject.uname}</Nav.Link>
            <Nav.Link href="/profile" className={`nav-link ${location.pathname==="/profile"?"active":""}`}>Profile</Nav.Link>
            <Nav.Link  href="/" onClick={()=>localStorage.removeItem("user")}>Logout
            </Nav.Link></Nav>
}
            
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
<br></br><br></br>

    </div>
  )
}

