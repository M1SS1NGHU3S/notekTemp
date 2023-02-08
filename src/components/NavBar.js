import navLogo from "../img/nav-logo.png";
import "./NavBar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
    return (
        <>
            <Navbar className="nav" expand="lg" sticky="top" variant="light">
                <Container>
                    <Navbar.Brand href="#home"><img id="nav--logo" src={navLogo} alt="Notek Logo" /></Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="nav--Nav.Links">
                            <Nav.Link href="" className="active" >Serviços</Nav.Link>
                            <Nav.Link to={`/sobre`} className="active" >Sobre</Nav.Link>
                            <Nav.Link to={`/tabelas`} className="active" >Tabelas</Nav.Link>
                            <Nav.Link href="#home" className="active" >Links Úteis</Nav.Link>
                            <Nav.Link to={`/noticias`} className="active" >Notícias</Nav.Link>
                            <Nav.Link to={`/contato`} className="active" >Contato</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;