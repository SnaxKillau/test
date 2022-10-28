import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'

function BasicExample() {
  return (
    <Navbar  expand="lg">
      <Container>
    
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='menu_bar'/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='nav_link'>Home</Nav.Link>
            <Nav.Link href="#link" className='nav_link'>Link</Nav.Link>
            <Nav.Link href="#home" className='nav_link'>Home</Nav.Link>
            <Nav.Link href="#link" className='nav_link'>Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
     
    </Navbar>
    
  );
}

export default BasicExample;