import {
	EntreEmContato,
	FooterNotek,
	NavBar,
} from "./components/Imports"
import {Outlet, useLocation} from "react-router-dom";
import { useEffect } from "react";
// import { Manutencao } from "./pages/Imports";

function App() {
	const location = useLocation();

	useEffect(() => {
		const script1 = document.createElement('script');

		script1.defer = true;
		script1.async = true;
		script1.src = "https://duz4dqsaqembt.cloudfront.net/client/whats.js";

		window.rwbp = {
			email:'cris@notekcontabil.com.br',
			phone:'5511950618623',
			message:'Olá, seja bem vindo! Como posso te ajudar ?',
			lang:'pt-BR'
		};
	  
		document.body.appendChild(script1);
	  
		return () => {
		  document.body.removeChild(script1);
		}
	  }, []);

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