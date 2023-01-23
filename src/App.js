import NavBar from "./components/NavBar";
import {Outlet} from "react-router-dom";
import Manutencao from "./components/Manutencao";

function App() {
	return (
		<div>
			<NavBar />
			<Manutencao />
			<Outlet />
		</div>
	);
}

export default App;