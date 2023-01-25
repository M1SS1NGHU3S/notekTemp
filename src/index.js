import React from "react";
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './App';
import Contato from "./pages/contato";
import Home from "./pages/home";
import Noticias from "./pages/noticias";
import Sobre from "./pages/sobre";
import Tabelas from "./pages/tabelas";
import ErrorPage from "./pages/error-page";
import Servicos from "./pages/servicos";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/contato",
                element: <Contato />
            },
            {
                index: true,
                element: <Home />
            },
            {
                path: "/servicos",
                element: <Servicos />
            },
            {
                path: "noticias",
                element: <Noticias />
            },
            {
                path: "sobre",
                element: <Sobre />
            },
            {
                path: "tabelas",
                element: <Tabelas />
            },
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);