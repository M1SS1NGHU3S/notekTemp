import MockUp from "../components/MockUp.js";
import SobreMudanca from "../sections/SobreMudanca";
import ServicosHome from "../sections/ServicosHome.js";
import NoticiasRow from "../sections/NoticiasRow.js";
import homeImg from "../img/mockup-home.png";

function Home() {
    return (
        <div>
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
        </div>
    );
}

export default Home;   