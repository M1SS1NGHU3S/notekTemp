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
                path: "/sobre",
                element: <pages.Sobre />
            },
            // {
            //     path: "noticias",
            //     element: <pages.Noticias />
            // },
            // {
            //     path: "noticias/:id",
            //     element: <pages.Blog />
            // },
            // {
            //     path: "admin/add-noticia/:noticiaId?",
            //     element: <pages.AddNoticia />
            // },
            // {
            //     path: "admin/add-blog/:blogId?",
            //     element: <pages.AddBlog />
            // },
            // {
            //     path: "admin/start",
            //     element: <pages.AdminStart />
            // },
            // {
            //     path: "admin/login",
            //     element: <pages.AdminLogin />
            // }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);