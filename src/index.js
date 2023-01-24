import React from "react";
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './css/style.css';
import App from './App';
import Contato from "./pages/contato";
import Home from "./pages/home";
import LinksUteis from "./pages/linksuteis";
import Noticias from "./pages/noticias";
import Sobre from "./pages/sobre";
import Tabelas from "./pages/tabelas";
import ErrorPage from "./error-page";

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
                path: "/links-uteis",
                element: <LinksUteis />
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