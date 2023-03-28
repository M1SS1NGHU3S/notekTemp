import {
	EntreEmContato,
	FooterNotek,
	NavBar,
} from "./components/Imports"
import {Outlet, useLocation} from "react-router-dom";
// import { Manutencao } from "./pages/Imports";

function App() {
	const location = useLocation();

	return (
		<div>
			<NavBar />
			<Outlet />
			{/* <Manutencao /> */}
			{!location.pathname.includes("/admin") ? <EntreEmContato /> : null}
			<FooterNotek />
		</div>
	);
}

export default App;