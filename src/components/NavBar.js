import navLogo from "../img/nav-logo.png";
import "./NavBar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from "react-bootstrap/NavDropdown";
import {
    generateNavLinks,
    generateDropdownLinks
} from "./NavBarContent";

function NavBar() {
    return (
        <Navbar className="nav" expand="lg" sticky="top" variant="light">
            <Container>
                <Navbar.Brand href="/"><img id="nav--logo" src={navLogo} alt="Notek Logo" /></Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="nav--Nav.Links">
                        {generateNavLinks}
                        <NavDropdown title="Links Úteis" id="basic-nav-dropdown">
                            {generateDropdownLinks}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;