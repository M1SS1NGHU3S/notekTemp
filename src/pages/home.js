import MockUp from "../components/MockUp.js";
import SobreMudanca from "../sections/SobreMudanca";
import homeImg from "../img/mockup-home.png"

function Home() {
    return (
        <div>
            <MockUp
                title="Agora somos Notek Acessoria Empresarial!"
                button={true}
                buttonLink="#"
                buttonText="Conhecer"
                bgImage={homeImg}
            />     
            <SobreMudanca isHome={true} />
        </div>
    );
}

export default Home;   