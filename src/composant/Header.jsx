import { Nav, Navbar } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "../App";

function Navigation() {
  const location = useLocation();
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="/">JOHN DOE</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse className="left" id="basic-navbar-nav">
      <Nav className="mr-auto" activeKey={location.pathname}>
        <Nav.Link href="/">ACCUEIL</Nav.Link>
        <Nav.Link href="/Service">SERVICES</Nav.Link>
        <Nav.Link href="/Realisation">RÉALISATIONS</Nav.Link>
        <Nav.Link href="/Blog">BLOG</Nav.Link>
        <Nav.Link href="/Contact">ME CONTACTER</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
	
  );
}

export default Navigation;