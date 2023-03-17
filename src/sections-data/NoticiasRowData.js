import {
    officeCalcImg,
    cleanOfficeImg
} from "../img/Imports";
import {
    NoticiaLink,
} from "../components/Imports";

const linksContent = [
    {
        titulo: "Texto da Notícia",
        data: "25/01",
        link: "#"
    },
    {
        titulo: "Texto da Notícia",
        data: "25/01",
        link: "#"
    },
    {
        titulo: "Texto da Notícia",
        data: "25/01",
        link: "#"
    },
];


const cardsContent = [
    {
        titulo: "Título",
        desc: "Breve resumo sobre a notícia que apareceria aqui",
        altText: "Exemplo",
        img: officeCalcImg
    },
    {
        titulo: "Título",
        desc: "Breve resumo sobre a notícia que apareceria aqui",
        altText: "Exemplo",
        img: cleanOfficeImg
    }
];

const generateLinks = linksContent.map((value, index) =>
    <NoticiaLink 
        key={index}
        titulo={value.titulo} 
        data={value.data} 
        link={value.link} 
    />
);

export {
    cardsContent,
    linksContent,
    generateLinks
};