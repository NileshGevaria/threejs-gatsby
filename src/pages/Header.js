import * as React from "react"
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'gatsby';
import logo from '../assets/images/logo.webp';
import icWhatsApp from '../assets/images/icWhatsApp.webp';


const Header = () => {

        return (
            <Navbar expand="lg" className='headerCustom scrolled' fixed="top">
                <Container fluid className='containerHeader'>
                    <Navbar.Brand href="#home"><img src={logo} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link to={"/"} activeClassName="active">Home</Link>
                            <Link to={"/AboutUs"} activeClassName="active">About Us</Link>
                            <Link to={"/Services"} activeClassName="active">Services</Link>
                            {/* <Link to={"https://www.threejsdevelopers.com/blogs"} activeClassName="active">Blogs</Link> */}
                            <Link to={"/Contact"} activeClassName="active">Contact Us</Link>
                            <a href='https://wa.me/+919429005987' target="_blank" className='icWhatsApp'>
                                <img src={icWhatsApp} style={{width:"30px"}} />
                            </a>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    
}

export default Header;