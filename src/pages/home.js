import { mockupHomeImg } from "../img/Imports"
import {
    MockUp,
    SobreMudanca,
    ServicosHome,
    NoticiasRow,
} from "../sections/Imports"

function Home() {
    return (
        <>
            <MockUp
                title="Agora somos Notek Acessoria Empresarial!"
                button={true}
                buttonLink="/sobre"
                buttonText="Conhecer"
                bgImage={mockupHomeImg}
            />     
            <SobreMudanca isHome={true} />
            <ServicosHome />
            <NoticiasRow isHome={true} />
        </>
    );
}

export default Home;   