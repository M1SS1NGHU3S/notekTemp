import NavBar from "./components/NavBar";
import FooterNotek from "./components/FooterNotek";
import {Outlet} from "react-router-dom";
// import Manutencao from "./pages/manutencao";

function App() {
	return (
		<div>
			<NavBar />
			<Outlet />
			{/* <Manutencao /> */}
			<FooterNotek />
		</div>
	);
}

export default App;