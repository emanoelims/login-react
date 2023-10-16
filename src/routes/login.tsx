import {useNavigate} from "react-router-dom";

interface FormData {
    email: string;
    password: string;
}

export default function () {

    const navigate = useNavigate();

    const handleSubmit = (data) => {
        data.preventDefault();

        const email = data.target.email.value;
        const password = data.target.password.value;

        if (!email || !password) {
            alert("Preencha todos os campos");
        }

        localStorage.setItem("auth", "true")
        navigate("/pedidos")
    }

    return (
        <>
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input name="email" type="email" placeholder="Digite seu e-mail"/>
                </div>

                <div>
                    <label>Senha</label>
                    <input name="password" type="password"/>
                </div>

                <button type="submit">Entrar</button>
            </form>
        </>
    )
}
