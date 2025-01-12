import Nav from 'react-bootstrap/Nav';
import NavDropdown from "react-bootstrap/NavDropdown";

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
        title: "Contato",
        link: "/contato"
    }
];
const generateNavLinks = linksContent.map((value, index) =>
    <Nav.Link
        key={index}
        href={value.link} 
        className="active" 
    >
        {value.title}
    </Nav.Link>
);

const dropdownContent = [
    {
        title: "Receita Federal",
        link: "https://www.gov.br/receitafederal/pt-br"
    },
    {
        title: "Caixa Econômica Federal",
        link: "https://www.caixa.gov.br/Paginas/home-caixa.aspx"
    },
    {
        title: "Portal do Empreendedor",
        link: "https://www.gov.br/empresas-e-negocios/pt-br/empreendedor"
    },
    {
        title: "Procuradoria da União e Fazenda",
        link: "https://www.gov.br/pgfn/pt-br"
    },
    {
        title: "Superior Tribunal de Justiça",
        link: "https://www.stj.jus.br/sites/portalp/Inicio"
    },
    {
        title: "Tribunal Superior do Trabalho",
        link: "https://www.tst.jus.br/"
    },
    {
        title: "Sebrae",
        link: "https://sebrae.com.br/sites/PortalSebrae"
    },
    {
        title: "Cartório 24H",
        link: "https://cartorios24horas.com.br/"
    },
    {
        title: "Jucesp",
        link: "http://www.institucional.jucesp.sp.gov.br/"
    },
    {
        title: "Cadastro Pessoa Física",
        link: "http://www.receita.fazenda.gov.br/Aplicacoes/ATCTA/CPF/default.htm"
    },
];
const generateDropdownLinks = dropdownContent.map((value, index) =>  
    <NavDropdown.Item 
        target="_blank" 
        rel="noreferrer" 
        key={index} 
        href={value.link}
    >
            {value.title}
    </NavDropdown.Item>
);

export {generateNavLinks, generateDropdownLinks};