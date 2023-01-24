import MockUp from "../components/MockUp";
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
        </div>
    );
}

export default Home;   