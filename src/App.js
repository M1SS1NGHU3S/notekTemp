import {
	EntreEmContato,
	FooterNotek,
	NavBar,
} from "./components/Imports"
import {
	Outlet
} from "react-router-dom";
// import { Manutencao } from "./pages/Imports";

function App() {
	return (
		<div>
			<NavBar />
			<Outlet />
			{/* <Manutencao /> */}
			<EntreEmContato />
			<FooterNotek />
		</div>
	);
}

export default App;