import navLogo from "../img/nav-logo.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom"


function NavBar() {
    return (
        <>
            <Navbar className="nav" expand="lg" sticky="top" variant="light">
                <Container>
                    <Link to={`/home`} className="nav-link"><img id="nav--logo" src={navLogo} alt="Notek Logo" /></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="nav--links">
                            <Nav.Link href="#"><Link to={`/home`} className="nav-link">Serviços</Link></Nav.Link>
                            <Nav.Link href="#"><Link to={`/sobre`} className="nav-link">Sobre</Link></Nav.Link>
                            <Nav.Link href="#"><Link to={`/tabelas`} className="nav-link">Tabelas</Link></Nav.Link>
                            <Nav.Link href="#"><Link to={`/links-uteis`} className="nav-link">Links Úteis</Link></Nav.Link>
                            <Nav.Link href="#"><Link to={`/noticias`} className="nav-link">Notícias</Link></Nav.Link>
                            <Nav.Link href="#"><Link to={`/contato`} className="nav-link">Contato</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

        // <nav>
        //     <img id="nav--logo" src={navLogo} alt="Notek Logo" />
        //     <ul id="nav--links">
        //         <li><a href="index.html">Serviços</a></li>
        //         <li><a href="index.html">Sobre</a></li>
        //         <li><a href="index.html">Tabelas</a></li>
        //         <li><a href="index.html">Links Úteis</a></li>
        //         <li><a href="index.html">Notícias</a></li>
        //         <li><a href="index.html">Contato</a></li>
        //     </ul>
        // </nav>
    );
}

export default NavBar;