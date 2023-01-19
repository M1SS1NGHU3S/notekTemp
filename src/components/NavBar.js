import navLogo from "../img/nav-logo.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
    return (
        <>
            <Navbar className="nav" expand="lg" sticky="top" variant="light">
                <Container>
                    <Navbar.Brand href="#"><img id="nav--logo" src={navLogo} alt="Notek Logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="nav--links">
                            <Nav.Link href="#">Serviços</Nav.Link>
                            <Nav.Link href="#">Sobre</Nav.Link>
                            <Nav.Link href="#">Tabelas</Nav.Link>
                            <Nav.Link href="#">Links Úteis</Nav.Link>
                            <Nav.Link href="#">Notícias</Nav.Link>
                            <Nav.Link href="#">Contato</Nav.Link>
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