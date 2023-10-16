import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./routes/root.tsx";
import Pedidos from "./routes/Pedidos.tsx";
import Login from "./routes/login.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
    },
    {
        path: "/pedidos",
        element: <Pedidos />
    },
    {
        path: "/entrar",
        element: <Login />
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
