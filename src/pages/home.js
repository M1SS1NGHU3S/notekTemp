import MockUp from "../components/MockUp.js";
import SobreMudanca from "../sections/SobreMudanca";
import ServicosHome from "../sections/ServicosHome.js";
import NoticiasRow from "../sections/NoticiasRow.js";
import EntreEmContato from "../sections/EntreEmContato.js";
import homeImg from "../img/mockup-home.png";

function Home() {
    return (
        <>
            <MockUp
                title="Agora somos Notek Acessoria Empresarial!"
                button={true}
                buttonLink="/sobre"
                buttonText="Conhecer"
                bgImage={homeImg}
            />     
            <SobreMudanca isHome={true} />
            <ServicosHome />
            <NoticiasRow isHome={true} />
            <EntreEmContato />
        </>
    );
}

export default Home;   