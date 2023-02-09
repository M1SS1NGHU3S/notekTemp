import React from "react";
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './App';
import * as pages from "./pages/Imports";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <pages.ErrorPage />,
        children: [
            {
                path: "/contato",
                element: <pages.Contato />
            },
            {
                index: true,
                element: <pages.Home />
            },
            {
                path: "/servicos",
                element: <pages.Servicos />
            },
            {
                path: "noticias",
                element: <pages.Noticias />
            },
            {
                path: "sobre",
                element: <pages.Sobre />
            },
            {
                path: "tabelas",
                element: <pages.Tabelas />
            },
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);