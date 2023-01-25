import navLogo from "../img/nav-logo.png";
import "./NavBar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom"


function NavBar() {
    return (
        <>
            <Navbar className="nav" expand="lg" sticky="top" variant="light">
                <Container>
                    <Link to={`/`} className="nav-link"><img id="nav--logo" src={navLogo} alt="Notek Logo" /></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="nav--links">
                            <Link to={`/`} data-rr-ui-event-key="#" role="button" className="nav-link active" tabIndex="0">Serviços</Link>
                            <Link to={`/sobre`} data-rr-ui-event-key="#" role="button" className="nav-link active" tabIndex="0">Sobre</Link>
                            <Link to={`/tabelas`} data-rr-ui-event-key="#" role="button" className="nav-link active" tabIndex="0">Tabelas</Link>
                            <Link to={`/links-uteis`} data-rr-ui-event-key="#" role="button" className="nav-link active" tabIndex="0">Links Úteis</Link>
                            <Link to={`/noticias`} data-rr-ui-event-key="#" role="button" className="nav-link active" tabIndex="0">Notícias</Link>
                            <Link to={`/contato`} data-rr-ui-event-key="#" role="button" className="nav-link active" tabIndex="0">Contato</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;