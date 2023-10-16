import {Link} from "react-router-dom";

export default function Root() {
    return (
        <>
            <h1>Pagina principal</h1>
            <ul>
                <li><Link to="/entrar">Entrar</Link></li>
                <li><Link to="/pedidos">Pedidos</Link></li>
            </ul>
        </>
    );
}
