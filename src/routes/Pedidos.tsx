import {useEffect} from "react";
import {redirect, useNavigate} from "react-router-dom";

export default function Pedidos() {
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem("auth");
        if (auth === null) {
            console.log(auth)
            navigate("/entrar")
        }
    }, [])

    return (
        <h1>Pedidos</h1>
    )
}
