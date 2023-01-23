import NavBar from "./components/NavBar";
import {Outlet} from "react-router-dom";
// import Manutencao from "./pages/manutencao";

function App() {
	return (
		<div>
			<NavBar />
			<Outlet />
			{/* <Manutencao /> */}
		</div>
	);
}

export default App;