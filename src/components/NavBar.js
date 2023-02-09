import navLogo from "../img/nav-logo.png";
import "./NavBar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
    const linksContent = [
        {
            title: "Serviços",
            link: "/servicos"
        },
        {
            title: "Sobre",
            link: "/sobre"
        },
        {
            title: "Tabelas",
            link: "/tabelas"
        },
        {
            title: "Notícias",
            link: "/noticias"
        },
        {
            title: "Contato",
            link: "/contato"
        },
    ];
    const generateNavLinks = linksContent.map((value, index) =>
        <Nav.Link
            key={index}
            href={value.link} 
            className="active" 
        >
            {value.title}
        </Nav.Link>
    )

    return (
        <Navbar className="nav" expand="lg" sticky="top" variant="light">
            <Container>
                <Navbar.Brand href="/"><img id="nav--logo" src={navLogo} alt="Notek Logo" /></Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="nav--Nav.Links">
                        {generateNavLinks}
                        <Nav.Link href="#home" className="active" >Links Úteis</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;