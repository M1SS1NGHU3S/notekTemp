import {
    instagramIcon,
    facebookIcon,
    whatsappIcon
} from "../img/Imports";

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
        link: "https://www.linkedin.com/in/nortec-adm-contabilidade-401595248/"
    },
    {
        title: "Tel:",
        texto: "(11) 4828-5250",
        link: null
    },
    {
        title: "Endereço:",
        texto: "R. Domingos Benvenuto, 89 - Centro, Ribeirão Pires -" +
            "SP, 09400-070",
        link: "https://www.google.com/maps/place/Notek+Contábil/@-23.7106197,-46.41806,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce6cedfaac2359:0x508e368408d24400!8m2!3d-23.7106246!4d-46.415866!16s%2Fg%2F1ptyn_rmj"
    },
];
const generateTrabalheLinks = trabalheLinksContent.map((value, index) =>
    <a key={index} target="_blank" rel="noreferrer" href={value.link} className="footer--link">
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
        link: "https://www.instagram.com/notekcontabilidade/?hl=pt-br",
        image: instagramIcon
    },
    {
        alt: "Facebook icon",
        link: "https://www.facebook.com/nortekcontabil.com.br/",
        image: facebookIcon
    },
    {
        alt: "Whatsapp icon",
        link: "https://api.whatsapp.com/send/?phone=551148285250&text&type=phone_number&app_absent=0",
        image: whatsappIcon
    },
];
const generateSocialIcons = socialIconsContent.map((value, index) => 
    <a className="footer--link footer--link-social" target="_blank" rel="noreferrer" key={index} href={value.link}>
        <img className="footer--social" alt={value.alt} src={value.image} />
    </a>
)

export {
    generateLinksUteis, 
    generateTrabalheLinks, 
    generateSocialIcons, 
    generateNavLinks
};