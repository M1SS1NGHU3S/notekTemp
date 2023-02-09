import {
	NavBar,
	FooterNotek
} from "./components/Imports"
import {Outlet} from "react-router-dom";
// import { Manutencao } from "./pages/Imports";

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