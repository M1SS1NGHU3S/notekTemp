import instagramIcon from "../img/instagram-icon.png";
import facebookIcon from "../img/facebook-icon.png";
import whatsappIcon from "../img/whatsapp-icon.png";

const linksUteisContent = [
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
const generateLinksUteis = linksUteisContent.map((value, index) => 
    <a target="_blank" rel="noreferrer" key={index} href={value.link} className="footer--link">
        {value.title}
    </a>
);

const trabalheLinksContent = [
    {
        title: false,
        texto: "Veja vagas disponíveis",
        link: "#"
    },
    {
        title: "Tel:",
        texto: "(11) 4828-5250",
        link: "#"
    },
    {
        title: "Endereço:",
        texto: "R. Domingos Benvenuto, 89 - Centro, Ribeirão Pires -" +
            "SP, 09400-070",
        link: "#"
    },
];
const generateTrabalheLinks = trabalheLinksContent.map((value, index) =>
    <a key={index} href={value.link} className="footer--link">
        {
            value.title && 
            <span className="footer--link-title">{value.title}</span>
        }
        {value.texto}
    </a>
);

const navLinksContent = [
    {
        nome: "Serviços",
        link: "/servicos"
    },
    {
        nome: "Sobre",
        link: "/sobre"
    },
    {
        nome: "Tabelas",
        link: "/tabelas"
    },
    {
        nome: "Notícias",
        link: "/noticias"
    },
    {
        nome: "Contato",
        link: "/contato"
    },
];
const generateNavLinks = navLinksContent.map((value, index) => 
    <a className="footer--nav-link footer--link" key={index} href={value.link} >
        {value.nome}
    </a>
)

const socialIconsContent = [
    {
        alt: "Instagram icon",
        link: "#",
        image: instagramIcon
    },
    {
        alt: "Facebook icon",
        link: "#",
        image: facebookIcon
    },
    {
        alt: "Whatsapp icon",
        link: "#",
        image: whatsappIcon
    },
];
const generateSocialIcons = socialIconsContent.map((value, index) => 
    <a className="footer--link footer--link-social" key={index} href={value.link}>
        <img className="footer--social" alt={value.alt} src={value.image} />
    </a>
)

export {
    generateLinksUteis, 
    generateTrabalheLinks, 
    generateSocialIcons, 
    generateNavLinks
};