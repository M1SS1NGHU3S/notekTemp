import MockUp from "../components/MockUp";

function Home() {
    return (
        <div>
            <MockUp
                title="Agora somos Notek Acessoria Empresarial!"
                button={true}
                buttonLink="#"
                buttonText="Conhecer"
                bgImage="img/mockup-home.png"
            />     
        </div>
    );
}

export default Home;   